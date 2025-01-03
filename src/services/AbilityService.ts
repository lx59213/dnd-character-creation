import { GameDataService } from './GameDataService';
import { AbilityName, AbilityScores } from '../types/character';
import { RaceData, Subrace } from '../types/race';

export const ABILITY_NAMES: AbilityName[] = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
];

export const ABILITY_LABELS: Record<AbilityName, string> = {
    strength: '力量',
    dexterity: '敏捷',
    constitution: '体质',
    intelligence: '智力',
    wisdom: '感知',
    charisma: '魅力'
};

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

export class AbilityService {
    private pointBuyState: PointBuyState = {
        scores: {
            strength: 8,
            dexterity: 8,
            constitution: 8,
            intelligence: 8,
            wisdom: 8,
            charisma: 8
        },
        pointsAvailable: 27
    };

    private standardArrayState: StandardArrayState = {
        availableScores: [15, 14, 13, 12, 10, 8],
        usedScores: new Set()
    };

    private gameData: GameDataService;
    private abilityRules: AbilityRules | null = null;

    constructor(gameData: GameDataService) {
        this.gameData = gameData;
    }

    public async initialize(): Promise<void> {
        await this.initializeRules();
        // 初始化点数购买系统
        ABILITY_NAMES.forEach((ability: AbilityName) => {
            this.pointBuyState.scores[ability] = 8;
        });
    }

    private async initializeRules(): Promise<void> {
        this.abilityRules = await this.gameData.loadAbilityRules();
    }

    // 计算调整值
    public calculateModifier(score: number): number {
        return Math.floor((score - 10) / 2);
    }

    // 应用种族加值
    public applyRacialBonuses(scores: Record<AbilityName, number>, bonuses: Partial<Record<AbilityName, number>>): Record<AbilityName, number> {
        const newScores = { ...scores };
        Object.entries(bonuses).forEach(([ability, bonus]) => {
            if (bonus && newScores[ability as AbilityName] !== undefined) {
                newScores[ability as AbilityName] += bonus;
            }
        });
        return newScores;
    }

    public resetState(): void {
        this.pointBuyState = {
            scores: {
                strength: 8,
                dexterity: 8,
                constitution: 8,
                intelligence: 8,
                wisdom: 8,
                charisma: 8
            },
            pointsAvailable: 27
        };
        
        this.standardArrayState = {
            availableScores: [15, 14, 13, 12, 10, 8],
            usedScores: new Set()
        };
    }

    public getPointBuyState(): { scores: Record<AbilityName, number>; pointsAvailable: number } {
        return {
            scores: { ...this.pointBuyState.scores },
            pointsAvailable: this.pointBuyState.pointsAvailable
        };
    }

    public getStandardArrayState(): StandardArrayState {
        return {
            availableScores: [...this.standardArrayState.availableScores],
            usedScores: new Set(this.standardArrayState.usedScores)
        };
    }

    public calculateRelativeCost(score: number, baseScore: number = 8): number {
        if (score <= 8) return 0;
        if (score <= 13) return score - 8;
        if (score <= 15) return (score - 13) * 2 + 5;
        return 0;
    }

    public buyAbilityScore(ability: AbilityName, newValue: number): void {
        const currentValue = this.pointBuyState.scores[ability];
        const currentCost = this.calculateRelativeCost(currentValue);
        const newCost = this.calculateRelativeCost(newValue);
        const costDifference = newCost - currentCost;

        if (this.pointBuyState.pointsAvailable < costDifference) {
            throw new Error('Not enough points available');
        }

        this.pointBuyState.scores[ability] = newValue;
        this.pointBuyState.pointsAvailable -= costDifference;
    }

    public setStandardArrayValue(ability: AbilityName, value: number): void {
        const oldValue = this.pointBuyState.scores[ability];
        if (oldValue !== 0 && this.standardArrayState.availableScores.includes(oldValue)) {
            this.standardArrayState.usedScores.delete(oldValue);
        }

        this.pointBuyState.scores[ability] = value;
        if (value !== 0) {
            this.standardArrayState.usedScores.add(value);
        }
    }

    public validateAbilityScore(ability: AbilityName, score: number, method: 'pointBuy' | 'standardArray'): string | null {
        if (method === 'pointBuy') {
            if (score < 8 || score > 15) {
                return '点数购买系统中，属性值必须在8-15之间';
            }
            const cost = this.calculateRelativeCost(score) - this.calculateRelativeCost(this.pointBuyState.scores[ability]);
            if (this.pointBuyState.pointsAvailable < cost) {
                return '剩余点数不足';
            }
        } else if (method === 'standardArray') {
            if (!this.standardArrayState.availableScores.includes(score)) {
                return '该值不在标准数组中';
            }
            if (this.standardArrayState.usedScores.has(score)) {
                return '该标准数组值已被使用';
            }
        }
        return null;
    }

