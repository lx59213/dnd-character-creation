import { XMLParser } from 'fast-xml-parser';
import * as fs from 'fs-extra';
import * as path from 'path';

interface XMLAttribute {
    id: string;
    value?: string;
    handle?: string;
    type?: string;
}

interface RaceData {
    id: string;
    name: string;
    displayName: string;
    description: string;
    features: Feature[];
    abilityBoosts: Record<string, number>;
    translationKeys?: {
        displayName: string;
        description: string;
    }
}

interface Feature {
    id: string;
    name: string;
    description: string;
    translationKeys?: {
        description: string;
    }
}

interface ClassData {
    id: string;
    name: string;
    displayName: string;
    description: string;
    features: Feature[];
    proficiencies: string[];
    translationKeys?: {
        displayName: string;
        description: string;
    }
}

interface BackgroundData {
    id: string;
    name: string;
    displayName: string;
    description: string;
    features: Feature[];
    proficiencies: string[];
    translationKeys?: {
        displayName: string;
        description: string;
    }
}

export class DataConverter {
    private parser: XMLParser;
    private readonly sourcePath: string;
    private readonly outputPath: string;

    constructor() {
        this.parser = new XMLParser({
            ignoreAttributes: false,
            attributeNamePrefix: "",
            textNodeName: "text",
            parseAttributeValue: true
        });
        this.sourcePath = path.join(__dirname, '../../public');
        this.outputPath = path.join(__dirname, '../../public/data');
    }

    private async ensureOutputDirectory(): Promise<void> {
        await fs.ensureDir(this.outputPath);
    }

    async convertRaces(): Promise<void> {
        try {
            await this.ensureOutputDirectory();
            const racesLsxPath = path.join(this.sourcePath, 'Races/Races.lsx');
            console.log('Reading file from:', racesLsxPath);
            
            const raceData = await fs.readFile(racesLsxPath, 'utf-8');
            console.log('Raw data length:', raceData.length);
            
            const parsedData = this.parser.parse(raceData);
            console.log('Parsed data:', JSON.stringify(parsedData, null, 2));
            
            const simplifiedRaces = this.simplifyRaceData(parsedData);
            console.log('Simplified races:', JSON.stringify(simplifiedRaces, null, 2));
            
            await fs.writeJSON(
                path.join(this.outputPath, 'races.json'),
                simplifiedRaces,
                { spaces: 2 }
            );
            
            console.log('Successfully converted races data');
        } catch (error) {
            console.error('Error converting races:', error);
            throw error;
        }
    }

    async convertClasses(): Promise<void> {
        try {
            await this.ensureOutputDirectory();
            const classesLsxPath = path.join(this.sourcePath, 'Classes/Classes.lsx');
            console.log('Reading classes file from:', classesLsxPath);
            
            const classData = await fs.readFile(classesLsxPath, 'utf-8');
            const parsedData = this.parser.parse(classData);
            const simplifiedClasses = this.simplifyClassData(parsedData);
            
            await fs.writeJSON(
                path.join(this.outputPath, 'classes.json'),
                simplifiedClasses,
                { spaces: 2 }
            );
            
            console.log('Successfully converted classes data');
        } catch (error) {
            console.error('Error converting classes:', error);
            throw error;
        }
    }

    async convertBackgrounds(): Promise<void> {
        try {
            await this.ensureOutputDirectory();
            const backgroundsLsxPath = path.join(this.sourcePath, 'Backgrounds/Backgrounds.lsx');
            console.log('Reading backgrounds file from:', backgroundsLsxPath);
            
            const backgroundData = await fs.readFile(backgroundsLsxPath, 'utf-8');
            const parsedData = this.parser.parse(backgroundData);
            const simplifiedBackgrounds = this.simplifyBackgroundData(parsedData);
            
            await fs.writeJSON(
                path.join(this.outputPath, 'backgrounds.json'),
                simplifiedBackgrounds,
                { spaces: 2 }
            );
            
            console.log('Successfully converted backgrounds data');
        } catch (error) {
            console.error('Error converting backgrounds:', error);
            throw error;
        }
    }

