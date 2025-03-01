import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Paper,
  ButtonBase,
  Grid,
  Tabs,
  Tab,
  TextField,
  Button,
  Snackbar,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Tooltip
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useCharacterContext } from '../context';
import { Race, RaceData, RacialTrait, Subrace, AbilityScoreIncrease } from '../../../types/race';
import { GameDataService } from '../../../services/GameDataService';
import { customRace } from '../../../data/customRace';

const RaceSelection: React.FC = () => {
  const { character, updateCharacter, activeTab, setActiveTab } = useCharacterContext();
  const [races, setRaces] = useState<RaceData[]>([]);
  const [selectedRace, setSelectedRace] = useState<RaceData | undefined>(character.race || undefined);
  const [tooltipState, setTooltipState] = useState<{
    open: boolean;
    anchorEl: HTMLElement | null;
    text: string;
  }>({
    open: false,
    anchorEl: null,
    text: ''
  });
  const [isEditingCustom, setIsEditingCustom] = useState(false);
  const [customContent, setCustomContent] = useState('');
  const [saveSnackbar, setSaveSnackbar] = useState({ open: false, message: '' });

  useEffect(() => {
    const loadRaces = async () => {
      const gameDataService = GameDataService.getInstance();
      const raceData = await gameDataService.getRaces();
      // 添加自定义种族选项
      setRaces([...raceData, customRace]);
    };
    loadRaces();
  }, []);

  useEffect(() => {
    setSelectedRace(character.race || undefined);
  }, [character.race]);

  useEffect(() => {
    if (character.race?.name === 'custom') {
      const isSubrace = activeTab === 'subrace';
      const customContentKey = isSubrace ? 'subrace' : 'race';
      setCustomContent(character.customContent?.[customContentKey] || '');
    }
  }, [character.race?.name, character.customContent, activeTab]);

  useEffect(() => {
    const isSubrace = activeTab === 'subrace';
    const placeholder = isSubrace 
      ? "在此描述您的自定义亚种，包括特性、能力等..."
      : "在此描述您的自定义种族，包括特性、能力等...";
      
    if (isSubrace && character.subrace?.name === 'custom_subrace') {
      setCustomContent(character.subrace.description || placeholder);
    } else if (!isSubrace && character.race?.name === 'custom') {
      setCustomContent(character.race.description || placeholder);
    }
  }, [character.race, character.subrace, activeTab]);

  const handleTooltipOpen = (event: React.MouseEvent<HTMLElement>, text: string) => {
    setTooltipState({
      open: true,
      anchorEl: event.currentTarget,
      text
    });
  };

  const handleTooltipClose = () => {
    setTooltipState({
      open: false,
      anchorEl: null,
      text: ''
    });
  };

  const handleClickAway = () => {
    handleTooltipClose();
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue as 'race' | 'subrace' | 'origin');
  };

  const handleRaceSelect = (raceData: RaceData) => {
    console.log('Selecting race:', raceData);
    const convertedRace = convertRaceDataToCharacterRace(raceData);
    console.log('Converted race data:', convertedRace);
    
    // 确保所有种族都有subraces属性，即使为空数组
    if (!convertedRace.subraces) {
      convertedRace.subraces = [];
    }
    
    // 如果选择的是自定义种族，打开编辑模式
    if (raceData.name === 'custom') {
      setIsEditingCustom(true);
    }
    
    updateCharacter({
      race: convertedRace,
      subrace: undefined // 清除之前选择的亚种
    });
  };

  const handleSubraceSelect = (subrace: Subrace) => {
    if (subrace.name === 'custom_subrace') {
      // 如果选择的是自定义亚种，确保它有正确的属性
      const customSubrace: Subrace = {
        name: 'custom_subrace',
        displayName: '自定义亚种',
        description: '创建您自己的自定义亚种。',
        traits: []
      };
      
      updateCharacter({ 
        subrace: customSubrace,
        customContent: {
          ...character.customContent,
          subrace: character.customContent?.subrace || ''
        }
      });
    } else {
      updateCharacter({
        subrace,
        customContent: {
          ...character.customContent,
          // 如果选择了其他亚种，清除自定义亚种内容
          subrace: undefined
        }
      });
    }
  };

  const handleCustomContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomContent(event.target.value);
  };

  const saveCustomContent = () => {
    const isSubrace = activeTab === 'subrace';
    const customContentKey = isSubrace ? 'subrace' : 'race';
    
    updateCharacter({
      customContent: {
        ...character.customContent,
        [customContentKey]: customContent
      }
    });
    setIsEditingCustom(false);
  };

  const convertRaceDataToCharacterRace = (raceData: RaceData): Race => {
    console.log('Converting race data:', {
      original: raceData,
      abilityScoreIncrease: raceData.abilityScoreIncrease
    });

    const race: Race = {
      name: raceData.name,
      displayName: raceData.displayName,
      description: raceData.description,
      size: raceData.size,
      speed: raceData.speed,
      abilityScoreIncrease: raceData.abilityScoreIncrease || {},
      racialTraits: raceData.racialTraits || [],
      languages: raceData.languages || [],
      subraces: raceData.subraces || []
    };

    console.log('Converted race:', {
      race,
      abilityScoreIncrease: race.abilityScoreIncrease
    });

    return race;
  };

  const formatMechanicalEffect = (effect: string | string[]): string => {
    if (Array.isArray(effect)) {
      return effect.join('，');
    }
    return effect;
  };

  const renderAbilityScoreIncrease = (abilityScoreIncrease: AbilityScoreIncrease | undefined) => {
    if (!abilityScoreIncrease) return null;
    
    const abilityNameMap: { [key: string]: string } = {
      'strength': '力量',
      'dexterity': '敏捷',
      'constitution': '体质',
      'intelligence': '智力',
      'wisdom': '感知',
      'charisma': '魅力'
    };
    
    return (
      <Box>
        {Object.entries(abilityScoreIncrease)
          .filter(([key, value]) => typeof value === 'number' && value !== 0 && key !== 'choice')
          .map(([key, value]) => (
            <Typography key={key}>
              {abilityNameMap[key.toLowerCase()] || key}: +{value}
            </Typography>
          ))}
        {abilityScoreIncrease.choice && (
          <Typography>
            可选属性加值：选择 {abilityScoreIncrease.choice[0].count} 项，每项 +{abilityScoreIncrease.choice[0].value}
          </Typography>
        )}
      </Box>
    );
  };

  const renderRacialTraits = (traits: RacialTrait[]) => {
    return traits.map((trait) => (
      <Box key={trait.name} sx={{ mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
          <Typography variant="h6" sx={{ fontSize: '1.1rem', color: 'primary.main' }}>
            {trait.name}
          </Typography>
          {trait.mechanicalEffect && (
            <Tooltip 
              title={`游戏效果：${formatMechanicalEffect(trait.mechanicalEffect)}`}
              placement="right"
              arrow
            >
              <IconButton size="small" sx={{ ml: 0.5 }}>
                <InfoIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
        </Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {trait.description}
        </Typography>
      </Box>
    ));
  };

  const renderSubraces = () => {
    if (!selectedRace) return null;

    const subraces = [...(selectedRace.subraces || [])];
    
    // 添加自定义亚种选项
    const customSubrace = {
      name: 'custom_subrace',
      displayName: '自定义亚种',
      description: '创建您自己的自定义亚种。',
      traits: []
    };
    
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          选择亚种
        </Typography>
        <Grid container spacing={2}>
          {subraces.map((subrace) => (
            <Grid item xs={12} sm={6} md={4} key={subrace.name}>
              <Card
                variant="outlined"
                sx={{
                  cursor: 'pointer',
                  height: '100%',
                  backgroundColor:
                    character.subrace?.name === subrace.name ? 'action.selected' : 'background.paper',
                }}
                onClick={() => handleSubraceSelect(subrace)}
              >
                <CardContent>
                  <Typography variant="h6" component="div">
                    {subrace.displayName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {subrace.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {/* 添加自定义亚种按钮 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              variant="outlined"
              sx={{
                cursor: 'pointer',
                height: '100%',
                backgroundColor:
                  character.subrace?.name === 'custom_subrace' ? 'action.selected' : 'background.paper',
              }}
              onClick={() => handleSubraceSelect(customSubrace)}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  自定义亚种
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  创建您自己的自定义亚种。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderCustomContent = () => {
    const isSubrace = activeTab === 'subrace';
    const customContentKey = isSubrace ? 'customSubrace' : 'customRace';
    const title = isSubrace ? '自定义亚种内容' : '自定义种族内容';
    const placeholder = isSubrace 
      ? "在此描述您的自定义亚种，包括特性、能力等..."
      : "在此描述您的自定义种族，包括特性、能力等...";

    return (
      <Box sx={{ mt: 2 }}>
        <Paper sx={{ p: 2, mb: 3, border: '1px solid #e0e0e0' }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            创建{isSubrace ? '自定义亚种' : '自定义种族'}指南
          </Typography>
          <Typography variant="body2" paragraph>
            您可以自由创建符合您想象的{isSubrace ? '亚种' : '种族'}。以下是一些建议内容：
          </Typography>
          <List dense disablePadding>
            <ListItem>
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <ArrowRightIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={`描述${isSubrace ? '亚种' : '种族'}的外观特征（身高、体重、肤色等）`} />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <ArrowRightIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={`${isSubrace ? '亚种' : '种族'}的文化背景和生活习性`} />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <ArrowRightIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={`独特的${isSubrace ? '亚种' : '种族'}能力和特长`} />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: '30px' }}>
                <ArrowRightIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary="与其他种族的关系和互动方式" />
            </ListItem>
          </List>
        </Paper>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
          <Typography variant="h6">
            {title}
          </Typography>
          <IconButton 
            size="small" 
            onClick={() => {
              if (activeTab === 'race') {
                // 清空种族选择，返回到初始状态
                updateCharacter({ race: null, subrace: null });
              } else {
                // 清空亚种选择
                updateCharacter({ subrace: null });
              }
            }}
            sx={{ color: 'error.main' }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
        <TextField
          multiline
          rows={6}
          fullWidth
          value={customContent}
          onChange={(e) => setCustomContent(e.target.value)}
          placeholder={placeholder}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2, gap: 1 }}>
          <Button
            variant="outlined"
            onClick={() => {
              // 取消按钮逻辑 - 回到未选择任何种族/亚种的状态
              if (activeTab === 'race') {
                // 清空种族选择，返回到初始状态
                updateCharacter({ race: null, subrace: null });
              } else {
                // 清空亚种选择
                updateCharacter({ subrace: null });
              }
            }}
          >
            取消
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              if (activeTab === 'race' && character.race) {
                const updatedRace = {
                  ...character.race,
                  description: customContent
                };
                updateCharacter({ race: updatedRace });
                // 显示保存成功提示
                setSaveSnackbar({ open: true, message: '种族信息已保存' });
              } else if (activeTab === 'subrace' && character.subrace) {
                const updatedSubrace = {
                  ...character.subrace,
                  description: customContent
                };
                updateCharacter({ subrace: updatedSubrace });
                // 显示保存成功提示
                setSaveSnackbar({ open: true, message: '亚种信息已保存' });
              }
            }}
          >
            保存
          </Button>
        </Box>
      </Box>
    );
  };

  const renderDetailPanel = (info: RaceData | Subrace) => {
    return (
      <Paper sx={{ p: 2, maxHeight: '60vh', overflow: 'auto' }}>
        <Typography variant="h5" gutterBottom>
          {info.displayName}
        </Typography>
        <Typography variant="body1" paragraph>
          {info.description}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>
          属性加值
        </Typography>
        {renderAbilityScoreIncrease(info.abilityScoreIncrease)}
        <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>
          {activeTab === 'race' ? '种族特性' : '亚种特性'}
        </Typography>
        {renderRacialTraits(activeTab === 'race' 
          ? (info as RaceData).racialTraits 
          : (info as Subrace).traits
        )}
      </Paper>
    );
  };

  const renderContent = () => {
    if (activeTab === 'origin') {
      return null;
    }

    // 获取当前显示的信息对象(种族或亚种)
    const displayInfo = activeTab === 'race' 
      ? races.find(r => r.name === character.race?.name)
      : character.race?.subraces.find(s => s.name === character.subrace?.name);

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* 种族选择页面 */}
        {activeTab === 'race' && (
          <>
            <Typography variant="h6" gutterBottom>
              选择种族
            </Typography>
            <Grid container spacing={2}>
              {races.map((race) => (
                <Grid item xs={12} sm={6} md={4} key={race.name}>
                  <Card>
                    <CardActionArea
                      onClick={() => handleRaceSelect(race)}
                      sx={{
                        bgcolor: character.race?.name === race.name ? 'primary.light' : 'inherit',
                        p: 2
                      }}
                    >
                      <Typography variant="h6" align="center">
                        {race.displayName}
                      </Typography>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {character.race?.name === 'custom' && renderCustomContent()}
          </>
        )}

        {/* 亚种选择页面 */}
        {activeTab === 'subrace' && character.race && (
          <>
            <Typography variant="h6" gutterBottom>
              选择亚种
            </Typography>
            <Grid container spacing={2}>
              {/* 显示当前种族的亚种，如果存在 */}
              {character.race.subraces && character.race.subraces.map((subrace) => (
                <Grid item xs={12} sm={6} md={4} key={subrace.name}>
                  <Card>
                    <CardActionArea
                      onClick={() => handleSubraceSelect(subrace)}
                      sx={{
                        bgcolor: character.subrace?.name === subrace.name ? 'primary.light' : 'inherit',
                        p: 2
                      }}
                    >
                      <Typography variant="h6" align="center">
                        {subrace.displayName}
                      </Typography>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
              
              {/* 只有在非自定义种族，或者自定义种族但没有亚种的情况下添加自定义亚种选项 */}
              {(character.race.name !== 'custom' || !character.race.subraces || character.race.subraces.length === 0) && (
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardActionArea
                      onClick={() => handleSubraceSelect({
                        name: 'custom_subrace',
                        displayName: '自定义亚种',
                        description: '创建您自己的自定义亚种。',
                        traits: []
                      })}
                      sx={{
                        bgcolor: character.subrace?.name === 'custom_subrace' ? 'primary.light' : 'inherit',
                        p: 2
                      }}
                    >
                      <Typography variant="h6" align="center">
                        自定义亚种
                      </Typography>
                    </CardActionArea>
                  </Card>
                </Grid>
              )}
            </Grid>
            {/* 显示自定义亚种的编辑界面 */}
            {character.subrace?.name === 'custom_subrace' && renderCustomContent()}
          </>
        )}

        {/* 显示当前选择的种族或亚种的详细信息（只在非自定义内容时显示） */}
        {displayInfo && (
          activeTab === 'race' && character.race?.name !== 'custom' ||
          activeTab === 'subrace' && character.subrace?.name !== 'custom_subrace'
        ) && renderDetailPanel(displayInfo)}
      </Box>
    );
  };

  const renderTabs = () => {
    return (
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        aria-label="character tabs"
        variant="fullWidth"
        sx={{ mb: 2 }}
      >
        <Tab value="race" label="种族" />
        {character.race && <Tab value="subrace" label="亚种" />}
      </Tabs>
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      {renderTabs()}
      {renderContent()}
      
      {/* 保存成功提示 */}
      <Snackbar
        open={saveSnackbar.open}
        autoHideDuration={3000}
        onClose={() => setSaveSnackbar({ ...saveSnackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setSaveSnackbar({ ...saveSnackbar, open: false })} severity="success">
          {saveSnackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RaceSelection;
