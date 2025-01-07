import { Character } from '../types/character';
import { CharacterTab, CharacterTabs, StoredCharacterTabs } from '../types/character-management';
import { v4 as uuidv4 } from 'uuid';

const CHARACTER_KEY = 'dnd_character_draft';
const CHARACTER_TABS_KEY = 'dnd_character_tabs';

export class LocalStorageService {
    private static instance: LocalStorageService;

    private constructor() {}

    public static getInstance(): LocalStorageService {
        if (!LocalStorageService.instance) {
            LocalStorageService.instance = new LocalStorageService();
        }
        return LocalStorageService.instance;
    }

    // 保存单个角色（兼容旧版本）
    public saveCharacter(character: Character): void {
        try {
            localStorage.setItem(CHARACTER_KEY, JSON.stringify(character));
        } catch (error) {
            console.error('Failed to save character to localStorage:', error);
        }
    }

    // 加载单个角色（兼容旧版本）
    public loadCharacter(): Character | null {
        try {
            const savedCharacter = localStorage.getItem(CHARACTER_KEY);
            return savedCharacter ? JSON.parse(savedCharacter) : null;
        } catch (error) {
            console.error('Failed to load character from localStorage:', error);
            return null;
        }
    }

    // 清除单个角色（兼容旧版本）
    public clearCharacter(): void {
        try {
            localStorage.removeItem(CHARACTER_KEY);
        } catch (error) {
            console.error('Failed to clear character from localStorage:', error);
        }
    }

    // 新版本：保存所有角色标签
    public saveCharacterTabs(tabs: CharacterTabs): void {
        try {
            const storedTabs: StoredCharacterTabs = {
                tabs: tabs.tabs.map(tab => ({
                    ...tab,
                    lastModified: tab.lastModified.toISOString()
                })),
                activeTabId: tabs.activeTabId
            };
            localStorage.setItem(CHARACTER_TABS_KEY, JSON.stringify(storedTabs));
        } catch (error) {
            console.error('Failed to save character tabs to localStorage:', error);
        }
    }

    // 新版本：加载所有角色标签
    public loadCharacterTabs(): CharacterTabs {
        try {
            const savedTabs = localStorage.getItem(CHARACTER_TABS_KEY);
            if (!savedTabs) {
                // 如果没有保存的标签，但有旧版本的角色数据，则迁移它
                const oldCharacter = this.loadCharacter();
                if (oldCharacter) {
                    const initialTab: CharacterTab = {
                        id: uuidv4(),
                        name: oldCharacter.name || '角色1',
                        character: oldCharacter,
                        lastModified: new Date()
                    };
                    return {
                        tabs: [initialTab],
                        activeTabId: initialTab.id
                    };
                }
                return { tabs: [], activeTabId: null };
            }

            const storedTabs: StoredCharacterTabs = JSON.parse(savedTabs);
            return {
                tabs: storedTabs.tabs.map(tab => ({
                    ...tab,
                    lastModified: new Date(tab.lastModified)
                })),
                activeTabId: storedTabs.activeTabId
            };
        } catch (error) {
            console.error('Failed to load character tabs from localStorage:', error);
            return { tabs: [], activeTabId: null };
        }
    }

    // 新版本：清除所有角色标签
    public clearCharacterTabs(): void {
        try {
            localStorage.removeItem(CHARACTER_TABS_KEY);
        } catch (error) {
            console.error('Failed to clear character tabs from localStorage:', error);
        }
    }
}

export default LocalStorageService;
