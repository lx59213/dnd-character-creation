const fs: typeof import('fs') = require('fs');
const path: typeof import('path') = require('path');

export {}; // 使文件成为模块

// 读取文件内容
const spellsFilePath = path.join(__dirname, '../public/data/spells/0-9spells.ts');
let content = fs.readFileSync(spellsFilePath, 'utf8');

// 在 Spell 接口中添加 id 字段
content = content.replace(
  'export interface Spell {',
  'export interface Spell {\n  id: string;'
);

// 在法术数组中为每个法术添加 id
const spellRegex = /{\s*"name":\s*"([^"]+)",\s*"english_name":\s*"([^"]+)",\s*"level":\s*(\d+)/g;
content = content.replace(spellRegex, (match: string, name: string, englishName: string, level: string) => {
  // 移除英文名中的空格和特殊字符，保留字母和数字
  const sanitizedEnglishName = englishName.replace(/[^a-zA-Z0-9]/g, '');
  return `{\n    "id": "spell.${level}.${sanitizedEnglishName}",\n    "name": "${name}",\n    "english_name": "${englishName}",\n    "level": ${level}`;
});

// 保存修改后的文件
fs.writeFileSync(spellsFilePath, content, 'utf8');

console.log('Successfully added IDs to all spells!');
