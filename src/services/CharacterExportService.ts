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

    public async exportCharacter(character: Character): Promise<void> {
        try {
            const blob = new Blob(
                [JSON.stringify(character, null, 2)], 
                { type: 'application/json' }
            );
            await this.saveFileWithPicker(blob, `${character.name || 'character'}.json`);
        } catch (error) {
            console.error('导出失败:', error);
            throw error;
        }
    }

    private async saveFileWithPicker(blob: Blob, suggestedName: string): Promise<void> {
        try {
            // 检查是否支持 showSaveFilePicker API
            if ('showSaveFilePicker' in window) {
                const handle = await window.showSaveFilePicker({
                    suggestedName,
                    types: [{
                        description: 'JSON Files',
                        accept: {
                            'application/json': ['.json']
                        }
                    }]
                });
                
                const writable = await handle.createWritable();
                await writable.write(blob);
                await writable.close();
            } else {
                // 降级方案：使用传统的下载方式
                this.downloadFile(URL.createObjectURL(blob), suggestedName);
            }
        } catch (error) {
            if ((error as Error).name === 'AbortError') {
                // 用户取消了保存操作，不需要抛出错误
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
            const character = JSON.parse(text);
            // 简单验证是否是有效的角色数据
            if (!character.abilityScores || !character.classes) {
                throw new Error('无效的角色数据');
            }
            return character;
        } catch (error) {
            throw new Error('无法解析角色数据');
        }
    }
}
