import { Race, RaceData, Subrace } from './race';
import { Class, ClassData } from './Class';
import { Background } from './background';
import { Inventory } from './equipment';

export type TabType = 'origin' | 'race' | 'subrace' | 'class' | 'subclass' | 'abilities' | 'skills' | 'proficiencies' | 'background' | 'level' | 'inventory' | 'spells' | 'notes';

export type AbilityName = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

export type AbilityScore = AbilityName;

// 属性定义接口
export interface AbilityDefinition {
    name: AbilityName;
    displayName: string;
    description: string;
    commonChecks: string[];
    affectedSkills: string[];
    savingThrowExamples: string[];
}

// 属性调整值表接口
export type ModifierTable = {
    [key: number]: number;
};

// 点数购买规则接口
export interface PointBuyRules {
    startingPoints: number;
    costs: {
        [score: number]: number;
    };
    minimumScore: number;
    maximumScore: number;
}

// 投点方法接口
export interface RollMethod {
    name: string;
    displayName: string;
    description: string;
    diceCount: number;
    diceType: number;
    keepHighest: number;
}

// 属性生成方法接口
export interface AbilityGenerationMethods {
    pointBuy: PointBuyRules;
    standardArray: number[];
    rollMethods: {
        [method: string]: RollMethod;
    };
}

// 完整的属性规则接口
export interface AbilityRules {
    abilityScores: {
        [K in AbilityName]: AbilityDefinition;
    };
    modifierTable: ModifierTable;
    defaultValue: number;
    minimumValue: number;
    maximumValue: number;
    pointBuy: PointBuyRules;
    standardArray: number[];
    rollMethods: {
        [method: string]: RollMethod;
    };
}

export interface AbilityScores {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export interface AbilityModifiers {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

// 属性值生成方法枚举
export enum AbilityGenerationMethod {
    POINT_BUY = 'pointBuy',
    STANDARD_ARRAY = 'standardArray',
    ROLL = 'roll'
}

// 属性系统状态接口
export interface AbilitySystemState {
    scores: AbilityScores;
    modifiers: AbilityModifiers;
    generationMethod: AbilityGenerationMethod;
    pointsRemaining?: number;  // 仅用于点数购买法
    rollMethod?: string;       // 仅用于投点法
}

export interface Feature {
    name: string;
    displayName: string;
    description: string;
}

export interface SpellSystem {
    knownSpells: string[];
    preparedSpells: string[];
    slots: {
        [level: string]: number;
    };
}

export interface Personality {
    traits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
}

export interface CharacterClass {
    name: string;
    displayName: string;
    level: number;
    subclass?: string;
    proficiencies?: {
        skills: string[];
        armor: string[];
        weapons: string[];
        tools: string[];
    };
}

export interface ProficiencySource {
  id: string;
  name: string;
  displayName: string;
  description: string;
  category: '武器' | '护甲' | '豁免' | '工具';
  source: string;
}

export interface ProficiencyState {
  weapons: ProficiencySource[];
  armor: ProficiencySource[];
  savingThrows: ProficiencySource[];
  tools: ProficiencySource[];
}

export interface CharacterOrigin {
    playerName: string;
    characterName: string;
    gender: string;
    age: number;
    height: string;
    weight: string;
    alignment: string;
    faith: string;
    homeland: string;
    appearance: {
        hairStyle: string;
        hairColor: string;
        eyeColor: string;
        skinColor: string;
    };
    personality: {
        traits: string;
        ideals: string;
        bonds: string;
        flaws: string;
    };
    description: string;
    backstory: string;
}

// ASI 选择状态接口
export interface ASIChoice {
  abilities?: Partial<Record<AbilityName, number>>;
  feat?: string;
  level: number;
}

// ASI 系统状态接口
export interface ASISystemState {
  choices: Record<number, ASIChoice>;
  completed: Record<number, boolean>;
}

export interface Character {
    id: string;
    name: string;
    race: RaceData | null;
    subrace: Subrace | null;
    classes: CharacterClass[];
    level: number;
    experiencePoints: number;
    finalAbilityScores: AbilityScores;
    baseAbilityScores: AbilityScores;
    hitPoints: number;
    armorClass: number;
    initiative: number;
    speed: number;
    proficiencyBonus: number;
    features: Feature[];
    proficiencies: {
        skills: string[];
        armor: string[];
        weapons: string[];
        tools: string[];
        languages: string[];
        savingThrows: string[];
    };
    skills: string[];
    armor: string[];
    weapons: string[];
    tools: string[];
    languages: string[];
    savingThrows: string[];
    spells: SpellSystem;
    equipment: string[];
    personality: Personality;
    background?: Background;
    alignment?: string;
    skillSource?: Record<string, 'class' | 'race'>;
    origin?: CharacterOrigin;
    inventory?: Inventory;
    asiSystem?: ASISystemState;
    selectedFeats?: Record<number, string>;
    notes?: string;
}

export interface CharacterClassData {
    name: string;
    displayName: string;
    description: string;
    hitDie: number;
    primaryAbility: string[];
    savingThrows: string[];
    armorProficiencies: string[];
    weaponProficiencies: string[];
    multiclassing?: {
        prerequisites: {
            [ability: string]: number;
        };
        proficiencies: string[];
    };
    skillChoices: {
        count: number;
        from: string[];
    };
    features: Feature[];
    subclasses: any[];
}

export interface LevelFeature {
    description: string;
    unlockedFeatures: string[];
}

export interface ClassSpecificFeatures {
    [classId: string]: {
        [level: number]: string[];
    };
}

export interface LevelingRules {
    experiencePoints: {
        [level: number]: number;
    };
    proficiencyBonus: {
        [level: number]: number;
    };
    levelFeatures: {
        [level: number]: LevelFeature;
    };
    classSpecificFeatures: ClassSpecificFeatures;
}

export interface CharacterCreationState {
    step: 'origin' | 'race' | 'class' | 'abilities' | 'background' | 'equipment' | 'spells' | 'description';
    loading: boolean;
    character: Character;
    dynamicTabs: string[];
    tooltip?: {
        term: string;
        description: string;
        position: { x: number; y: number };
    };
}
