const fs = require('fs');
const path = require('path');

function loadJsonFile(filePath) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function extractProficiencies(classDir) {
    const proficiencies = {
        armor: new Set(),
        weapons: new Set(),
        tools: new Set(),
        savingThrows: new Set(),
        multiclass_armor: new Set(),
        multiclass_weapons: new Set(),
        multiclass_tools: new Set()
    };
    
    // 遍历所有职业文件
    const files = fs.readdirSync(classDir);
    for (const filename of files) {
        if (filename.endsWith('.json')) {
            const filePath = path.join(classDir, filename);
            const classData = loadJsonFile(filePath);
            
            // 提取Other proficiencies部分
            if (classData['Other proficiencies']) {
                const profData = classData['Other proficiencies'];
                
                // 提取各类熟练项
                ['armor', 'weapons', 'tools', 'savingThrows'].forEach(category => {
                    if (profData[category]) {
                        profData[category].forEach(item => {
                            if (item.id) {
                                proficiencies[category].add(item.id);
                            }
                        });
                    }
                });
            }
            
            // 检查多重职业部分
            if (classData.multiclassing && classData.multiclassing['Other proficiencies']) {
                const profData = classData.multiclassing['Other proficiencies'];
                ['armor', 'weapons', 'tools'].forEach(category => {
                    if (profData[category]) {
                        profData[category].forEach(item => {
                            if (item.id) {
                                proficiencies[`multiclass_${category}`].add(item.id);
                            }
                        });
                    }
                });
            }
        }
    }
    
    return proficiencies;
}

function analyzeProficiencyFiles(profDir) {
    const existingProfs = {
        armor: new Set(),
        weapons: new Set(),
        tools: new Set(),
        savingThrows: new Set()
    };
    
    // 分析现有的熟练项文件
    const fileMapping = {
        armor: 'armor_proficiency.json',
        weapons: 'weapon_proficiency.json',
        tools: 'tool_proficiency.json',
        savingThrows: 'savingThrow_proficiency.json'
    };
    
    for (const [category, filename] of Object.entries(fileMapping)) {
        const filePath = path.join(profDir, filename);
        if (fs.existsSync(filePath)) {
            const data = loadJsonFile(filePath);
            existingProfs[category] = new Set(Object.keys(data));
        }
    }
    
    return existingProfs;
}

function main() {
    const baseDir = 'd:/DND_Character_Creation/dnd-character-creation/public/data';
    const classDir = path.join(baseDir, 'Classes');
    const profDir = path.join(baseDir, 'Other proficiency');
    
    // 提取所有职业中的熟练项
    const usedProfs = extractProficiencies(classDir);
    
    // 分析现有熟练项文件
    const existingProfs = analyzeProficiencyFiles(profDir);
    
    // 生成报告
    console.log("=== 熟练项分析报告 ===\n");
    
    ['armor', 'weapons', 'tools', 'savingThrows'].forEach(category => {
        console.log(`\n${category}类熟练项:`);
        console.log("使用的ID:");
        Array.from(usedProfs[category]).sort().forEach(profId => {
            console.log(`  ${profId}`);
        });
        
        if (existingProfs[category]) {
            const missing = new Set(
                Array.from(usedProfs[category]).filter(x => !existingProfs[category].has(x))
            );
            if (missing.size > 0) {
                console.log("\n缺失的ID:");
                Array.from(missing).sort().forEach(profId => {
                    console.log(`  ${profId}`);
                });
            } else {
                console.log("\n✓ 所有使用的ID都已定义");
            }
        }
        
        if (usedProfs[`multiclass_${category}`] && usedProfs[`multiclass_${category}`].size > 0) {
            console.log(`\n多重职业${category}类熟练项:`);
            Array.from(usedProfs[`multiclass_${category}`]).sort().forEach(profId => {
                console.log(`  ${profId}`);
            });
        }
    });
}

main();
