import React, { useEffect, useState, useRef, useCallback } from 'react';
import {
    Box,
    Typography,
    Slider,
    Paper,
    Grid,
    List,
    ListItem,
    ListItemText,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    TextField,
    Alert,
    Snackbar
} from '@mui/material';
import { useCharacterContext } from '../context';
import { LevelingService } from '../../../services/LevelingService';
import { GameDataService } from '../../../services/GameDataService';
import { ASISelection } from './ASISelection';
import { 
    ASISelectionState, 
    AbilityName, 
    AbilityScores,
} from '../../../types/types-definition';
import { Feature, ASISystemState, ASIChoice, Character } from '../../../types/character';
import { FeatId, GameFeat, getFeatId } from '../../../types/feat';

interface FeatureDialogProps {
    open: boolean;
    feature: string;
    onClose: () => void;
}

const FeatureDialog: React.FC<FeatureDialogProps> = ({ open, feature, onClose }) => {
    const gameDataService = GameDataService.getInstance();
    const featureData = gameDataService.getFeature(feature);

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{featureData?.displayName || feature}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {featureData?.description || '特性描述暂未提供'}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>关闭</Button>
            </DialogActions>
        </Dialog>
    );
};

interface FeatPrerequisites {
    ability?: Record<AbilityName, number>;
    proficiency?: string[];
}

interface Feat {
    name: string;
    displayName: string;
    description: string;
    prerequisites?: FeatPrerequisites;
    effects: any;
}

// 计算新的属性值
const calculateNewAbilityScores = (baseScores: AbilityScores, choices: Record<number, ASIChoice>): AbilityScores => {
    const newScores = { ...baseScores };
    
    Object.values(choices).forEach(choice => {
        if (choice.abilities) {
            Object.entries(choice.abilities).forEach(([ability, increase]) => {
                const abilityName = ability as AbilityName;
                newScores[abilityName] = Math.min(20, (newScores[abilityName] || 0) + (increase || 0));
            });
        }
    });
    
    return newScores;
};

// 提取选择的专长
const extractSelectedFeats = (choices: Record<number, ASIChoice>): Record<number, string> => {
    const feats: Record<number, string> = {};
    
    Object.entries(choices).forEach(([level, choice]) => {
        if (choice.feat) {
            feats[parseInt(level)] = choice.feat;
        }
    });
    
    return feats;
};

