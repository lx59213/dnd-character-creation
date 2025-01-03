import { AbilityScores } from './character';
import { ProficiencyReference } from './proficiency';

export interface AbilityScoreIncrease {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
    choice?: {
        count: number;
        value: number;
    }[];
}

export interface SkillChoices {
    count: number;
    from: string[];
}

export interface RacialTrait {
    name: string;
    description: string;
    mechanicalEffect: string | string[];
    proficiencies?: {
        skills?: string[];
        armor?: string[];
        weapons?: string[];
        tools?: {
            id: string;
            subtype?: string;
        }[];
    };
}

// 子种族和主种族共用同一个特性接口
export type SubraceTrait = RacialTrait;

export interface Subrace {
    name: string;
    displayName: string;
    description: string;
    abilityScoreIncrease?: AbilityScoreIncrease;
    traits: RacialTrait[];
    size?: 'Small' | 'Medium';
    speed?: number;
    specialResources?: {
        [key: string]: {
            displayName: string;
            description: string;
            resourcePerLevel?: number[];
        };
    };
    proficiencies?: {
        skills: string[];
        armor: string[];
        weapons: string[];
        tools: {
            id: string;
            subtype?: string;
        }[];
    };
    "Other proficiencies"?: OtherProficiencies;
    "skill proficiencies"?: ProficiencyReference[];
    skillChoices?: SkillChoices;
}

// 用于存储原始种族数据的接口
export interface RaceData {
    name: string;
    displayName: string;
    description: string;
    size: 'Small' | 'Medium';
    speed: number;
    abilityScoreIncrease: AbilityScoreIncrease;
    "Other proficiencies"?: OtherProficiencies;
    racialTraits: RacialTrait[];
    languages: string[];
    subraces: Subrace[];
    specialResources?: {
        [key: string]: {
            displayName: string;
            description: string;
            resourcePerLevel?: number[];
        };
    };
    proficiencies?: {
        skills: string[];
        armor: string[];
        weapons: string[];
        tools: {
            id: string;
            subtype?: string;
        }[];
    };
    skillChoices?: SkillChoices;
    "skill proficiencies"?: ProficiencyReference[];
}

// 特殊种族特性的接口
export interface DragonbornAncestry {
    name: string;
    damageType: string;
    breathWeapon: string;
}

// 用于UI展示的转换后的种族数据，保持与RaceData结构一致
export interface Race {
    name: string;
    displayName: string;
    description: string;
    size: 'Small' | 'Medium';
    speed: number;
    abilityScoreIncrease: AbilityScoreIncrease;
    "Other proficiencies"?: OtherProficiencies;
    racialTraits: RacialTrait[];
    languages: string[];
    subraces: Subrace[];
    selectedSubrace?: Subrace;
    selectedAbilityScoreIncreases?: Record<string, number>;
}

export interface OtherProficiencies {
    armor?: { id: string }[];
    weapons?: { id: string }[];
    tools?: { id: string; subtype?: string }[];
    savingThrows?: { id: string }[];
}
