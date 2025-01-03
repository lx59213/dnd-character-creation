const fs = require('fs');
const path = require('path');

// 文件路径
const classSpellsPath = path.join(__dirname, '../public/data/spells/class_spells.json');

// 读取文件
const classSpells = JSON.parse(fs.readFileSync(classSpellsPath, 'utf8'));

// 转换为驼峰命名
function toCamelCase(str) {
    return str.split(' ')
        .map((word, index) => {
            // 如果是第一个词，首字母小写
            if (index === 0) {
                return word.toLowerCase();
            }
            // 其他词首字母大写
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// 处理法术名称，提取英文名并生成ID
function processSpellName(spellName, level) {
    // 分割中英文名
    const match = spellName.match(/(.*?)\s+([A-Za-z\s]+)$/);
    if (!match) {
        console.warn(`警告: 无法解析法术名称 "${spellName}"`);
        return null;
    }
    
    // 获取英文名并处理为驼峰格式
    const englishName = toCamelCase(match[2].trim());
    
    // 生成ID
    return {
        name: spellName,
        id: `spell.${level}.${englishName}`
    };
}

// 处理每个职业的法术列表
const processedSpells = {};
Object.entries(classSpells).forEach(([className, spellsByLevel]) => {
    processedSpells[className] = {};
    
    // 处理每个环位的法术
    Object.entries(spellsByLevel).forEach(([level, spells]) => {
        processedSpells[className][level] = spells.map(spell => {
            const processed = processSpellName(spell, level);
            if (!processed) return spell; // 如果处理失败，保持原样
            return {
                name: processed.name,
                id: processed.id
            };
        });
    });
});

// 保存处理后的文件
const outputPath = path.join(__dirname, '../public/data/spells/class_spells_with_ids.json');
fs.writeFileSync(outputPath, JSON.stringify(processedSpells, null, 2), 'utf8');

console.log('处理完成！新文件已保存为: class_spells_with_ids.json');
