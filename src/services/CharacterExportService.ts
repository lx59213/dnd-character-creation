import { Character } from '../types/character';
import { GameDataService } from './GameDataService';

export class CharacterExportService {
    private static instance: CharacterExportService;
    private gameDataService: GameDataService;

    private constructor() {
        this.gameDataService = GameDataService.getInstance();
    }

    public static getInstance(): CharacterExportService {
        if (!CharacterExportService.instance) {
            CharacterExportService.instance = new CharacterExportService();
        }
        return CharacterExportService.instance;
    }

    private generateMarkdownContent(character: Character): string {
        // 使用 replacer 函数过滤掉 subraces 字段
        const jsonData = JSON.stringify(character, (key, value) => {
            if (key === 'subraces') {
                return undefined;
            }
            return value;
        }, 2);
        
        // 只包含 JSON 数据和标记
        let markdown = '<!-- CHARACTER_DATA_START -->\n';
        markdown += '```json\n';
        markdown += jsonData;
        markdown += '\n```\n';
        markdown += '<!-- CHARACTER_DATA_END -->';

        return markdown;
    }

    public async exportCharacter(character: Character, format: 'json' | 'markdown' | 'txt' | 'doc' | 'pdf' = 'json'): Promise<void> {
        try {
            let blob: Blob;
            let fileExtension: string;
            
            // 生成角色数据内容
            const content = format === 'markdown' 
                ? this.generateMarkdownContent(character)
                : JSON.stringify(character, (key, value) => {
                    if (key === 'subraces') {
                        return undefined;
                    }
                    return value;
                }, 2);

            // 根据不同格式设置对应的MIME类型和文件扩展名
            switch (format) {
                case 'markdown':
                    blob = new Blob([content], { type: 'text/markdown' });
                    fileExtension = '.md';
                    break;
                case 'txt':
                    blob = new Blob([content], { type: 'text/plain' });
                    fileExtension = '.txt';
                    break;
                case 'doc':
                    blob = new Blob([content], { type: 'application/msword' });
                    fileExtension = '.doc';
                    break;
                case 'pdf':
                    // 对于 PDF，我们需要先创建一个临时的 HTML 页面，然后使用浏览器的打印功能
                    const htmlContent = `
                        <!DOCTYPE html>
                        <html>
                        <head>
                            <meta charset="utf-8">
                            <title>${character.name || '未命名'} - DND角色卡</title>
                            <style>
                                body { font-family: Arial, sans-serif; white-space: pre-wrap; }
                            </style>
                        </head>
                        <body>
                            ${content}
                        </body>
                        </html>
                    `;
                    const url = URL.createObjectURL(new Blob([htmlContent], { type: 'text/html' }));
                    const printWindow = window.open(url);
                    if (printWindow) {
                        printWindow.onload = () => {
                            printWindow.print();
                            URL.revokeObjectURL(url);
                        };
                    }
                    return; // 直接返回，不使用 saveFileWithPicker
                default: // json
                    blob = new Blob([content], { type: 'application/json' });
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
            // 首先尝试使用 showSaveFilePicker API
            if ('showSaveFilePicker' in window) {
                try {
                    const fileType = {
                        description: this.getFileTypeDescription(suggestedName),
                        accept: {
                            [this.getMimeType(suggestedName)]: [this.getFileExtension(suggestedName)]
                        }
                    };

                    const handle = await window.showSaveFilePicker({
                        suggestedName,
                        types: [fileType]
                    });
                    
                    const writable = await handle.createWritable();
                    await writable.write(blob);
                    await writable.close();
                    return;
                } catch (error) {
                    console.log('showSaveFilePicker failed, falling back to download:', error);
                    // 如果 showSaveFilePicker 失败，回退到传统下载方式
                }
            }

            // 回退方案：使用传统的下载方式
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = suggestedName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('File save failed:', error);
            if ((error as Error).name === 'AbortError') {
                return;
            }
            throw new Error('导出失败，请稍后重试');
        }
    }

    private getFileTypeDescription(filename: string): string {
        const ext = filename.split('.').pop()?.toLowerCase();
        switch (ext) {
            case 'md': return 'Markdown Files';
            case 'txt': return 'Text Files';
            case 'doc': return 'Word Documents';
            case 'pdf': return 'PDF Documents';
            case 'json': return 'JSON Files';
            default: return 'All Files';
        }
    }

    private getMimeType(filename: string): string {
        const ext = filename.split('.').pop()?.toLowerCase();
        switch (ext) {
            case 'md': return 'text/markdown';
            case 'txt': return 'text/plain';
            case 'doc': return 'application/msword';
            case 'pdf': return 'application/pdf';
            case 'json': return 'application/json';
            default: return 'application/octet-stream';
        }
    }

    private getFileExtension(filename: string): string {
        const ext = filename.split('.').pop()?.toLowerCase();
        return ext ? `.${ext}` : '';
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

            // 补充完整的种族信息
            if (character.race?.name) {
                const fullRaceData = this.gameDataService.getRace(character.race.name);
                if (fullRaceData) {
                    character.race = fullRaceData;
                }
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
