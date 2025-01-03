import { GameDataService } from './GameDataService';
import { Character } from '../types/character';
import { Spell, SpellComponents } from '../types/spell';
import { SpellFilterOptions } from '../types/spell';
import { AbilityName, AbilityModifiers } from '../types/ability';

interface ClassSpellListItem {
    name: string;
    id: string;
}

interface ClassSpellList {
    [level: string]: ClassSpellListItem[];
}

export class SpellService {
    private gameData: GameDataService;

    // 职业名称映射
    private static readonly CLASS_NAME_MAP: { [key: string]: string } = {
        'wizard': '法师',
        'sorcerer': '术士',
        'warlock': '邪术师',
        'bard': '吟游诗人',
        'cleric': '牧师',
        'druid': '德鲁伊',
        'paladin': '圣武士',
        'ranger': '游侠'
    };

    constructor() {
        this.gameData = GameDataService.getInstance();
    }

    // 确保数据已加载
    public async ensureDataLoaded(): Promise<void> {
        await this.gameData.ensureDataLoaded();
    }

    // 获取可用法术列表
    public async getAvailableSpells(character: Character): Promise<{ [key: number]: Spell[] }> {
        await this.ensureDataLoaded();
        const spellsByLevel: { [key: number]: Spell[] } = {};
        
        // 获取角色的主要施法职业
        const spellcastingClass = character.classes.find(c => 
            ['wizard', 'sorcerer', 'warlock', 'bard', 'cleric', 'druid', 'paladin', 'ranger']
            .includes(c.name.toLowerCase())
        );

        if (!spellcastingClass) {
            return {};
        }

        // 获取职业的中文名称
        const className = SpellService.CLASS_NAME_MAP[spellcastingClass.name.toLowerCase()];
        
        // 从 class_spells_with_ids.json 获取该职业的法术列表
        const classSpellList = await this.gameData.getClassSpells(className) as ClassSpellList;
        if (!classSpellList) {
            return {};
        }

        // 获取当前可用的法术位
        const spellSlots = this.getSpellSlots(character);
        const maxSpellLevel = Math.max(...Object.keys(spellSlots).map(Number));

        // 获取每个法术的详细信息并按等级组织
        for (const [level, spellList] of Object.entries(classSpellList)) {
            const levelNum = parseInt(level);
            
            // 只添加角色当前等级能够施放的法术
            if (levelNum <= maxSpellLevel) {
                if (!spellsByLevel[levelNum]) {
                    spellsByLevel[levelNum] = [];
                }

                for (const spellRef of spellList) {
                    const spell = await this.getSpellById(spellRef.id);
                    if (spell) {
                        spellsByLevel[levelNum].push(spell);
                    }
                }
            }
        }

        return spellsByLevel;
    }

    // 根据ID获取法术详细信息
    public async getSpellsByIds(ids: string[]): Promise<Spell[]> {
        await this.ensureDataLoaded();
        const spells: Spell[] = [];
        
        for (const id of ids) {
            const spell = await this.getSpellById(id);
            if (spell) {
                spells.push(spell);
            }
        }
        
        return spells;
    }

    // 获取单个法术的详细信息
    public async getSpellById(id: string): Promise<Spell | null> {
        await this.ensureDataLoaded();
        const spell = this.gameData.getSpellById(id);
        return spell || null;
    }

    // 计算可准备的法术数量
    public calculatePreparedSpellCount(character: Character): number {
        const spellcastingClass = character.classes.find(c => 
            ['wizard', 'sorcerer', 'warlock', 'bard', 'cleric', 'druid', 'paladin', 'ranger']
            .includes(c.name.toLowerCase())
        );

        if (!spellcastingClass) {
            return 0;
        }

        // 获取施法关键属性
        const spellcastingAbility = this.getSpellcastingAbility(spellcastingClass.name);
        if (!spellcastingAbility) {
            return 0;
        }

        // 获取属性调整值
        const abilityScore = character.abilityScores[spellcastingAbility as keyof typeof character.abilityScores];
        const abilityModifier = this.getAbilityModifier(abilityScore);

        // 基础公式：职业等级 + 属性调整值
        return Math.max(1, spellcastingClass.level + abilityModifier);
    }

    // 获取指定等级的法术位数量
    public getSpellSlots(character: Character): { [key: number]: number } {
        const spellSlots: { [key: number]: number } = {};
        const spellcastingClass = character.classes.find(c => 
            ['wizard', 'sorcerer', 'warlock', 'bard', 'cleric', 'druid', 'paladin', 'ranger']
            .includes(c.name.toLowerCase())
        );

        if (!spellcastingClass) {
            return spellSlots;
        }

        // 根据职业等级获取法术位
        const slots = this.getSpellSlotsForClass(spellcastingClass.name, spellcastingClass.level);
        return slots;
    }

    // 获取施法关键属性
    private getSpellcastingAbility(className: string): string | null {
        const abilityMap: { [key: string]: string } = {
            'wizard': 'intelligence',
            'sorcerer': 'charisma',
            'warlock': 'charisma',
            'bard': 'charisma',
            'cleric': 'wisdom',
            'druid': 'wisdom',
            'paladin': 'charisma',
            'ranger': 'wisdom'
        };

        return abilityMap[className.toLowerCase()] || null;
    }

