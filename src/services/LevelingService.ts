import { Character, CharacterClass } from '../types/character';
import { GameDataService } from './GameDataService';
import {
    calculateLevel,
    calculateTotalLevel,
    getProficiencyBonus,
    canLevelUp,
    LevelingSystem,
} from '../types/leveling';
import { 
    MulticlassingSpellcasting,
    calculateSpellcastingLevel,
    SpellSlots,
 } from '../types/spell';

export class LevelingService {
    private static instance: LevelingService;
    private gameDataService: GameDataService;
    private levelingRules: LevelingSystem;

    private constructor() {
        this.gameDataService = GameDataService.getInstance();
        this.levelingRules = {
            experiencePoints: {},
            proficiencyBonus: {},
            levelFeatures: {},
            multiclassing: {
                spellcasting: {
                    fullcaster: ['wizard', 'cleric', 'druid', 'bard', 'sorcerer'],
                    halfcaster: ['paladin', 'ranger'],
                    thirdcaster: ['fighter.eldritch-knight', 'rogue.arcane-trickster'],
                    spellSlots: {}
                }
            }
        };
        this.loadLevelingRules();
    }

    private async loadLevelingRules() {
        try {
            const response = await fetch('./data/rules/leveling.json');
            this.levelingRules = await response.json();
        } catch (error) {
            console.error('Failed to load leveling rules:', error);
        }
    }

    public static getInstance(): LevelingService {
        if (!this.instance) {
            this.instance = new LevelingService();
        }
        return this.instance;
    }

    /**
     * 计算角色的生命值上限
     */
    public calculateMaxHP(character: Character): number {
        if (!character.classes || character.classes.length === 0) return 0;

        let maxHP = 0;
        const mainClass = character.classes[0];
        const classData = this.gameDataService.getClass(mainClass.name);
        
        if (!classData) return 0;

        // 计算体质调整值
        const conModifier = Math.floor((character.abilityScores.constitution - 10) / 2);

        // 1级时获得最大生命值
        if (mainClass.level >= 1) {
            maxHP = classData.hitDie + conModifier;
        }

        // 之后的等级投骰子
        for (let i = 2; i <= mainClass.level; i++) {
            // 这里使用平均值，实际游戏中应该投骰子
            maxHP += Math.floor(classData.hitDie / 2) + 1 + conModifier;
        }

        return maxHP;
    }

    /**
     * 计算角色的护甲等级
     */
    public calculateAC(character: Character): number {
        // 基础护甲等级10
        let ac = 10;

        // 敏捷调整值
        const dexModifier = Math.floor((character.abilityScores.dexterity - 10) / 2);
        ac += dexModifier;

        // TODO: 添加护甲和盾牌的加值

        return ac;
    }

    /**
     * 计算角色的先攻值
     */
    public calculateInitiative(character: Character): number {
        // 先攻等于敏捷调整值
        return Math.floor((character.abilityScores.dexterity - 10) / 2);
    }

    /**
     * 计算角色的速度
     */
    public calculateSpeed(character: Character): number {
        if (!character.race) return 30; // 默认速度
        return character.race.speed || 30;
    }

    /**
     * 获取可用的副职业选项
     */
    public getAvailableSubclasses(character: Character): string[] {
        if (!character.classes || character.classes.length === 0) return [];

        const mainClass = character.classes[0];
        const classData = this.gameDataService.getClass(mainClass.name);

        if (!classData || mainClass.level < 3) return []; // 大多数职业在3级选择副职业

        return classData.subclasses.map(sc => sc.name);
    }

    /**
     * 获取当前等级可用的法术位
     */
    public getSpellSlots(character: Character): Record<number, number> {
        if (!character.classes || character.classes.length === 0) return {};

        // 创建一个临时的类映射对象
        const classMap: Record<string, { level: number; subclass?: string }> = {};
        character.classes.forEach(cls => {
            classMap[cls.name] = {
                level: cls.level,
                subclass: cls.subclass
            };
        });

        // 计算施法等级
        const spellcastingLevel = calculateSpellcastingLevel(
            classMap,
            this.levelingRules.multiclassing.spellcasting
        );

        // 如果没有施法等级，返回空对象
        if (!spellcastingLevel) return {};

        // 获取法术位表
        return this.levelingRules.multiclassing.spellcasting.spellSlots[spellcastingLevel] || {};
    }

    /**
     * 获取当前等级的熟练加值
     */
    public getProficiencyBonus(character: Character): number {
        const totalLevel = calculateTotalLevel(
            character.classes.reduce((acc, curr) => ({
                ...acc,
                [curr.name]: { level: curr.level }
            }), {})
        );
        return getProficiencyBonus(totalLevel, this.levelingRules.proficiencyBonus);
    }

    /**
     * 检查是否可以升级
     */
    public canLevelUp(character: Character, targetLevel: number): boolean {
        return canLevelUp(
            character.experiencePoints,
            targetLevel,
            this.levelingRules.experiencePoints
        );
    }

    /**
     * 获取当前等级的特性
     */
    public getLevelFeatures(level: number): string[] {
        const features = this.levelingRules.levelFeatures[level];
        return features ? features.unlockedFeatures : [];
    }

    /**
     * 获取等级规则
     */
    public getLevelingRules(): LevelingSystem {
        return this.levelingRules;
    }

    /**
     * 获取所有已解锁的特性
     */
    public getAllUnlockedFeatures(character: Character): {
        race: { name: string; displayName: string; description: string; mechanicalEffect?: string | string[] }[];
        class: { name: string; displayName: string; description: string; mechanicalEffect?: string | string[]; level: number }[];
        subclass: { name: string; displayName: string; description: string; mechanicalEffect?: string | string[]; level: number }[];
        background: { name: string; displayName: string; description: string; mechanicalEffect?: string | string[] }[];
    } {
        const features = {
            race: [] as any[],
            class: [] as any[],
            subclass: [] as any[],
            background: [] as any[]
        };

        // 获取种族特性
        if (character.race) {
            features.race = character.race.racialTraits || [];
            if (character.subrace) {
                features.race = [...features.race, ...(character.subrace.traits || [])];
            }
        }

        // 获取职业特性
        if (character.classes && character.classes.length > 0) {
            const mainClass = character.classes[0];
            const classData = this.gameDataService.getClass(mainClass.name);
            if (classData) {
                // 获取当前等级及以下的所有职业特性
                features.class = classData.features.filter(feature => 
                    feature.level <= mainClass.level
                );

                // 获取子职业特性
                if (mainClass.subclass && mainClass.level >= 3) {
                    const subclass = classData.subclasses.find(sc => sc.name === mainClass.subclass);
                    if (subclass) {
                        features.subclass = subclass.features.filter(feature =>
                            feature.level <= mainClass.level
                        );
                    }
                }
            }
        }

        // 获取背景特性
        if (character.background) {
            features.background = character.background.features || [];
        }

        return features;
    }
}
