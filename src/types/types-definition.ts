// 自动生成的类型定义文件，请勿手动修改

import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { ReactNode } from 'react';

interface CharacterContextType {
  character: Character;
  setCharacter: (character: Character) => void;
  updateCharacter: (updates: Partial<Character>) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

interface ContentProps {
  children: React.ReactNode;
}

interface StatSectionProps {
  title: string;
  children: React.ReactNode;
}

type AllocationMethod = 'pointBuy' | 'standardArray' | 'roll';

interface AbilityScoreState {
    scores: Record<AbilityName, number>;
    remainingPoints: number;
    method: AllocationMethod;
}

interface AbilityStateUpdate {
    scores: Record<AbilityName, number>;
    method: AllocationMethod;
}

export interface ASISelectionState {
    selectedChoice: 'standardASI' | 'feat' | null;
    selectedFeat: string | null;
    selectedAbilities: Partial<Record<AbilityName, number>>;
    level: number;
}

interface ASISelectionProps {
    level: number;
    asiSystem?: AbilityScoreImprovementSystem;
    onSelectionComplete: (state: ASISelectionState) => void;
    currentAbilityScores: AbilityScores;
    availableFeats: Array<{
        name: string;
        description: string;
        disabled: boolean;
    }>;
}

interface FeatSelectionProps {
    feat: Feat;
    onSelect: () => void;
    disabled?: boolean;
}

interface InventoryTab {
  id: string;
  label: string;
  icon: string;
}

interface ItemCardProps {
  item: BaseItem;
  onDelete: () => void;
  expanded: boolean;
  onToggleExpand: () => void;
}

interface TabConfig {
  readonly label: string;
  readonly dataFile: string;
  readonly icon: string;
}

export const TAB_CONFIG = {
    race: {
        label: '种族',
        dataFile: 'races.json',
        icon: 'person'
    },
    class: {
        label: '职业',
        dataFile: 'classes.json',
        icon: 'school'
    },
    abilities: {
        label: '属性',
        dataFile: 'abilities.json',
        icon: 'fitness_center'
    },
    background: {
        label: '背景',
        dataFile: 'backgrounds.json',
        icon: 'history'
    },
    equipment: {
        label: '装备',
        dataFile: 'equipment.json',
        icon: 'shopping_bag'
    },
    spells: {
        label: '法术',
        dataFile: 'spells.json',
        icon: 'auto_fix_high'
    },
    description: {
        label: '描述',
        dataFile: 'description.json',
        icon: 'description'
    }
} as const;

export type TabType = keyof typeof TAB_CONFIG;

interface BaseItem {
  id: string;
  displayName: string;
  description: string;
  weight: number;
  cost: {
    amount: number;
    unit: 'cp' | 'sp' | 'gp' | 'pp';
  };
}

interface Weapon extends BaseItem {
  type: 'simple_melee' | 'simple_ranged' | 'martial_melee' | 'martial_ranged';
  damage: {
    diceCount: number;
    diceType: number;
    type: string;
  };
  range?: {
    normal: number;
    long: number;
  };
  properties?: string[];
}

interface Armor extends BaseItem {
  type: 'light' | 'medium' | 'heavy' | 'shield';
  baseAC: number;
  maxDexBonus?: number;
  strengthRequirement?: number;
  stealthDisadvantage?: boolean;
}

interface MagicItem extends BaseItem {
  type: string;
  attunement?: boolean;
  charges?: {
    max: number;
    recharge: string;
  };
}

interface Tool extends BaseItem {
  type: string;
  proficiencyProvided?: string;
}

interface Wealth {
  cp: number;
  sp: number;
  gp: number;
  pp: number;
}

interface ItemData {
  [key: string]: BaseItem;
}

interface FeatureDialogProps {
    open: boolean;
    feature: string;
    onClose: () => void;
}

export interface FeatPrerequisites {
    abilities?: Record<AbilityName, number>;
    proficiency?: string[];
    race?: string[];
    class?: string[];
    level?: number;
}

export interface FeatBenefits {
    abilityIncrease?: Record<AbilityName, number>;
    proficiencies?: string[];
    features?: Feature[];
}

export interface Feat {
    name: string;
    displayName: string;
    description: string;
    prerequisites?: FeatPrerequisites;
    benefits: FeatBenefits;
    effects: any;
}

export interface Feature {
    id: string;
    name: string;
    description: string;
    translationKeys?: {
        description: string;
    };
}

interface SkillButtonProps {
    selected?: boolean;
}

interface SpellDialogProps {
    open: boolean;
    spell: string;
    onClose: () => void;
}

interface XMLAttribute {
    id: string;
    value?: string;
    handle?: string;
    type?: string;
}

interface RaceData {
    id: string;
    name: string;
    displayName: string;
    description: string;
    features: Feature[];
    abilityBoosts: Record<string, number>;
    translationKeys?: {
        displayName: string;
        description: string;
    }
}

interface ClassData {
    id: string;
    name: string;
    displayName: string;
    description: string;
    features: Feature[];
    proficiencies: string[];
    translationKeys?: {
        displayName: string;
        description: string;
    }
}

interface BackgroundData {
    id: string;
    name: string;
    displayName: string;
    description: string;
    features: Feature[];
    proficiencies: string[];
    translationKeys?: {
        displayName: string;
        description: string;
    }
}

interface PointBuyState {
    pointsAvailable: number;
    scores: Record<AbilityName, number>;
}

interface StandardArrayState {
    availableScores: number[];
    usedScores: Set<number>;
}

interface AbilityRules {
    pointBuy: {
        minimumScore: number;
        maximumScore: number;
        startingPoints: number;
        costs: Record<number, number>;
    };
    standardArray: number[];
}

interface ErrorMonitor {
    log(level: 'info' | 'error' | 'warn', message: string, error?: any): void;
}

interface ErrorLog {
    timestamp: string;
    type: 'error' | 'warning' | 'info';
    message: string;
    error?: any;
}

export interface PresetSkillProficiency {
    id: string;
    source: 'background' | 'race' | 'subrace' | 'racial_trait';
    sourceName: string;
}

export type AbilityName = 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma';

export const ABILITY_LABELS: Record<AbilityName, string> = {
    strength: '力量',
    dexterity: '敏捷',
    constitution: '体质',
    intelligence: '智力',
    wisdom: '感知',
    charisma: '魅力'
};

export interface AbilityDefinition {
    name: AbilityName;
    displayName: string;
    description: string;
    commonChecks: string[];
    affectedSkills: string[];
    savingThrowExamples: string[];
}

export type ModifierTable = {
    [key: number]: number;
};

export interface PointBuyRules {
    startingPoints: number;
    costs: {
        [score: number]: number;
    };
    minimumScore: number;
    maximumScore: number;
}

export interface RollMethod {
    name: string;
    displayName: string;
    description: string;
    diceCount: number;
    diceType: number;
    keepHighest: number;
}

export interface AbilityGenerationMethods {
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

export interface AbilitySystemState {
    scores: AbilityScores;
    modifiers: AbilityModifiers;
    generationMethod: AbilityGenerationMethod;
    pointsRemaining?: number;  // 仅用于点数购买法
    rollMethod?: string;       // 仅用于投点法
}

export interface AbilityScoreImprovement {
    level: number;
    points: number;  // 通常为2点
    restrictions?: {
        maximum?: number;  // 最大值限制
        singleAbilityMaximum?: number;  // 单个属性最大提升点数
    };
}

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

export interface Proficiency {
    name: string;
    type: 'skill' | 'tool' | 'language';
    ability?: AbilityName;  // 对于技能熟练项，关联的属性
    description?: string;
}

export interface BackgroundFeature {
    name: string;
    displayName: string;
    description: string;
    mechanicalEffect?: string | string[];
}

export interface BackgroundEquipment {
    name: string;
    quantity: number;
    description?: string;
}

export interface Background {
    id: string;
    name: string;
    description: string;
    "skill proficiencies": ProficiencyReference[];
    features: BackgroundFeature[];
    equipment: BackgroundEquipment[];
    suggestedCharacteristics?: {
        personalityTraits: string[];
        ideals: string[];
        bonds: string[];
        flaws: string[];
    };
}

export type AbilityScore = AbilityName;

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
        tools: {
          id: string;
          subtype?: string;
        }[];
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

export interface Character {
    id: string;
    name: string;
    race: RaceData | null;
    subrace: Subrace | null;
    classes: CharacterClass[];
    level: number;
    experiencePoints: number;
    abilityScores: AbilityScores;
    baseAbilityScores: AbilityScores;  // 添加基础属性值，不包含种族加值
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
        tools: {
          id: string;
          subtype?: string;
        }[];
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

export interface Spellcasting {
    ability: string;
    type: 'full' | 'half' | 'third' | 'none';
    spellList: string[];
}

export interface ClassProficiencies {
    armor: ProficiencyRef[];
    weapons: ProficiencyRef[];
    tools: ProficiencyRef[];
    savingThrows: ProficiencyRef[];
    skills: ProficiencyRef[];
}

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
    | 'mount';

export type EquipmentState = Partial<Record<EquipmentSlot, string>>;

export interface AdventuringGear extends BaseItem {
    id: `gear.${string}`;
    category: 'container' | 'equipment' | 'food' | 'tool' | 'misc';
    quantity?: number;   // 如果是一组物品，表示数量
}

export interface Accessory extends BaseItem {
    id: `accessory.${string}`;
    slot: 'head' | 'neck' | 'fingers' | 'back' | 'waist';
    effect?: string;     // 特殊效果描述
}

export interface Mount extends BaseItem {
    id: `mount.${string}`;
    slot: 'mount';
    speed: number;       // 速度（尺/轮）
    carryingCapacity: number;  // 载重能力（磅）
    type: 'land' | 'water' | 'air';
}

export type Currency = 'cp' | 'sp' | 'gp' | 'pp';

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

export type FeatId = `feat.${string}`;

export interface GameFeat {
    id: FeatId;
    displayName: string;
    description: string;
    prerequisites?: {
        ability?: Record<string, number>;
        proficiency?: string[];
    };
    effects: any;
}

export interface FeatSelection {
    level: number;
    featId: FeatId;
}

export type Language = 'en' | 'zh';

export interface LocalizationContext {
    currentLanguage: Language;
    setLanguage: (lang: Language) => void;
    translate: (key: string) => string;
}

export interface SpellSlots {
    [level: string]: {
        [slot: string]: number;
    };
}

export interface MulticlassingSpellcasting {
    fullcaster: string[];
    halfcaster: string[];
    thirdcaster: string[];
    spellSlots: SpellSlots;
}

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

export type ProficiencyType = 'weapon' | 'armor' | 'tool' | 'savingThrow' | 'skill' ;

export interface ProficiencySubtype {
    id: string;           // 子类型ID，如 "proficiency.tool.artisans.smith"
    name: string;         // 内部名称
    displayName: string;  // 显示名称
    description?: string;
}

export interface ProficiencyReference {
    id: string;           // 简短ID，如 "weapon.simple_melee"
    type: ProficiencyType;
    subtype?: string;     // 可选的子类型ID
}

export interface ProficiencyRef {
    id: string;
}

export interface ProficiencyData {
    weapons: Record<string, Proficiency>;
    armor: Record<string, Proficiency>;
    tools: Record<string, Proficiency>;
    savingThrows: Record<string, Proficiency>;  // 豁免熟练项
    skills: Record<string, Proficiency>;
}

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
    "skill proficiencies"?: ProficiencyReference[];
    skillChoices?: SkillChoices;
}

export interface DragonbornAncestry {
    name: string;
    damageType: string;
    breathWeapon: string;
}

export interface Race {
    name: string;
    displayName: string;
    description: string;
    size: 'Small' | 'Medium';
    speed: number;
    abilityScoreIncrease: AbilityScoreIncrease;
    racialTraits: RacialTrait[];
    languages: string[];
    subraces: Subrace[];
    selectedSubrace?: Subrace;
    selectedAbilityScoreIncreases?: Record<string, number>;
}

export interface Spell {
  name: string;
  displayName: string;
  level: number;
  school: string;
  castingTime: string;
  range: string;
  components: {
    verbal: boolean;
    somatic: boolean;
    material: boolean;
    materials?: string;
  };
  duration: string;
  description: string;
  higherLevels?: string;
  classes: string[];
}

export type CharacterSpells = SpellSystem;

export interface SpellcastingAbility {
  cantripsKnown: {
    [level: number]: number;
  };
  spellSlots: {
    [classLevel: number]: {
      [spellLevel: number]: number;
    };
  };
}

export interface SpellRules {
  spellSlots: Record<number, Record<number, number>>;
  cantripsKnown: Record<string, Record<number, number>>;
  spellsKnown: Record<string, Record<number, number>>;
  spellList: Record<string, Spell[]>;
}

export type DamageType = 'acid' | 'bludgeoning' | 'cold' | 'fire' | 'force' | 'lightning' | 'necrotic' | 'piercing' | 'poison' | 'psychic' | 'radiant' | 'slashing' | 'thunder';

export type MagicSchool = 'abjuration' | 'conjuration' | 'divination' | 'enchantment' | 'evocation' | 'illusion' | 'necromancy' | 'transmutation';

export type CreationStep = 'race' | 'class' | 'abilities' | 'background' | 'equipment' | 'spells' | 'description';

export type Size = 'tiny' | 'small' | 'medium' | 'large' | 'huge' | 'gargantuan';

export type Condition = string;

export interface BaseComponentProps {
    className?: string;
    style?: React.CSSProperties;
    sx?: SxProps<Theme>;
}

export interface DialogProps extends BaseComponentProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: ReactNode;
}

export interface SkillChipProps extends BaseComponentProps {
    skillId: string;
    onDelete?: () => void;
}

export interface Skill {
    name: string;
    ability: AbilityName;
    description: string;
    isProficient?: boolean;
}

export interface ResourceUses {
    max: number;
    current: number;
    resetOn: 'shortRest' | 'longRest';
}

export interface SavingThrow {
    ability: AbilityName;
    dc: number;
    proficient: boolean;
    advantage?: boolean;
    disadvantage?: boolean;
}

export interface Attack {
    name: string;
    type: 'melee' | 'ranged' | 'spell';
    range: number | { normal: number; long?: number };
    modifier: number;
    damage: {
        diceCount: number;
        diceType: number;
        type: DamageType;
        modifier?: number;
    }[];
}

export interface SkillSelectionState {
    availableSkills: string[];
    selectedSkills: string[];
    preselectedSkills: Set<string>;
    maxSelections: number;
}

export interface DerivedStats {
    maxHp: number;
    ac: number;
    initiative: number;
    speed: number;
}

export interface GameDataService {
    initialize(): Promise<void>;
    getRace(name: string): Race | undefined;
    getClass(name: string): ClassData | undefined;
    getBackground(name: string): Background | undefined;
    getClasses(): Map<string, ClassData>;
    canSelectSubclass(className: string, level: number): boolean;
    getSubrace(raceName: string, subraceName: string): Subrace | undefined;
}

export interface ProficiencyService {
    getPreselectedProficiencies(character: Character): Set<string>;
    getSkillProficiencyChoices(className: string): { count: number; from: string[] };
    getAllSkills(): Promise<string[]>;
    getSkillDisplayName(skillId: string): string;
}

export interface ASIOption {
    type: 'single' | 'double';
    points: number;
}

export interface ASIChoice {
    type: 'ability_score_increase' | 'feat';
    description: string;
    options?: ASIOption[];
}

export interface AbilityScoreImprovementSystem {
    levels: number[];
    choices: {
        standardASI: ASIChoice;
        featOption: ASIChoice;
    };
}

export type AbilityGenerationMethod = 'pointBuy' | 'standardArray' | 'roll';