    async convertLocalization(): Promise<void> {
        try {
            await this.ensureOutputDirectory();
            const localizationLsxPath = path.join(this.sourcePath, 'Localization/English/english.lsx');
            console.log('Reading localization file from:', localizationLsxPath);
            
            const localizationData = await fs.readFile(localizationLsxPath, 'utf-8');
            const parsedData = this.parser.parse(localizationData);
            const translations = this.extractTranslations(parsedData);
            
            await fs.writeJSON(
                path.join(this.outputPath, 'translations.json'),
                translations,
                { spaces: 2 }
            );
            
            console.log('Successfully converted localization data');
        } catch (error) {
            console.error('Error converting localization:', error);
            throw error;
        }
    }

    private simplifyRaceData(data: any): any {
        const races = [];
        const raceNode = data?.save?.region?.node?.children?.node;
        
        if (raceNode) {
            const attributes = Array.isArray(raceNode.attribute) ? raceNode.attribute : [raceNode.attribute];
            const children = raceNode.children?.node || [];
            
            const race: RaceData = {
                id: attributes.find((attr: XMLAttribute) => attr.id === 'UUID')?.value || '',
                name: attributes.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                displayName: '',
                description: '',
                features: [],
                abilityBoosts: {},
                translationKeys: {
                    displayName: attributes.find((attr: XMLAttribute) => attr.id === 'DisplayName')?.handle || '',
                    description: attributes.find((attr: XMLAttribute) => attr.id === 'Description')?.handle || ''
                }
            };

            // Process ability boosts
            const abilityBoosts = children.find((node: any) => node.id === 'AbilityBoosts')?.children?.node || [];
            if (Array.isArray(abilityBoosts)) {
                abilityBoosts.forEach((boost: any) => {
                    const ability = boost.attribute.find((attr: XMLAttribute) => attr.id === 'Ability')?.value;
                    const amount = boost.attribute.find((attr: XMLAttribute) => attr.id === 'Amount')?.value;
                    if (ability && amount) {
                        race.abilityBoosts[ability] = amount;
                    }
                });
            }

            // Process features
            const features = children.find((node: any) => node.id === 'Features')?.children?.node || [];
            if (Array.isArray(features)) {
                race.features = features.map((feature: any) => {
                    const attrs = Array.isArray(feature.attribute) ? feature.attribute : [feature.attribute];
                    return {
                        id: attrs.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                        name: attrs.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                        description: '',
                        translationKeys: {
                            description: attrs.find((attr: XMLAttribute) => attr.id === 'Description')?.handle || ''
                        }
                    };
                });
            }

            races.push(race);
        }
        
        return { races };
    }

    private simplifyClassData(data: any): any {
        const classes = [];
        const classNode = data?.save?.region?.node?.children?.node;
        
        if (classNode) {
            const attributes = Array.isArray(classNode.attribute) ? classNode.attribute : [classNode.attribute];
            const children = classNode.children?.node || [];
            
            const classData: ClassData = {
                id: attributes.find((attr: XMLAttribute) => attr.id === 'UUID')?.value || '',
                name: attributes.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                displayName: '',
                description: '',
                features: [],
                proficiencies: [],
                translationKeys: {
                    displayName: attributes.find((attr: XMLAttribute) => attr.id === 'DisplayName')?.handle || '',
                    description: attributes.find((attr: XMLAttribute) => attr.id === 'Description')?.handle || ''
                }
            };

            // Process features
            const features = children.find((node: any) => node.id === 'Features')?.children?.node || [];
            if (Array.isArray(features)) {
                classData.features = features.map((feature: any) => {
                    const attrs = Array.isArray(feature.attribute) ? feature.attribute : [feature.attribute];
                    return {
                        id: attrs.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                        name: attrs.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                        description: '',
                        translationKeys: {
                            description: attrs.find((attr: XMLAttribute) => attr.id === 'Description')?.handle || ''
                        }
                    };
                });
            }

            // Process proficiencies
            const proficiencies = children.find((node: any) => node.id === 'Proficiencies')?.children?.node || [];
            if (Array.isArray(proficiencies)) {
                classData.proficiencies = proficiencies.map((prof: any) => 
                    prof.attribute.find((attr: XMLAttribute) => attr.id === 'Name')?.value || ''
                );
            }

            classes.push(classData);
        }
        
        return { classes };
    }

