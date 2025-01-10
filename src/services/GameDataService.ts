import { XMLParser } from 'fast-xml-parser';
import { RaceData, RacialTrait, Subrace, AbilityScoreIncrease } from '../types/race';
import { ClassData, Subclass } from '../types/Class';
import { LevelingRules } from '../types/character';
import { AbilityRules } from '../types/ability';
import { Character } from '../types/character';
import { Background } from '../types/background';
import { Proficiency, ProficiencyData, ProficiencyType } from '../types/proficiency';
import { Spell, SpellSchool } from '../types/spell';

interface ErrorMonitor {
    log(level: 'info' | 'error' | 'warn', message: string, error?: any): void;
}

interface ErrorLog {
    timestamp: string;
    type: 'error' | 'warning' | 'info';
    message: string;
    error?: any;
}

interface ClassSpellList {
    [level: string]: Array<{name: string, id: string}>;
}

class ErrorMonitorImpl implements ErrorMonitor {
    private static logs: ErrorLog[] = [];
    private static maxLogs: number = 100;

    public log(level: 'info' | 'error' | 'warn', message: string, error?: any): void {
        const log: ErrorLog = {
            timestamp: new Date().toISOString(),
            type: level === 'warn' ? 'warning' : level,
            message,
            error
        };

        ErrorMonitorImpl.logs.push(log);
        if (ErrorMonitorImpl.logs.length > ErrorMonitorImpl.maxLogs) {
            ErrorMonitorImpl.logs.shift();
        }

        console[level](message, error || '');
    }

    public static getLogs(): ErrorLog[] {
        return [...ErrorMonitorImpl.logs];
    }

    public static clear(): void {
        ErrorMonitorImpl.logs = [];
    }
}

export class GameDataService {
    private static instance: GameDataService;
    private races: Map<string, RaceData> = new Map();
    private classes: Map<string, ClassData> = new Map();
    private levelingRules: LevelingRules | null = null;
    private initialized: boolean = false;
    private errorMonitor: ErrorMonitor;
    private abilityRules: AbilityRules | null = null;
    private currentCharacter: Character | null = null;
    private backgrounds: Map<string, Background> = new Map();
    private proficiencyData: ProficiencyData | null = null;
    private features: Map<string, { displayName: string; description: string }> = new Map();
    private static featsData: any = null;
    // 就像是一本巨大的魔法书，存储所有法术的详细信息
    private spellBook: Map<string, Spell> = new Map();
    // 就像是各个职业的法术学习清单
    private classSpellLists: Map<string, ClassSpellList> = new Map();
    private dataLoaded: boolean = false;

    private constructor() {
        this.spellBook = new Map();
        this.classSpellLists = new Map();
        this.errorMonitor = new ErrorMonitorImpl();
        this.features = new Map();
        this.initialize().catch(error => {
            console.error('Failed to initialize GameDataService:', error);
            this.errorMonitor.log('error', '游戏数据初始化失败', error);
        });
    }

    // 就像是图书馆开馆前的准备工作
    private async loadAllData(): Promise<void> {
        try {
            await Promise.all([
                this.loadSpellData(),
                this.loadProficiencyData(),
                this.loadLevelingRules(),
                this.loadAbilityRules(),
                this.loadRaceData(),
                this.loadClassData(),
                this.loadBackgrounds(),
                this.loadFeats()
            ]);
            this.dataLoaded = true;
            this.initialized = true;
            console.log('所有游戏数据加载完成');
        } catch (error) {
            console.error('Failed to load all game data:', error);
            this.errorMonitor.log('error', '游戏数据加载失败', error);
            throw error;
        }
    }

    // 就像是检查图书馆是否准备好开放
    public async ensureDataLoaded(): Promise<void> {
        if (!this.initialized) {
            console.log('等待数据初始化完成...');
            await this.initialize();
        }
    }

    // 就像是获取图书馆的单例
    public static getInstance(): GameDataService {
        if (!GameDataService.instance) {
            GameDataService.instance = new GameDataService();
        }
        return GameDataService.instance;
    }

    public async initialize(): Promise<void> {
        if (this.initialized) {
            return;
        }

        try {
            await this.loadAllData();
        } catch (error) {
            this.errorMonitor.log('error', 'Failed to initialize GameDataService', error);
            throw error;
        }
    }

