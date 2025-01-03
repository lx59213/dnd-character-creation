import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Paper,
    IconButton,
    ClickAwayListener,
    Popper,
    CircularProgress,
    Grow
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Background } from '../../../types/background';
import GameDataService from '../../../services/GameDataService';
import { useCharacterContext } from '../context';
import { useState, useEffect } from 'react';
import { ProficiencyReference } from '../../../types/proficiency';

export const BackgroundSelection: React.FC = () => {
    const { character, updateCharacter } = useCharacterContext();
    const [backgrounds, setBackgrounds] = useState<Background[]>([]);
    const [selectedBackground, setSelectedBackground] = useState<Background | null>(null);
    const [gameDataService, setGameDataService] = useState<GameDataService | null>(null);
    const [tooltipState, setTooltipState] = useState({
        open: false,
        text: '',
        anchorEl: null as HTMLElement | null,
    });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const initializeData = async () => {
            try {
                const service = GameDataService.getInstance();
                setGameDataService(service);
                
                await service.initialize();
                const backgroundsData = service.getAllBackgrounds();
                setBackgrounds(backgroundsData);
                setIsLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : '加载数据时发生错误');
                setIsLoading(false);
            }
        };

        initializeData();
    }, []);

    useEffect(() => {
        if (character.background?.id && gameDataService) {
            const backgroundData = gameDataService.getBackground(character.background.id);
            if (backgroundData) {
                setSelectedBackground(backgroundData);
            }
        } else {
            setSelectedBackground(null);
        }
    }, [character.background, gameDataService]);

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ p: 2 }}>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    const handleBackgroundSelect = (background: Background) => {
        setSelectedBackground(background);
    
        // 更新角色数据
        updateCharacter({
            ...character,
            background: background,  // 直接使用完整的 background 对象
        });
    };

    const handleTooltipClose = () => {
        setTooltipState({
            open: false,
            text: '',
            anchorEl: null,
        });
    };

    const handleTooltipOpen = (event: React.MouseEvent<HTMLElement>, text: string) => {
        setTooltipState({
            open: true,
            text,
            anchorEl: event.currentTarget,
        });
    };

    const handleClickAway = () => {
        setTooltipState(prev => ({
            ...prev,
            open: false,
        }));
    };

    const renderProficiency = (prof: ProficiencyReference) => {
        if (!gameDataService) return null;
        
        const profData = gameDataService.getProficiency(prof.type, prof.id);
        if (!profData) return null;

        return (
            <Box key={prof.id} sx={{ display: 'inline-flex', alignItems: 'center', mr: 1 }}>
                <Typography variant="body1" component="span">
                    {profData.name}
                </Typography>
                {profData.description && (
                    <IconButton
                        size="small"
                        onMouseEnter={(e) => handleTooltipOpen(e, profData.description)}
                        onMouseLeave={handleTooltipClose}
                        sx={{ ml: 0.5, p: 0.5 }}
                    >
                        <InfoIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>
        );
    };

    const renderProficiencies = (background: Background) => {
        if (!background['skill proficiencies']?.length) return null;
        
        return (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {background['skill proficiencies'].map((prof) => renderProficiency(prof))}
            </Box>
        );
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* 顶部选项卡片 */}
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        选择背景
                    </Typography>
                    <Grid container spacing={2}>
                        {backgrounds.map((background) => (
                            <Grid item xs={12} sm={6} md={4} key={background.id}>
                                <Card
                                    sx={{
                                        cursor: 'pointer',
                                        bgcolor: selectedBackground?.id === background.id ? 'primary.main' : 'background.paper',
                                        color: selectedBackground?.id === background.id ? 'primary.contrastText' : 'text.primary',
                                        '&:hover': {
                                            bgcolor: selectedBackground?.id === background.id ? 'primary.dark' : 'action.hover',
                                        },
                                    }}
                                    onClick={() => handleBackgroundSelect(background)}
                                >
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {background.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>

                {/* 中间描述卡片 */}
                {selectedBackground && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            {selectedBackground.name}
                        </Typography>
                        <Typography variant="body1" paragraph>
                            {selectedBackground.description}
                        </Typography>
                        
                        {/* 熟练项 */}
                        {selectedBackground['skill proficiencies'] && selectedBackground['skill proficiencies'].length > 0 && (
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h6" gutterBottom>
                                    熟练项
                                </Typography>
                                {renderProficiencies(selectedBackground)}
                            </Box>
                        )}
                    </Paper>
                )}

                {/* 底部特性卡片 */}
                {selectedBackground && selectedBackground.features && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            特性
                        </Typography>
                        {selectedBackground.features.map((feature, index) => (
                            <Box key={index} sx={{ mb: 2 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    {feature.name}
                                </Typography>
                                <Typography variant="body1">
                                    {feature.description}
                                </Typography>
                            </Box>
                        ))}
                    </Paper>
                )}

                {/* 装备卡片 */}
                {selectedBackground && selectedBackground.equipment && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            起始装备
                        </Typography>
                        {selectedBackground.equipment.map((item, index) => (
                            <Typography key={index} variant="body1">
                                {item.name} × {item.quantity}
                                {item.description && ` - ${item.description}`}
                            </Typography>
                        ))}
                    </Paper>
                )}

                <ClickAwayListener onClickAway={handleClickAway}>
                    <Popper
                        open={tooltipState.open}
                        anchorEl={tooltipState.anchorEl}
                        placement="right"
                        sx={{ zIndex: 1000 }}
                        transition
                        modifiers={[
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, 8],
                                },
                            },
                            {
                                name: 'flip',
                                enabled: true,
                            },
                            {
                                name: 'preventOverflow',
                                enabled: true,
                                options: {
                                    boundariesElement: 'viewport',
                                },
                            },
                        ]}
                    >
                        {({ TransitionProps }) => (
                            <Grow {...TransitionProps}>
                                <Paper elevation={3} sx={{ p: 2, maxWidth: 300 }}>
                                    <Typography>{tooltipState.text}</Typography>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </ClickAwayListener>
            </Box>
        </Box>
    );
};

export default BackgroundSelection;