    private simplifyBackgroundData(data: any): any {
        const backgrounds = [];
        const backgroundNode = data?.save?.region?.node?.children?.node;
        
        if (backgroundNode) {
            const attributes = Array.isArray(backgroundNode.attribute) ? backgroundNode.attribute : [backgroundNode.attribute];
            const children = backgroundNode.children?.node || [];
            
            const background: BackgroundData = {
                id: attributes.find((attr: XMLAttribute) => attr.id === 'UUID')?.value || '',
                name: attributes.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                displayName: '',
                description: '',
                features: [],
                proficiencies: [],
                translationKeys: {
                    displayName: attributes.find((attr: XMLAttribute) => attr.id === 'DisplayName')?.handle || '',
                    description: attributes.find((attr: XMLAttribute) => attr.id === 'Description')?.handle || ''
                }
            };

            // Process features
            const features = children.find((node: any) => node.id === 'Features')?.children?.node || [];
            if (Array.isArray(features)) {
                background.features = features.map((feature: any) => {
                    const attrs = Array.isArray(feature.attribute) ? feature.attribute : [feature.attribute];
                    return {
                        id: attrs.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                        name: attrs.find((attr: XMLAttribute) => attr.id === 'Name')?.value || '',
                        description: '',
                        translationKeys: {
                            description: attrs.find((attr: XMLAttribute) => attr.id === 'Description')?.handle || ''
                        }
                    };
                });
            }

            // Process proficiencies
            const proficiencies = children.find((node: any) => node.id === 'Proficiencies')?.children?.node || [];
            if (Array.isArray(proficiencies)) {
                background.proficiencies = proficiencies.map((prof: any) => 
                    prof.attribute.find((attr: XMLAttribute) => attr.id === 'Name')?.value || ''
                );
            }

            backgrounds.push(background);
        }
        
        return { backgrounds };
    }

    public updateWithTranslations(data: any, translations: Record<string, string>): void {
        const updateItem = (item: any) => {
            if (item.translationKeys) {
                if (item.translationKeys.displayName) {
                    item.displayName = translations[item.translationKeys.displayName] || item.displayName;
                }
                if (item.translationKeys.description) {
                    item.description = translations[item.translationKeys.description] || item.description;
                }
                delete item.translationKeys;
            }

            // Update features translations
            if (item.features) {
                item.features.forEach((feature: any) => {
                    if (feature.translationKeys?.description) {
                        feature.description = translations[feature.translationKeys.description] || feature.description;
                        delete feature.translationKeys;
                    }
                });
            }
        };

        if (data.races) {
            data.races.forEach(updateItem);
        }
        if (data.classes) {
            data.classes.forEach(updateItem);
        }
        if (data.backgrounds) {
            data.backgrounds.forEach(updateItem);
        }
    }

    private extractTranslations(data: any): Record<string, string> {
        const translations: Record<string, string> = {};
        const root = data.save.region.node.children;
        
        if (!root.node) return translations;

        const nodes = Array.isArray(root.node) ? root.node : [root.node];
        
        nodes.forEach((node: any) => {
            if (!node.attribute) return;
            
            const handle = node.attribute.find((attr: XMLAttribute) => attr.id === 'Handle')?.value;
            const content = node.attribute.find((attr: XMLAttribute) => attr.id === 'Content')?.value;
            
            if (handle && content) {
                translations[handle] = content;
            }
        });

        return translations;
    }
}
