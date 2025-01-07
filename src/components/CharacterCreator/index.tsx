import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Navigation from './layout/Navigation';
import Content from './layout/Content';
import Stats from './layout/Stats';
import Appearance from './steps/Appearance';
import RaceSelection from './steps/RaceSelection';
import Origin from './steps/Origin';
import ClassSelection from './steps/ClassSelection';
import { BackgroundSelection } from './steps/Background';
import { AbilityScoreAllocation } from './steps/AbilityScoreAllocation';
import { SkillProficiencies } from './steps/SkillProficiencies';
import MasteryProficiencies from './steps/MasteryProficiencies';
import LevelSelection from './steps/LevelSelection';
import InventorySelection from './steps/InventorySelection';
import SpellSelection from './steps/SpellSelection';
import Notes from './steps/Notes';
import { TabType } from '../../types/character';
import { useCharacterContext } from './context';
import AppearancePreview from './layout/AppearancePreview';
import PsychologyIcon from '@mui/icons-material/Psychology'; // 技能熟练项的图标
import BuildIcon from '@mui/icons-material/Build';           // 其余熟练项的图标
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // 升级的图标

// 创建一个全局样式组件
const GlobalStyles = styled('div')({
  '*::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '*::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '*::-webkit-scrollbar-thumb': {
    background: '#bdbdbd',
    borderRadius: '3px',
    '&:hover': {
      background: '#9e9e9e',
    },
  },
  '*::-webkit-scrollbar-corner': {
    background: 'transparent',
  },
});

// 创建一个可拖动的分隔线组件
const Divider = styled('div')(({ theme }) => ({
  width: '4px',
  backgroundColor: 'transparent',
  position: 'relative',
  cursor: 'col-resize',
  transition: 'all 0.2s ease',
  margin: '0 -2px',
  userSelect: 'none',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '1px',
    height: '32px',
    backgroundColor: theme.palette.divider,
    transition: 'all 0.2s ease',
  },

  '&:hover::before': {
    width: '2px',
    height: '48px',
    backgroundColor: theme.palette.primary.main,
  },

  '&:active::before': {
    width: '2px',
    backgroundColor: theme.palette.primary.dark,
  }
}));

const CharacterCreator: React.FC = () => {
  const { activeTab } = useCharacterContext();
  const [contentWidth, setContentWidth] = useState<number>(50);
  const [previewWidth, setPreviewWidth] = useState<number>(25);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeDivider, setActiveDivider] = useState<number | null>(null);

  const handleMouseDown = (dividerIndex: number) => (e: React.MouseEvent) => {
    setIsDragging(true);
    setActiveDivider(dividerIndex);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || activeDivider === null) return;

    const container = e.currentTarget as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width - 60; // 减去导航栏宽度
    const mouseX = Math.max(0, Math.min(e.clientX - containerRect.left - 60, containerWidth));
    const percentage = (mouseX / containerWidth) * 100;

    if (activeDivider === 1) {
      // 第一个分隔线：内容区域和预览区域之间
      const newContentWidth = Math.max(30, Math.min(70, percentage));
      const remainingWidth = 100 - newContentWidth;
      setContentWidth(newContentWidth);
      setPreviewWidth(Math.max(15, remainingWidth / 2));
    } else if (activeDivider === 2) {
      // 第二个分隔线：预览区域和状态区域之间
      const maxPreviewWidth = Math.min(50, 100 - contentWidth - 15); // 限制最大宽度为50%
      const newPreviewWidth = Math.max(15, Math.min(maxPreviewWidth, percentage - contentWidth));
      setPreviewWidth(newPreviewWidth);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setActiveDivider(null);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'origin':
        return <Origin />;
      case 'race':
        return <RaceSelection />;
      case 'subrace':
          return <RaceSelection />;
      case 'class':
        return <ClassSelection />;
      case 'subclass':
        return <ClassSelection />;
      case 'background':
        return <BackgroundSelection />;
      case 'abilities':
        return <AbilityScoreAllocation />;
      case 'skills':
        return <SkillProficiencies />;
      case 'proficiencies':
        return <MasteryProficiencies />;
      case 'level':
        return <LevelSelection />;
      case 'inventory':
        return <InventorySelection />;
      case 'spells':
        return <SpellSelection />;
      case 'notes':
        return <Notes />;
      default:
        return null;
    }
  };

  return (
    <GlobalStyles>
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 48px)',
          cursor: isDragging ? 'col-resize' : 'default',
          overflow: 'hidden',
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <Box sx={{ width: 60, borderRight: '1px solid #e0e0e0' }}>
          <Navigation />
        </Box>

        <Box
          sx={{
            flex: `0 0 ${contentWidth}%`,
            backgroundColor: '#fff',
            borderRadius: 1,
            padding: 2,
            boxShadow: 1,
            overflow: 'auto',
          }}
        >
          <Content>{renderContent()}</Content>
        </Box>

        <Divider onMouseDown={handleMouseDown(1)} />

        <Box
          sx={{
            flex: `0 0 ${previewWidth}%`,
            backgroundColor: '#fff',
            borderRadius: 1,
            padding: 2,
            boxShadow: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          <AppearancePreview />
        </Box>

        <Divider onMouseDown={handleMouseDown(2)} />

        <Box
          sx={{
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 1,
            padding: 2,
            boxShadow: 1,
            overflow: 'auto',
            minWidth: '15%',
          }}
        >
          <Stats />
        </Box>
      </Box>
    </GlobalStyles>
  );
};

export default CharacterCreator;
