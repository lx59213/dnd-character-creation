import { MulticlassingSpellcasting } from "./spell";

// 等级特性接口
export interface LevelFeature {
    description: string;
    unlockedFeatures: string[];
}



// 等级系统接口
export interface LevelingSystem {
    experiencePoints: {
        [level: string]: number;
    };
    proficiencyBonus: {
        [level: string]: number;
    };
    levelFeatures: {
        [level: string]: LevelFeature;
    };
    multiclassing: {
        spellcasting: MulticlassingSpellcasting;
    };
}

// 等级相关的核心函数
export const calculateLevel = (xp: number, experiencePoints: { [level: string]: number }): number => {
    const levels = Object.entries(experiencePoints)
        .sort((a, b) => Number(b[0]) - Number(a[0]));
    
    for (const [level, requiredXP] of levels) {
        if (xp >= requiredXP) {
            return Number(level);
        }
    }
    return 1;
};

// 计算总等级
export const calculateTotalLevel = (classes: { [className: string]: { level: number } }): number => {
    return Object.values(classes).reduce((total, classInfo) => total + classInfo.level, 0);
};



// 获取特定等级的熟练加值
export const getProficiencyBonus = (level: number, proficiencyBonus: { [level: string]: number }): number => {
    return proficiencyBonus[level.toString()] || 2; // 默认为2
};

// 检查是否可以升级到新等级
export const canLevelUp = (currentXP: number, targetLevel: number, experiencePoints: { [level: string]: number }): boolean => {
    const requiredXP = experiencePoints[targetLevel.toString()];
    return currentXP >= requiredXP;
};
