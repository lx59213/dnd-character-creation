import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardActionArea, Paper, Divider, IconButton, Tooltip, ClickAwayListener, Popper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { ClassData, Subclass, ClassFeature } from '../../../types/Class';
import { CharacterClass } from '../../../types/character';
import { GameDataService } from '../../../services/GameDataService';
import { useCharacterContext } from '../context';

const ClassSelection: React.FC = () => {
    const { character, updateCharacter, activeTab } = useCharacterContext();
    const [classes, setClasses] = useState<ClassData[]>([]);
    const [selectedClassData, setSelectedClassData] = useState<ClassData | undefined>(undefined);

    useEffect(() => {
        const loadClasses = async () => {
            const gameDataService = GameDataService.getInstance();
            const classesData = gameDataService.getClasses();
            setClasses(Array.from(classesData.values()));
        };
        loadClasses();
    }, []);

    useEffect(() => {
        if (character.classes && character.classes.length > 0) {
            const gameDataService = GameDataService.getInstance();
            const classData = gameDataService.getClass(character.classes[0].name);
            if (classData) {
                setSelectedClassData(classData);
            }
        }
    }, [character.classes]);

    const handleClassSelect = (classData: ClassData) => {
        setSelectedClassData(classData);
        
        updateCharacter({
            classes: [{
                name: classData.name,
                displayName: classData.displayName,
                level: 1
            }]
        });
    };

    const handleSubclassSelect = (subclass: Subclass) => {
        if (character.classes.length > 0) {
            const updatedClasses = [...character.classes];
            updatedClasses[0] = {
                ...updatedClasses[0],
                subclass: subclass.name
            };
            
            updateCharacter({
                classes: updatedClasses
            });
        }
    };

    const formatMechanicalEffect = (effect: string | string[]): string => {
        if (Array.isArray(effect)) {
            return effect.join('，');
        }
        return effect;
    };

    const renderFeatures = (features: ClassFeature[] | undefined) => {
        if (!features) return null;
        
        return (
            <Box>
                {features.map((feature, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                            <Typography variant="h6" sx={{ fontSize: '1.1rem', color: 'primary.main' }}>
                                {feature.displayName || feature.name}
                            </Typography>
                            {feature.mechanicalEffect && (
                                <Tooltip 
                                    title={`游戏效果：${formatMechanicalEffect(feature.mechanicalEffect)}`}
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
                            {feature.description}
                        </Typography>
                    </Box>
                ))}
            </Box>
        );
    };

    const renderClassGrid = () => {
        const gameDataService = GameDataService.getInstance();
        const canShowSubclass = character.classes && 
            character.classes.length > 0 && 
            gameDataService.canSelectSubclass(character.classes[0].name, character.level);
            
        const displayClasses = activeTab === 'class' 
            ? classes 
            : (activeTab === 'subclass' && canShowSubclass ? selectedClassData?.subclasses || [] : []);
        
        return (
            <Grid container spacing={2}>
                {displayClasses.map((classItem: ClassData | Subclass) => {
                    const isClassTab = activeTab === 'class';
                    const currentClass = isClassTab ? classItem as ClassData : classItem as Subclass;
                    const isSelected = isClassTab 
                        ? selectedClassData?.name === currentClass.name
                        : character.classes[0].subclass === currentClass.name;
                    
                    return (
                        <Grid item xs={12} sm={6} md={4} key={currentClass.name}>
                            <Card>
                                <CardActionArea
                                    onClick={() => isClassTab 
                                        ? handleClassSelect(currentClass as ClassData)
                                        : handleSubclassSelect(currentClass as Subclass)
                                    }
                                    sx={{
                                        bgcolor: isSelected ? 'primary.light' : 'inherit',
                                        p: 2
                                    }}
                                >
                                    <Typography variant="h6" align="center">
                                        {currentClass.displayName}
                                    </Typography>
                                    {!isClassTab && (
                                        <Typography variant="body2" align="center" color="textSecondary">
                                            3级解锁
                                        </Typography>
                                    )}
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        );
    };

    const renderClassDetails = () => {
        // 获取要显示的类或子职业数据
        const displayClass = activeTab === 'class' 
            ? selectedClassData
            : character.classes[0]?.subclass && selectedClassData?.subclasses.find(subclass => subclass.name === character.classes[0].subclass);

        if (!displayClass) return null;

        // 判断是否为主职业数据
        const isMainClass = activeTab === 'class' && 'hitDie' in displayClass;

        return (
            <Paper sx={{ p: 2, mt: 2 }}>
                <Box>
                    <Typography variant="h6">{displayClass.displayName}</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>{displayClass.description}</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Divider />
                        </Grid>
                        {isMainClass && (
                            <>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="bold">生命骰</Typography>
                                    <Typography>d{(displayClass as ClassData).hitDie}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1" fontWeight="bold">主要属性</Typography>
                                    <Typography>{(displayClass as ClassData).primaryAbility.join('、')}</Typography>
                                </Grid>
                            </>
                        )}
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 2 }}>特性</Typography>
                            {displayClass.features.map((feature, index) => (
                                <Box key={index} sx={{ mt: 2 }}>
                                    <Typography variant="h6" sx={{ fontSize: '1.1rem', color: 'primary.main', mb: 1 }}>
                                        {feature.displayName}
                                    </Typography>
                                    <Typography variant="body2">{feature.description}</Typography>
                                    {feature.mechanicalEffect && (
                                        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary', fontStyle: 'italic' }}>
                                            {formatMechanicalEffect(feature.mechanicalEffect)}
                                        </Typography>
                                    )}
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        );
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* 顶部选项卡片 */}
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        {activeTab === 'class' ? '选择职业' : '选择子职业'}
                    </Typography>
                    {renderClassGrid()}
                </Paper>

                {/* 中间描述卡片 */}
                {selectedClassData && (
                    <>
                        {activeTab === 'class' ? (
                            <Paper sx={{ p: 2 }}>
                                <Typography variant="h5" gutterBottom>
                                    {selectedClassData.displayName}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {selectedClassData.description}
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        生命骰
                                    </Typography>
                                    <Typography variant="body1">
                                        d{selectedClassData.hitDie}
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="h6" gutterBottom>
                                        主要属性
                                    </Typography>
                                    <Typography variant="body1">
                                        {selectedClassData.primaryAbility.join('、')}
                                    </Typography>
                                </Box>
                            </Paper>
                        ) : (
                            character.classes[0]?.subclass && (
                                <Paper sx={{ p: 2 }}>
                                    <Typography variant="h5" gutterBottom>
                                        {selectedClassData.subclasses.find(s => s.name === character.classes[0].subclass)?.displayName}
                                    </Typography>
                                    <Typography variant="body1" paragraph>
                                        {selectedClassData.subclasses.find(s => s.name === character.classes[0].subclass)?.description}
                                    </Typography>
                                </Paper>
                            )
                        )}
                    </>
                )}

                {/* 底部特性卡片 */}
                {selectedClassData && (
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6" gutterBottom>
                            特性
                        </Typography>
                        {activeTab === 'class' ? (
                            renderFeatures(selectedClassData.features)
                        ) : (
                            character.classes[0]?.subclass && renderFeatures(
                                selectedClassData.subclasses.find(s => s.name === character.classes[0].subclass)?.features
                            )
                        )}
                    </Paper>
                )}
            </Box>
        </Box>
    );
};

export default ClassSelection;
