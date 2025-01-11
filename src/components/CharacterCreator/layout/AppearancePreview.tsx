import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCharacterContext } from '../context';
import Appearance from '../steps/Appearance';

const PreviewContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden'
}));

const ImageContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden'
});

const ImageWrapper = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& img': {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    transition: 'all 0.3s ease'
  }
});

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  color: theme.palette.text.primary,
  fontWeight: 500
}));

const RaceTitle = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
  fontWeight: 500,
  textAlign: 'center'
}));

const AppearancePreview: React.FC = () => {
  const { character } = useCharacterContext();
  const [imageError, setImageError] = React.useState(false);

  // 将种族名称标准化（移除空格，转换为小写）
  const normalizeRaceName = (name: string) => {
    return name.toLowerCase()
      .replace(/\s+/g, '-')     // 空格转连字符
      .replace(/([A-Z])/g, '-$1') // 驼峰转连字符
      .replace(/^-/, '')        // 移除开头的连字符
      .replace(/[—–-]+/g, '-')  // 统一所有类型的连字符
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
    '卓尔': 'drow',
    // 半精灵亚种
    '半高精灵': 'half-high-elf',
    '半木精灵': 'half-wood-elf',
    '半卓尔': 'half-drow',
    // 半身人亚种
    '轻足半身人': 'lightfoot-halfling',
    '硬足半身人': 'stout-halfling',
    '刚毅半身人': 'stout-halfling',
    // 侏儒亚种
    '林地侏儒': 'forest-gnome',
    '岩地侏儒': 'rock-gnome',
    // 魔裔血脉
    '阿斯莫德斯血裔': 'asmodeus-bloodline',
    '阿斯莫德斯血裔提夫林': 'asmodeus-bloodline',
    '扎瑞尔血裔': 'zariel-bloodline',
    '梅菲斯特血裔': 'mephistopheles-bloodline',
    // 英文名称映射
    'Asmodeus Tiefling': 'asmodeus-bloodline',
    'asmodeus-tiefling': 'asmodeus-bloodline',
    'Zariel Tiefling': 'zariel-bloodline',
    'zariel-tiefling': 'zariel-bloodline',
    'Mephistopheles Tiefling': 'mephistopheles-bloodline',
    'mephistopheles-tiefling': 'mephistopheles-bloodline',
    'Drow': 'drow',
    'Dark Elf': 'drow',
    'LightfootHalfling': 'lightfoot-halfling',
    'StoutHalfling': 'stout-halfling',
    'stouthalfling': 'stout-halfling',
    'HillDwarf': 'hill-dwarf',
    'MountainDwarf': 'mountain-dwarf',
    'Half-Orc': 'half-orc',
    'HalfOrc': 'half-orc'
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
    'half-elf': '半高精灵 (Half-High Elf).png',
    'half-high-elf': '半高精灵 (Half-High Elf).png',
    'half-wood-elf': '半木精灵 (Half-Wood Elf).png',
    'half-drow': '半卓尔 (Half-Drow).png',
    'halfling': '轻足半身人 (Lightfoot Halfling).png',
    'lightfoot-halfling': '轻足半身人 (Lightfoot Halfling).png',
    'stout-halfling': '硬足半身人 (Stout Halfling).png',
    'StoutHalfling': '硬足半身人 (Stout Halfling).png',
    'stouthalfling': '硬足半身人 (Stout Halfling).png',
    'gnome': '林地侏儒 (Forest Gnome).png',
    'forest-gnome': '林地侏儒 (Forest Gnome).png',
    'rock-gnome': '岩地侏儒 (Rock Gnome).png',
    'half-orc': '半兽人 (Half-Orc).png',
    'halforc': '半兽人 (Half-Orc).png',
    'dragonborn': '黑龙裔 (Black Dragonborn).png',
    'black-dragon-bloodline': '黑龙裔 (Black Dragonborn).png',
    'blue-dragon-bloodline': '蓝龙裔 (Blue Dragonborn).png',
    'brass-dragon-bloodline': '黄铜龙裔 (Brass Dragonborn).png',
    'tiefling': '阿斯莫德斯血裔 (Asmodeus Tiefling).png',
    'asmodeus-bloodline': '阿斯莫德斯血裔 (Asmodeus Tiefling).png',
    'asmodeus-tiefling': '阿斯莫德斯血裔 (Asmodeus Tiefling).png',
    'zariel-bloodline': '扎瑞尔血裔 (Zariel Tiefling).png',
    'mephistopheles-bloodline': '梅菲斯特血裔 (Mephistopheles Tiefling).png'
  };

  // 获取种族图片路径
  const getRaceImagePath = () => {
    if (!character.race) {
      return '';
    }

    // 如果有子种族，优先使用子种族的图片
    if (character.subrace) {
      // 优先使用显示名称，因为它是中文的
      const originalSubraceKey = character.subrace.displayName || character.subrace.name;
      const displaySubraceKey = character.subrace.displayName;
      const normalizedSubraceKey = normalizeRaceName(character.subrace.name);
      
      // 优先使用显示名称进行映射
      const subraceKey = subraceNameMap[displaySubraceKey] || 
                      subraceNameMap[originalSubraceKey] || 
                      subraceNameMap[normalizedSubraceKey] ||
                      normalizedSubraceKey;
      
      // 构建完整的图片路径
      const imagePath = buildImagePath(raceImageMap[subraceKey] || '');
      
      if (raceImageMap[subraceKey]) {
        return imagePath;
      }
    }

    // 如果没有子种族或子种族图片不存在，使用主种族图片
    const raceKey = normalizeRaceName(character.race.name);
    
    // 构建完整的图片路径
    const imagePath = buildImagePath(raceImageMap[raceKey] || '');
    
    return imagePath;
  };

  // 将日志逻辑移到 useEffect 中
  React.useEffect(() => {
    if (character.race) {
      console.log('Current character race:', character.race);
      console.log('Current character race name:', character.race.name);
      console.log('Current character race display name:', character.race.displayName);
      console.log('Current character subrace:', character.subrace);

      const raceKey = normalizeRaceName(character.race.name);
      console.log('Race original name:', character.race.name);
      console.log('Race display name:', character.race.displayName);
      console.log('Normalized race name:', raceKey);
      console.log('Looking for race image with key:', raceKey);
      console.log('Available race keys:', Object.keys(raceImageMap));

      const imagePath = getRaceImagePath();
      // 将路径构建的日志也移到这里，只在种族变化时打印一次
      if (imagePath) {
        console.log('Building image path for:', raceImageMap[raceKey]);
        console.log('Public URL:', process.env.PUBLIC_URL || '');
        console.log('Normalized path:', imagePath);
        console.log('Final image path:', imagePath);
      }
    }
  }, [character.race, character.subrace]);

  const handleImageError = (error: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', error);
    const img = error.target as HTMLImageElement;
    console.log('Failed image src:', img.src);
    // 尝试加载一个测试图片来验证路径问题
    const testImg = new Image();
    testImg.onload = () => console.log('Test image loaded successfully');
    testImg.onerror = () => console.log('Test image failed to load');
    testImg.src = '/data/image/races/人类 (Human).png';
    setImageError(true);
  };

  const buildImagePath = (fileName: string) => {
    if (!fileName) return '';
    // 在 Create React App 中，需要使用 process.env.PUBLIC_URL
    const publicUrl = process.env.PUBLIC_URL || '';
    const normalizedPath = `${publicUrl}/data/image/races/${fileName}`.replace(/\\/g, '/');
    return normalizedPath;
  };

  const imagePath = getRaceImagePath();

  // 当种族改变时重置错误状态
  React.useEffect(() => {
    console.log('Race changed, resetting error state');
    setImageError(false);
  }, [character.race?.name, character.subrace?.name]);

  return (
    <PreviewContainer>
      <Title variant="h6">外观</Title>
      <ImageContainer>
        <ImageWrapper>
          {imagePath && (
            <>
              <img
                key={imagePath}
                src={imagePath}
                alt={character.race?.displayName || ''}
                onError={handleImageError}
                style={{ opacity: imageError ? 0.3 : 1 }}
              />
              {imageError && (
                <Typography variant="body2" color="error" style={{ position: 'absolute', bottom: 0 }}>
                  图片加载失败: {imagePath}
                </Typography>
              )}
            </>
          )}
        </ImageWrapper>
      </ImageContainer>
      {character.race && (
        <RaceTitle variant="subtitle1">
          {character.subrace
            ? `${character.subrace.displayName} (${character.race.displayName})`
            : character.race.displayName}
        </RaceTitle>
      )}
    </PreviewContainer>
  );
};

export default AppearancePreview;
