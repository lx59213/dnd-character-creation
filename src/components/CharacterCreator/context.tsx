import React, { createContext, useContext, useState, useEffect } from 'react';
import { Character, AbilityScores, TabType } from '../../types/character';
import { GameDataService } from '../../services/GameDataService';
import { RaceData } from '../../types/race';
import { MasteryProficienciesService } from '../../services/MasteryProficienciesService';
import { LocalStorageService } from '../../services/LocalStorageService';
import { useCharacterManager } from '../CharacterManager/context';

interface CharacterContextType {
  character: Character;
  setCharacter: (character: Character) => void;
  updateCharacter: (updates: Partial<Character>) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  resetCharacter: () => void;
}

export const initialCharacter: Character = {
  id: '',
  name: '',
  race: null,
  subrace: null,
  classes: [],
  level: 1,
  experiencePoints: 0,
  abilityScores: {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  },
  baseAbilityScores: {
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8
  },
  hitPoints: 0,
  armorClass: 10,
  initiative: 0,
  speed: 30,
  proficiencyBonus: 2,
  features: [],
  proficiencies: {
    skills: [],
    armor: [],
    weapons: [],
    tools: [],
    languages: [],
    savingThrows: []
  },
  skills: [],
  armor: [],
  weapons: [],
  tools: [],
  languages: [],
  savingThrows: [],
  spells: {
    knownSpells: [],
    preparedSpells: [],
    slots: {}
  },
  equipment: [],
  personality: {
    traits: [],
    ideals: [],
    bonds: [],
    flaws: []
  }
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { activeCharacter, updateActiveCharacter } = useCharacterManager();
  const [activeTab, setActiveTab] = useState<TabType>('origin');

  // 使用 CharacterManager 中的角色数据
  const character = activeCharacter || initialCharacter;

  const setCharacter = (newCharacter: Character) => {
    updateActiveCharacter(newCharacter);
  };

  const updateCharacter = (updates: Partial<Character>) => {
    const updatedCharacter = { ...character, ...updates };
    
    // 如果更新涉及种族或职业，则更新熟练项
    if (updates.race || updates.classes) {
      const masteryService = MasteryProficienciesService.getInstance();
      const weaponProfs = masteryService.getWeaponProficiencies(updatedCharacter);
      const armorProfs = masteryService.getArmorProficiencies(updatedCharacter);
      const toolProfs = masteryService.getToolProficiencies(updatedCharacter);
      const savingThrowProfs = masteryService.getsavingThrowProficiencies(updatedCharacter);

      updatedCharacter.proficiencies = {
        ...updatedCharacter.proficiencies,
        weapons: weaponProfs.map(p => p.id),
        armor: armorProfs.map(p => p.id),
        tools: toolProfs.map(p => p.id),
        savingThrows: savingThrowProfs.map(p => p.id),
      };
    }
    
    updateActiveCharacter(updatedCharacter);
  };

  const resetCharacter = () => {
    updateActiveCharacter(initialCharacter);
    setActiveTab('origin');
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        const gameDataService = GameDataService.getInstance();
        await gameDataService.initialize();
      } catch (error) {
        console.error('Failed to initialize game data:', error);
      }
    };

    initializeData();
  }, []);

  useEffect(() => {
    // 当种族或亚种改变时，更新属性加值
    if (character.race) {
      // 创建基础属性值的副本（不包含任何种族加值）
      const baseScores = {
        ...character.baseAbilityScores,
        strength: character.baseAbilityScores?.strength ?? 8,
        dexterity: character.baseAbilityScores?.dexterity ?? 8,
        constitution: character.baseAbilityScores?.constitution ?? 8,
        intelligence: character.baseAbilityScores?.intelligence ?? 8,
        wisdom: character.baseAbilityScores?.wisdom ?? 8,
        charisma: character.baseAbilityScores?.charisma ?? 8
      };

      // 保存基础属性值
      updateCharacter({
        baseAbilityScores: baseScores
      });

      // 创建新的属性值对象，从基础值开始
      const newAbilityScores = { ...baseScores };
      
      // 应用种族的属性加值
      if (character.race.abilityScoreIncrease) {
        Object.entries(character.race.abilityScoreIncrease).forEach(([ability, increase]) => {
          const abilityKey = ability.toLowerCase() as keyof AbilityScores;
          if (typeof increase === 'number') {
            newAbilityScores[abilityKey] += increase;
          }
        });
      }
      
      // 应用亚种的属性加值
      if (character.subrace?.abilityScoreIncrease) {
        Object.entries(character.subrace.abilityScoreIncrease).forEach(([ability, increase]) => {
          const abilityKey = ability.toLowerCase() as keyof AbilityScores;
          if (typeof increase === 'number') {
            newAbilityScores[abilityKey] += increase;
          }
        });
      }

      // 更新角色属性值
      updateCharacter({
        abilityScores: newAbilityScores
      });
    }
  }, [character.race, character.subrace]);

  useEffect(() => {
    // 如果选择了没有亚种的种族，或者取消了种族选择，自动切换到下一个标签
    if (character.race && !character.race.subraces?.length && activeTab === 'subrace') {
      setActiveTab('class');
    }
  }, [character.race, character.subrace, activeTab]);

  return (
    <CharacterContext.Provider value={{ 
      character, 
      setCharacter, 
      updateCharacter, 
      activeTab, 
      setActiveTab,
      resetCharacter 
    }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error('useCharacterContext must be used within a CharacterProvider');
  }
  return context;
};
