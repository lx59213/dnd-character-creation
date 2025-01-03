// 专长的类型定义
export type FeatId = `feat.${string}`;

// 重命名为GameFeat以避免冲突
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

// 专长选择的状态
export interface FeatSelection {
    level: number;
    featId: FeatId;
}

// 用于验证专长ID
export function isFeatId(id: string): id is FeatId {
    return id.startsWith('feat.');
}

// 从displayName获取featId
export function getFeatId(displayName: string): FeatId {
    // 暂时保持向后兼容，将displayName转换为id
    // 例如："警觉 (Alert)" -> "feat.alert"
    const match = displayName.match(/\(([^)]+)\)/);
    if (match) {
        return `feat.${match[1].toLowerCase()}` as FeatId;
    }
    throw new Error(`Invalid feat displayName: ${displayName}`);
}