    // 计算属性调整值
    private getAbilityModifier(score: number): number {
        return Math.floor((score - 10) / 2);
    }

    // 获取职业特定等级的法术位
    private getSpellSlotsForClass(className: string, level: number): { [key: number]: number } {
        // 定义法术位类型
        type SpellSlotTable = {
            [key: number]: { [key: number]: number }
        };

        // 全施法者：法师、术士、牧师、德鲁伊、吟游诗人
        const fullCasterSlots: SpellSlotTable = {
            1: { 1: 2 },
            2: { 1: 3 },
            3: { 1: 4, 2: 2 },
            4: { 1: 4, 2: 3 },
            5: { 1: 4, 2: 3, 3: 2 },
            6: { 1: 4, 2: 3, 3: 3 },
            7: { 1: 4, 2: 3, 3: 3, 4: 1 },
            8: { 1: 4, 2: 3, 3: 3, 4: 2 },
            9: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
            10: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 },
            11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
            12: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
            13: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
            14: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1 },
            15: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
            16: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
            17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1, 9: 1 },
            18: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 1, 7: 1, 8: 1, 9: 1 },
            19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 1, 8: 1, 9: 1 },
            20: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 3, 6: 2, 7: 2, 8: 1, 9: 1 }
        };

        // 半施法者：圣武士、游侠
        const halfCasterSlots: SpellSlotTable = {
            2: { 1: 2 },
            3: { 1: 3 },
            5: { 1: 4, 2: 2 },
            7: { 1: 4, 2: 3 },
            9: { 1: 4, 2: 3, 3: 2 },
            11: { 1: 4, 2: 3, 3: 3 },
            13: { 1: 4, 2: 3, 3: 3, 4: 1 },
            15: { 1: 4, 2: 3, 3: 3, 4: 2 },
            17: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 1 },
            19: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2 }
        };

        // 邪术师特殊规则
        const warlockSlots: SpellSlotTable = {
            1: { 1: 1 },
            2: { 1: 2 },
            3: { 2: 2 },
            4: { 2: 2 },
            5: { 3: 2 },
            6: { 3: 2 },
            7: { 4: 2 },
            8: { 4: 2 },
            9: { 5: 2 },
            10: { 5: 2 },
            11: { 5: 3 },
            12: { 5: 3 },
            13: { 5: 3 },
            14: { 5: 3 },
            15: { 5: 3 },
            16: { 5: 3 },
            17: { 5: 4 },
            18: { 5: 4 },
            19: { 5: 4 },
            20: { 5: 4 }
        };

        // 将中文职业名称转换为英文
        const getEnglishClassName = (chineseName: string): string => {
            const nameMap = Object.entries(SpellService.CLASS_NAME_MAP);
            const found = nameMap.find(([_, cn]) => cn === chineseName.trim());
            return found ? found[0] : chineseName;
        };

        // 获取英文职业名称
        const englishClassName = getEnglishClassName(className.toLowerCase());
        let slots: { [key: number]: number } = {};

        // 根据职业类型返回相应的法术位
        if (englishClassName === 'warlock') {
            // 邪术师只获取当前等级的法术位
            slots = warlockSlots[level] || {};
        } else if (englishClassName === 'paladin' || englishClassName === 'ranger') {
            // 半施法者：查找不超过当前等级的最高法术位配置
            // 注意：半施法者在2级之前没有法术位
            if (level >= 2) {
                const validLevel = Object.keys(halfCasterSlots)
                    .map(Number)
                    .filter(l => l <= level)
                    .sort((a, b) => b - a)[0];
                if (validLevel) {
                    slots = { ...halfCasterSlots[validLevel] };
                }
            }
        } else {
            // 全施法者
            slots = { ...fullCasterSlots[level] || {} };
        }

        // 调试输出
        console.log(`Chinese Class: ${className}, English Class: ${englishClassName}, Level: ${level}, Slots:`, slots);

        return slots;
    }

    // 就像是法术图书管理员，帮你按条件筛选法术
    public filterSpells(spells: Spell[], options: SpellFilterOptions): Spell[] {
        return spells.filter(spell => {
            // 按环位筛选
            if (options.level !== undefined && spell.level !== options.level) {
                return false;
            }
            // 按学派筛选
            if (options.school && spell.school !== options.school) {
                return false;
            }
            // 按施法时间筛选
            if (options.castingTime && spell.castingTime !== options.castingTime) {
                return false;
            }
            // 按名称搜索
            if (options.searchText) {
                const searchLower = options.searchText.toLowerCase();
                return spell.name.toLowerCase().includes(searchLower) ||
                       spell.description.toLowerCase().includes(searchLower);
            }
            return true;
        });
    }

    // 检查是否有足够的法术位
    public hasSpellSlot(character: Character, spellLevel: number): boolean {
        const slots = this.getSpellSlots(character);
        return (slots[spellLevel] || 0) > 0;
    }

    // 就像是法术准备助手，检查法术是否已准备
    public isSpellPrepared(character: Character, spellId: string): boolean {
        return character.spells?.preparedSpells?.includes(spellId) || false;
    }
}
