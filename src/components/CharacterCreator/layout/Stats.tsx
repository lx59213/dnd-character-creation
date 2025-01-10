import React, { useMemo, useState, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Divider, 
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Tooltip,
  Fade,
  Snackbar,
  Alert,
  Menu,
  MenuItem
} from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useCharacterContext } from '../context';
import { AbilityName, Feature } from '../../../types/character';
import { AbilityScoreIncrease, RacialTrait } from '../../../types/race';
import { ClassFeature } from '../../../types/Class';
import { LevelingService } from '../../../services/LevelingService';
import { GameDataService } from '../../../services/GameDataService';
import { LocalStorageService } from '../../../services/LocalStorageService';
import { CharacterExportService } from '../../../services/CharacterExportService';

interface StatSectionProps {
  title: string;
  children: React.ReactNode;
}

const StatSection: React.FC<StatSectionProps> = ({ title, children }) => (
  <Box>
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    {children}
  </Box>
);

const translateAbility = (ability: string): string => {
  switch (ability) {
    case 'strength': return '力量';
    case 'dexterity': return '敏捷';
    case 'constitution': return '体质';
    case 'intelligence': return '智力';
    case 'wisdom': return '感知';
    case 'charisma': return '魅力';
    default: return ability;
  }
};

const Stats: React.FC = () => {
  const { character, resetCharacter, updateCharacter } = useCharacterContext();
  const [resetDialogOpen, setResetDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: 'success' | 'error';
  }>({
    open: false,
    message: '',
    severity: 'success'
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const levelingService = LevelingService.getInstance();
  const gameDataService = GameDataService.getInstance();
  const exportService = CharacterExportService.getInstance();

  const [exportAnchorEl, setExportAnchorEl] = useState<null | HTMLElement>(null);

  const getAbilityModifier = (score: number): string => {
    const modifier = Math.floor((score - 10) / 2);
    return modifier >= 0 ? `+${modifier}` : modifier.toString();
  };

  const renderRacialAbilityScores = () => {
    if (!character.race?.abilityScoreIncrease) return null;

    const increases = Object.entries(character.race.abilityScoreIncrease)
      .filter(([_, value]) => typeof value === 'number')
      .map(([ability, value]) => `${translateAbility(ability)} +${value}`);

    if (increases.length === 0) return null;

    return (
      <Typography>
        种族属性加值：{increases.join('，')}
      </Typography>
    );
  };

  const renderSubraceAbilityScores = () => {
    if (!character.subrace?.abilityScoreIncrease) return null;

    const increases = Object.entries(character.subrace.abilityScoreIncrease)
      .filter(([_, value]) => typeof value === 'number')
      .map(([ability, value]) => `${translateAbility(ability)} +${value}`);

    if (increases.length === 0) return null;

    return (
      <Typography>
        亚种属性加值：{increases.join('，')}
      </Typography>
    );
  };

  const classFeatures = useMemo(() => {
    if (!character.classes?.[0]) return [];
    const classData = gameDataService.getClass(character.classes[0].name);
    if (!classData) return [];
    return classData.features.filter(feature => 
      feature.level <= character.classes[0].level
    );
  }, [character.classes]);

  const subclassFeatures = useMemo(() => {
    if (!character.classes?.[0]?.subclass) return [];
    const classData = gameDataService.getClass(character.classes[0].name);
    if (!classData) return [];
    const subclass = classData.subclasses.find(sc => sc.name === character.classes[0].subclass);
    if (!subclass) return [];
    return subclass.features.filter(feature => 
      feature.level <= character.classes[0].level
    );
  }, [character.classes]);

  const handleResetClick = () => {
    setResetDialogOpen(true);
  };

  const handleResetConfirm = () => {
    resetCharacter();
    setResetDialogOpen(false);
  };

  const handleResetCancel = () => {
    setResetDialogOpen(false);
  };

  const handleExportClick = (event: React.MouseEvent<HTMLElement>) => {
    setExportAnchorEl(event.currentTarget);
  };

  const handleExportClose = () => {
    setExportAnchorEl(null);
  };

  const handleExportFormat = async (format: 'json' | 'markdown') => {
    try {
      await exportService.exportCharacter(character, format);
      setSnackbar({
        open: true,
        message: '角色数据导出成功',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: '导出失败，请稍后重试',
        severity: 'error'
      });
    }
    handleExportClose();
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const importedCharacter = await exportService.importCharacter(file);
      updateCharacter(importedCharacter);
      setSnackbar({
        open: true,
        message: '角色数据导入成功',
        severity: 'success'
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: '导入失败，请确保文件格式正确',
        severity: 'error'
      });
    }

    // 清除文件选择，这样同一个文件可以再次选择
    event.target.value = '';
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ position: 'relative', height: '100%' }}>
      {/* 区块四：角色预览 */}
      <StatSection title="属性">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
          <Typography>
            力量：{character.finalAbilityScores.strength} ({getAbilityModifier(character.finalAbilityScores.strength)})
          </Typography>
          <Typography>
            敏捷：{character.finalAbilityScores.dexterity} ({getAbilityModifier(character.finalAbilityScores.dexterity)})
          </Typography>
          <Typography>
            体质：{character.finalAbilityScores.constitution} ({getAbilityModifier(character.finalAbilityScores.constitution)})
          </Typography>
          <Typography>
            智力：{character.finalAbilityScores.intelligence} ({getAbilityModifier(character.finalAbilityScores.intelligence)})
          </Typography>
          <Typography>
            感知：{character.finalAbilityScores.wisdom} ({getAbilityModifier(character.finalAbilityScores.wisdom)})
          </Typography>
          <Typography>
            魅力：{character.finalAbilityScores.charisma} ({getAbilityModifier(character.finalAbilityScores.charisma)})
          </Typography>
        </Box>
        {renderRacialAbilityScores()}
        {renderSubraceAbilityScores()}
      </StatSection>

      <Divider sx={{ my: 2 }} />

      <StatSection title="基本信息">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
          <Typography>
            种族：{character.race?.displayName}
          </Typography>
          <Typography>
            亚种：{character.subrace?.displayName || '无'}
          </Typography>
          <Typography>
            职业：{character.classes?.[0]?.displayName || '无'}
          </Typography>
          <Typography>
            背景：{character.background?.name || '无'}
          </Typography>
        </Box>
      </StatSection>

      <Divider sx={{ my: 2 }} />

      <StatSection title="特性">
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1 }}>
          {character.race?.racialTraits && character.race.racialTraits.length > 0 && (
            <Typography>
              种族特性：{character.race.racialTraits.map(trait => trait.name).join('、')}
            </Typography>
          )}
          {character.subrace?.traits && character.subrace.traits.length > 0 && (
            <Typography>
              亚种特性：{character.subrace.traits.map(trait => trait.name).join('、')}
            </Typography>
          )}
          {classFeatures.length > 0 && (
            <Typography>
              职业特性：{classFeatures.map(feature => feature.name).join('、')}
            </Typography>
          )}
          {subclassFeatures.length > 0 && (
            <Typography>
              子职业特性：{subclassFeatures.map(feature => feature.name).join('、')}
            </Typography>
          )}
          {character.background?.features && character.background.features.length > 0 && (
            <Typography>
              背景特性：{character.background.features.map(feature => feature.name).join('、')}
            </Typography>
          )}
        </Box>
      </StatSection>

      <Divider sx={{ my: 2 }} />

      <StatSection title="战斗数据">
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
          <Typography>
            生命值：{character.hitPoints || 0}
          </Typography>
          <Typography>
            护甲等级：{character.armorClass || 0}
          </Typography>
          <Typography>
            先攻加值：{character.initiative || 0}
          </Typography>
          <Typography>
            速度：{character.speed || 30}
          </Typography>
        </Box>
      </StatSection>

      {/* 控制按钮 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          display: 'flex',
          gap: 1,
        }}
      >
        <IconButton
          onClick={handleExportClick}
          size="small"
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            '&:hover': { bgcolor: 'background.default' },
            color: 'primary.main'
          }}
        >
          <FileDownloadIcon />
        </IconButton>
        <Menu
          anchorEl={exportAnchorEl}
          open={Boolean(exportAnchorEl)}
          onClose={handleExportClose}
        >
          <MenuItem onClick={() => handleExportFormat('json')}>
            导出为 JSON
          </MenuItem>
          <MenuItem onClick={() => handleExportFormat('markdown')}>
            导出为 Markdown
          </MenuItem>
        </Menu>
        <IconButton
          onClick={handleImportClick}
          size="small"
          sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            '&:hover': { bgcolor: 'background.default' },
            color: 'primary.main'
          }}
        >
          <FileUploadIcon />
        </IconButton>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
          accept=".json,.md"
        />
        <Tooltip 
          title="重置角色" 
          placement="top" 
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <IconButton
            onClick={handleResetClick}
            color="primary"
            sx={{
              backgroundColor: 'background.paper',
              boxShadow: 2,
              '&:hover': {
                backgroundColor: 'background.default',
              },
            }}
          >
            <RestartAltIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* 重置确认对话框 */}
      <Dialog
        open={resetDialogOpen}
        onClose={handleResetCancel}
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: 24,
          }
        }}
      >
        <DialogTitle>确认重置角色？</DialogTitle>
        <DialogContent>
          <DialogContentText>
            这将清除所有已保存的角色数据，且无法恢复。你确定要继续吗？
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: 2 }}>
          <Button 
            onClick={handleResetCancel}
            sx={{ 
              minWidth: 100,
              borderRadius: 2,
            }}
          >
            取消
          </Button>
          <Button 
            onClick={handleResetConfirm}
            variant="contained"
            color="error"
            sx={{ 
              minWidth: 100,
              borderRadius: 2,
            }}
          >
            重置
          </Button>
        </DialogActions>
      </Dialog>

      {/* 提示消息 */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Stats;
