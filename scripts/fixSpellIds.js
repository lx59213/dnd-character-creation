const fs = require('fs');
const path = require('path');

// 将第一个字符转为大写
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// 将驼峰式字符串转换为首字母大写的驼峰式
function toPascalCase(str) {
    // 先按照非字母数字字符分割
    return str.split(/[^a-zA-Z0-9]/)
        // 对每个部分的首字母大写
        .map(word => capitalizeFirstLetter(word))
        // 重新组合
        .join('');
}

// 修复法术ID
function fixSpellIds() {
    const filePath = path.join(__dirname, '../public/data/spells/class_spells_with_ids.json');
    
    // 读取文件
    console.log('Reading file:', filePath);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // 遍历所有职业
    for (const className in data) {
        console.log(`Processing class: ${className}`);
        
        // 遍历每个环位的法术
        for (const level in data[className]) {
            const spells = data[className][level];
            
            // 遍历该环位的所有法术
            spells.forEach(spell => {
                // 分解法术ID
                const [prefix, level, name] = spell.id.split('.');
                // 将最后一部分转换为大驼峰格式
                spell.id = `${prefix}.${level}.${toPascalCase(name)}`;
            });
        }
    }
    
    // 写回文件
    console.log('Writing updated data back to file...');
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log('Done!');
}

// 执行修复
fixSpellIds();
