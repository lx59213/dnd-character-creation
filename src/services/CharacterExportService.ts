import { Character } from '../types/character';

export class CharacterExportService {
    private static instance: CharacterExportService;

    private constructor() {}

    public static getInstance(): CharacterExportService {
        if (!CharacterExportService.instance) {
            CharacterExportService.instance = new CharacterExportService();
        }
        return CharacterExportService.instance;
    }

    private generateMarkdownContent(character: Character): string {
        const jsonData = JSON.stringify(character, null, 2);
        
        // 只包含 JSON 数据和标记
        let markdown = '<!-- CHARACTER_DATA_START -->\n';
        markdown += '```json\n';
        markdown += jsonData;
        markdown += '\n```\n';
        markdown += '<!-- CHARACTER_DATA_END -->';

        return markdown;
    }

    public async exportCharacter(character: Character, format: 'json' | 'markdown' = 'json'): Promise<void> {
        try {
            let blob: Blob;
            let fileExtension: string;
            
            if (format === 'markdown') {
                const markdownContent = this.generateMarkdownContent(character);
                blob = new Blob([markdownContent], { type: 'text/markdown' });
                fileExtension = '.md';
            } else {
                blob = new Blob(
                    [JSON.stringify(character, null, 2)],
                    { type: 'application/json' }
                );
                fileExtension = '.json';
            }

            await this.saveFileWithPicker(blob, `${character.name || 'character'}${fileExtension}`);
        } catch (error) {
            console.error('导出失败:', error);
            throw error;
        }
    }

    private async saveFileWithPicker(blob: Blob, suggestedName: string): Promise<void> {
        try {
            if ('showSaveFilePicker' in window) {
                const fileType = {
                    description: suggestedName.endsWith('.md') ? 'Markdown Files' : 'JSON Files',
                    accept: {
                        [suggestedName.endsWith('.md') ? 'text/markdown' : 'application/json']: 
                            [suggestedName.endsWith('.md') ? '.md' : '.json']
                    }
                };

                const handle = await window.showSaveFilePicker({
                    suggestedName,
                    types: [fileType]
                });
                
                const writable = await handle.createWritable();
                await writable.write(blob);
                await writable.close();
            } else {
                this.downloadFile(URL.createObjectURL(blob), suggestedName);
            }
        } catch (error) {
            if ((error as Error).name === 'AbortError') {
                return;
            }
            throw error;
        }
    }

    private downloadFile(url: string, filename: string): void {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    public async importCharacter(file: File): Promise<Character> {
        const text = await file.text();
        try {
            let jsonData: string;
            if (file.name.endsWith('.md')) {
                const match = text.match(/<!-- CHARACTER_DATA_START -->\n```json\n([\s\S]*?)\n```\n<!-- CHARACTER_DATA_END -->/);
                if (!match) {
                    throw new Error('无法从 Markdown 中提取角色数据');
                }
                jsonData = match[1];
            } else {
                jsonData = text;
            }

            const character = JSON.parse(jsonData);
            if (!this.validateCharacter(character)) {
                throw new Error('无效的角色数据格式');
            }

            // 确保ASI状态被正确保留
            if (character.asiSystem) {
                character.asiSystem = {
                    choices: character.asiSystem.choices || {},
                    completed: character.asiSystem.completed || {}
                };
            }

            return character;
        } catch (error) {
            console.error('导入失败:', error);
            throw new Error('无法解析角色数据');
        }
    }

    private validateCharacter(character: any): character is Character {
        return (
            character &&
            typeof character === 'object' &&
            'finalAbilityScores' in character &&
            'classes' in character
        );
    }
}
