import React, { createContext, useContext, useState, useEffect } from 'react';
import { Character, AbilityScores, TabType } from '../../types/character';
import { GameDataService } from '../../services/GameDataService';
import { RaceData } from '../../types/race';
import { MasteryProficienciesService } from '../../services/MasteryProficienciesService';
import { LocalStorageService } from '../../services/LocalStorageService';

interface CharacterContextType {
  character: Character;
  setCharacter: (character: Character) => void;
  updateCharacter: (updates: Partial<Character>) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  resetCharacter: () => void;
}

const initialCharacter: Character = {
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
  const [character, setCharacter] = useState<Character>(() => {
    const storageService = LocalStorageService.getInstance();
    const savedCharacter = storageService.loadCharacter();
    return savedCharacter || initialCharacter;
  });
  const [activeTab, setActiveTab] = useState<TabType>('origin');

  // 保存角色数据到本地存储
  useEffect(() => {
    const storageService = LocalStorageService.getInstance();
    storageService.saveCharacter(character);
  }, [character]);

  const updateCharacter = (updates: Partial<Character>) => {
    setCharacter(prevCharacter => {
      const updatedCharacter = { ...prevCharacter, ...updates };
      
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
      
      return updatedCharacter;
    });
  };

  const resetCharacter = () => {
    const storageService = LocalStorageService.getInstance();
    storageService.clearCharacter();
    setCharacter(initialCharacter);
    setActiveTab('origin');
  };

  useEffect(() => {
    const initializeData = async () => {
      try {
        const gameDataService = GameDataService.getInstance();
        await gameDataService.initialize();
        const racesData = gameDataService.getRaces();
        console.log('Loaded races:', racesData);
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
        ...character.baseAbilityScores, // 先展开已有的基础值
        // 如果没有基础值，使用默认值
        strength: character.baseAbilityScores?.strength ?? 8,
        dexterity: character.baseAbilityScores?.dexterity ?? 8,
        constitution: character.baseAbilityScores?.constitution ?? 8,
        intelligence: character.baseAbilityScores?.intelligence ?? 8,
        wisdom: character.baseAbilityScores?.wisdom ?? 8,
        charisma: character.baseAbilityScores?.charisma ?? 8
      };

      // 保存基础属性值
      updateCharacter({
        ...character,
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
        ...character,
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
