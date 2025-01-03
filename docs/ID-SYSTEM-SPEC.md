# D&D Character Creation ID System Specification v1.0

## 核心原则

1. **唯一性**: 每个游戏实体必须有全局唯一的标识符
2. **可读性**: ID 应当具有自描述性，便于开发和调试
3. **一致性**: 相同类型的实体应当使用相同的 ID 格式
4. **可扩展性**: ID 系统应当能够轻松支持新的实体类型
5. **向后兼容**: ID 一旦确定，不应随意更改

## ID 格式规范

### 基本格式
```
[实体类型].[实体名称]
```

### 命名规则

1. **实体类型**:
   - 全小写
   - 使用单数形式
   - 仅使用字母
   - 例如: feat, skill, spell, item

2. **实体名称**:
   - 全小写
   - 使用连字符(-)分隔单词
   - 仅使用字母、数字和连字符
   - 例如: alert, spell-sniper, shield-master

### 示例
```
feat.alert            // 警觉专长
skill.acrobatics      // 特技技能
spell.magic-missile   // 魔法飞弹法术
item.longsword        // 长剑物品
class.fighter         // 战士职业
feature.action-surge  // 动作涌现特性
```

## 实体类型清单

1. **feat**: 专长
2. **skill**: 技能
3. **spell**: 法术
4. **item**: 物品
5. **class**: 职业
6. **feature**: 职业特性
7. **race**: 种族
8. **background**: 背景

## 数据结构

```typescript
interface GameEntity {
  id: string;           // 实体ID
  type: string;         // 实体类型
  displayName: string;  // 显示名称
  description: string;  // 描述文本
  // ... 其他属性
}
```

## 使用规范

1. **ID引用**:
   ```typescript
   // 正确
   character.addFeat('feat.alert');
   
   // 错误
   character.addFeat('警觉');
   ```

2. **显示名称**:
   ```typescript
   // 正确
   getDisplayName('feat.alert'); // 返回 "警觉 (Alert)"
   
   // 错误
   directlyUseId('feat.alert');
   ```

3. **数据存储**:
   ```typescript
   // 正确
   characterData.feats = ['feat.alert', 'feat.tough'];
   
   // 错误
   characterData.feats = ['警觉', '强韧'];
   ```

## 迁移指南

1. **现有数据迁移**:
   - 创建ID映射表
   - 更新所有相关文件
   - 验证数据完整性

2. **新增实体**:
   - 遵循ID命名规范
   - 在相应类型清单中登记
   - 更新类型定义

## 注意事项

1. ID一旦发布，不得更改
2. 删除实体时，其ID应当保留一定时间，以便向后兼容
3. 添加新实体类型时，需要更新本文档
4. 定期检查ID使用情况，确保符合规范

## 工具支持

1. **ID生成器**: 自动生成符合规范的ID
2. **ID验证器**: 检查ID是否符合规范
3. **迁移工具**: 协助数据迁移
4. **类型检查**: TypeScript类型定义支持
