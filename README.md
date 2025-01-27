# D&D角色创建系统 (D&D Character Creation System)

一个基于React的龙与地下城(D&D)角色创建系统，帮助玩家快速创建和管理自己的D&D角色。

## 功能特点

- 🎭 完整的角色创建流程
- 📝 详细的属性设置
- 🎨 直观的用户界面
- 💾 角色数据本地保存
- 🔄 实时属性计算
- 📱 响应式设计，支持多种设备

## 技术栈

- React 18.2.0
- TypeScript 4.9.5
- Material-UI (MUI) 5.11.0
- React Beautiful DND
- Express (用于开发服务器)

## 开始使用

### 系统要求

- Node.js 14.0 或更高版本
- npm 6.0 或更高版本

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/dnd-character-creation.git
cd dnd-character-creation
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm start
```

应用将在 http://localhost:3000 启动

### 构建生产版本
```bash
npm run build
```

## 项目结构

```
dnd-character-creation/
├── src/                # 源代码目录
├── public/            # 静态资源
├── docs/             # 文档
├── scripts/          # 脚本文件
└── build/            # 构建输出目录
```

## 功能模块

1. 角色基础信息
   - 名称、种族、职业设置
   - 背景故事编辑
   
2. 属性系统
   - 六大基础属性计算
   - 技能熟练度设置
   
3. 装备系统
   - 武器装备选择
   - 物品管理
   
4. 法术系统
   - 法术列表
   - 法术位管理

## 贡献指南

我们欢迎所有形式的贡献，包括但不限于：

- 提交问题和建议
- 改进文档
- 提交代码修改
- 添加新功能

请确保在提交Pull Request之前：

1. 更新文档
2. 添加必要的测试
3. 遵循现有的代码风格

## 许可证

本项目采用 ISC 许可证。详见 [LICENSE](LICENSE) 文件。

## 联系方式

如有问题或建议，请通过以下方式联系我们：

- 提交 Issue
- 发送邮件至 [your-email@example.com]

## 致谢

感谢所有为这个项目做出贡献的开发者。

## 更新日志

### 版本 1.0.0
- 初始版本发布
- 完整的角色创建功能
- 基础属性计算系统
- 装备和物品管理
