// 法术学派，就像是法术的"流派"或"门派"
export type SpellSchool = 
    | "防护" 
    | "咒法" 
    | "预言" 
    | "附魔" 
    | "塑能" 
    | "幻术" 
    | "死灵" 
    | "变化";

// 施法时间类型，就像是"烹饪时间"，有快炒、慢炖等不同
export type CastingTimeType = 
    | "动作" 
    | "附赠动作" 
    | "反应" 
    | "1分钟" 
    | "10分钟" 
    | "1小时" 
    | "8小时" 
    | "24小时";

// 法术成分，就像是制作料理需要的"工具"和"原料"
export interface SpellComponents {
    verbal: boolean;      // 言语成分，需要咒语
    somatic: boolean;     // 姿势成分，需要手势
    material: boolean;    // 材料成分，需要特定物品
    materials?: string;   // 具体需要什么材料
    cost?: number;       // 材料的花费
}

// 法术的基本信息，就像是一份完整的"菜谱"
export interface Spell {
    id: string;           // 法术的唯一标识，像是菜品的编号
    name: string;         // 法术名称，像是菜品名
    level: number;        // 法术环位，0表示戏法，1-9表示相应环位
    school: SpellSchool;  // 法术学派
    castingTime: CastingTimeType;  // 施法时间
    range: string;        // 施法距离
    components: SpellComponents;    // 法术成分
    duration: string;     // 持续时间
    description: string;  // 法术描述
    higherLevels?: string; // 升环效果
}

// 法术位配置表接口（用于LevelingService）
export interface SpellSlots {
    [level: string]: {
        [slot: string]: number;
    };
}

// 法术选择界面的法术位状态接口
export interface SpellSelectionSpellSlots {
    [level: number]: {    // 每个环位的状态
        max: number;      // 最大法术位数量
        current: number;  // 当前剩余法术位
    }
}

// 已知/已准备的法术列表，就像是"今日菜单"
export interface CharacterSpells {
    slots: SpellSelectionSpellSlots;
    preparedSpells: string[];
    knownSpells: string[];
}

// 兼职施法规则
export interface MulticlassingSpellcasting {
    fullcaster: string[];
    halfcaster: string[];
    thirdcaster: string[];
    spellSlots: SpellSlots;
}

// 计算施法等级
export const calculateSpellcastingLevel = (
    classes: { [className: string]: { level: number; subclass?: string } },
    spellcastingRules: MulticlassingSpellcasting
): number => {
    let totalLevel = 0;
    
    Object.entries(classes).forEach(([className, classInfo]) => {
        if (spellcastingRules.fullcaster.includes(className)) {
            totalLevel += classInfo.level;
        } else if (spellcastingRules.halfcaster.includes(className)) {
            totalLevel += Math.floor(classInfo.level / 2);
        } else if (
            classInfo.subclass && 
            spellcastingRules.thirdcaster.includes(`${className}.${classInfo.subclass}`)
        ) {
            totalLevel += Math.floor(classInfo.level / 3);
        }
    });

    return totalLevel;
};

// 法术准备规则，就像是"菜品准备规则"
export interface SpellPreparationRules {
    canPrepare: boolean;           // 是否需要准备法术
    preparationAttribute: string;   // 准备法术用的属性(如:智力、感知等)
    preparationFormula: string;     // 准备数量计算公式(如:等级+属性修正)
}

// 施法者类型，决定了法术位的获得方式
export type CasterType = "fullcaster" | "halfcaster" | "thirdcaster" | "pactcaster";

// 法术过滤选项，用于筛选法术列表
export interface SpellFilterOptions {
    level?: number;
    school?: SpellSchool;
    castingTime?: CastingTimeType;
    className?: string;
    searchText?: string;
}
