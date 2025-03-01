import React, { createContext, useContext, useState, useEffect } from 'react';
import { Character, AbilityScores, TabType, AbilityName } from '../../types/character';
import { GameDataService } from '../../services/GameDataService';
import { RaceData, AbilityScoreIncrease } from '../../types/race';
import { MasteryProficienciesService } from '../../services/MasteryProficienciesService';
import { LocalStorageService } from '../../services/LocalStorageService';
import { useCharacterManager } from '../CharacterManager/context';

interface AbilityScoreState {
  base: AbilityScores;
  race: Partial<AbilityScores>;
  subrace: Partial<AbilityScores>;
  asiTemp?: Partial<AbilityScores>;
  asiConfirmed: Partial<AbilityScores>;
}

interface CharacterContextType {
  character: Character;
  updateCharacter: (updates: Partial<Character>) => void;
  updateBaseAbilityScores: (scores: AbilityScores) => void;
  updateRaceBonus: (bonus: Partial<AbilityScores>) => void;
  updateSubraceBonus: (bonus: Partial<AbilityScores>) => void;
  updateTemporaryASI: (asi: Partial<AbilityScores>) => void;
  confirmASI: () => void;
  cancelASI: () => void;
  getFinalAbilityScores: () => AbilityScores;
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
  finalAbilityScores: {
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
  },
  customContent: {
    race: '',
    subrace: '',
    class: '',
    subclass: '',
    background: '',
    abilities: '',
    skills: '',
    proficiencies: ''
  }
};

