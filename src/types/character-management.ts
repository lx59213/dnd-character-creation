import { Character } from './character';

export interface CharacterTab {
    id: string;
    name: string;
    character: Character;
    lastModified: Date;
}

export interface CharacterTabs {
    tabs: CharacterTab[];
    activeTabId: string | null;
}

// 本地存储的数据结构
export interface StoredCharacterTabs {
    tabs: {
        id: string;
        name: string;
        character: Character;
        lastModified: string; // ISO string
    }[];
    activeTabId: string | null;
} 