    private async loadProficiencyData(): Promise<void> {
        try {
            const [weaponproficiency, armorproficiency, toolproficiency, savingThrowproficiency, skillproficiency] = await Promise.all([
                this.loadJsonFile('/data/Other proficiency/weapon_proficiency.json'),
                this.loadJsonFile('/data/Other proficiency/armor_proficiency.json'),
                this.loadJsonFile('/data/Other proficiency/tool_proficiency.json'),
                this.loadJsonFile('/data/Other proficiency/savingThrow_proficiency.json'),
                this.loadJsonFile('/data/skill proficiencies/skill_proficiencies.json'),
            ]);

            this.proficiencyData = {
                weapons: weaponproficiency || {},
                armor: armorproficiency || {},
                tools: toolproficiency || {},
                savingThrows: savingThrowproficiency || {},
                skills: skillproficiency?.skills || {}, // 从嵌套的skills对象中获取数据
            };
        } catch (error) {
            this.errorMonitor.log('error', 'Failed to load proficiency data', error);
            this.proficiencyData = {
                weapons: {},
                armor: {},
                tools: {},
                savingThrows: {},
                skills: {},
            };
        }
    }

    private async loadJsonFile(path: string): Promise<any> {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                console.warn(`Failed to load file ${path}: ${response.status}`);
                return null;
            }
            return await response.json();
        } catch (error) {
            console.warn(`Error loading file ${path}:`, error);
            return null;
        }
    }

    public getRaces(): RaceData[] {
        return Array.from(this.races.values());
    }

    public getRace(raceName: string): RaceData | undefined {
        return this.races.get(raceName);
    }

    public getClasses(): Map<string, ClassData> {
        return this.classes;
    }

    /**
     * 获取职业数据
     * @param name 职业名称
     * @returns 职业数据
     */
    public getClass(name: string): ClassData | null {
        if (!this.initialized) {
            this.errorMonitor.log('warn', 'GameDataService not initialized when getting class data');
            return null;
        }
        const classData = this.classes.get(name);
        if (!classData) {
            this.errorMonitor.log('warn', `Class data not found for: ${name}`);
            return null;
        }
        return classData;
    }

    public getSubclasses(className: string): Subclass[] {
        const classData = this.classes.get(className);
        return classData ? classData.subclasses : [];
    }

    public getRaceTraits(raceName: string): RacialTrait[] {
        const race = this.getRace(raceName);
        return race ? race.racialTraits : [];
    }

    public getRaceSubraces(raceName: string): Subrace[] {
        const race = this.getRace(raceName);
        return race ? race.subraces : [];
    }

    public getAbilityScoreIncrease(raceName: string, subraceName?: string): AbilityScoreIncrease {
        const race = this.getRace(raceName);
        if (!race) return {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        };

        const increases = { ...race.abilityScoreIncrease };

        if (subraceName) {
            const subrace = race.subraces.find((sub: Subrace) => sub.name === subraceName);
            if (subrace && subrace.abilityScoreIncrease) {
                Object.assign(increases, subrace.abilityScoreIncrease);
            }
        }

        return increases;
    }

    // 获取指定经验值对应的等级
    public getLevelFromXP(xp: number): number {
        if (!this.levelingRules) return 1;

        const levels = Object.entries(this.levelingRules.experiencePoints)
            .map(([level, expPoints]) => ({
                level: parseInt(level),
                expPoints
            }))
            .sort((a, b) => a.expPoints - b.expPoints);
        
        for (let i = levels.length - 1; i >= 0; i--) {
            if (xp >= levels[i].expPoints) {
                return levels[i].level;
            }
        }
        return 1;
    }

    // 获取指定等级的熟练加值
    public getProficiencyBonus(level: number): number {
        return this.levelingRules?.proficiencyBonus[level] || 2;
    }

    // 检查指定等级是否可以选择子职业
    public canSelectSubclass(className: string, level: number): boolean {
        const classData = this.classes.get(className);
        if (!classData) return false;

        // 根据职业规则判断是否可以选择子职业
        // 通常在3级可以选择子职业
        return level >= 3;
    }

    // 获取指定等级解锁的特性
    public getUnlockedFeatures(level: number, classId: string): string[] {
        if (!this.levelingRules) return [];
        
        const generalFeatures = this.levelingRules.levelFeatures[level]?.unlockedFeatures || [];
        const classFeatures = this.levelingRules.classSpecificFeatures[classId]?.[level] || [];
        return [...generalFeatures, ...classFeatures];
    }

    // 加载规则数据
    public async loadAbilityRules(): Promise<AbilityRules> {
        if (this.abilityRules) {
            return this.abilityRules;
        }

        try {
            const response = await fetch('./data/rules/abilities.json');
            const data = await response.json();
            
            // 验证和转换数据
            if (!this.validateAbilityRules(data)) {
                throw new Error('Invalid ability rules data format');
            }
            
            this.abilityRules = data;
            return this.abilityRules;
        } catch (error) {
            console.error('Failed to load ability rules:', error);
            throw new Error('Failed to load ability rules');
        }
    }

    // 验证规则数据格式
    private validateAbilityRules(data: any): data is AbilityRules {
        return (
            data &&
            typeof data.modifierTable === 'object' &&
            typeof data.defaultValue === 'number' &&
            typeof data.minimumValue === 'number' &&
            typeof data.maximumValue === 'number' &&
            typeof data.pointBuy === 'object' &&
            Array.isArray(data.standardArray) &&
            typeof data.improvements === 'object' &&
            typeof data.improvements.pointsPerImprovement === 'number' &&
            typeof data.improvements.maximumScore === 'number'
        );
    }

    // 获取当前角色
    public getCurrentCharacter(): Character | null {
        return this.currentCharacter;
    }

    // 获取当前角色经验值
    public getCharacterExperiencePoints(): number {
        return this.currentCharacter?.experiencePoints || 0;
    }

    // 根据经验值计算等级
    public getCharacterLevel(): number {
        // 简化版等级计算，实际应该根据规则表计算
        const levelThresholds = [
            0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000,
            85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000
        ];

        let level = 1;
        for (let i = 0; i < levelThresholds.length; i++) {
            if (this.getCharacterExperiencePoints() >= levelThresholds[i]) {
                level = i + 1;
            } else {
                break;
            }
        }
        return level;
    }

    // 设置当前角色
    public setCurrentCharacter(character: Character) {
        this.currentCharacter = character;
    }

    private async loadLevelingRules(): Promise<void> {
        try {
            const response = await fetch('./data/rules/leveling.json');
            if (!response.ok) {
                throw new Error('Failed to load leveling rules');
            }
            this.levelingRules = await response.json();
        } catch (error) {
            this.errorMonitor.log('error', 'Failed to load leveling rules', error);
            throw error;
        }
    }

    // 获取熟练项数据
    public getProficiencyData(): ProficiencyData | null {
        return this.proficiencyData;
    }

    // 获取指定类型的所有熟练项
    private getProficiencies(type: ProficiencyType): Record<string, Proficiency> | undefined {
        if (!this.proficiencyData) return undefined;

        switch (type) {
            case 'weapon':
                return this.proficiencyData.weapons;
            case 'armor':
                return this.proficiencyData.armor;
            case 'tool':
                return this.proficiencyData.tools;
            case 'savingThrow':
                return this.proficiencyData.savingThrows;
            case 'skill':
                return this.proficiencyData.skills;
            default:
                return undefined;
        }
    }

    // 获取指定类型和ID的熟练项
    public getProficiency(type: ProficiencyType, id: string): Proficiency | undefined {
        if (!this.proficiencyData) {
            this.errorMonitor.log('error', 'Proficiency data not loaded');
            return undefined;
        }

        const proficiencies = this.getProficiencies(type);
        if (!proficiencies) return undefined;

        return proficiencies[id];
    }

    // 获取熟练项描述
    public getProficiencyDescription(type: ProficiencyType, id: string): string | undefined {
        const proficiency = this.getProficiency(type, id);
        return proficiency?.description;
    }

    private async loadRaceData(): Promise<void> {
        if (this.races.size > 0) return;

        try {
            const raceFiles = [
                'dragonborn',
                'dwarf',
                'elf',
                'gnome',
                'half-elf',
                'half-orc',
                'halfling',
                'human',
                'tiefling'
            ];

            for (const file of raceFiles) {
                try {
                    const response = await fetch(`./data/races/${file}.json`);
                    const data = await response.json();
                    this.races.set(data.name.toLowerCase(), data);
                } catch (error) {
                    this.errorMonitor.log('error', `Failed to load race: ${file}`, error);
                }
            }
        } catch (error) {
            this.errorMonitor.log('error', 'Failed to load race data', error);
            throw new Error('Failed to load race data');
        }
    }

    private async loadClassData(): Promise<void> {
        const classFiles = [
            'barbarian', 'bard', 'cleric', 'druid', 'fighter',
            'monk', 'paladin', 'ranger', 'rogue', 'sorcerer',
            'warlock', 'wizard'
        ];

        try {
            const classDataPromises = classFiles.map(async (className) => {
                try {
                    const response = await fetch(`/data/Classes/${className}.json`);
                    if (!response.ok) {
                        throw new Error(`Failed to load class data for ${className}`);
                    }
                    const data = await response.json();
                    return [className, data] as [string, ClassData];
                } catch (error) {
                    this.errorMonitor.log('error', `Failed to load class data for ${className}`, error);
                    return null;
                }
            });

            const results = await Promise.all(classDataPromises);
            results.forEach(result => {
                if (result) {
                    const [className, data] = result;
                    this.classes.set(className, this.transformClassData(data));
                }
            });
        } catch (error) {
            this.errorMonitor.log('error', 'Failed to load class data', error);
        }
    }

    private transformClassData(rawData: any): ClassData {
        return {
            name: rawData.name,
            displayName: rawData.displayName,
            description: rawData.description,
            hitDie: rawData.hitDie,
            primaryAbility: rawData.primaryAbility,
            'Other proficiencies': rawData['Other proficiencies'] || {
                armor: [],
                weapons: [],
                tools: [],
                savingThrows: []
            },
            multiclassing: rawData.multiclassing ? {
                prerequisites: rawData.multiclassing.prerequisites || {},
                'Other proficiencies': rawData.multiclassing['Other proficiencies'] || {
                    armor: [],
                    weapons: [],
                    tools: [],
                    savingThrows: []
                }
            } : undefined,
            skillChoices: rawData.skillChoices,
            features: rawData.features || [],
            subclasses: rawData.subclasses || [],
            specialResources: rawData.specialResources,
            abilityScoreImprovements: rawData.abilityScoreImprovements
        };
    }

    // 加载背景数据
    public async loadBackgrounds(): Promise<Map<string, Background>> {
        if (this.backgrounds.size > 0) {
            return this.backgrounds;
        }

        try {
            const backgroundFiles = [
                'acolyte',
                'charlatan',
                'criminal',
                'folk_hero',
                'guild_artisan',
                'hermit',
                'noble',
                'outlander',
                'sage',
                'sailor',
                'soldier',
                'urchin'
            ];

            for (const file of backgroundFiles) {
                try {
                    const response = await fetch(`/data/Backgrounds/${file}.json`);
                    const data = await response.json();
                    
                    if (this.validateBackground(data)) {
                        this.backgrounds.set(data.id, data);
                    } else {
                        this.errorMonitor.log('error', `Invalid background data format: ${file}`);
                    }
                } catch (error) {
                    this.errorMonitor.log('error', `Failed to load background: ${file}`, error);
                }
            }

            return this.backgrounds;
        } catch (error) {
            this.errorMonitor.log('error', 'Failed to load backgrounds', error);
            throw new Error('Failed to load background data');
        }
    }

    // 获取背景数据
    public getBackground(id: string): Background | undefined {
        return this.backgrounds.get(id);
    }

    // 获取所有背景
    public getAllBackgrounds(): Background[] {
        return Array.from(this.backgrounds.values());
    }

    // 验证背景数据格式
    private validateBackground(data: any): data is Background {
        return (
            data &&
            typeof data.id === 'string' &&
            typeof data.name === 'string' &&
            typeof data.description === 'string' &&
            Array.isArray(data['skill proficiencies']) &&
            Array.isArray(data.features) &&
            Array.isArray(data.equipment)
        );
    }

    // 获取职业技能熟练项限制
    public getSkillProficiencyChoices(className: string): { count: number; from: string[] } {
        const classData = this.getClass(className);
        if (!classData) {
            return { count: 0, from: [] };
        }
        return classData.skillChoices;
    }

    public getFeature(name: string): { displayName: string; description: string } | undefined {
        return this.features.get(name);
    }


    // 获取技能描述
    public getSkillDescription(skillName: string): string {
        const descriptions: Record<string, string> = {
            '运动': '力量（运动）检定涵盖攀爬、跳跃或游泳等情况。',
            '杂技': '敏捷（杂技）检定涵盖你在进行空翻、翻滚、跳高等动作时的尝试。',
            '巧手': '敏捷（巧手）检定涵盖所有精细操作的尝试。',
            '隐匿': '敏捷（隐匿）检定用于隐藏自己不被他人发现。',
            '奥秘': '智力（奥秘）检定用于回忆关于法术、魔法物品、奥秘符号等知识。',
            '历史': '智力（历史）检定用于回忆关于历史事件、传说人物、古代王国等知识。',
            '调查': '智力（调查）检定用于搜寻线索并推理。',
            '自然': '智力（自然）检定用于回忆关于地形、植物、动物、气候等知识。',
            '宗教': '智力（宗教）检定用于回忆关于神祇、仪式、祷文等知识。',
            '驯兽': '感知（驯兽）检定用于安抚动物或判断动物意图。',
            '洞悉': '感知（洞悉）检定用于判断他人是否说谎。',
            '医疗': '感知（医疗）检定用于稳定濒死伙伴或诊断疾病。',
            '察觉': '感知（察觉）检定用于发现隐藏的东西。',
            '生存': '感知（生存）检定用于追踪、寻路或在野外求生。',
            '欺瞒': '魅力（欺瞒）检定用于说服他人相信谎言。',
            '恐吓': '魅力（恐吓）检定用于威吓他人。',
            '表演': '魅力（表演）检定用于娱乐观众。',
            '说服': '魅力（说服）检定用于影响他人态度。'
        };
        return descriptions[skillName] || '';
    }

    // 获取子种族数据
    public getSubrace(raceName: string, subraceName: string): Subrace | undefined {
        const race = this.getRace(raceName);
        if (!race) return undefined;
        return race.subraces.find(subrace => subrace.name === subraceName);
    }

    public async loadFeats(): Promise<void> {
        try {
            const response = await fetch('./data/feats/feats.json');
            if (!response.ok) {
                throw new Error(`Failed to load feats data: ${response.statusText}`);
            }
            const data = await response.json();
            GameDataService.featsData = data.feats;
        } catch (error) {
            this.errorMonitor.log('error', 'Failed to load feats data', error);
            GameDataService.featsData = [];
        }
    }

    public getFeats(): any[] {
        return GameDataService.featsData || [];
    }

    public getFeat(name: string): any {
        if (!GameDataService.featsData) {
            return null;
        }
        return GameDataService.featsData.find((feat: any) => feat.name === name);
    }

    // 就像是图书管理员整理新到的魔法书
    private async loadSpellData(): Promise<void> {
        try {
            // 加载所有法术的详细信息
            const spellsData = await this.loadJsonFile('/data/spells/0-9spells.json');
            for (const spell of spellsData.spells) {
                this.spellBook.set(spell.id, spell);
            }

            // 加载职业法术列表
            const classSpellsData = await this.loadJsonFile('/data/spells/class_spells_with_ids.json');
            for (const [className, spellsByLevel] of Object.entries(classSpellsData)) {
                this.classSpellLists.set(className, spellsByLevel as ClassSpellList);
            }

            console.log('法术数据加载完成');
            console.log(`- 加载了 ${this.spellBook.size} 个法术`);
            console.log(`- 加载了 ${this.classSpellLists.size} 个职业的法术列表`);
        } catch (error) {
            console.error('加载法术数据时出错:', error);
            this.errorMonitor.log('error', '加载法术数据失败', error);
        }
    }

    // 就像是查找特定的法术典籍
    public getSpellById(id: string): Spell | undefined {
        const spell = this.spellBook.get(id);
        if (!spell) {
            console.log(`未找到法术 ID: ${id}`);
        }
        return spell;
    }

    // 就像是获取某个职业的法术学习指南
    public getClassSpells(className: string): ClassSpellList {
        console.log(`获取 ${className} 职业法术列表`);
        const spells = this.classSpellLists.get(className) || {};
        console.log(`找到法术列表，包含 ${Object.keys(spells).length} 个环级`);
        return spells;
    }

    // 就像是按照法术学派分类整理书架
    public getSpellsBySchool(school: SpellSchool): Spell[] {
        return Array.from(this.spellBook.values())
            .filter(spell => spell.school === school);
    }

    // 就像是按照法术环位分类整理书架
    public getSpellsByLevel(level: number): Spell[] {
        return Array.from(this.spellBook.values())
            .filter(spell => spell.level === level);
    }
}

export default GameDataService;