const CharacterContext = createContext<CharacterContextType | undefined>(undefined);

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [character, setCharacter] = useState<Character>(() => {
    const saved = LocalStorageService.getInstance().loadCharacter();
    return saved || initialCharacter;
  });
  
  const [abilityState, setAbilityState] = useState<AbilityScoreState>(() => ({
    base: character.baseAbilityScores,
    race: {},
    subrace: {},
    asiConfirmed: {},
  }));

  const [activeTab, setActiveTab] = useState<TabType>('race');
  const { updateActiveCharacter } = useCharacterManager();

  const calculateFinalScores = (state: AbilityScoreState): AbilityScores => {
    console.log('Starting final score calculation with state:', {
      base: state.base,
      race: state.race,
      subrace: state.subrace,
      asiTemp: state.asiTemp,
      asiConfirmed: state.asiConfirmed
    });
    
    // 从基础值开始
    const finalScores: AbilityScores = { ...state.base };
    console.log('Starting with base scores:', finalScores);
    
    // 应用所有加值
    (Object.keys(finalScores) as AbilityName[]).forEach(ability => {
      const original = finalScores[ability];
      console.log(`\nCalculating ${ability}:`);
      console.log(`- Starting value: ${original}`);
      
      // 种族加值
      if (state.race[ability]) {
        finalScores[ability] += state.race[ability] || 0;
        console.log(`- After race bonus (${state.race[ability]}): ${finalScores[ability]}`);
      }
      
      // 亚种加值
      if (state.subrace[ability]) {
        finalScores[ability] += state.subrace[ability] || 0;
        console.log(`- After subrace bonus (${state.subrace[ability]}): ${finalScores[ability]}`);
      }
      
      // 已确认的ASI
      const confirmedBonus = state.asiConfirmed[ability];
      if (confirmedBonus) {
        finalScores[ability] += confirmedBonus;
        console.log(`- After confirmed ASI (${confirmedBonus}): ${finalScores[ability]}`);
      }
      
      // 临时ASI
      const tempBonus = state.asiTemp?.[ability];
      if (tempBonus) {
        finalScores[ability] += tempBonus;
        console.log(`- After temp ASI (${tempBonus}): ${finalScores[ability]}`);
      }

      // 确保不超过20
      const beforeCap = finalScores[ability];
      finalScores[ability] = Math.min(20, finalScores[ability]);
      if (beforeCap !== finalScores[ability]) {
        console.log(`- Capped at 20 (was ${beforeCap}): ${finalScores[ability]}`);
      }
      
      if (finalScores[ability] !== original) {
        console.log(`Final ${ability}: ${original} -> ${finalScores[ability]}`);
      }
    });

    console.log('\nFinal ability scores:', finalScores);
    return finalScores;
  };

  const updateBaseAbilityScores = (scores: AbilityScores) => {
    // 更新基础值
    setCharacter(prev => ({
      ...prev,
      baseAbilityScores: scores
    }));

    // 同步更新ability state
    setAbilityState(prev => ({
      ...prev,
      base: scores
    }));
  };

  // 更新种族加值
  const updateRaceBonus = (bonus: Partial<AbilityScores>) => {
    console.log('Updating race bonus with:', bonus);
    setAbilityState(prev => {
      const newState = {
        ...prev,
        race: bonus
      };
      console.log('New ability state after race bonus update:', newState);
      return newState;
    });
  };

  // 更新亚种加值
  const updateSubraceBonus = (bonus: Partial<AbilityScores>) => {
    console.log('Updating subrace bonus with:', bonus);
    setAbilityState(prev => {
      const newState = {
        ...prev,
        subrace: bonus
      };
      console.log('New ability state after subrace bonus update:', newState);
      return newState;
    });
  };

  // 更新临时ASI
  const updateTemporaryASI = (asi: Partial<AbilityScores>) => {
    console.log('updateTemporaryASI called with:', asi);
    setAbilityState(prev => {
      const newState = {
        ...prev,
        asiTemp: asi
      };
      console.log('New ability state after temp ASI:', newState);
      return newState;
    });
  };

  // 确认ASI
  const confirmASI = () => {
    console.log('confirmASI called');
    setAbilityState(prev => {
      if (!prev.asiTemp) {
        console.log('No temp ASI to confirm');
        return prev;
      }

      // 直接使用临时ASI，不进行累加
      const newState = {
        ...prev,
        asiTemp: undefined
      };
      
      console.log('Cleared temp ASI');
      return newState;
    });
  };

  const cancelASI = () => {
    setAbilityState(prev => ({
      ...prev,
      asiTemp: undefined
    }));
  };

  const getFinalAbilityScores = () => {
    return calculateFinalScores(abilityState);
  };

  // 监听abilityState变化，更新finalAbilityScores
  useEffect(() => {
    console.log('abilityState changed:', abilityState);
    const finalScores = calculateFinalScores(abilityState);
    console.log('Setting character with new final scores:', finalScores);
    setCharacter(prev => ({
      ...prev,
      finalAbilityScores: finalScores
    }));
  }, [abilityState]);

  // 监听character.baseAbilityScores变化，同步到abilityState
  useEffect(() => {
    setAbilityState(prev => ({
      ...prev,
      base: character.baseAbilityScores
    }));
  }, [character.baseAbilityScores]);

  const updateCharacter = (updates: Partial<Character>) => {
    console.log('updateCharacter called with updates:', updates);
    
    // 创建一个新的abilityState用于计算
    let newAbilityState = { ...abilityState };
    
    // 先处理种族和亚种的属性加值
    if (updates.race) {
      console.log('Processing race update:', updates.race);
      const raceBonus = updates.race.abilityScoreIncrease || {};
      console.log('Race ability score increase:', raceBonus);
      
      if (Object.keys(raceBonus).length === 0) {
        console.warn('Warning: Race ability score increase is empty');
      }
      
      // 直接更新newAbilityState
      newAbilityState.race = raceBonus;
    }
    
    if (updates.subrace) {
      console.log('Processing subrace update:', updates.subrace);
      const subraceBonus = updates.subrace.abilityScoreIncrease || {};
      console.log('Subrace ability score increase:', subraceBonus);
      
      if (Object.keys(subraceBonus).length === 0) {
        console.warn('Warning: Subrace ability score increase is empty');
      }
      
      // 直接更新newAbilityState
      newAbilityState.subrace = subraceBonus;
    }

    console.log('Current ability state before update:', newAbilityState);

    // 如果更新包含ASI系统的更新
    if (updates.asiSystem) {
      // 清除localStorage中的ASI状态
      localStorage.removeItem('character_asi_state');
      
      // 根据所有choices计算asiConfirmed
      const newASIConfirmed: Partial<AbilityScores> = {};
      
      // 遍历所有choices并累加它们的ability值
      if (updates.asiSystem.choices) {
        // 创建一个按等级排序的choices数组
        const sortedChoices = Object.entries(updates.asiSystem.choices)
          .sort(([a], [b]) => parseInt(a) - parseInt(b));

        console.log('Processing ASI choices:', sortedChoices);

        // 按等级顺序处理每个choice
        sortedChoices.forEach(([level, choice]) => {
          console.log(`Processing ASI choice for level ${level}:`, choice);
          if (choice?.abilities) {
            Object.entries(choice.abilities).forEach(([ability, value]) => {
              const abilityName = ability as AbilityName;
              newASIConfirmed[abilityName] = (newASIConfirmed[abilityName] || 0) + (value || 0);
              console.log(`Updated ${abilityName} to ${newASIConfirmed[abilityName]} (level ${level})`);
            });
          }
        });
      }

      console.log('Final ASI confirmed values:', {
        choices: updates.asiSystem.choices,
        calculated: newASIConfirmed
      });
      
      newAbilityState.asiConfirmed = newASIConfirmed;
      newAbilityState.asiTemp = undefined;
    }

    // 使用新的abilityState计算最终属性值
    const finalScores = calculateFinalScores(newAbilityState);
    console.log('Calculated final scores:', finalScores);

    // 批量更新所有状态
    setAbilityState(newAbilityState);
    
    let updatedCharacter: Character;
    setCharacter(prevCharacter => {
      updatedCharacter = {
        ...prevCharacter,
        ...updates,
        finalAbilityScores: finalScores,
        proficiencies: {
          ...prevCharacter.proficiencies,
          ...(updates.proficiencies || {})
        }
      };
      
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
          savingThrows: savingThrowProfs.map(p => p.id)
        };
      }
      
      console.log('Updated character:', updatedCharacter);
      return updatedCharacter;
    });

    // 将updateActiveCharacter移到setState回调外部
    Promise.resolve().then(() => {
      if (updatedCharacter) {
        updateActiveCharacter(updatedCharacter);
      }
    });
  };

  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      LocalStorageService.getInstance().saveCharacter(character);
    }, 500); // 500ms防抖

    return () => clearTimeout(saveTimeout);
  }, [character]);

  useEffect(() => {
    const savedASIState = localStorage.getItem('character_asi_state');
    if (savedASIState) {
      try {
        const { asiConfirmed } = JSON.parse(savedASIState);
        setAbilityState(prev => ({
          ...prev,
          asiConfirmed
        }));
      } catch (e) {
        console.error('Error loading ASI state:', e);
      }
    }
  }, []);

  const resetCharacter = () => {
    setCharacter(initialCharacter);
    setAbilityState({
      base: initialCharacter.baseAbilityScores,
      race: {},
      subrace: {},
      asiConfirmed: {},
    });
  };

  const contextValue: CharacterContextType = {
    character,
    updateCharacter,
    updateBaseAbilityScores,
    updateRaceBonus,
    updateSubraceBonus,
    updateTemporaryASI,
    confirmASI,
    cancelASI,
    getFinalAbilityScores,
    activeTab,
    setActiveTab,
    resetCharacter
  };

  return (
    <CharacterContext.Provider value={contextValue}>
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
