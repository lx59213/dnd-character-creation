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

type AllocationMethod = 'pointBuy' | 'standardArray' | 'roll';

interface AbilityScoreState {
    scores: Record<AbilityName, number>;
    remainingPoints: number;
    method: AllocationMethod;
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
        if (method === 'roll') {
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

export const AbilityScoreAllocation: React.FC = () => {
    const { character, updateCharacter } = useCharacterContext();
    const [abilityService] = useState(() => new AbilityService(GameDataService.getInstance()));
    const [loading, setLoading] = useState(true);
    const [allocationMethod, setAllocationMethod] = useState<AllocationMethod>('pointBuy');
    
    // 计算已使用的点数
    const calculateUsedPoints = (scores: Record<AbilityName, number>) => {
        let usedPoints = 0;
        Object.values(scores).forEach(score => {
            if (score > 8) {
                usedPoints += abilityService.calculateRelativeCost(score);
            }
        });
        return usedPoints;
    };

    // 初始化状态时计算正确的剩余点数
    const [abilityState, setAbilityState] = useState<AbilityScoreState>(() => {
        const baseScores = character.baseAbilityScores || {
            strength: 8,
            dexterity: 8,
            constitution: 8,
            intelligence: 8,
            wisdom: 8,
            charisma: 8
        };
        const usedPoints = calculateUsedPoints(baseScores);
        return {
            scores: baseScores,
            remainingPoints: 27 - usedPoints,
            method: 'pointBuy'
        };
    });
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
                const usedPoints = calculateUsedPoints(character.baseAbilityScores);
                setAbilityState(prev => ({
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
            const usedPoints = calculateUsedPoints(character.baseAbilityScores);
            setAbilityState(prev => ({
                ...prev,
                scores: character.baseAbilityScores,
                remainingPoints: 27 - usedPoints
            }));
        }
    }, [character.baseAbilityScores]);

    const updateAbilityScores = (newScores: Record<AbilityName, number>) => {
        // 只在点数购买模式下进行范围检查
        if (abilityState.method === 'pointBuy') {
            const validScores = { ...newScores };
            Object.entries(validScores).forEach(([ability, value]) => {
                if (value < 8) validScores[ability as AbilityName] = 8;
                if (value > 15) validScores[ability as AbilityName] = 15;
            });
            setAbilityState(prev => ({
                ...prev,
                scores: validScores
            }));
        } else {
            setAbilityState(prev => ({
                ...prev,
                scores: newScores
            }));
        }
    };

    const handleMethodChange = useCallback((method: AllocationMethod) => {
        // 保存当前状态
        const currentScores = { ...abilityState.scores };
        
        // 切换方法
        setAllocationMethod(method);
        
        // 重置服务状态
        if (abilityService) {
            abilityService.resetState();
        }

        // 根据新方法初始化状态
        if (method === 'pointBuy') {
            setAbilityState(prev => ({
                ...prev,
                method: 'pointBuy',
                remainingPoints: 27,
                scores: currentScores
            }));
        } else if (method === 'standardArray') {
            const standardScores = {
                strength: 0,
                dexterity: 0,
                constitution: 0,
                intelligence: 0,
                wisdom: 0,
                charisma: 0
            };
            setAbilityState(prev => ({
                ...prev,
                method: 'standardArray',
                scores: standardScores
            }));
        } else {
            // 投点法保持当前分数
            setAbilityState(prev => ({
                ...prev,
                method: 'roll',
                scores: currentScores
            }));
        }
    }, [abilityService, abilityState.scores]);

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
        setAbilityState({
            scores: initialScores,
            remainingPoints: 27,
            method: allocationMethod
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
            ...abilityState.scores,
            [ability]: newValue
        };

        // 计算最终属性值（包含种族加值）
        const finalScores = calculateFinalAbilityScores(newBaseScores, character.race, character.subrace);
        
        if (allocationMethod === 'standardArray') {
            setAbilityState(prev => ({
                ...prev,
                scores: newBaseScores
            }));
        } else if (allocationMethod === 'pointBuy') {
            if (abilityService) {
                try {
                    abilityService.buyAbilityScore(ability, newValue);
                    const pointBuyState = abilityService.getPointBuyState();
                    setAbilityState(prev => ({
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
            setAbilityState(prev => ({
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
        setAbilityState(prev => ({
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
        const newScores = { ...abilityState.scores };
        newScores[ability] = value;

        setAbilityState(prev => ({
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
        const newScores = { ...abilityState.scores };
        newScores[ability] = value;
        updateAbilityScores(newScores);
    };

    const renderMethodSelector = () => (
        <Box sx={{ mb: 2 }}>
            <ButtonGroup variant="contained" color="primary">
                <Button
                    onClick={() => handleMethodChange('pointBuy')}
                    variant={allocationMethod === 'pointBuy' ? 'contained' : 'outlined'}
                >
                    购点法
                </Button>
                <Button
                    onClick={() => handleMethodChange('standardArray')}
                    variant={allocationMethod === 'standardArray' ? 'contained' : 'outlined'}
                >
                    标准数组
                </Button>
                <Button
                    onClick={() => handleMethodChange('roll')}
                    variant={allocationMethod === 'roll' ? 'contained' : 'outlined'}
                >
                    投点法
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
        switch (allocationMethod) {
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
                                    value={abilityState.scores[ability]}
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
                                        value={abilityState.scores[ability]}
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
                                                disabled={usedScores.has(score) && abilityState.scores[ability] !== score}
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
                                    value={abilityState.scores[ability]}
                                    onChange={(newValue) => handleScoreChange(ability, newValue)}
                                    method="roll"
                                    remainingPoints={0}
                                />
                            </Grid>
                        ))}
                    </Grid>
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
