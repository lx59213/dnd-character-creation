# 属性值系统重构计划

## 1. 当前问题分析

### 1.1 状态管理分散
- 属性值计算逻辑分散在多个组件中
- 缺乏统一的状态更新流程
- ASI的临时状态和最终状态没有明确区分

### 1.2 更新时机混乱
- 种族/亚种更改时直接重置finalAbilityScores
- ASI选择立即生效，没有确认机制
- 各组件独立触发更新，可能造成冲突

### 1.3 数据流不清晰
- 没有明确的数据流向
- 状态更新路径不统一
- 缺乏中间状态管理

## 2. 重构目标

### 2.1 统一状态管理
- 将所有属性值相关的状态集中在Context中
- 建立清晰的状态更新流程
- 实现属性值的分层管理

### 2.2 明确组件职责
- ASISelection：只负责UI和选择逻辑
- Context：统一管理所有属性值计算
- AbilityScoreAllocation：只处理基础值
- LevelSelection：管理等级和ASI触发

### 2.3 改进用户体验
- 添加ASI选择的确认步骤
- 提供属性值变更的预览
- 实现变更的回退机制

## 3. 具体实现计划

### 3.1 类型系统改进
```typescript
// src/types/character.ts
interface Character {
  // 基础属性
  baseAbilityScores: AbilityScores;
  
  // 种族相关加值
  raceAbilityBonus: Partial<AbilityScores>;
  subraceAbilityBonus: Partial<AbilityScores>;
  
  // ASI相关
  asiSystem: ASISystemState;
  temporaryASI?: Partial<AbilityScores>; // 新增：未确认的ASI
  
  // 最终计算结果
  finalAbilityScores: AbilityScores;
}

interface ASISystemState {
  choices: ASIChoice[];
  confirmedChoices: ASIChoice[]; // 新增：已确认的选择
  availablePoints: number;
}
```

### 3.2 Context改进
```typescript
// src/components/CharacterCreator/context.tsx
interface CharacterContextType {
  // 现有方法
  character: Character;
  updateCharacter: (updates: Partial<Character>) => void;
  
  // 新增方法
  updateBaseAbilityScores: (scores: AbilityScores) => void;
  updateRaceBonus: (bonus: Partial<AbilityScores>) => void;
  updateSubraceBonus: (bonus: Partial<AbilityScores>) => void;
  updateTemporaryASI: (asi: Partial<AbilityScores>) => void;
  confirmASI: () => void;
  calculateFinalScores: () => AbilityScores;
}
```

### 3.3 组件职责调整

#### ASISelection.tsx
```typescript
interface ASISelectionProps {
  onTemporaryChange: (asi: Partial<AbilityScores>) => void;
  onConfirm: () => void;
  temporaryASI?: Partial<AbilityScores>;
  currentScores: AbilityScores;
}
```

#### AbilityScoreAllocation.tsx
```typescript
interface AbilityScoreAllocationProps {
  onScoresChange: (scores: AbilityScores) => void;
  baseScores: AbilityScores;
}
```

### 3.4 实现步骤

1. **Context层改造**
   - 实现新的状态管理方法
   - 添加属性值计算的核心逻辑
   - 实现状态持久化

2. **组件改造**
   - 移除组件内的状态计算逻辑
   - 实现与Context的数据流对接
   - 添加确认机制

3. **数据迁移**
   - 保存现有的属性值数据
   - 迁移到新的数据结构
   - 确保向后兼容

## 4. 测试计划

### 4.1 单元测试
- Context的属性值计算方法
- 各种属性值更新场景
- ASI确认流程

### 4.2 集成测试
- 种族/亚种切换场景
- ASI选择和确认流程
- 属性值计算的正确性

### 4.3 回归测试
- 现有功能的完整性
- 数据迁移的正确性
- 边界条件处理

## 5. 注意事项

1. 保持向后兼容性
2. 确保数据迁移的安全性
3. 添加适当的错误处理
4. 保持代码可维护性
5. 完善文档和注释