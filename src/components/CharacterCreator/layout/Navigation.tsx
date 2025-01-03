import React from 'react';
import { Box, Tooltip, IconButton, Typography, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SpeedIcon from '@mui/icons-material/Speed';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import BackpackIcon from '@mui/icons-material/Backpack';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useCharacterContext } from '../context';
import { TabType } from '../../../types/character';
import { GameDataService } from '../../../services/GameDataService';

const Navigation: React.FC = () => {
  const { character, activeTab, setActiveTab } = useCharacterContext();
  const gameDataService = GameDataService.getInstance();

  const baseNavItems: { id: TabType; label: string; icon: React.ReactNode; path?: string; disabled?: boolean }[] = [
    { id: 'origin', label: '出身', icon: <HomeIcon /> },
    { id: 'race', label: '种族', icon: <GroupIcon /> },
    { id: 'class', label: '职业', icon: <WorkIcon /> },
    { id: 'background', label: '背景', icon: <HistoryEduIcon /> },
    { id: 'abilities', label: '属性', icon: <SpeedIcon /> },
    { id: 'skills', label: '技能熟练项', icon: <PsychologyIcon /> },
    { id: 'proficiencies', label: '其余熟练项', icon: <BuildIcon /> },
    { id: 'spells', label: '法术', icon: <AutoFixHighIcon /> },
    { id: 'level', label: '升级', icon: <TrendingUpIcon /> },
    { id: 'inventory', label: '所持物', icon: <BackpackIcon /> },
  ];

  // 处理导航项
  let navItems = [...baseNavItems];

  // 如果选择的种族有亚种，则在种族后面添加亚种选项
  if (character.race?.subraces?.length) {
    navItems = [
      ...navItems.slice(0, 2),
      { id: 'subrace' as TabType, label: '亚种', icon: <GroupIcon /> },
      ...navItems.slice(2)
    ];
  }

  // 如果职业等级达到3级，则在职业后面添加子职业选项
  if (character.classes?.length > 0 && 
      gameDataService.canSelectSubclass(character.classes[0].name, character.level)) {
    const classIndex = navItems.findIndex(item => item.id === 'class');
    if (classIndex !== -1) {
      navItems = [
        ...navItems.slice(0, classIndex + 1),
        { id: 'subclass' as TabType, label: '子职业', icon: <WorkIcon /> },
        ...navItems.slice(classIndex + 1)
      ];
    }
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: TabType) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 2,
      }}
    >
      {/* 等级和生命值显示 */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Tooltip title="等级">
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <StarIcon sx={{ fontSize: 20, mr: 0.5 }} />
            <Typography variant="body2">
              {character.level || 1}
            </Typography>
          </Box>
        </Tooltip>
        <Tooltip title="生命值">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FavoriteIcon sx={{ fontSize: 20, mr: 0.5 }} />
            <Typography variant="body2">
              {character.hitPoints || 0}
            </Typography>
          </Box>
        </Tooltip>
      </Box>

      <Divider sx={{ width: '80%' }} />

      {/* 导航按钮 */}
      {navItems.map((item) => (
        <Tooltip 
          key={item.id} 
          title={item.label} 
          placement="right"
        >
          <IconButton
            onClick={(event) => handleTabChange(event, item.id)}
            sx={{
              color: activeTab === item.id ? 'primary.main' : 'text.secondary',
              '&:hover': {
                color: 'primary.main',
              },
              opacity: item.disabled ? 0.5 : 1,
              pointerEvents: item.disabled ? 'none' : 'auto',
            }}
          >
            {item.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Navigation;
