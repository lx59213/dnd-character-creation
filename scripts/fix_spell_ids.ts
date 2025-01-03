const fs = require('fs');
const path = require('path');

interface Spell {
    id: string;
    name: string;
    english_name: string;
    level: number;
}

interface SpellData {
    spells: Spell[];
}

interface ClassSpellList {
    [level: string]: Array<{ name: string; id: string }>;
}

interface ClassSpells {
    [className: string]: ClassSpellList;
}

// 规范化字符串以便比较
function normalizeString(str: string): string {
    return str.toLowerCase()
        .replace(/['']/g, "'")
        .replace(/[^a-z0-9]/g, '')
        .trim();
}

// 从法术ID中提取名称
function getNameFromId(id: string): string {
    // spell.6.FreezingSphere -> FreezingSphere
    const match = id.match(/spell\.\d+\.(.+)/);
    return match ? match[1] : '';
}

function buildSpellMap(spells: Spell[]): Map<string, Spell> {
    const spellMap = new Map<string, Spell>();
    for (const spell of spells) {
        // 使用各种可能的键来匹配
        const normalizedName = normalizeString(spell.name);
        const normalizedEngName = normalizeString(spell.english_name);
        const normalizedIdName = normalizeString(getNameFromId(spell.id));

        spellMap.set(`${normalizedName}_${spell.level}`, spell);
        spellMap.set(`${normalizedEngName}_${spell.level}`, spell);
        spellMap.set(`${normalizedIdName}_${spell.level}`, spell);
    }
    return spellMap;
}

function findMatchingSpell(spell: { name: string; id: string }, level: string, spellMap: Map<string, Spell>): Spell | undefined {
    const normalizedName = normalizeString(spell.name);
    const normalizedIdName = normalizeString(getNameFromId(spell.id));
    
    // 尝试各种可能的匹配
    return spellMap.get(`${normalizedName}_${level}`) ||
           spellMap.get(`${normalizedIdName}_${level}`);
}

function fixSpellIds() {
    try {
        // 读取文件
        const spellsPath = path.join(__dirname, '../public/data/spells/0-9spells.json');
        const classSpellsPath = path.join(__dirname, '../public/data/spells/class_spells_with_ids.json');

        console.log('读取文件中...');
        console.log('法术文件路径:', spellsPath);
        console.log('职业法术文件路径:', classSpellsPath);

        const spellsData = JSON.parse(fs.readFileSync(spellsPath, 'utf8')) as SpellData;
        const classSpellsData = JSON.parse(fs.readFileSync(classSpellsPath, 'utf8')) as ClassSpells;

        console.log('文件读取完成');
        console.log(`发现 ${spellsData.spells.length} 个法术`);

        // 建立法术映射
        const spellMap = buildSpellMap(spellsData.spells);
        console.log(`建立了 ${spellMap.size} 个法术映射`);

        // 记录修改
        const changes: { old: string; new: string; name: string }[] = [];

        // 修复每个职业的法术ID
        for (const className of Object.keys(classSpellsData)) {
            const classSpells = classSpellsData[className];
            console.log(`\n处理 ${className} 的法术列表...`);
            
            for (const level of Object.keys(classSpells)) {
                const spellList = classSpells[level];
                console.log(`- ${level} 环法术: ${spellList.length} 个`);
                
                for (const spell of spellList) {
                    const correctSpell = findMatchingSpell(spell, level, spellMap);

                    if (correctSpell && correctSpell.id !== spell.id) {
                        changes.push({ 
                            old: spell.id, 
                            new: correctSpell.id,
                            name: spell.name
                        });
                        spell.id = correctSpell.id;
                        console.log(`  修正: ${spell.name}`);
                        console.log(`    从: ${changes[changes.length-1].old}`);
                        console.log(`    到: ${changes[changes.length-1].new}`);
                    }
                }
            }
        }

        // 写回修改后的数据
        fs.writeFileSync(classSpellsPath, JSON.stringify(classSpellsData, null, 2), 'utf8');

        // 输出修改日志
        console.log('\n修改完成！总共修正了 ' + changes.length + ' 个法术ID');
        if (changes.length > 0) {
            console.log('修改详情：');
            changes.forEach(change => {
                console.log(`${change.name}:`);
                console.log(`  从: ${change.old}`);
                console.log(`  到: ${change.new}`);
            });
        }
    } catch (error) {
        console.error('发生错误:', error);
    }
}

// 运行修复
fixSpellIds();
