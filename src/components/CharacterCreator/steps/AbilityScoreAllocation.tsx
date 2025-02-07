import React, { useState, useEffect, useCallback } from 'react';
import { 
    Box, 
    Grid, 
    Typography, 
    Paper, 
    Button, 
    Tooltip, 
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Divider,
    Select,
    MenuItem,
    Chip,
    CircularProgress,
    ButtonGroup,
    FormControl,
    InputLabel,
    FormHelperText,
    SelectChangeEvent
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AbilityService } from '../../../services/AbilityService';
import { AbilityName, AbilityScores, Character } from '../../../types/character';
import { Race, RaceData, AbilityScoreIncrease, Subrace } from '../../../types/race';
import { useCharacterContext } from '../context';
import { GameDataService } from '../../../services/GameDataService';
import RefreshIcon from '@mui/icons-material/Refresh';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';

// 样式化组件
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: '#ffffff',
    color: '#000000',
    border: '1px solid #e0e0e0'
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)'
    },
    '&.Mui-disabled': {
        opacity: 0.5
    }
}));

const AllocationMethodSelect = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '& .MuiButton-root': {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));

const MethodDescription = {
    pointBuy: {
        title: '购点法',
        description: '从27点中分配点数。8-15分的属性值花费：8(0), 9(1), 10(2), 11(3), 12(4), 13(5), 14(7), 15(9)',
        min: 8,
        max: 15
    },
    standardArray: {
        title: '标准数组',
        description: '使用标准六个数值：15, 14, 13, 12, 10, 8，分配给不同属性',
        min: 8,
        max: 15
    },
    roll: {
        title: '投点法',
        description: '为每个属性投4d6取最高3个数字之和',
        min: 3,
        max: 18
    },
    destiny: {
        title: '天命投点',
        description: '进行多次天命投点，选择最合适的结果',
        min: 3,
        max: 18
    }
};

const LightDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    '& .MuiDialogTitle-root': {
        backgroundColor: '#f5f5f5'
    }
}));

const EditButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
    margin: theme.spacing(1),
}));

const ABILITY_NAMES: AbilityName[] = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
];

const ABILITY_LABELS: Record<AbilityName, string> = {
    strength: '力量',
    dexterity: '敏捷',
    constitution: '体质',
    intelligence: '智力',
    wisdom: '感知',
    charisma: '魅力'
};

const ABILITY_DISPLAY_NAMES: Record<AbilityName, string> = {
    strength: '力量',
    dexterity: '敏捷',
    constitution: '体质',
    intelligence: '智力',
    wisdom: '感知',
    charisma: '魅力'
};

const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8];

type AllocationMethod = 'pointBuy' | 'standardArray' | 'roll' | 'destiny';

interface AbilityScoreState {
    scores: Record<AbilityName, number>;
    remainingPoints: number;
    method: AllocationMethod;
    destinyRolls: {
        results: { scores: number[]; total: number; }[];
        selectedSet: number | null;
    };
    destinyTimes: number;
}

interface AbilityStateUpdate {
    scores: Record<AbilityName, number>;
    method: AllocationMethod;
}

const AbilityScoreInput: React.FC<{
    ability: AbilityName;
    value: number;
    onChange: (value: number) => void;
    method: AllocationMethod;
    remainingPoints: number;
}> = ({ ability, value, onChange, method, remainingPoints }) => {
    const { character } = useCharacterContext();
    const [abilityService] = useState(() => new AbilityService(GameDataService.getInstance()));

    // 计算最终值和修正值
    const getFinalValueAndModifier = () => {
        const baseScores = { ...(character.baseAbilityScores || {}) };
        baseScores[ability] = value;
        
        const finalValue = abilityService.calculateFinalAbilityScore(
            ability,
            value,
            character.race,
            character.subrace
        );
        const modifier = Math.floor((finalValue - 10) / 2);
        return { finalValue, modifier };
    };

    const { finalValue, modifier } = getFinalValueAndModifier();

    const renderControls = () => {
        if (method === 'roll' || method === 'destiny') {
            return null;
        }

        return (
            <>
                <IconButton
                    size="small"
                    onClick={() => onChange(value - 1)}
                    disabled={value <= 8 || method === 'standardArray'}
                >
                    <RemoveIcon />
                </IconButton>
                <IconButton
                    size="small"
                    onClick={() => onChange(value + 1)}
                    disabled={value >= 15 || method === 'standardArray' || (method === 'pointBuy' && remainingPoints <= 0)}
                >
                    <AddIcon />
                </IconButton>
            </>
        );
    };

    return (
        <StyledPaper>
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>{ABILITY_LABELS[ability]}</Typography>
                    {renderControls()}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ color: '#d4af37' }}>{value}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {finalValue !== value && (
                            <Typography variant="body2" sx={{ mr: 1 }}>
                                →{finalValue}
                            </Typography>
                        )}
                        <Chip
                            label={modifier >= 0 ? `+${modifier}` : modifier}
                            color={modifier >= 0 ? 'success' : 'error'}
                            size="small"
                        />
                    </Box>
                </Box>
            </Box>
        </StyledPaper>
    );
};

