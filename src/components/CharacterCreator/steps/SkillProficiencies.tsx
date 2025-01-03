import React, { useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCharacterContext } from '../context';
import { SkillProficiencyService } from '../../../services/SkillProficiencyService';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:hover': {
        boxShadow: theme.shadows[4],
    },
}));

interface SkillButtonProps {
    selected?: boolean;
}

const SkillButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'selected',
})<SkillButtonProps>(({ theme, selected }) => ({
    margin: theme.spacing(0.5),
    backgroundColor: selected ? theme.palette.primary.main : theme.palette.background.paper,
    color: selected ? theme.palette.primary.contrastText : theme.palette.text.primary,
    '&:hover': {
        backgroundColor: selected ? theme.palette.primary.dark : theme.palette.action.hover,
    },
    textTransform: 'none',
}));

export const SkillProficiencies: React.FC = () => {
    const { character, updateCharacter } = useCharacterContext();
    const skillProficiencyService = SkillProficiencyService.getInstance();

    // 初始化服务
    useEffect(() => {
        const initServices = async () => {
            try {
                // await presetProficiencyService.initialize();
            } catch (error) {
                console.error('Failed to initialize services:', error);
            }
        };
        initServices();
    }, []);

    // 获取技能的显示名称
    const getSkillDisplayName = (skillId: string) => {
        return skillProficiencyService.SKILL_TRANSLATIONS[skillId] || skillId;
    };

    // 获取可选择的技能列表
    const classSkillChoices = character.classes?.[0]?.name
        ? skillProficiencyService.getClassSkillChoices(character.classes[0].name)
        : null;

    const raceSkillChoices = character.race
        ? skillProficiencyService.getRaceSkillChoices(
            character.race.name,
            character.subrace?.name
          )
        : null;

    // 处理技能选择
    const handleSkillToggle = (skillId: string, source: 'class' | 'race') => {
        const currentSkills = character.proficiencies?.skills || [];
        const isSelected = currentSkills.includes(skillId);
        
        if (isSelected) {
            // 移除技能
            updateCharacter({
                ...character,
                proficiencies: {
                    ...character.proficiencies,
                    skills: currentSkills.filter(id => id !== skillId)
                }
            });
        } else {
            const choices = source === 'class' ? classSkillChoices : raceSkillChoices;
            const selectedCount = currentSkills.filter(skill => 
                character.skillSource?.[skill] === source
            ).length;

            if (choices && selectedCount < choices.count) {
                // 添加技能
                updateCharacter({
                    ...character,
                    proficiencies: {
                        ...character.proficiencies,
                        skills: [...currentSkills, skillId]
                    },
                    skillSource: {
                        ...character.skillSource,
                        [skillId]: source
                    }
                });
            }
        }
    };

    // 渲染可选择的技能
    const renderSkillChoices = (source: 'class' | 'race') => {
        const choices = source === 'class' ? classSkillChoices : raceSkillChoices;
        if (!choices) return null;

        const currentSkills = character.proficiencies?.skills || [];
        const selectedCount = currentSkills.filter(skill => 
            character.skillSource?.[skill] === source
        ).length;
        
        return (
            <StyledPaper>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h6" color="primary">
                        选择技能熟练项
                        {source === 'class' ? '（职业）' : '（种族/亚种）'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        可选择 {choices.count} 个技能（已选择 {selectedCount} 个）
                    </Typography>
                </Box>

                <Box>
                    {choices.from.map((skillId: string) => {
                        const isSelected = currentSkills.includes(skillId) && 
                                         character.skillSource?.[skillId] === source;
                        const canSelect = !isSelected && selectedCount < choices.count;

                        return (
                            <SkillButton
                                key={`${skillId}-${source}`}
                                selected={isSelected}
                                disabled={!canSelect && !isSelected}
                                onClick={() => handleSkillToggle(skillId, source)}
                            >
                                {getSkillDisplayName(skillId)}
                            </SkillButton>
                        );
                    })}
                </Box>
            </StyledPaper>
        );
    };

    // 渲染预设技能
    const renderPresetSkills = () => {
        console.log('Character in SkillProficiencies:', character);
        const presetSkills = skillProficiencyService.getAllPresetSkills(character);
        console.log('Preset skills from service:', presetSkills);
        
        if (presetSkills.length === 0) {
            console.log('No preset skills found');
            return null;
        }

        // 按来源分组技能
        const skillsBySource = presetSkills.reduce((acc, skill) => {
            const source = skill.source === 'background' ? '背景' :
                          skill.source === 'race' ? '种族' :
                          skill.source === 'subrace' ? '亚种族' :
                          skill.source === 'racial_trait' ? '种族特性' : '其他';
            
            if (!acc[source]) {
                acc[source] = {
                    sourceName: skill.sourceName,
                    skills: []
                };
            }
            acc[source].skills.push(skill);
            return acc;
        }, {} as Record<string, { sourceName: string, skills: typeof presetSkills }>);

        return (
            <StyledPaper>
                <Typography variant="h6" color="primary" sx={{ mb: 2 }}>已获得的技能熟练项</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {Object.entries(skillsBySource).map(([source, { sourceName, skills }]) => (
                        <Box key={source}>
                            <Typography variant="subtitle2" color="textSecondary">
                                来自{source}「{sourceName}」：
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {skills.map(skill => (
                                    <Chip
                                        key={`${skill.id}-${source}`}
                                        label={getSkillDisplayName(skill.id)}
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                    />
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </StyledPaper>
        );
    };

    return (
        <Box>
            {renderPresetSkills()}
            {renderSkillChoices('class')}
            {renderSkillChoices('race')}
        </Box>
    );
};
