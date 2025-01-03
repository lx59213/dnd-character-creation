import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Paper,
  Divider,
  IconButton,
  Tooltip,
  Popper,
  ClickAwayListener,
  Grow
} from '@mui/material';
import { useCharacterContext } from '../context';
import { Race, RaceData, RacialTrait, Subrace, AbilityScoreIncrease } from '../../../types/race';
import { GameDataService } from '../../../services/GameDataService';
import InfoIcon from '@mui/icons-material/Info';

const RaceSelection: React.FC = () => {
  const { character, updateCharacter, activeTab } = useCharacterContext();
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

  useEffect(() => {
    const loadRaces = async () => {
      const gameDataService = GameDataService.getInstance();
      const raceData = await gameDataService.getRaces();
      setRaces(raceData);
    };
    loadRaces();
  }, []);

  useEffect(() => {
    setSelectedRace(character.race || undefined);
  }, [character.race]);

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

  const handleRaceSelect = (raceData: RaceData) => {
    updateCharacter({
      race: raceData,
      subrace: undefined // 清除之前选择的亚种
    });
  };

  const handleSubraceSelect = (subrace: Subrace) => {
    if (!character.race) return;
    updateCharacter({
      subrace
    });
  };

  const convertRaceDataToCharacterRace = (raceData: RaceData): Race => {
    const race: Race = {
      name: raceData.name,
      displayName: raceData.displayName,
      description: raceData.description,
      size: raceData.size,
      speed: raceData.speed,
      abilityScoreIncrease: raceData.abilityScoreIncrease,
      racialTraits: raceData.racialTraits,
      languages: raceData.languages,
      subraces: raceData.subraces
    };
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

  const renderTraits = (traits: RacialTrait[]) => {
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

  const renderRaceGrid = () => {
    const displayRaces = activeTab === 'race' ? races : character.race?.subraces || [];
    
    return (
      <Grid container spacing={2}>
        {displayRaces.map((race) => {
          const isRaceTab = activeTab === 'race';
          const currentRace = isRaceTab ? race as RaceData : race as Subrace;
          
          return (
            <Grid item xs={12} sm={6} md={4} key={currentRace.name}>
              <Card>
                <CardActionArea
                  onClick={() => isRaceTab ? handleRaceSelect(currentRace as RaceData) : handleSubraceSelect(currentRace as Subrace)}
                  sx={{
                    bgcolor: 
                      (isRaceTab && character.race?.name === currentRace.name) ||
                      (!isRaceTab && character.subrace?.name === currentRace.name)
                        ? 'primary.light'
                        : 'inherit',
                    p: 2
                  }}
                >
                  <Typography variant="h6" align="center">
                    {currentRace.displayName}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const renderContent = () => {
    if (activeTab === 'origin') {
      return null;
    }

    const currentRace = activeTab === 'race' ? character.race : character.subrace;
    const currentTraits = activeTab === 'race' ? character.race?.racialTraits : character.subrace?.traits;

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {renderRaceGrid()}
        {currentRace && (
          <Paper sx={{ p: 2, maxHeight: '60vh', overflow: 'auto' }}>
            <Typography variant="h5" gutterBottom>
              {currentRace.displayName}
            </Typography>
            <Typography paragraph>
              {currentRace.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              属性加值
            </Typography>
            {renderAbilityScoreIncrease(currentRace.abilityScoreIncrease)}
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              种族特性
            </Typography>
            {currentTraits && renderTraits(currentTraits)}
          </Paper>
        )}
      </Box>
    );
  };

  return (
    <Box sx={{ p: 2 }}>
      {renderContent()}
    </Box>
  );
};

export default RaceSelection;
