import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs';
import * as path from 'path';

interface Attribute {
    id: string;
    type: string;
    handle: string;
    value: string;
}

interface Node {
    attribute?: Attribute | Attribute[];
    children?: {
        node?: Node | Node[];
    };
}

interface XMLData {
    save?: {
        region?: {
            node?: Node | Node[];
        };
    };
}

function extractHandlesFromFile(filePath: string): Set<string> {
    const handles = new Set<string>();
    
    try {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '',
            textNodeName: '_text'
        });
        
        const data = parser.parse(fileContent) as XMLData;
        
        // 获取所有节点
        let nodes = data?.save?.region?.node;
        if (!nodes) return handles;
        
        if (!Array.isArray(nodes)) {
            nodes = [nodes];
        }
        
        // 递归遍历所有节点
        function processNode(node: Node) {
            if (node.attribute) {
                const attributes = Array.isArray(node.attribute) ? node.attribute : [node.attribute];
                attributes.forEach(attr => {
                    if (attr.type === 'TranslatedString' && attr.handle) {
                        handles.add(attr.handle);
                    }
                });
            }
            
            if (node.children?.node) {
                const childNodes = Array.isArray(node.children.node) ? node.children.node : [node.children.node];
                childNodes.forEach(processNode);
            }
        }
        
        nodes.forEach(processNode);
        console.log(`Found ${handles.size} handles in ${path.basename(filePath)}`);
        return handles;
        
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
        return handles;
    }
}

// 主函数
async function main() {
    const sourceFiles = [
        // Core Character Creation Files
        path.join(__dirname, '../public/progression/shared/ProgressionDescriptions.lsx'),
        path.join(__dirname, '../public/progression/shared/Backgrounds.lsx'),
        
        // Equipment and Abilities
        path.join(__dirname, '../../dnd_reference/Lists/EquipmentLists.lsx'),
        path.join(__dirname, '../../dnd_reference/Lists/AbilityLists.lsx'),
        path.join(__dirname, '../../dnd_reference/Lists/SkillLists.lsx'),
        path.join(__dirname, '../../dnd_reference/Lists/PassiveLists.lsx'),
        path.join(__dirname, '../../dnd_reference/Lists/SpellLists.lsx'),
        
        // Class and Race Specific
        path.join(__dirname, '../../dnd_reference/ClassDescriptions/ClassDescriptions.lsx'),
        path.join(__dirname, '../../dnd_reference/Races/Races.lsx'),
        path.join(__dirname, '../../dnd_reference/Feats/FeatDescriptions.lsx'),
        
        // Character Creation
        path.join(__dirname, '../../dnd_reference/CharacterCreation/CharacterCreationAccessorySets.lsx'),
        path.join(__dirname, '../../dnd_reference/CharacterCreation/CharacterCreationAppearanceMaterials.lsx'),
        path.join(__dirname, '../../dnd_reference/CharacterCreation/CharacterCreationAppearanceVisuals.lsx'),
        path.join(__dirname, '../../dnd_reference/CharacterCreation/CharacterCreationEquipmentIcons.lsx'),
        path.join(__dirname, '../../dnd_reference/CharacterCreation/CharacterCreationIconSettings.lsx'),
        path.join(__dirname, '../../dnd_reference/CharacterCreation/CharacterCreationPassiveAppearances.lsx'),
        path.join(__dirname, '../../dnd_reference/CharacterCreation/CharacterCreationSharedVisuals.lsx'),
        
        // Additional Data
        path.join(__dirname, '../../dnd_reference/EquipmentTypes/EquipmentTypes.lsx'),
        path.join(__dirname, '../../dnd_reference/WeightCategories/WeightCategories.lsx'),
    ];
    
    // 创建输出目录
    const outputDir = path.join(__dirname, '../data');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // 从所有文件中提取 handles
    const allHandles = new Set<string>();
    for (const file of sourceFiles) {
        if (!fs.existsSync(file)) {
            console.error(`Source file not found: ${file}`);
            continue;
        }
        
        const handles = extractHandlesFromFile(file);
        handles.forEach(h => allHandles.add(h));
    }
    
    // 保存所有 handles
    const outputPath = path.join(outputDir, 'handles.json');
    fs.writeFileSync(outputPath, JSON.stringify(Array.from(allHandles), null, 2));
    console.log(`Saved ${allHandles.size} handles to ${outputPath}`);
}

main().catch(console.error);