const calculateUsedPoints = (scores: Record<AbilityName, number>, abilityService: AbilityService): number => {
    let usedPoints = 0;
    Object.values(scores).forEach(score => {
        if (score > 8) {
            usedPoints += abilityService.calculateRelativeCost(score);
        }
    });
    return usedPoints;
};

export const AbilityScoreAllocation: React.FC = () => {
    const { character, updateCharacter } = useCharacterContext();
    const [abilityService] = useState(() => new AbilityService(GameDataService.getInstance()));
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState<AbilityScoreState>(() => {
        // 从character中恢复状态
        const savedState = character.abilityAllocationState as AbilityScoreState;
        if (savedState) {
            return savedState;
        }
        
        // 如果没有保存的状态，使用默认值
        return {
            scores: character.baseAbilityScores || {
                strength: 8,
                dexterity: 8,
                constitution: 8,
                intelligence: 8,
                wisdom: 8,
                charisma: 8
            },
            remainingPoints: 27,
            method: 'pointBuy',
            destinyRolls: {
                results: [],
                selectedSet: null
            },
            destinyTimes: 3
        };
    });

    useEffect(() => {
        updateCharacter({
            ...character,
            abilityAllocationState: state,
            baseAbilityScores: state.scores
        });
    }, [state]);

    const [error, setError] = useState<string | null>(null);
    const [standardArrayAssigned, setStandardArrayAssigned] = useState<Record<AbilityName, number | null>>({
        strength: null,
        dexterity: null,
        constitution: null,
        intelligence: null,
        wisdom: null,
        charisma: null
    });

    useEffect(() => {
        const initializeAbilityService = async () => {
            await abilityService.initialize();

            // 如果角色已有属性值，恢复状态
            if (character.baseAbilityScores) {
                const usedPoints = calculateUsedPoints(character.baseAbilityScores, abilityService);
                setState(prev => ({
                    ...prev,
                    scores: character.baseAbilityScores,
                    remainingPoints: 27 - usedPoints
                }));
            }
            setLoading(false);
        };
        initializeAbilityService();
    }, []);

    useEffect(() => {
        if (character.baseAbilityScores) {
            const usedPoints = calculateUsedPoints(character.baseAbilityScores, abilityService);
            setState(prev => ({
                ...prev,
                scores: character.baseAbilityScores,
                remainingPoints: 27 - usedPoints
            }));
        }
    }, [character.baseAbilityScores]);

    const updateAbilityScores = (newScores: Record<AbilityName, number>) => {
        // 只在点数购买模式下进行范围检查
        if (state.method === 'pointBuy') {
            const validScores = { ...newScores };
            Object.entries(validScores).forEach(([ability, value]) => {
                if (value < 8) validScores[ability as AbilityName] = 8;
                if (value > 15) validScores[ability as AbilityName] = 15;
            });
            setState(prev => ({
                ...prev,
                scores: validScores
            }));
        } else {
            setState(prev => ({
                ...prev,
                scores: newScores
            }));
        }
    };

    const handleMethodChange = useCallback((method: AllocationMethod) => {
        // 如果切换到相同的方法，不做任何操作
        if (method === state.method) return;

        // 保存所有当前状态
        const currentState = {
            scores: { ...state.scores },
            destinyRolls: { ...state.destinyRolls },
            remainingPoints: state.remainingPoints,
            standardArrayState: { ...standardArrayAssigned }
        };
        
        // 切换方法，保持各自的状态
        setState(prev => ({
            ...prev,
            method: method,
            // 根据方法恢复对应的状态
            ...(method === 'pointBuy' && {
                scores: currentState.scores,
                remainingPoints: currentState.remainingPoints
            }),
            ...(method === 'standardArray' && {
                scores: currentState.scores
            }),
            ...(method === 'destiny' && {
                scores: currentState.scores,
                destinyRolls: currentState.destinyRolls
            })
        }));
    }, [state.method, state.scores, state.destinyRolls, state.remainingPoints, standardArrayAssigned]);

    const resetAbilityScores = () => {
        const initialScores = {
            strength: 8,
            dexterity: 8,
            constitution: 8,
            intelligence: 8,
            wisdom: 8,
            charisma: 8
        };
        
        // 重置本地状态
        setState({
            scores: initialScores,
            remainingPoints: 27,
            method: state.method,
            destinyRolls: {
                results: [],
                selectedSet: null
            },
            destinyTimes: 3
        });

        // 重置服务状态
        if (abilityService) {
            abilityService.resetState();
        }

        // 计算并更新最终属性值
        const finalScores = calculateFinalAbilityScores(initialScores, character.race, character.subrace);
        
        // 更新角色状态
        updateCharacter({
            ...character,
            baseAbilityScores: initialScores,
            finalAbilityScores: finalScores
        });
    };

    const handleScoreChange = (ability: AbilityName, newValue: number) => {
        const newBaseScores = {
            ...state.scores,
            [ability]: newValue
        };

        // 计算最终属性值（包含种族加值）
        const finalScores = calculateFinalAbilityScores(newBaseScores, character.race, character.subrace);
        
        if (state.method === 'standardArray') {
            setState(prev => ({
                ...prev,
                scores: newBaseScores
            }));
        } else if (state.method === 'pointBuy') {
            if (abilityService) {
                try {
                    abilityService.buyAbilityScore(ability, newValue);
                    const pointBuyState = abilityService.getPointBuyState();
                    setState(prev => ({
                        ...prev,
                        scores: newBaseScores,
                        remainingPoints: pointBuyState.pointsAvailable
                    }));
                } catch (error) {
                    console.error('Error buying ability score:', error);
                    return;
                }
            }
        } else {
            // 投点法直接更新分数
            setState(prev => ({
                ...prev,
                scores: newBaseScores
            }));
        }

        // 更新角色状态
        updateCharacter({
            ...character,
            baseAbilityScores: newBaseScores,
            finalAbilityScores: finalScores
        });
    };

    const handleRollClick = () => {
        const newScores = abilityService.rollAbilityScores();
        setState(prev => ({
            ...prev,
            method: 'roll',
            scores: newScores
        }));

        // 更新角色状态
        const finalScores = calculateFinalAbilityScores(newScores, character.race, character.subrace);
        updateCharacter({
            ...character,
            baseAbilityScores: newScores,
            finalAbilityScores: finalScores
        });
    };

    const handleRollDestiny = useCallback(() => {
        const results = abilityService.rollDestiny(state.destinyTimes);
        // 重置前端状态
        setState(prev => ({
            ...prev,
            scores: {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0
            },
            destinyRolls: {
                results,
                selectedSet: null
            }
        }));
    }, [abilityService, state.destinyTimes]);

    const handleSelectDestinySet = useCallback((index: number) => {
        abilityService.selectDestinySet(index);
        setState(prev => ({
            ...prev,
            destinyRolls: {
                ...prev.destinyRolls,
                selectedSet: index
            }
        }));
    }, [abilityService]);

    const handleAllocateDestinyScore = useCallback((ability: AbilityName, score: number) => {
        try {
            // 如果选择了"未分配"选项
            if (score === 0) {
                const newBaseScores = {
                    ...state.scores,
                    [ability]: 0
                };
                
                const finalScores = calculateFinalAbilityScores(newBaseScores, character.race, character.subrace);
                
                setState(prev => ({
                    ...prev,
                    scores: newBaseScores
                }));
                
                updateCharacter({
                    ...character,
                    baseAbilityScores: newBaseScores,
                    finalAbilityScores: finalScores
                });
                return;
            }

            // 正常分配属性值
            abilityService.allocateDestinyScore(ability, score);
            const newState = abilityService.getDestinyRollState();
            
            const newBaseScores = {
                ...state.scores,
                [ability]: score
            };
            
            const finalScores = calculateFinalAbilityScores(newBaseScores, character.race, character.subrace);
            
            setState(prev => ({
                ...prev,
                scores: newBaseScores
            }));
            
            updateCharacter({
                ...character,
                baseAbilityScores: newBaseScores,
                finalAbilityScores: finalScores
            });
            
        } catch (error) {
            console.error(error);
        }
    }, [abilityService, character, state.scores, updateCharacter]);

    const calculateFinalAbilityScores = (
        baseScores: Record<AbilityName, number>,
        race: RaceData | null,
        subrace: Subrace | null
    ): Record<AbilityName, number> => {
        const finalScores = { ...baseScores };

        // 应用种族加值
        if (race?.abilityScoreIncrease) {
            Object.entries(race.abilityScoreIncrease).forEach(([ability, increase]) => {
                if (ability in finalScores && typeof increase === 'number') {
                    finalScores[ability as AbilityName] += increase;
                }
            });
        }

        // 应用亚种加值
        if (subrace?.abilityScoreIncrease) {
            Object.entries(subrace.abilityScoreIncrease).forEach(([ability, increase]) => {
                if (ability in finalScores && typeof increase === 'number') {
                    finalScores[ability as AbilityName] += increase;
                }
            });
        }

        return finalScores;
    };

    const handleStandardArrayChange = (ability: AbilityName, value: number) => {
        abilityService.setStandardArrayValue(ability, value);
        const newScores = { ...state.scores };
        newScores[ability] = value;

        setState(prev => ({
            ...prev,
            method: 'standardArray',
            scores: newScores
        }));

        // 更新角色状态
        const finalScores = calculateFinalAbilityScores(newScores, character.race, character.subrace);
        updateCharacter({
            ...character,
            baseAbilityScores: newScores,
            finalAbilityScores: finalScores
        });
    };

    const handleStandardArrayAssign = (ability: AbilityName, value: number) => {
        // 检查值是否已被使用
        const isValueUsed = Object.values(standardArrayAssigned).includes(value);
        if (isValueUsed) {
            return;
        }

        const newAssigned = { ...standardArrayAssigned };
        newAssigned[ability] = value;
        setStandardArrayAssigned(newAssigned);

        // 更新实际的属性值
        const newScores = { ...state.scores };
        newScores[ability] = value;
        updateAbilityScores(newScores);
    };

    const renderMethodSelector = () => (
        <Box sx={{ mb: 2 }}>
            <ButtonGroup variant="contained" color="primary">
                <Button
                    onClick={() => handleMethodChange('pointBuy')}
                    variant={state.method === 'pointBuy' ? 'contained' : 'outlined'}
                >
                    购点法
                </Button>
                <Button
                    onClick={() => handleMethodChange('standardArray')}
                    variant={state.method === 'standardArray' ? 'contained' : 'outlined'}
                >
                    标准数组
                </Button>
                <Button
                    onClick={() => handleMethodChange('roll')}
                    variant={state.method === 'roll' ? 'contained' : 'outlined'}
                >
                    投点法
                </Button>
                <Button
                    onClick={() => handleMethodChange('destiny')}
                    variant={state.method === 'destiny' ? 'contained' : 'outlined'}
                >
                    天命投点
                </Button>
            </ButtonGroup>
            <Button
                sx={{ ml: 2 }}
                variant="outlined"
                onClick={resetAbilityScores}
            >
                重置
            </Button>
        </Box>
    );

    const renderAllocationUI = () => {
        switch (state.method) {
            case 'pointBuy': {
                const { scores, pointsAvailable } = abilityService.getPointBuyState();
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{ color: '#d4af37' }}>剩余点数: {pointsAvailable}</Typography>
                        </Grid>
                        {ABILITY_NAMES.map((ability) => (
                            <Grid item xs={12} sm={6} md={4} key={ability}>
                                <AbilityScoreInput
                                    ability={ability}
                                    value={state.scores[ability]}
                                    onChange={(newValue) => handleScoreChange(ability, newValue)}
                                    method="pointBuy"
                                    remainingPoints={pointsAvailable}
                                />
                            </Grid>
                        ))}
                    </Grid>
                );
            }
            case 'standardArray': {
                const { availableScores, usedScores } = abilityService.getStandardArrayState();
                const usedScoresList = Array.from(usedScores);
                const availableScoresList = availableScores.filter(score => 
                    !usedScoresList.includes(score) || 
                    score === 0  // 允许重置为0
                );

                return (
                    <Grid container spacing={2}>
                        {ABILITY_NAMES.map((ability) => (
                            <Grid item xs={12} sm={6} md={4} key={ability}>
                                <FormControl fullWidth>
                                    <InputLabel>{ABILITY_LABELS[ability]}</InputLabel>
                                    <Select
                                        value={state.scores[ability]}
                                        onChange={(e) => handleStandardArrayChange(ability, Number(e.target.value))}
                                        label={ABILITY_LABELS[ability]}
                                    >
                                        <MenuItem value={0}>
                                            <em>未选择</em>
                                        </MenuItem>
                                        {availableScores.map((score: number) => (
                                            <MenuItem 
                                                key={score} 
                                                value={score}
                                                disabled={usedScores.has(score) && state.scores[ability] !== score}
                                            >
                                                {score}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        ))}
                    </Grid>
                );
            }
            case 'roll': {
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6" sx={{ flexGrow: 1 }}>投点法</Typography>
                                <Button
                                    variant="contained"
                                    onClick={handleRollClick}
                                    startIcon={<RefreshIcon />}
                                >
                                    重新投点
                                </Button>
                            </Box>
                        </Grid>
                        {ABILITY_NAMES.map((ability) => (
                            <Grid item xs={12} sm={6} md={4} key={ability}>
                                <AbilityScoreInput
                                    ability={ability}
                                    value={state.scores[ability]}
                                    onChange={(newValue) => handleScoreChange(ability, newValue)}
                                    method="roll"
                                    remainingPoints={0}
                                />
                            </Grid>
                        ))}
                    </Grid>
                );
            }
            case 'destiny': {
                return (
                    <Box mb={2}>
                        <Typography variant="h6" gutterBottom>
                            天命投点
                        </Typography>
                        <Box mb={2}>
                            <ButtonGroup variant="outlined" color="primary">
                                {[1, 3, 5].map(times => (
                                    <Button
                                        key={times}
                                        onClick={() => setState(prev => ({ ...prev, destinyTimes: times }))}
                                        variant={state.destinyTimes === times ? 'contained' : 'outlined'}
                                    >
                                        {times}次天命
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </Box>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleRollDestiny}
                            startIcon={<RefreshIcon />}
                        >
                            投掷天命
                        </Button>
                        
                        {state.destinyRolls.results.length > 0 && (
                            <Grid container spacing={2} sx={{ mt: 2 }}>
                                {state.destinyRolls.results.map((result, index) => (
                                    <Grid item xs={12} key={index}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                cursor: 'pointer',
                                                border: state.destinyRolls.selectedSet === index ? '2px solid #1976d2' : '1px solid #e0e0e0'
                                            }}
                                            onClick={() => handleSelectDestinySet(index)}
                                        >
                                            <Typography variant="subtitle1" gutterBottom>
                                                第 {index + 1} 次天命 (总和: {result.total})
                                            </Typography>
                                            <Box display="flex" gap={1}>
                                                {result.scores.map((score, scoreIndex) => (
                                                    <Chip
                                                        key={scoreIndex}
                                                        label={score}
                                                        color={state.destinyRolls.selectedSet === index ? 'primary' : 'default'}
                                                    />
                                                ))}
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        )}

                        {(() => {
                            const selectedSet = state.destinyRolls.selectedSet;
                            if (selectedSet === null) return null;
                            
                            const selectedResult = state.destinyRolls.results[selectedSet];
                            if (!selectedResult) return null;

                            return (
                                <Grid container spacing={2} sx={{ mt: 2 }}>
                                    {ABILITY_NAMES.map(ability => (
                                        <Grid item xs={12} sm={6} md={4} key={ability}>
                                            <Paper sx={{ p: 2 }}>
                                                <Typography variant="subtitle1" gutterBottom>
                                                    {ABILITY_LABELS[ability]}
                                                </Typography>
                                                <Select
                                                    fullWidth
                                                    value={state.scores[ability] || ''}
                                                    onChange={(e) => handleAllocateDestinyScore(ability, Number(e.target.value))}
                                                >
                                                    <MenuItem value={0}>
                                                        <em>未分配</em>
                                                    </MenuItem>
                                                    {selectedResult.scores.map((score: number, index: number) => {
                                                        const canAllocate = abilityService.canAllocateScore(
                                                            ability,
                                                            score,
                                                            selectedSet
                                                        );
                                                        
                                                        return (
                                                            <MenuItem
                                                                key={index}
                                                                value={score}
                                                                disabled={!canAllocate}
                                                            >
                                                                {score}
                                                            </MenuItem>
                                                        );
                                                    })}
                                                </Select>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            );
                        })()}
                    </Box>
                );
            }
            default:
                return null;
        }
    };

    if (loading || !abilityService) {
        return <Typography>Loading ability system...</Typography>;
    }

    const pointBuyState = abilityService.getPointBuyState();
    const standardArrayState = abilityService.getStandardArrayState();
    const standardArray = standardArrayState.availableScores;
    const usedValues = standardArrayState.usedScores;

    return (
        <Box>
            {renderMethodSelector()}
            {renderAllocationUI()}
        </Box>
    );
};
