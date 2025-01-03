// 属性名称类型
export type AbilityName = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

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
    modifierTable: Record<number, number>;
    defaultValue: number;
    minimumValue: number;
    maximumValue: number;
    pointBuy: {
        startingPoints: number;
        minimumScore: number;
        maximumScore: number;
        costs: Record<number, number>;
    };
    standardArray: number[];
    improvements: {
        pointsPerImprovement: number;
        maximumScore: number;
    };
}

// 角色属性值接口
export interface AbilityScores {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

// 属性调整值接口
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

// 等级相关的属性提升
export interface AbilityScoreImprovement {
    level: number;
    points: number;  // 通常为2点
    restrictions?: {
        maximum?: number;  // 最大值限制
        singleAbilityMaximum?: number;  // 单个属性最大提升点数
    };
}

// 扩展属性系统状态，包含等级提升信息
export interface AbilitySystemStateWithLevel extends AbilitySystemState {
    improvements: {
        used: {
            [level: number]: {
                ability: AbilityName;
                points: number;
            }[];
        };
        available: number;  // 剩余可用的提升点数
    };
}

// 检查某个等级是否有属性值提升
export const hasAbilityScoreImprovement = (level: number): boolean => {
    return [4, 8, 12, 16, 19].includes(level);
};

// 获取指定等级范围内的属性值提升总点数
export const getAbilityScoreImprovementPoints = (startLevel: number, endLevel: number): number => {
    return Array.from({length: endLevel - startLevel + 1}, (_, i) => startLevel + i)
        .filter(hasAbilityScoreImprovement)
        .length * 2;  // 每次提升获得2点
};
