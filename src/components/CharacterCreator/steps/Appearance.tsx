import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { useCharacterContext } from '../context';

const Appearance: React.FC = () => {
    const { character } = useCharacterContext();

    // 获取种族图片路径
    const getRaceImagePath = () => {
        if (!character.race) {
            console.log('No race selected');
            return '';
        }

        console.log('Current character race:', character.race);
        console.log('Current character subrace:', character.subrace);

        // 将种族名称标准化（移除空格，转换为小写）
        const normalizeRaceName = (name: string) => {
            return name.toLowerCase()
                .replace(/\s+/g, '-')     // 空格转连字符
                .replace(/([A-Z])/g, '-$1') // 驼峰转连字符
                .toLowerCase();
        };

        // 子种族名称映射表
        const subraceNameMap: { [key: string]: string } = {
            // 龙裔血脉
            '黑龙血脉': 'black-dragon-bloodline',
            '蓝龙血脉': 'blue-dragon-bloodline',
            '黄铜龙血脉': 'brass-dragon-bloodline',
            // 矮人亚种
            '丘陵矮人': 'hill-dwarf',
            '山地矮人': 'mountain-dwarf',
            // 精灵亚种
            '高等精灵': 'high-elf',
            '木精灵': 'wood-elf',
            '黑暗精灵': 'drow',
            // 半精灵亚种
            '半高精灵': 'half-high-elf',
            '半木精灵': 'half-wood-elf',
            '半卓尔': 'half-drow',
            // 半身人亚种
            '轻足半身人': 'lightfoot-halfling',
            '硬足半身人': 'stout-halfling',
            // 侏儒亚种
            '林地侏儒': 'forest-gnome',
            '岩地侏儒': 'rock-gnome',
            // 魔裔血脉
            '阿斯莫德斯血裔': 'asmodeus-bloodline',
            '扎瑞尔血裔': 'zariel-bloodline',
            '梅菲斯特血裔': 'mephistopheles-bloodline',
            // 英文名称映射
            'Asmodeus Tiefling': 'asmodeus-bloodline',
            'Zariel Tiefling': 'zariel-bloodline',
            'Mephistopheles Tiefling': 'mephistopheles-bloodline',
            'LightfootHalfling': 'lightfoot-halfling',
            'StoutHalfling': 'stout-halfling',
            'HillDwarf': 'hill-dwarf',
            'MountainDwarf': 'mountain-dwarf'
        };

        // 如果有子种族，优先使用子种族的图片
        if (character.subrace) {
            // 获取子种族的英文键名
            const subraceKey = subraceNameMap[character.subrace.name] || 
                             subraceNameMap[character.subrace.displayName] || 
                             normalizeRaceName(character.subrace.name);
            
            console.log('Subrace original name:', character.subrace.name);
            console.log('Subrace display name:', character.subrace.displayName);
            console.log('Looking for subrace image with key:', subraceKey);
            
            // 构建完整的图片路径
            const imagePath = `/data/image/races/${raceImageMap[subraceKey] || ''}`;
            console.log('Constructed subrace image path:', imagePath);
            
            if (raceImageMap[subraceKey]) {
                return imagePath;
            }
        }

        // 如果没有子种族或子种族图片不存在，使用主种族图片
        const raceKey = normalizeRaceName(character.race.name);
        console.log('Looking for race image with key:', raceKey);
        
        // 构建完整的图片路径
        const imagePath = `/data/image/races/${raceImageMap[raceKey] || ''}`;
        console.log('Constructed race image path:', imagePath);
        
        return imagePath;
    };

    const raceImageMap: { [key: string]: string } = {
        'human': '人类 (Human).png',
        'dwarf': '丘陵矮人 (Hill Dwarf).png',
        'hill-dwarf': '丘陵矮人 (Hill Dwarf).png',
        'mountain-dwarf': '山地矮人 (Mountain Dwarf).png',
        'elf': '高等精灵 (High Elf).png',
        'high-elf': '高等精灵 (High Elf).png',
        'wood-elf': '木精灵 (Wood Elf).png',
        'drow': '黑暗精灵—卓尔 (Drow).png',
        'halfling': '轻足半身人 (Lightfoot Halfling).png',
        'lightfoot-halfling': '轻足半身人 (Lightfoot Halfling).png',
        'stout-halfling': '硬足半身人 (Stout Halfling).png',
        'gnome': '林地侏儒 (Forest Gnome).png',
        'forest-gnome': '林地侏儒 (Forest Gnome).png',
        'rock-gnome': '岩地侏儒 (Rock Gnome).png',
        'half-elf': '半高精灵 (Half-High Elf).png',
        'half-high-elf': '半高精灵 (Half-High Elf).png',
        'half-wood-elf': '半木精灵 (Half-Wood Elf).png',
        'half-drow': '半卓尔 (Half-Drow).png',
        'half-orc': '半兽人 (Half-Orc).png',
        'halforc': '半兽人 (Half-Orc).png',
        'dragonborn': '黑龙裔 (Black Dragonborn).png',
        'black-dragon-bloodline': '黑龙裔 (Black Dragonborn).png',
        'blue-dragon-bloodline': '蓝龙裔 (Blue Dragonborn).png',
        'brass-dragon-bloodline': '黄铜龙裔 (Brass Dragonborn).png',
        'tiefling': '阿斯莫德斯血裔 (Asmodeus Tiefling).png',
        'asmodeus-bloodline': '阿斯莫德斯血裔 (Asmodeus Tiefling).png',
        'zariel-bloodline': '扎瑞尔血裔 (Zariel Tiefling).png',
        'mephistopheles-bloodline': '梅菲斯特血裔 (Mephistopheles Tiefling).png',
        'aasimar': '阿斯莫 (Aasimar).png',
        'fire-genasi': '炎魔裔 (Fire Genasi).png',
        'earth-genasi': '土魔裔 (Earth Genasi).png'
    };

    const [imageError, setImageError] = React.useState(false);

    // 重置图片错误状态
    React.useEffect(() => {
        setImageError(false);
    }, [character.race, character.subrace]);

    const imagePath = getRaceImagePath();
    console.log('Component will render with image path:', imagePath);

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>外观</Typography>
            
            <Paper sx={{ 
                p: 2, 
                height: '600px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'background.default'
            }}>
                {character.race ? (
                    <>
                        {!imageError ? (
                            <Box
                                component="img"
                                src={imagePath}
                                alt={character.race.displayName}
                                onError={(e) => {
                                    console.error('Image failed to load:', e.currentTarget.src);
                                    setImageError(true);
                                }}
                                sx={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    height: 'auto',
                                    objectFit: 'contain',
                                    mb: 2,
                                    display: imageError ? 'none' : 'block'
                                }}
                            />
                        ) : (
                            <Box sx={{ 
                                width: '100%',
                                maxWidth: '400px',
                                height: '400px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                bgcolor: 'action.hover',
                                borderRadius: 1,
                                mb: 2
                            }}>
                                <Typography color="text.secondary">
                                    暂无种族图片
                                </Typography>
                            </Box>
                        )}
                        <Typography variant="h6" sx={{ mt: 2 }}>
                            {character.race.displayName}
                            {character.subrace && ` (${character.subrace.displayName})`}
                        </Typography>
                    </>
                ) : (
                    <Typography>请选择一个种族</Typography>
                )}
            </Paper>
        </Box>
    );
};

export default Appearance;
