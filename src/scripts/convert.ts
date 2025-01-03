import { DataConverter } from './DataConverter';
import * as fs from 'fs-extra';
import * as path from 'path';

async function main() {
    const converter = new DataConverter();
    const outputPath = path.join(__dirname, '../../public/data');
    
    try {
        console.log('Starting data conversion...');
        
        // 首先转换本地化数据
        await converter.convertLocalization();
        const translations = await fs.readJSON(path.join(outputPath, 'translations.json'));
        
        // 转换并更新种族数据
        await converter.convertRaces();
        let racesData = await fs.readJSON(path.join(outputPath, 'races.json'));
        converter.updateWithTranslations(racesData, translations);
        await fs.writeJSON(path.join(outputPath, 'races.json'), racesData, { spaces: 2 });
        
        // 转换并更新职业数据
        await converter.convertClasses();
        let classesData = await fs.readJSON(path.join(outputPath, 'classes.json'));
        converter.updateWithTranslations(classesData, translations);
        await fs.writeJSON(path.join(outputPath, 'classes.json'), classesData, { spaces: 2 });
        
        // 转换并更新背景数据
        await converter.convertBackgrounds();
        let backgroundsData = await fs.readJSON(path.join(outputPath, 'backgrounds.json'));
        converter.updateWithTranslations(backgroundsData, translations);
        await fs.writeJSON(path.join(outputPath, 'backgrounds.json'), backgroundsData, { spaces: 2 });
        
        console.log('Data conversion completed successfully!');
    } catch (error) {
        console.error('Error during conversion:', error);
        process.exit(1);
    }
}

main();
