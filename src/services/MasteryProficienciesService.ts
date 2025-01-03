import { GameDataService } from './GameDataService';
import { ProficiencyType, Proficiency, ProficiencyData } from '../types/proficiency';
import { Character } from '../types/character';
import { ClassProficiencies } from '../types/Class';
import { OtherProficiencies } from '../types/race';

export class MasteryProficienciesService {
    private static instance: MasteryProficienciesService;
    private gameDataService: GameDataService;
    private proficiencyData: ProficiencyData | null = null;

    private constructor() {
        this.gameDataService = GameDataService.getInstance();
        this.initialize().catch(error => {
            console.error('Failed to initialize MasteryProficienciesService', error);
        });
    }

    private async initialize(): Promise<void> {
        try {
            this.proficiencyData = await this.gameDataService.getProficiencyData();
        } catch (error) {
            console.error('Failed to load mastery proficiencies data', error);
        }
    }

    public static getInstance(): MasteryProficienciesService {
        if (!MasteryProficienciesService.instance) {
            MasteryProficienciesService.instance = new MasteryProficienciesService();
        }
        return MasteryProficienciesService.instance;
    }

    // 从职业获取熟练项
    private getProficienciesFromClass(character: Character, type: keyof ClassProficiencies): string[] {
        const className = character.classes?.[0]?.name;
        if (!className) return [];
        
        const classData = this.gameDataService.getClass(className);
        const proficiencies = classData?.['Other proficiencies'] as ClassProficiencies;
        if (!proficiencies?.[type]) return [];

        return proficiencies[type].map((item: { id: string }) => item.id);
    }

    // 从背景获取熟练项（暂时返回空数组，因为背景文件格式可能不一致）
    private getProficienciesFromBackground(character: Character, type: keyof ClassProficiencies): string[] {
        return [];
    }

    // 从种族获取熟练项
    private getProficienciesFromRace(character: Character, type: keyof OtherProficiencies): string[] {
        const raceName = character.race?.name;
        const subraceName = character.subrace?.name;
        if (!raceName) return [];
        
        // 不区分大小写地获取种族数据
        const raceData = this.gameDataService.getRace(raceName.toLowerCase()) || 
                        this.gameDataService.getRace(raceName.toUpperCase());
        if (!raceData) return [];

        // 获取主种族熟练项
        const raceProficiencies = this.extractProficiencies(raceData['Other proficiencies'], type);

        // 获取亚种熟练项
        let subraceProficiencies: string[] = [];
        if (subraceName && raceData.subraces) {
            const subrace = raceData.subraces.find(sub => 
                sub.name.toLowerCase() === subraceName.toLowerCase());
            if (subrace && subrace['Other proficiencies']) {
                subraceProficiencies = this.extractProficiencies(subrace['Other proficiencies'], type);
            }
        }

        // 合并主种族和亚种的熟练项
        return [...raceProficiencies, ...subraceProficiencies];
    }

    // 获取所有武器熟练项
    public getWeaponProficiencies(character: Character): Proficiency[] {
        if (!this.proficiencyData) return [];
        
        const weaponIds = this.getProficienciesFromClass(character, 'weapons');
        const raceWeaponIds = this.getProficienciesFromRace(character, 'weapons');
        
        return [...weaponIds, ...raceWeaponIds]
            .map(id => this.proficiencyData?.weapons[id])
            .filter((prof): prof is Proficiency => prof !== undefined);
    }

    // 获取所有护甲熟练项
    public getArmorProficiencies(character: Character): Proficiency[] {
        if (!this.proficiencyData) return [];
        
        const armorIds = this.getProficienciesFromClass(character, 'armor');
        const raceArmorIds = this.getProficienciesFromRace(character, 'armor');
        return [...armorIds, ...raceArmorIds]
            .map(id => this.proficiencyData?.armor[id])
            .filter((prof): prof is Proficiency => prof !== undefined);
    }

    // 获取所有工具熟练项
    public getToolProficiencies(character: Character): Proficiency[] {
        if (!this.proficiencyData) return [];
        
        const toolIds = this.getProficienciesFromClass(character, 'tools');
        const raceToolIds = this.getProficienciesFromRace(character, 'tools');
        
        return [...toolIds, ...raceToolIds]
            .map(id => this.proficiencyData?.tools[id])
            .filter((prof): prof is Proficiency => prof !== undefined);
    }

    // 获取所有豁免检定熟练项
    public getsavingThrowProficiencies(character: Character): Proficiency[] {
        if (!this.proficiencyData) return [];
        
        const savingThrowIds = this.getProficienciesFromClass(character, 'savingThrows');
        const raceSavingThrowIds = this.getProficienciesFromRace(character, 'savingThrows');
        
        return [...savingThrowIds, ...raceSavingThrowIds]
            .map(id => this.proficiencyData?.savingThrows[id])
            .filter((prof): prof is Proficiency => prof !== undefined);
    }

    // 获取熟练项的显示名称
    public getProficiencyDisplayName(id: string, type: ProficiencyType): string {
        if (!this.proficiencyData) return id;

        const category = type === 'weapon' ? 'weapons' :
                        type === 'armor' ? 'armor' :
                        type === 'tool' ? 'tools' :
                        type === 'savingThrow' ? 'savingThrows' :
                        type === 'skill' ? 'skills' : null;
                        
        if (!category) return id;
        
        const data = this.proficiencyData[category][id];
        return data?.displayName || id;
    }

    // 调试用：打印当前加载的熟练项数据
    public debugProficiencyData(): void {
        console.log('Current proficiency data:', this.proficiencyData);
    }

    private extractProficiencies(proficiencies: any, type: keyof OtherProficiencies): string[] {
        const typeProfs = proficiencies?.[type];
        if (!typeProfs) return [];
    
        return typeProfs.map((item: { id: string }) => item.id);
    }
}
