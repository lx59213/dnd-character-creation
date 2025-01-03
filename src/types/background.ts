import { AbilityName } from './ability';
import { ProficiencyReference } from './proficiency';

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
