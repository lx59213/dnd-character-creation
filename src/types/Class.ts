import { AbilityScore, Feature } from './character';
import { ProficiencyRef } from './proficiency';

export interface ClassFeature extends Feature {
    mechanicalEffect: string | string[];
    level: number;
}

export interface Subclass {
    name: string;
    displayName: string;
    description: string;
    features: ClassFeature[];
}

// 法术施放类型
export interface Spellcasting {
    ability: string;
    type: 'full' | 'half' | 'third' | 'none';
    spellList: string[];
    cantripsKnown?: { [level: number]: number };
    spellbook?: {
        initial: number;
        perLevel: number;
        copyRules: {
            timePerLevel: string;
            costPerLevel: string;
        };
    };
    prepared?: string;
    spellSlots: {
        [level: number]: {  // 角色等级
            [spellLevel: number]: number;  // 法术环位数量
        };
    };
}

// 职业熟练项
export interface ClassProficiencies {
    armor: ProficiencyRef[];
    weapons: ProficiencyRef[];
    tools: ProficiencyRef[];
    savingThrows: ProficiencyRef[];
    skills: ProficiencyRef[];
}

// 用于存储原始职业数据的接口
export interface ClassData {
    name: string;
    displayName: string;
    description: string;
    hitDie: number;
    primaryAbility: string[];
    'Other proficiencies': ClassProficiencies;
    multiclassing?: {
        prerequisites: {
            [ability: string]: number;
        };
        'Other proficiencies': ClassProficiencies;
    };
    skillChoices: {
        count: number;
        from: string[];
    };
    features: ClassFeature[];
    subclasses: Subclass[];
    spellcasting?: Spellcasting;
    specialResources?: {
        [key: string]: {
            displayName: string;
            description: string;
            resourcePerLevel?: number[];
        };
    };
    abilityScoreImprovements?: {
        levels: number[];
    };
}

// 用于UI展示的转换后的职业数据
export interface Class {
    name: string;
    displayName: string;
    description: string;
    hitDie: number;
    primaryAbility: string[];
    savingThrows: string[];
    proficiencies: {
        armor: string[];
        weapons: string[];
        tools: string[];
        skills: string[];
    };
    features: ClassFeature[];
    selectedSubclass?: Subclass;
    level: number;
    specialResources?: {
        [key: string]: {
            displayName: string;
            description: string;
            resourcePerLevel?: number[];
        };
    };
    abilityScoreImprovements?: {
        levels: number[];
    };
}

// 检查某个等级是否可以选择副职业
export const canSelectSubclass = (level: number): boolean => {
    return level >= 3; // 3级及以上可以选择副职业
};
