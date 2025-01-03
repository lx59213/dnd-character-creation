import * as fs from 'fs';
import * as path from 'path';

function extractHandlesFromTxt(filePath: string): Set<string> {
    const handles = new Set<string>();
    
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const lines = fileContent.split('\n');
        
        // 正则表达式匹配 handle ID 格式
        const handlePattern = /h[0-9a-f]{8}g[0-9a-f]{4}g[0-9a-f]{4}g[0-9a-f]{4}g[0-9a-f]{12}/g;
        
        // 角色创建相关的关键词
        const relevantKeywords = [
            'DisplayName',
            'Description',
            'ExtraDescription',
            'ShortDescription',
            'Requirements',
            'Properties',
            'Effects',
            'Stats',
            'Modifiers',
            'Conditions'
        ];
        
        for (const line of lines) {
            // 只检查包含相关关键词的行
            if (relevantKeywords.some(keyword => line.includes(keyword))) {
                const matches = line.match(handlePattern);
                if (matches) {
                    matches.forEach(handle => handles.add(handle));
                }
            }
        }
        
        console.log(`Found ${handles.size} handles in ${path.basename(filePath)}`);
        return handles;
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        return handles;
    }
}

function extractHandlesFromContent(content: string): Set<string> {
    const handles = new Set<string>();

    // 提取常规的 handle 格式
    const handleRegex = /handle\s*"([^"]+)"/g;
    let match;
    while ((match = handleRegex.exec(content)) !== null) {
        handles.add(match[1]);
    }

    // 提取 LSString 类型的属性
    const lsStringRegex = /value\s*=\s*"([^"]+)"/g;
    while ((match = lsStringRegex.exec(content)) !== null) {
        const values = match[1].split(';');
        for (const value of values) {
            if (value.startsWith('Target_') || 
                value.startsWith('Shout_') || 
                value.startsWith('Projectile_') || 
                value.startsWith('Zone_') || 
                value.startsWith('Rush_') || 
                value.startsWith('Throw_')) {
                handles.add('h' + value);
            }
        }
    }

    return handles;
}

