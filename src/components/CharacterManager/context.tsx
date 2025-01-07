import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Character } from '../../types/character';
import { CharacterTab, CharacterTabs } from '../../types/character-management';
import { LocalStorageService } from '../../services/LocalStorageService';
import { initialCharacter } from '../CharacterCreator/context';

interface CharacterManagerContextType {
    tabs: CharacterTab[];
    activeTabId: string | null;
    activeCharacter: Character | null;
    addCharacter: (character?: Character) => void;
    removeCharacter: (id: string) => void;
    switchCharacter: (id: string) => void;
    updateActiveCharacter: (updates: Partial<Character>) => void;
    renameCharacter: (id: string, newName: string) => void;
}

const CharacterManagerContext = createContext<CharacterManagerContextType | undefined>(undefined);

export const CharacterManagerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [characterTabs, setCharacterTabs] = useState<CharacterTabs>(() => {
        const storageService = LocalStorageService.getInstance();
        return storageService.loadCharacterTabs();
    });

    // 获取当前激活的角色
    const activeCharacter = characterTabs.activeTabId
        ? characterTabs.tabs.find(tab => tab.id === characterTabs.activeTabId)?.character || null
        : null;

    // 保存到本地存储
    useEffect(() => {
        const storageService = LocalStorageService.getInstance();
        storageService.saveCharacterTabs(characterTabs);
    }, [characterTabs]);

    // 添加新角色
    const addCharacter = (character: Character = { ...initialCharacter }) => {
        const newTab: CharacterTab = {
            id: uuidv4(),
            name: character.name || `角色${characterTabs.tabs.length + 1}`,
            character,
            lastModified: new Date()
        };

        setCharacterTabs(prev => ({
            tabs: [...prev.tabs, newTab],
            activeTabId: newTab.id
        }));
    };

    // 移除角色
    const removeCharacter = (id: string) => {
        setCharacterTabs(prev => {
            // 不允许删除最后一个角色
            if (prev.tabs.length <= 1) {
                return prev;
            }

            const newTabs = prev.tabs.filter(tab => tab.id !== id);
            return {
                tabs: newTabs,
                // 如果删除的是当前激活的标签，切换到第一个标签
                activeTabId: prev.activeTabId === id ? newTabs[0]?.id || null : prev.activeTabId
            };
        });
    };

    // 切换角色
    const switchCharacter = (id: string) => {
        setCharacterTabs(prev => ({
            ...prev,
            activeTabId: id
        }));
    };

    // 更新当前角色
    const updateActiveCharacter = (updates: Partial<Character>) => {
        if (!characterTabs.activeTabId) return;

        setCharacterTabs(prev => ({
            ...prev,
            tabs: prev.tabs.map(tab => 
                tab.id === prev.activeTabId
                    ? {
                        ...tab,
                        character: { ...tab.character, ...updates },
                        lastModified: new Date()
                    }
                    : tab
            )
        }));
    };

    // 重命名角色
    const renameCharacter = (id: string, newName: string) => {
        setCharacterTabs(prev => ({
            ...prev,
            tabs: prev.tabs.map(tab => 
                tab.id === id
                    ? {
                        ...tab,
                        name: newName,
                        character: { ...tab.character, name: newName },
                        lastModified: new Date()
                    }
                    : tab
            )
        }));
    };

    // 确保至少有一个角色
    useEffect(() => {
        if (characterTabs.tabs.length === 0) {
            addCharacter();
        }
    }, []);

    return (
        <CharacterManagerContext.Provider
            value={{
                tabs: characterTabs.tabs,
                activeTabId: characterTabs.activeTabId,
                activeCharacter,
                addCharacter,
                removeCharacter,
                switchCharacter,
                updateActiveCharacter,
                renameCharacter
            }}
        >
            {children}
        </CharacterManagerContext.Provider>
    );
};

export const useCharacterManager = () => {
    const context = useContext(CharacterManagerContext);
    if (!context) {
        throw new Error('useCharacterManager must be used within a CharacterManagerProvider');
    }
    return context;
}; 