const LevelSelection: React.FC = () => {
    const {
        character,
        updateCharacter,
        updateTemporaryASI,
        confirmASI
    } = useCharacterContext();
    const [experiencePoints, setExperiencePoints] = useState<string>(character.experiencePoints?.toString() || '0');
    const [error, setError] = useState<string | null>(null);
    const [selectedLevel, setSelectedLevel] = useState<number>(character.level || 1);
    const [asiSelectionText, setAsiSelectionText] = useState<string>('');
    const [pendingASIs, setPendingASIs] = useState<{level: number; completed: boolean}[]>([]);
    
    // 使用 ref 来跟踪是否是用户操作导致的更新
    const isUserAction = useRef(false);
    // 使用 ref 来跟踪职业变化
    const previousClassRef = useRef(character.classes?.[0]?.name);
    
    // ASI 系统状态
    const [asiSystem, setASISystem] = useState<ASISystemState>(() => ({
        choices: character.asiSystem?.choices || {},
        completed: character.asiSystem?.completed || {}
    }));

    // 同步全局状态变化到本地
    useEffect(() => {
        if (!isUserAction.current && character.asiSystem) {
            setASISystem(character.asiSystem);
        }
        isUserAction.current = false;
    }, [character.asiSystem]);

    // 更新全局 ASI 状态
    const updateASISystem = useCallback((newASISystem: ASISystemState) => {
        isUserAction.current = true;
        const newCharacter: Partial<Character> = {
            asiSystem: newASISystem,
            finalAbilityScores: calculateNewAbilityScores(character.finalAbilityScores, newASISystem.choices),
            selectedFeats: extractSelectedFeats(newASISystem.choices)
        };
        updateCharacter(newCharacter);
    }, [updateCharacter, character.finalAbilityScores]);

    // 获取职业的ASI等级
    const getClassASILevels = useCallback(async (className: string): Promise<number[]> => {
        try {
            const gameDataService = GameDataService.getInstance();
            await gameDataService.ensureDataLoaded();
            const classData = gameDataService.getClass(className);
            return classData?.abilityScoreImprovements?.levels || [];
        } catch (error) {
            console.error('Error getting ASI levels:', error);
            return [];
        }
    }, []);

    // 检查当前等级是否有ASI
    const hasASIAtLevel = useCallback(async (level: number): Promise<boolean> => {
        try {
            if (!character.classes || character.classes.length === 0) return false;
            const characterClass = character.classes[0];
            const asiLevels = await getClassASILevels(characterClass.name);
            return Array.isArray(asiLevels) && asiLevels.includes(level);
        } catch (error) {
            console.error('Error checking ASI at level:', error);
            return false;
        }
    }, [character.classes, getClassASILevels]);

    // 初始化待处理的ASI
    useEffect(() => {
        const initializeASIs = async () => {
            try {
                if (!character.classes?.[0]?.name) return;
                
                const asiLevels = await getClassASILevels(character.classes[0].name);
                if (!Array.isArray(asiLevels)) return;

                const newPendingASIs = asiLevels
                    .filter((level: number) => level <= selectedLevel)
                    .map((level: number) => ({
                        level,
                        completed: false
                    }));
                setPendingASIs(newPendingASIs);
            } catch (error) {
                console.error('Error initializing ASIs:', error);
            }
        };

        initializeASIs();
    }, [selectedLevel, character.classes, getClassASILevels]);

    // 检查等级变化和职业变化
    useEffect(() => {
        const checkLevelChange = async () => {
            const currentClass = character.classes?.[0]?.name;
            
            // 如果职业发生变化，重置ASI系统和属性值
            if (currentClass !== previousClassRef.current) {
                console.log('职业变化，重置ASI系统和属性值', { current: currentClass, prev: previousClassRef.current });
                previousClassRef.current = currentClass;
                const newASISystem: ASISystemState = {
                    choices: {},
                    completed: {}
                };
                setASISystem(newASISystem);
                
                // 重置角色属性到基础值
                const resetCharacter: Partial<Character> = {
                    asiSystem: newASISystem,
                    finalAbilityScores: { ...character.baseAbilityScores }, // 重置为基础属性值
                    selectedFeats: {}
                };
                updateCharacter(resetCharacter);
                return;
            }

            // 获取当前职业的ASI等级
            let asiLevels: number[] = [];
            if (currentClass) {
                asiLevels = await getClassASILevels(currentClass);
            }
            
            // 检查是否需要重置ASI系统
            const shouldResetASI = () => {
                console.log('检查是否需要重置ASI', {
                    currentLevel: selectedLevel,
                    currentChoices: asiSystem.choices,
                    currentCompleted: asiSystem.completed
                });

                if (Object.keys(asiSystem.choices).length === 0) {
                    console.log('ASI选择为空，不需要重置');
                    return false;
                }
                
                // 只重置高于当前等级的ASI选择
                const choicesToReset = Object.entries(asiSystem.choices).filter(([level, choice]) => {
                    const levelNum = parseInt(level);
                    const shouldReset = levelNum > selectedLevel;
                    console.log(`检查等级${levelNum}是否需要重置:`, {
                        currentLevel: selectedLevel,
                        shouldReset,
                        choice
                    });
                    return shouldReset;
                });

                console.log('需要重置的选择:', choicesToReset);

                if (choicesToReset.length === 0) {
                    console.log('没有需要重置的选择');
                    return false;
                }

                // 创建新的ASI系统状态，保留低于或等于当前等级的选择
                const newChoices: Record<number, ASIChoice> = {};
                const newCompleted: Record<number, boolean> = {};
                
                Object.entries(asiSystem.choices).forEach(([level, choice]) => {
                    const levelNum = parseInt(level);
                    console.log(`处理等级${levelNum}的选择:`, {
                        isKeeping: levelNum <= selectedLevel,
                        choice,
                        completed: asiSystem.completed[levelNum]
                    });
                    
                    if (levelNum <= selectedLevel) {
                        newChoices[levelNum] = choice;
                        newCompleted[levelNum] = asiSystem.completed[levelNum] || false;
                    }
                });

                console.log('重置后的ASI状态:', {
                    newChoices,
                    newCompleted,
                    baseScores: character.baseAbilityScores,
                    calculatedScores: calculateNewAbilityScores(character.baseAbilityScores, newChoices)
                });

                setASISystem({
                    choices: newChoices,
                    completed: newCompleted
                });

                // 更新角色属性
                const resetCharacter: Partial<Character> = {
                    asiSystem: {
                        choices: newChoices,
                        completed: newCompleted
                    },
                    finalAbilityScores: calculateNewAbilityScores(character.baseAbilityScores, newChoices),
                    selectedFeats: extractSelectedFeats(newChoices)
                };
                console.log('更新角色状态:', resetCharacter);
                
                updateCharacter(resetCharacter);

                return false; // 返回false因为我们已经处理了重置
            };

            if (shouldResetASI()) {
                console.log('等级变化，重置ASI系统和属性值');
                const newASISystem: ASISystemState = {
                    choices: {},
                    completed: {}
                };
                setASISystem(newASISystem);
                
                // 重置角色属性到基础值
                const resetCharacter: Partial<Character> = {
                    asiSystem: newASISystem,
                    finalAbilityScores: { ...character.baseAbilityScores }, // 重置为基础属性值
                    selectedFeats: {}
                };
                updateCharacter(resetCharacter);
            }
        };

        checkLevelChange();
    }, [character.classes, selectedLevel, asiSystem.choices, updateASISystem, character.baseAbilityScores, getClassASILevels]);

    const handleASICompleteWrapper = (level: number) => async (asiState: ASISelectionState) => {
        console.log('ASI selection completed for level:', level, 'with state:', asiState);
        
        // 先处理ASI完成
        await handleASIComplete(level, asiState);
        
        // 然后根据选择类型更新状态
        if (asiState.selectedChoice === 'standardASI' && asiState.selectedAbilities) {
            // 更新临时ASI
            updateTemporaryASI(asiState.selectedAbilities);
            // 确认ASI
            confirmASI();
        }
    };

    // 处理 ASI 完成
    const handleASIComplete = async (level: number, state: ASISelectionState) => {
        try {
            const currentClass = character.classes?.[0]?.name;
            const asiLevels = currentClass ? await getClassASILevels(currentClass) : [];
            
            if (!asiLevels.includes(level) || level > selectedLevel) {
                setError('当前等级或职业无法获得此属性值提升');
                return;
            }

            // 检查专长是否已被选择
            if (state.selectedFeat) {
                const gameDataService = GameDataService.getInstance();
                const feats = gameDataService.getFeats() as GameFeat[];
                const selectedFeat = feats.find(f => f.id === state.selectedFeat);
                
                const isAlreadySelected = Object.values(asiSystem.choices).some(choice => 
                    choice.feat === state.selectedFeat
                );

                if (isAlreadySelected) {
                    setError('该专长已被选择，请选择其他专长');
                    return;
                }
            }

            const updatedASISystem: ASISystemState = {
                ...asiSystem,
                choices: {
                    ...asiSystem.choices,
                    [level]: {
                        level,
                        abilities: state.selectedAbilities,
                        feat: state.selectedFeat || undefined
                    }
                },
                completed: {
                    ...asiSystem.completed,
                    [level]: true
                }
            };
            
            // 一次性更新所有状态
            const newCharacter: Partial<Character> = {
                asiSystem: updatedASISystem,
                finalAbilityScores: calculateNewAbilityScores(character.baseAbilityScores, updatedASISystem.choices),
                selectedFeats: extractSelectedFeats(updatedASISystem.choices)
            };
            
            setASISystem(updatedASISystem);
            updateCharacter(newCharacter);
            
        } catch (error) {
            console.error('Error in handleASIComplete:', error);
            setError('处理ASI选择时发生错误');
        }
    };

    const levelingService = LevelingService.getInstance();
    const gameDataService = GameDataService.getInstance();

    // 获取属性的中文名称
    const getAbilityDisplayName = (ability: string): string => {
        const abilityMap: Record<string, string> = {
            'strength': '力量',
            'dexterity': '敏捷',
            'constitution': '体质',
            'intelligence': '智力',
            'wisdom': '感知',
            'charisma': '魅力'
        };
        return abilityMap[ability.toLowerCase()] || ability;
    };

    // 更新角色属性
    const updateCharacterStats = (level: number) => {
        if (!character.classes || character.classes.length === 0) return;

        // 创建更新后的角色副本
        const updatedCharacter = { ...character };

        // 更新职业等级
        const updatedClasses = [...character.classes];
        updatedClasses[0] = {
            ...updatedClasses[0],
            level
        };
        updatedCharacter.classes = updatedClasses;

        // 更新基本属性
        updatedCharacter.level = level;
        // 更新经验值
        const xpTable = {
            1: 0, 2: 300, 3: 900, 4: 2700, 5: 6500, 6: 14000, 7: 23000, 8: 34000,
            9: 48000, 10: 64000, 11: 85000, 12: 100000, 13: 120000, 14: 140000,
            15: 165000, 16: 195000, 17: 225000, 18: 265000, 19: 305000, 20: 355000
        };
        updatedCharacter.experiencePoints = xpTable[level as keyof typeof xpTable] || 0;

        // 更新派生属性
        updatedCharacter.hitPoints = levelingService.calculateMaxHP(updatedCharacter);
        updatedCharacter.armorClass = levelingService.calculateAC(updatedCharacter);
        updatedCharacter.initiative = levelingService.calculateInitiative(updatedCharacter);
        updatedCharacter.speed = levelingService.calculateSpeed(updatedCharacter);
        updatedCharacter.proficiencyBonus = levelingService.getProficiencyBonus(updatedCharacter);

        // 初始化法术相关属性
        if (!updatedCharacter.spells) {
            updatedCharacter.spells = {
                knownSpells: [],
                preparedSpells: [],
                slots: {}
            };
        }

        // 检查是否为施法者并更新法术位
        const classData = gameDataService.getClass(updatedCharacter.classes[0].name);
        if (classData?.spellcasting?.type !== 'none') {
            updatedCharacter.spells.slots = levelingService.getSpellSlots(updatedCharacter);
        }

        // 更新特性
        const features: Feature[] = [];

        // 添加职业特性
        if (classData?.features) {
            const classFeatures = classData.features
                .filter(feature => feature.level <= level)
                .map(feature => ({
                    name: feature.name,
                    displayName: feature.displayName || feature.name,
                    description: feature.description
                }));
            features.push(...classFeatures);
        }

        // 添加种族特性
        if (character.race) {
            const raceData = gameDataService.getRace(character.race.name);
            if (raceData?.racialTraits) {
                const racialFeatures = raceData.racialTraits.map(trait => ({
                    name: trait.name,
                    displayName: trait.name,
                    description: trait.description
                }));
                features.push(...racialFeatures);
            }

            // 添加亚种特性
            if (character.subrace) {
                const subraceData = character.subrace;
                if (subraceData.traits) {
                    const subraceFeatures = subraceData.traits.map(trait => ({
                        name: trait.name,
                        displayName: trait.name,
                        description: trait.description
                    }));
                    features.push(...subraceFeatures);
                }
            }
        }

        // 保留ASI选择的专长
        const asiFeats = updatedCharacter.features?.filter(
            feature => feature.name.includes('ASI')
        ) || [];
        
        updatedCharacter.features = [...features, ...asiFeats];

        // 显示ASI选择结果
        if (asiFeats.length > 0) {
            asiFeats.forEach(feat => {
                const match = feat.name.match(/ASI: \+1 (\w+)/);
                if (match) {
                    const ability = match[1].toLowerCase();
                    setAsiSelectionText(prev => `${prev}${prev ? ', ' : ''}+1 ${getAbilityDisplayName(ability)}`);
                }
            });
        }

        updateCharacter(updatedCharacter);
    };

    const handleLevelChange = (_event: Event, value: number | number[], _activeThumb: number) => {
        const newLevel = Array.isArray(value) ? value[0] : value;
        setSelectedLevel(newLevel);
        updateCharacterStats(newLevel);
    };

    const MAX_ABILITY_SCORE = 20;

    const meetsPrerequisites = (feat: GameFeat): boolean => {
        if (!feat.prerequisites) return true;
        
        // 检查属性要求
        if (feat.prerequisites.ability) {
            for (const [ability, minValue] of Object.entries(feat.prerequisites.ability)) {
                const abilityScore = character.finalAbilityScores[ability as AbilityName] || 0;
                if (abilityScore < minValue) {
                    return false;
                }
            }
        }

        // 检查职业要求
        if (feat.prerequisites.proficiency) {
            const proficiencies = feat.prerequisites.proficiency;
            // TODO: 实现职业要求检查
        }

        return true;
    };

    const isAbilityScoreValid = (ability: AbilityName, increase: number): boolean => {
        const currentScore = character.finalAbilityScores[ability] || 0;
        return currentScore + increase <= MAX_ABILITY_SCORE;
    };

    const getAvailableFeats = () => {
        const gameDataService = GameDataService.getInstance();
        const feats = gameDataService.getFeats() as GameFeat[];
        
        // 获取所有已选择的专长ID
        const selectedFeatIds = Object.values(asiSystem.choices)
            .map(choice => choice.feat)
            .filter((feat): feat is string => feat !== undefined);

        return feats.map(feat => {
            const isSelected = selectedFeatIds.includes(feat.id);
            return {
            name: feat.displayName,  
            description: feat.description,
                disabled: !meetsPrerequisites(feat) || isSelected,
                id: feat.id,
                isSelected // 添加选中状态标记
            };
        });
    };

    const handleAbilityScoreChange = (ability: AbilityName, value: number) => {
        if (!isAbilityScoreValid(ability, value)) {
            return false;
        }
        return true;
    };

    const calculateLevelFromXP = (xp: number): number => {
        const levelingRules = levelingService.getLevelingRules();
        let level = 1;
        for (let i = 20; i >= 1; i--) {
            if (xp >= levelingRules.experiencePoints[i]) {
                level = i;
                break;
            }
        }
        return level;
    };

    const getRequiredXP = (level: number): number => {
        const levelingRules = levelingService.getLevelingRules();
        return levelingRules.experiencePoints[level] || 0;
    };

    const handleExperienceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setExperiencePoints(value);

        // 验证输入是否为有效数字
        const xp = parseInt(value);
        if (isNaN(xp) || xp < 0) {
            setError('请输入有效的经验值');
            return;
        }

        // 计算新等级并更新
        const newLevel = calculateLevelFromXP(xp);
        updateCharacterStats(newLevel);
        setError(null);
    };

    const renderDerivedStats = () => {
        // 获取各项属性的调整值
        const dexMod = Math.floor((character.finalAbilityScores.dexterity - 10) / 2);
        const conMod = Math.floor((character.finalAbilityScores.constitution - 10) / 2);
        
        // 获取职业数据
        const gameDataService = GameDataService.getInstance();
        const classData = character.classes?.[0] ? gameDataService.getClass(character.classes[0].name) : null;
        const hitDie = classData?.hitDie || 8;

        return (
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2">生命值上限</Typography>
                    <Typography variant="h6">{character.hitPoints}</Typography>
                    <Typography variant="caption" color="textSecondary">
                        {`基于生命骰(d${hitDie})、体质调整值(${conMod})和等级(${character.level})`}
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2">护甲等级</Typography>
                    <Typography variant="h6">{character.armorClass}</Typography>
                    <Typography variant="caption" color="textSecondary">
                        {`基础值10 + 敏捷调整值(${dexMod})`}
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2">先攻值</Typography>
                    <Typography variant="h6">{character.initiative}</Typography>
                    <Typography variant="caption" color="textSecondary">
                        {`等于敏捷调整值(${dexMod})`}
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Typography variant="subtitle2">速度</Typography>
                    <Typography variant="h6">{character.speed}</Typography>
                    <Typography variant="caption" color="textSecondary">
                        基于种族基础速度
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle2">熟练加值</Typography>
                    <Typography variant="h6">{character.proficiencyBonus}</Typography>
                    <Typography variant="caption" color="textSecondary">
                        {`基于角色等级(${character.level})`}
                    </Typography>
                </Grid>
            </Grid>
        );
    };

    const renderSpellSlots = () => {
        if (!character.spells?.slots) return null;

        return (
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">法术位</Typography>
                <Grid container spacing={1}>
                    {Object.entries(character.spells.slots).map(([level, slots]) => (
                        <Grid item key={level}>
                            <Paper sx={{ p: 1, textAlign: 'center' }}>
                                <Typography variant="caption">{level}环</Typography>
                                <Typography>{slots}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    };

    const renderFeatures = () => {
        const allFeatures = levelingService.getAllUnlockedFeatures(character);
        const gameDataService = GameDataService.getInstance();
        const classData = character.classes?.[0] ? gameDataService.getClass(character.classes[0].name) : null;
        const currentSubclass = character.classes?.[0]?.subclass;
        const subclassData = currentSubclass && classData ? classData.subclasses.find(sub => sub.name === currentSubclass) : null;
        
        const renderFeatureList = (features: any[], title: string) => {
            if (!features || features.length === 0) return null;
            
            return (
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 1 }}>
                        {title}
                    </Typography>
                    {features.map((feature, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                {feature.displayName || feature.name}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                {feature.description}
                            </Typography>
                            {feature.mechanicalEffect && (
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                                    {Array.isArray(feature.mechanicalEffect) 
                                        ? feature.mechanicalEffect.join('，') 
                                        : feature.mechanicalEffect}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            );
        };

        return (
            <Box>
                {subclassData && (
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 'bold', mb: 1 }}>
                            当前子职业：{subclassData.displayName}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>
                            {subclassData.description}
                        </Typography>
                    </Box>
                )}
                {renderFeatureList(allFeatures.race, '种族特性')}
                {renderFeatureList(allFeatures.class, '职业特性')}
                {renderFeatureList(allFeatures.subclass, '子职业特性')}
                {renderFeatureList(allFeatures.background, '背景特性')}
            </Box>
        );
    };

    const renderSpecialResources = () => {
        const gameDataService = GameDataService.getInstance();
        const classData = character.classes?.[0] ? gameDataService.getClass(character.classes[0].name) : null;
        const raceData = character.race ? gameDataService.getRace(character.race.name) : null;
        const subraceData = character.subrace && character.race ? gameDataService.getSubrace(character.race.name, character.subrace.name) : null;

        if (!classData && !raceData) return null;

        const currentLevel = character.level || 1;

        const renderResourceList = (resources: any, source: string) => {
            if (!resources) return null;

            // 处理数组格式的资源
            if (Array.isArray(resources)) {
                return resources.map((resource: any) => {
                    if (!resource.resourcePerLevel) return null;
                    const resourceValue = resource.resourcePerLevel[currentLevel];
                    if (!resourceValue) return null;

                    return (
                        <Box key={resource.name} sx={{ mb: 2 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                {resource.displayName || resource.name}
                                <Typography component="span" variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                                    ({source})
                                </Typography>
                            </Typography>
                            <Typography variant="body2">
                                {resource.description}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                当前等级可用：{resourceValue}
                            </Typography>
                        </Box>
                    );
                }).filter(Boolean);
            }

            // 处理对象格式的资源
            return Object.entries(resources).map(([name, resource]: [string, any]) => {
                if (!resource.resourcePerLevel) return null;
                const resourceValue = resource.resourcePerLevel[currentLevel];
                if (!resourceValue) return null;

                return (
                    <Box key={name} sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                            {resource.displayName || name}
                            <Typography component="span" variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                                ({source})
                            </Typography>
                        </Typography>
                        <Typography variant="body2">
                            {resource.description}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            当前等级可用：{resourceValue}
                        </Typography>
                    </Box>
                );
            }).filter(Boolean);
        };

        return (
            <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle1">特殊资源</Typography>
                <Paper sx={{ p: 2, mt: 1 }}>
                    {classData?.specialResources && renderResourceList(classData.specialResources, `职业：${classData.displayName}`)}
                    {raceData?.specialResources && renderResourceList(raceData.specialResources, `种族：${raceData.displayName}`)}
                    {subraceData?.specialResources && renderResourceList(subraceData.specialResources, `亚种：${subraceData.displayName}`)}
                </Paper>
            </Box>
        );
    };

    const getFeatDisplayName = (featId: string | undefined): string => {
        if (!featId) return '';
        const gameDataService = GameDataService.getInstance();
        const feat = gameDataService.getFeats().find((f: GameFeat) => f.id === featId);
        return feat ? feat.displayName : featId;
    };

    const renderLevelUpOption = (level: number) => {
        const isASILevel = hasASIAtLevel(level);
        const asiCompleted = asiSystem.completed[level];
        const asiChoice = asiSystem.choices[level];

        if (!isASILevel) return null;

        // 获取该等级的ASI选择文本
        const getASIDisplayText = () => {
            if (!asiChoice) return '';
            
            if (asiChoice.feat) {
                return `选择专长：${getFeatDisplayName(asiChoice.feat)}`;
            }
            
            if (asiChoice.abilities) {
                return Object.entries(asiChoice.abilities)
                    .map(([ability, value]) => `${getAbilityDisplayName(ability as AbilityName)}+${value}`)
                    .join('，');
            }
            
                return '';
        };

        return (
            <Box key={level} sx={{ mt: 2 }}>
                {!asiCompleted ? (
                    <>
                        <Typography variant="subtitle1" gutterBottom>
                            {level}级属性值提升
                        </Typography>
                    <ASISelection
                        level={level}
                        asiSystem={{
                            levels: [level],
                            choices: {
                                standardASI: {
                                    type: 'ability_score_increase',
                                    description: '提升一项属性值2点，或者两项属性值各提升1点',
                                    options: [
                                        { type: 'single', points: 2 },
                                        { type: 'double', points: 1 }
                                    ]
                                },
                                featOption: {
                                    type: 'feat',
                                    description: '获得一个专长'
                                }
                            }
                        }}
                        currentAbilityScores={character.finalAbilityScores}
                        onSelectionComplete={handleASICompleteWrapper(level)}
                        availableFeats={getAvailableFeats()}
                    />
                    </>
                ) : (
                    <Typography variant="body1" sx={{ 
                        p: 1, 
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        border: '1px solid',
                        borderColor: 'divider'
                    }}>
                        {level}级属性值提升 - {getASIDisplayText()}
                    </Typography>
                )}
            </Box>
        );
    };

    const renderASISelection = async () => {
        const hasASI = await hasASIAtLevel(selectedLevel);
        if (!hasASI) return null;

        return (
            <Box sx={{ mt: 2 }}>
                <ASISelection
                    level={selectedLevel}
                    onSelectionComplete={handleASICompleteWrapper(selectedLevel)}
                    currentAbilityScores={character.finalAbilityScores}
                    availableFeats={getAvailableFeats()}
                />
            </Box>
        );
    };

    // 渲染已选专长
    const renderSelectedFeats = () => {
        if (Object.keys(asiSystem.choices).length === 0) return null;

        return (
            <Paper sx={{ p: 2, mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                    已获得的专长
                </Typography>
                <List>
                    {Object.entries(asiSystem.choices).map(([level, choice]) => {
                        if (!choice.feat) return null;
                        const featName = getFeatDisplayName(choice.feat);
                        const feat = getAvailableFeats().find(f => f.id === choice.feat);
                        
                        return (
                            <ListItem key={level}>
                                <ListItemText
                                    primary={`${level}级 - ${featName}`}
                                    secondary={feat?.description}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Paper>
        );
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>等级选择</Typography>
            
            <Box sx={{ width: '100%', mb: 4 }}>
                <Typography gutterBottom>
                    当前等级: {selectedLevel}
                </Typography>
                <Slider
                    value={selectedLevel}
                    onChange={handleLevelChange}
                    min={1}
                    max={20}
                    marks
                    step={1}
                    valueLabelDisplay="auto"
                />
            </Box>

            <Box sx={{ width: '100%', mb: 4 }}>
                <Typography gutterBottom>
                    经验值
                </Typography>
                <TextField
                    fullWidth
                    type="number"
                    value={experiencePoints}
                    onChange={handleExperienceChange}
                    error={!!error}
                    helperText={error}
                    InputProps={{
                        inputProps: { min: 0 }
                    }}
                />
                <Typography variant="caption" color="textSecondary">
                    下一级所需：{getRequiredXP((character.classes?.[0]?.level || 1) + 1)}
                </Typography>
            </Box>

            {/* 派生属性 */}
            <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>角色属性</Typography>
                {renderDerivedStats()}
            </Paper>

            {/* 等级特性 */}
            <Paper sx={{ p: 2, mb: 3 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>已解锁特性</Typography>
                {renderFeatures()}
            </Paper>

            {/* 法术位（如果有） */}
            {character.spells && (
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>法术能力</Typography>
                    {renderSpellSlots()}
                </Paper>
            )}

            {/* 特殊资源 */}
            {renderSpecialResources()}

            {/* 属性值提升和专长选择区块 */}
            <Paper sx={{ p: 2, mb: 4 }}>
                <Typography variant="h6" gutterBottom>
                    属性值提升与专长
                </Typography>
                {pendingASIs.map(({ level }) => (
                    renderLevelUpOption(level)
                ))}
                {asiSelectionText && (
                    <Typography variant="body1">
                        属性值提升结果：{asiSelectionText}
                    </Typography>
                )}
            </Paper>

            {/* 已选专长显示区块 */}
            {renderSelectedFeats()}

            {/* 错误提示 */}
            <Snackbar
                open={!!error}
                autoHideDuration={6000}
                onClose={() => setError(null)}
            >
                <Alert severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default LevelSelection;