// 主函数
async function main() {
    // 首先读取现有的handles
    let existingHandles = new Set<string>();
    const handlesPath = path.join(__dirname, '../data/handles.json');
    if (fs.existsSync(handlesPath)) {
        const existingData = JSON.parse(fs.readFileSync(handlesPath, 'utf8'));
        existingHandles = new Set(existingData);
    }

    const allLsxFiles = [
        // dnd-character-creation 目录下的文件
        path.join(__dirname, '../Lists/AbilityLists.lsx'),
        path.join(__dirname, '../Lists/EquipmentLists.lsx'),
        path.join(__dirname, '../Lists/PassiveLists.lsx'),
        path.join(__dirname, '../Lists/SkillLists.lsx'),
        path.join(__dirname, '../Lists/SpellLists.lsx'),
        path.join(__dirname, '../ClassDescriptions/ClassDescriptions.lsx'),
        path.join(__dirname, '../Races/Races.lsx'),
        path.join(__dirname, '../Feats/FeatDescriptions.lsx'),
        path.join(__dirname, '../DefaultValues/Abilities.lsx'),
        path.join(__dirname, '../DefaultValues/Equipments.lsx'),
        path.join(__dirname, '../DefaultValues/Feats.lsx'),
        path.join(__dirname, '../DefaultValues/Passives.lsx'),
        path.join(__dirname, '../DefaultValues/PreparedSpells.lsx'),
        path.join(__dirname, '../DefaultValues/Skills.lsx'),
        path.join(__dirname, '../DefaultValues/Spells.lsx'),
        path.join(__dirname, '../DifficultyClasses/DifficultyClasses.lsx'),
        path.join(__dirname, '../Levelmaps/ExperienceRewards.lsx'),
        path.join(__dirname, '../Levelmaps/GoldValues.lsx'),
        path.join(__dirname, '../Levelmaps/LevelMapValues.lsx'),
        path.join(__dirname, '../Levelmaps/LongRestCosts.lsx'),
        path.join(__dirname, '../public/progression/shared/Backgrounds.lsx'),
        path.join(__dirname, '../public/progression/shared/ProgressionDescriptions.lsx'),
        path.join(__dirname, '../public/progression/shared/Progressions.lsx'),
        // dnd_reference 目录下的文件
        path.join(__dirname, '../../dnd_reference/ActionResourceDefinitions/ActionResourceDefinitions.lsx'),
        path.join(__dirname, '../../dnd_reference/ActionResourceGroupDefinitions/ActionResourceGroupDefinitions.lsx'),
        path.join(__dirname, '../../dnd_reference/CharacterCreationPresets/CharacterCreationPresets.lsx'),
        path.join(__dirname, '../../dnd_reference/EquipmentTypes/EquipmentTypes.lsx'),
        path.join(__dirname, '../../dnd_reference/Factions/Factions.lsx'),
        path.join(__dirname, '../../dnd_reference/Gods/Gods.lsx'),
        path.join(__dirname, '../../dnd_reference/ItemThrowParams/ItemThrowParams.lsx'),
        path.join(__dirname, '../../dnd_reference/WeightCategories/WeightCategories.lsx')
    ];

    // 处理所有LSX文件
    for (const file of allLsxFiles) {
        if (!fs.existsSync(file)) {
            console.error(`File not found: ${file}`);
            continue;
        }
        const content = fs.readFileSync(file, 'utf8');
        const handles = extractHandlesFromContent(content);
        console.log(`Found ${handles.size} handles in ${path.basename(file)}`);
        handles.forEach(h => existingHandles.add(h));
    }

    const allTxtFiles = [
        // dnd_reference 目录下的文件
        path.join(__dirname, '../../dnd_reference/spells/Spell_Projectile.txt'),
        path.join(__dirname, '../../dnd_reference/spells/Spell_ProjectileStrike.txt'),
        path.join(__dirname, '../../dnd_reference/spells/Spell_Rush.txt'),
        path.join(__dirname, '../../dnd_reference/spells/Spell_Shout.txt'),
        path.join(__dirname, '../../dnd_reference/spells/Spell_Target.txt'),
        path.join(__dirname, '../../dnd_reference/spells/Spell_Teleportation.txt'),
        path.join(__dirname, '../../dnd_reference/spells/Spell_Throw.txt'),
        path.join(__dirname, '../../dnd_reference/spells/Spell_Zone.txt')
    ];

    for (const file of allTxtFiles) {
        if (!fs.existsSync(file)) {
            console.error(`File not found: ${file}`);
            continue;
        }
        const handles = extractHandlesFromTxt(file);
        console.log(`Found ${handles.size} handles in ${path.basename(file)}`);
        handles.forEach(h => existingHandles.add(h));
    }

    // 处理每个目录
    const sourceDirectories = [
        path.join(__dirname, '../public/progression/shared'),
        path.join(__dirname, '../../dnd_reference/spells'),
        path.join(__dirname, '../../dnd_reference/core')
    ];

    for (const dir of sourceDirectories) {
        if (!fs.existsSync(dir)) {
            console.error(`Directory not found: ${dir}`);
            continue;
        }
        
        // 读取目录中的所有文件
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            
            // 只处理 txt 和 lsx 文件
            if (file.endsWith('.txt') || file.endsWith('.lsx')) {
                if (file.endsWith('.txt')) {
                    const handles = extractHandlesFromTxt(filePath);
                    handles.forEach(h => existingHandles.add(h));
                } else {
                    const content = fs.readFileSync(filePath, 'utf8');
                    const handles = extractHandlesFromContent(content);
                    console.log(`Found ${handles.size} handles in ${path.basename(file)}`);
                    handles.forEach(h => existingHandles.add(h));
                }
            }
        }
    }

    // 保存更新后的handles
    fs.writeFileSync(handlesPath, JSON.stringify(Array.from(existingHandles), null, 2));
    console.log(`Saved ${existingHandles.size} handles to ${handlesPath}`);
}

main().catch(console.error);
