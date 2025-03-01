import React from 'react';
import { Box, Typography, Paper, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCharacterContext } from '../context';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
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
  overflow: 'hidden',
  cursor: 'pointer',
  '&:hover .upload-overlay': {
    opacity: 1
  }
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

const UploadOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  color: theme.palette.common.white
}));

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
  const { character, updateCharacter } = useCharacterContext();
  const [imageError, setImageError] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

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
    'mephistopheles-bloodline': '梅菲斯特血裔 (Mephistopheles Tiefling).png',
    'aasimar': '阿斯莫 (Aasimar).png',
    'goliath': '歌利亚 (Goliath).png'
  };

  // 获取种族图片路径
  const getRaceImagePath = () => {
    // 如果有自定义图片，优先使用自定义图片
    if (character.customContent?.customImage) {
      return character.customContent.customImage;
    }

    if (!character.race) {
      return '';
    }

    // 如果有子种族，优先使用子种族的图片
    if (character.subrace) {
      const originalSubraceKey = character.subrace.displayName || character.subrace.name;
      const displaySubraceKey = character.subrace.displayName;
      const normalizedSubraceKey = normalizeRaceName(character.subrace.name);
      
      const subraceKey = subraceNameMap[displaySubraceKey] || 
                      subraceNameMap[originalSubraceKey] || 
                      subraceNameMap[normalizedSubraceKey] ||
                      normalizedSubraceKey;
      
      const imagePath = buildImagePath(raceImageMap[subraceKey] || '');
      
      if (raceImageMap[subraceKey]) {
        return imagePath;
      }
    }

    const raceKey = normalizeRaceName(character.race.name);
    const imagePath = buildImagePath(raceImageMap[raceKey] || '');
    
    return imagePath;
  };

  const handleImageError = (error: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image failed to load:', error);
    const img = error.target as HTMLImageElement;
    console.log('Failed image src:', img.src);
    setImageError(true);
  };

  const buildImagePath = (fileName: string) => {
    if (!fileName) return '';
    const publicUrl = process.env.PUBLIC_URL || '';
    const normalizedPath = `${publicUrl}/data/image/races/${fileName}`.replace(/\\/g, '/');
    return normalizedPath;
  };

  // 处理图片上传
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // 更新角色的自定义图片
        updateCharacter({
          customContent: {
            ...character.customContent,
            customImage: reader.result as string
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // 处理删除自定义图片
  const handleDeleteCustomImage = () => {
    updateCharacter({
      customContent: {
        ...character.customContent,
        customImage: undefined
      }
    });
  };

  // 触发文件选择对话框
  const handleImageClick = () => {
    fileInputRef.current?.click();
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
      <ImageContainer onClick={handleImageClick}>
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
          <UploadOverlay className="upload-overlay">
            <AddPhotoAlternateIcon sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="body2">
              点击上传自定义形象
            </Typography>
          </UploadOverlay>
        </ImageWrapper>
        
        {/* 隐藏的文件输入框 */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        />
      </ImageContainer>
      
      {/* 显示种族名称和删除按钮 */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
        <RaceTitle variant="subtitle1">
          {character.subrace
            ? `${character.subrace.displayName} (${character.race?.displayName})`
            : character.race?.displayName}
        </RaceTitle>
        {character.customContent?.customImage && (
          <Tooltip title="删除自定义形象">
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteCustomImage();
              }}
              sx={{ ml: 1 }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </PreviewContainer>
  );
};

export default AppearancePreview;
