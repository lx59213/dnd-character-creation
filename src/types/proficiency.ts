import { AbilityName } from './ability';

// 熟练项类型
export type ProficiencyType = 'weapon' | 'armor' | 'tool' | 'savingThrow' | 'skill' ;

// 熟练项子类型定义
export interface ProficiencySubtype {
    id: string;           // 子类型ID，如 "proficiency.tool.artisans.smith"
    name: string;         // 内部名称
    displayName: string;  // 显示名称
    description?: string;
}

// 基础熟练项定义
export interface Proficiency {
    id: string;           // 完整ID，如 "proficiency.weapon.simple_melee"
    name: string;         // 内部名称
    displayName: string;  // 显示名称
    description: string;  // 描述文本
    category: string;     // 分类，如 "武器"、"护甲"等
    type: string;        // 类型，如 "简单近战"、"轻型"等
    ability?: AbilityName; // 相关属性
    subtypes?: ProficiencySubtype[]; // 可选的子类型列表
}

// 熟练项引用（用于存储在角色数据中）
export interface ProficiencyReference {
    id: string;           // 简短ID，如 "weapon.simple_melee"
    type: ProficiencyType;
    subtype?: string;     // 可选的子类型ID
}

// 熟练项引用
export interface ProficiencyRef {
    id: string;
}

// 熟练项数据集合
export interface ProficiencyData {
    weapons: Record<string, Proficiency>;
    armor: Record<string, Proficiency>;
    tools: Record<string, Proficiency>;
    savingThrows: Record<string, Proficiency>;  // 豁免熟练项
    skills: Record<string, Proficiency>;
}
