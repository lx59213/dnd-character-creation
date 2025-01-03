// 基础物品接口
export interface BaseItem {
    id: string;           // 唯一标识符
    name: string;         // 中文名称
    displayName: string;  // 显示名称（中英文）
    description: string;  // 描述
    weight: number;       // 重量（磅）
    cost: {
        amount: number;   // 价格数量
        unit: 'cp' | 'sp' | 'gp' | 'pp';  // 货币单位
    };
    rarity?: 'common' | 'uncommon' | 'rare' | 'very_rare' | 'legendary';
    isEquipped?: boolean; // 是否已装备
    slot?: string;        // 装备槽位
}

// 装备槽位类型
export type EquipmentSlot = 
    | 'mainHand'     // 主手
    | 'offHand'      // 副手
    | 'twoHand'      // 双手
    | 'armor'        // 护甲
    | 'head'         // 头部
    | 'neck'         // 颈部
    | 'back'         // 背部
    | 'torso'        // 躯干
    | 'waist'        // 腰部
    | 'hands'        // 手部
    | 'fingers'      // 手指
    | 'feet'         // 脚部
    | 'mount';       // 坐骑

// 装备状态
export type EquipmentState = Partial<Record<EquipmentSlot, string>>;

// 武器接口
export interface Weapon extends BaseItem {
    id: `weapon.${string}`;
    type: 'simple_melee' | 'simple_ranged' | 'martial_melee' | 'martial_ranged';
    slot: 'mainHand' | 'offHand' | 'twoHand';
    damage: {
        diceCount: number;
        diceType: number;
        type: 'bludgeoning' | 'piercing' | 'slashing';
    };
    properties: string[];  // 武器特性：例如"灵巧"、"重型"等
    range?: {
        normal: number;
        long?: number;
    };
}

// 护甲接口
export interface Armor extends BaseItem {
    id: `armor.${string}`;
    type: 'light' | 'medium' | 'heavy' | 'shield';
    slot: 'armor' | 'offHand';  // 盾牌使用副手槽位
    baseAC: number;
    maxDexBonus?: number;
    strengthRequirement?: number;
    stealthDisadvantage: boolean;
    donTime: number;     // 穿戴时间（分钟）
    doffTime: number;    // 卸下时间（分钟）
}

// 魔法物品接口
export interface MagicItem extends BaseItem {
    id: `magic.${string}`;
    type: 'wondrous' | 'ring' | 'staff' | 'wand' | 'scroll' | 'potion';
    attunement: boolean;  // 是否需要同调
    charges?: {
        max: number;
        recharge: 'dawn' | 'dusk' | 'short_rest' | 'long_rest' | 'never';
    };
}

// 冒险用品接口
export interface AdventuringGear extends BaseItem {
    id: `gear.${string}`;
    category: 'container' | 'equipment' | 'food' | 'tool' | 'misc';
    quantity?: number;   // 如果是一组物品，表示数量
}

// 工具接口
export interface Tool extends BaseItem {
    id: `tool.${string}`;
    type: 'artisan' | 'gaming' | 'musical' | 'other';
    proficiencyProvided?: string;  // 提供的熟练项
}

// 饰品接口
export interface Accessory extends BaseItem {
    id: `accessory.${string}`;
    slot: 'head' | 'neck' | 'fingers' | 'back' | 'waist';
    effect?: string;     // 特殊效果描述
}

// 坐骑与载具接口
export interface Mount extends BaseItem {
    id: `mount.${string}`;
    slot: 'mount';
    speed: number;       // 速度（尺/轮）
    carryingCapacity: number;  // 载重能力（磅）
    type: 'land' | 'water' | 'air';
}

// 货币类型
export type Currency = 'cp' | 'sp' | 'gp' | 'pp';

// 财富接口
export interface Wealth {
    cp: number;
    sp: number;
    gp: number;
    pp: number;
}

// 物品栏接口
export interface Inventory {
    equipped: EquipmentState;
    weapons: Weapon[];
    armor: Armor[];
    magicItems: MagicItem[];
    gear: AdventuringGear[];
    tools: Tool[];
    accessories: Accessory[];
    mounts: Mount[];
    wealth: Wealth;
}
