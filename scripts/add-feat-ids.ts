import * as fs from 'fs';
import * as path from 'path';

const FEATS_FILE = path.join(__dirname, '../public/data/feats/feats.json');

// 从displayName提取英文名生成id
function generateFeatId(displayName: string): string {
    console.log(`Processing feat: ${displayName}`);
    const match = displayName.match(/\(([^)]+)\)/);
    if (!match) {
        throw new Error(`Invalid feat displayName format: ${displayName}`);
    }
    const id = `feat.${match[1].toLowerCase()}`;
    console.log(`Generated ID: ${id}`);
    return id;
}

try {
    console.log(`Reading feats from: ${FEATS_FILE}`);
    const featsData = JSON.parse(fs.readFileSync(FEATS_FILE, 'utf-8'));
    
    console.log(`Found ${featsData.feats.length} feats`);
    const updatedFeats = featsData.feats.map((feat: any) => {
        console.log(`\nProcessing: ${feat.displayName}`);
        return {
            id: generateFeatId(feat.displayName),
            ...feat
        };
    });

    console.log('\nWriting updated feats back to file...');
    fs.writeFileSync(
        FEATS_FILE,
        JSON.stringify({ feats: updatedFeats }, null, 2),
        'utf-8'
    );

    console.log('Successfully added IDs to all feats!');
} catch (error) {
    console.error('Error processing feats:', error);
    process.exit(1);
}
