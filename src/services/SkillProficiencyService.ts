import { GameDataService } from './GameDataService';
import { Character } from '../types/character';
import { ProficiencyReference } from '../types/proficiency';
import { Background } from '../types/background';

export interface PresetSkillProficiency {
    id: string;
    source: 'background' | 'race' | 'subrace' | 'racial_trait';
    sourceName: string;
}

export class SkillProficiencyService {
    private static instance: SkillProficiencyService;
    private gameDataService: GameDataService;
    private proficienciesData: { skills: Record<string, any> } | null = null;

    private constructor() {
        this.gameDataService = GameDataService.getInstance();
        this.SKILL_NAME_TO_ID = Object.fromEntries(
            Object.entries(this.SKILL_TRANSLATIONS).map(([id, chineseName]) => [chineseName, id])
        );
        // 初始化时加载数据
        this.initialize().catch(error => {
            console.error('Failed to initialize SkillProficiencyService', error);
        });
    }

    private async initialize(): Promise<void> {
        try {
            const skillData = await fetch('/data/skill proficiencies/skill_proficiencies.json').then(res => res.json());
            this.proficienciesData = {
                skills: skillData.skills || {}
            };
        } catch (error) {
            console.error('Failed to load skill proficiencies data', error);
            // 不抛出错误，保持与 GameDataService 的兼容性
        }
    }

    public static getInstance(): SkillProficiencyService {
        if (!SkillProficiencyService.instance) {
            SkillProficiencyService.instance = new SkillProficiencyService();
        }
        return SkillProficiencyService.instance;
    }

    /**
     * 获取职业的技能选择
     */
    getClassSkillChoices(className: string): { count: number; from: string[] } | null {
        const classData = this.gameDataService.getClass(className);
        if (!classData?.skillChoices) {
            return null;
        }

        return {
            count: classData.skillChoices.count,
            from: classData.skillChoices.from
        };
    }

    /**
     * 获取可用于选择的技能列表
     */
    getAvailableSkillChoices(character: Character): { count: number; from: string[] } {
        if (!character.classes?.[0]?.name) {
            return { count: 0, from: [] };
        }

        return this.getClassSkillChoices(character.classes[0].name) || { count: 0, from: [] };
    }

    /**
     * 获取技能的显示名称
     */
    getSkillDisplayName(skillId: string): string {
        return this.SKILL_TRANSLATIONS[skillId] || skillId;
    }

    /**
     * 将中文技能名称转换为英文ID
     */
    getSkillId(chineseName: string): string {
        return this.SKILL_NAME_TO_ID[chineseName] || chineseName;
    }

    /**
     * 获取种族技能选择
     */
    public getRaceSkillChoices(raceName: string | null, subraceName?: string): { count: number; from: string[] } | null {
        if (!raceName) return null;
        
        const race = this.gameDataService.getRace(raceName);
        if (!race) return null;

        // 检查亚种的技能选择
        if (subraceName) {
            const subrace = this.gameDataService.getSubrace(raceName, subraceName);
            if (subrace?.skillChoices) {
                return {
                    count: subrace.skillChoices.count,
                    from: subrace.skillChoices.from.map(skill => this.getSkillId(skill))
                };
            }
        }

        // 检查种族的技能选择
        if (race.skillChoices) {
            return {
                count: race.skillChoices.count,
                from: race.skillChoices.from.map(skill => this.getSkillId(skill))
            };
        }

        return null;
    }

    /**
     * 获取技能数据，优先使用本地数据，如果不存在则回退到 GameDataService
     */
    public getSkillData(skillName: string): { ability: string; description: string } | null {
        // 先尝试从本地数据获取
        const localSkillData = this.proficienciesData?.skills[skillName];
        if (localSkillData) {
            return {
                ability: localSkillData.ability,
                description: localSkillData.description
            };
        }

        // 从技能描述中解析能力值和描述
        const description = this.gameDataService.getSkillDescription(skillName);
        if (description) {
            // 从描述中提取能力值，描述格式通常是"力量（运动）检定..."这样的格式
            const abilityMatch = description.match(/^(\w+)（/);
            return {
                ability: abilityMatch ? abilityMatch[1] : '',
                description: description
            };
        }

        return null;
    }

    /**
     * 获取所有预设的技能熟练项
     */
    public getAllPresetSkills(character: Character): PresetSkillProficiency[] {
        console.log('Getting all preset proficiencies for character:', character);
        const presetSkills: PresetSkillProficiency[] = [];

        // 从背景获取技能
        if (character.background) {
            console.log('Getting background proficiencies for:', character.background);
            const background = this.gameDataService.getBackground(character.background.id);
            console.log('Background data:', background);
            if (background?.['skill proficiencies']) {
                const skills = background['skill proficiencies']
                    .filter((prof: ProficiencyReference) => prof.type === 'skill')
                    .map((prof: ProficiencyReference) => ({
                        id: prof.id,
                        source: 'background' as const,
                        sourceName: background.name
                    }));
                presetSkills.push(...skills);
            }
        }

        // 从种族获取技能
        if (character.race) {
            const race = this.gameDataService.getRace(character.race.name);
            if (race?.['skill proficiencies']) {
                const skills = race['skill proficiencies']
                    .filter((prof: ProficiencyReference) => prof.type === 'skill')
                    .map((prof: ProficiencyReference) => ({
                        id: prof.id,
                        source: 'race' as const,
                        sourceName: race.displayName
                    }));
                presetSkills.push(...skills);
            }

            // 从亚种获取技能
            if (character.subrace) {
                const subrace = this.gameDataService.getSubrace(character.race.name, character.subrace.name);
                if (subrace?.['skill proficiencies']) {
                    const skills = subrace['skill proficiencies']
                        .filter((prof: ProficiencyReference) => prof.type === 'skill')
                        .map((prof: ProficiencyReference) => ({
                            id: prof.id,
                            source: 'subrace' as const,
                            sourceName: subrace.displayName
                        }));
                    presetSkills.push(...skills);
                }
            }
        }

        return presetSkills;
    }

    // 统一的技能翻译表
    readonly SKILL_TRANSLATIONS: Record<string, string> = {
        'acrobatics': '杂技',
        'animal-handling': '驯兽',
        'animal_handling': '驯兽',
        'arcana': '奥秘',
        'athletics': '运动',
        'deception': '欺瞒',
        'history': '历史',
        'insight': '洞悉',
        'intimidation': '威吓',
        'investigation': '调查',
        'medicine': '医疗',
        'nature': '自然',
        'perception': '察觉',
        'performance': '表演',
        'persuasion': '说服',
        'religion': '宗教',
        'sleight-of-hand': '巧手',
        'sleight_of_hand': '巧手',
        'stealth': '隐匿',
        'survival': '生存'
    };

    readonly SKILL_NAME_TO_ID: Record<string, string>;
}
