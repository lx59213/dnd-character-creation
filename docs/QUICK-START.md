# 快速开始指南

## 创建新实体

```bash
# 创建新专长
npm run create-entity feat alert

# 创建新技能
npm run create-entity skill acrobatics
```

## 使用实体

```typescript
// ✓ 正确方式
character.addFeat('feat.alert');

// ✗ 错误方式
character.addFeat('警觉');
character.addFeat('alert');
```

## 验证所有实体

```bash
npm run validate-entities
```
