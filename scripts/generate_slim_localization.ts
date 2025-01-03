import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import * as fs from 'fs';
import * as path from 'path';

interface LocalizedString {
    contentuid: string;
    content: string;
}

function extractLocalizedStrings(xmlPath: string, handles: Set<string>): LocalizedString[] {
    const localizedStrings: LocalizedString[] = [];
    
    try {
        const fileContent = fs.readFileSync(xmlPath, 'utf-8');
        console.log(`Read file ${xmlPath}, size: ${fileContent.length} bytes`);
        
        const parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: '@_',
            textNodeName: '#text',
            preserveOrder: false,
            parseAttributeValue: false,
            trimValues: true
        });
        
        const data = parser.parse(fileContent);
        
        if (!data.contentList || !data.contentList.content) {
            console.error('Invalid XML structure - missing contentList or content');
            return localizedStrings;
        }
        
        // 确保content是数组
        const contents = Array.isArray(data.contentList.content) 
            ? data.contentList.content 
            : [data.contentList.content];
        
        console.log(`Processing ${contents.length} content nodes`);
        
        // 用于调试的计数器
        let matchCount = 0;
        let processedCount = 0;
        
        contents.forEach((node: any) => {
            processedCount++;
            if (node['@_contentuid'] && node['#text'] && handles.has(node['@_contentuid'])) {
                matchCount++;
                localizedStrings.push({
                    contentuid: node['@_contentuid'],
                    content: node['#text']
                });
                
                // 每1000个匹配输出一次进度
                if (matchCount % 1000 === 0) {
                    console.log(`Found ${matchCount} matches so far...`);
                }
            }
            
            // 每10000个处理输出一次进度
            if (processedCount % 10000 === 0) {
                console.log(`Processed ${processedCount} nodes...`);
            }
        });
        
        console.log(`Found ${localizedStrings.length} matching strings in ${path.basename(xmlPath)}`);
        if (localizedStrings.length > 0) {
            console.log('Sample match:', JSON.stringify(localizedStrings[0], null, 2));
        }
        
        return localizedStrings;
        
    } catch (error) {
        console.error('Error extracting localized strings:', error);
        if (error instanceof Error) {
            console.error('Error details:', error.message);
            console.error('Stack trace:', error.stack);
        }
        return localizedStrings;
    }
}

function generateSlimXml(strings: LocalizedString[], outputPath: string) {
    try {
        // 创建输出目录
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // 创建XML内容
        let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>\n<contentList>\n';
        
        // 按contentuid排序以保持一致性
        strings.sort((a, b) => a.contentuid.localeCompare(b.contentuid));
        
        // 添加每个本地化字符串
        strings.forEach(str => {
            const escapedContent = str.content
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&apos;');
            xmlContent += `  <content contentuid="${str.contentuid}" value="${escapedContent}"/>\n`;
        });
        
        xmlContent += '</contentList>';
        
        // 保存文件
        fs.writeFileSync(outputPath, xmlContent, 'utf-8');
        console.log(`Generated slim XML file: ${outputPath} with ${strings.length} entries`);
        
    } catch (error) {
        console.error('Error generating slim XML:', error);
        if (error instanceof Error) {
            console.error('Error details:', error.message);
            console.error('Stack trace:', error.stack);
        }
    }
}

// 主函数
async function main() {
    try {
        // 读取 handles
        const handlesPath = path.join(__dirname, '../data/handles.json');
        const handles = new Set<string>(JSON.parse(fs.readFileSync(handlesPath, 'utf8')));
        console.log(`Loaded ${handles.size} handles from handles.json`);
        
        // 输出一些handles示例
        console.log('Sample handles:', Array.from(handles).slice(0, 5));

        // 处理英文本地化
        console.log('Processing English localization...');
        const englishXmlPath = path.join(__dirname, '../../dnd_reference/Localization/English/english.xml');
        const englishMatches = extractLocalizedStrings(englishXmlPath, handles);

        // 生成英文 slim XML
        const englishSlimPath = path.join(__dirname, '../public/Localization/English_slim.xml');
        generateSlimXml(englishMatches, englishSlimPath);

        // 处理中文本地化
        console.log('Processing Chinese localization...');
        const chineseXmlPath = path.join(__dirname, '../../dnd_reference/Localization/Chinese/chinese.xml');
        const chineseMatches = extractLocalizedStrings(chineseXmlPath, handles);

        // 生成中文 slim XML
        const chineseSlimPath = path.join(__dirname, '../public/Localization/Chinese_slim.xml');
        generateSlimXml(chineseMatches, chineseSlimPath);

        console.log('Localization processing completed successfully');
    } catch (error) {
        console.error('Error in main process:', error);
        if (error instanceof Error) {
            console.error('Error details:', error.message);
            console.error('Stack trace:', error.stack);
        }
        process.exit(1);
    }
}

main();