    public resetScores(method: 'pointBuy' | 'standardArray'): void {
        this.pointBuyState.pointsAvailable = 27;
        ABILITY_NAMES.forEach((ability: AbilityName) => {
            this.pointBuyState.scores[ability] = 8;
        });
        if (method === 'standardArray') {
            this.standardArrayState.usedScores.clear();
        }
    }

    public getAbilityDescription(ability: AbilityName): string {
        const descriptions: Record<AbilityName, string> = {
            strength: '力量影响近战攻击和伤害掷骰，以及与体力相关的检定。\n\n' +
                     '常见检定：\n' +
                     '• 推开或击倒敌人\n' +
                     '• 举起或推动重物\n' +
                     '• 攀爬和游泳\n' +
                     '• 跳跃和负重行军\n\n' +
                     '相关技能：运动',

            dexterity: '敏捷影响远程攻击、轻型武器攻击、防御等级(AC)和先攻值。\n\n' +
                      '常见检定：\n' +
                      '• 躲避陷阱和法术\n' +
                      '• 开锁和解除陷阱\n' +
                      '• 隐匿和潜行\n' +
                      '• 表演杂技动作\n\n' +
                      '相关技能：特技、巧手、隐匿',

            constitution: '体质决定生命值、耐力和抵抗力。每升1级时，生命值增加量都受体质调整值影响。\n\n' +
                        '常见检定：\n' +
                        '• 抵抗毒素和疾病\n' +
                        '• 忍受极端环境\n' +
                        '• 维持专注法术\n' +
                        '• 进行剧烈运动\n\n' +
                        '特殊：此属性没有关联技能，但影响生命值',

            intelligence: '智力代表学习和推理能力，影响法师施法和知识检定。\n\n' +
                        '常见检定：\n' +
                        '• 回忆重要信息\n' +
                        '• 破译密码和文献\n' +
                        '• 鉴定魔法物品\n' +
                        '• 调查现场线索\n\n' +
                        '相关技能：奥秘、历史、调查、自然、宗教',

            wisdom: '感知表示洞察力和直觉，影响牧师和德鲁伊施法。\n\n' +
                   '常见检定：\n' +
                   '• 察觉隐藏的生物\n' +
                   '• 判断他人意图\n' +
                   '• 追踪生物足迹\n' +
                   '• 照料受伤同伴\n\n' +
                   '相关技能：驯兽、洞悉、医疗、察觉、生存',

            charisma: '魅力决定社交能力和影响力，影响诗人、术士和邪术师施法。\n\n' +
                     '常见检定：\n' +
                     '• 说服或欺骗他人\n' +
                     '• 表演和娱乐\n' +
                     '• 威吓敌人\n' +
                     '• 激励盟友\n\n' +
                     '相关技能：欺瞒、威吓、表演、说服'
        };
        return descriptions[ability];
    }

    // 验证属性值
    public validateScores(scores: Record<AbilityName, number>): boolean {
        return Object.values(scores).every(score => score >= 3 && score <= 20);
    }

    public getAbilityModifier(score: number): number {
        return Math.floor((score - 10) / 2);
    }

    public getProficiencyBonus(level: number): number {
        return Math.floor((level - 1) / 4) + 2;
    }

    public getSkillModifier(abilityScore: number, isProficient: boolean, level: number): number {
        const abilityModifier = this.getAbilityModifier(abilityScore);
        const proficiencyBonus = isProficient ? this.getProficiencyBonus(level) : 0;
        return abilityModifier + proficiencyBonus;
    }

    rollAbilityScores(): Record<AbilityName, number> {
        const rolledScores: Record<AbilityName, number> = {} as Record<AbilityName, number>;
        ABILITY_NAMES.forEach(ability => {
            const rolls = Array(4).fill(0).map(() => Math.floor(Math.random() * 6) + 1);
            rolls.sort((a, b) => b - a);
            rolledScores[ability] = rolls.slice(0, 3).reduce((sum, num) => sum + num, 0);
        });
        return rolledScores;
    }

    calculateFinalAbilityScore(
        ability: AbilityName,
        baseScore: number,
        race: RaceData | null,
        subrace: Subrace | null
    ): number {
        let finalScore = baseScore;

        // 应用种族加值
        if (race?.abilityScoreIncrease) {
            const raceBonus = race.abilityScoreIncrease[ability];
            if (typeof raceBonus === 'number') {
                finalScore += raceBonus;
            }
        }

        // 应用亚种加值
        if (subrace?.abilityScoreIncrease) {
            const subraceBonus = subrace.abilityScoreIncrease[ability];
            if (typeof subraceBonus === 'number') {
                finalScore += subraceBonus;
            }
        }

        return finalScore;
    }
}
