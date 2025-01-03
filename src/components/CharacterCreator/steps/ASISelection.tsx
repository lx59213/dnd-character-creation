import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
    MenuItem,
    Button,
} from '@mui/material';
import { AbilityName, ABILITY_LABELS, AbilityScoreImprovementSystem, AbilityScores } from '../../../types/types-definition';

interface ASISelectionState {
    selectedChoice: 'standardASI' | 'feat' | null;
    selectedFeat: string | null;
    selectedAbilities: Partial<Record<AbilityName, number>>;
    level: number;
}

interface ASISelectionProps {
    level: number;
    asiSystem?: AbilityScoreImprovementSystem;
    onSelectionComplete: (state: ASISelectionState) => void;
    currentAbilityScores: AbilityScores;
    availableFeats: Array<{
        name: string;
        description: string;
        disabled: boolean;
    }>;
}

const initialState = (level: number): ASISelectionState => ({
    selectedChoice: null,
    selectedFeat: null,
    selectedAbilities: {},
    level
});

export const ASISelection: React.FC<ASISelectionProps> = ({
    level,
    asiSystem,
    onSelectionComplete,
    currentAbilityScores,
    availableFeats
}) => {
    const [state, setState] = useState<ASISelectionState>(initialState(level));

    const MAX_ABILITY_SCORE = 20;

    const isAbilityScoreValid = (ability: AbilityName, increase: number): boolean => {
        const currentScore = currentAbilityScores[ability] || 0;
        return currentScore + increase <= MAX_ABILITY_SCORE;
    };

    const handleChoiceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            selectedChoice: event.target.value as 'standardASI' | 'feat',
            selectedAbilities: {},
            selectedFeat: null,
        });
    };

    const handleAbilityChange = (ability: AbilityName, value: number) => {
        // 检查新的属性值是否超过上限
        if (!isAbilityScoreValid(ability, value)) {
            return;
        }

        setState({
            ...state,
            selectedAbilities: {
                ...state.selectedAbilities,
                [ability]: value,
            },
        });
    };

    const handleFeatChange = (featName: string) => {
        if (state.selectedFeat === featName) {
            setState({
                ...state,
                selectedFeat: null,
                selectedChoice: null
            });
        } else {
            setState({
                ...state,
                selectedFeat: featName,
                selectedChoice: 'feat'
            });
        }
    };

    const getAbilityScoreError = (ability: AbilityName, value: number): string | null => {
        const currentScore = currentAbilityScores[ability] || 0;
        if (currentScore + value > MAX_ABILITY_SCORE) {
            return `属性值不能超过${MAX_ABILITY_SCORE}`;
        }
        return null;
    };

    const handleConfirm = () => {
        if (isSelectionValid()) {
            onSelectionComplete(state);
        }
    };

    const isSelectionValid = (): boolean => {
        if (!state.selectedChoice) return false;
        
        if (state.selectedChoice === 'standardASI') {
            const totalPoints = Object.values(state.selectedAbilities)
                .reduce((sum, val) => sum + val, 0);
            return totalPoints === 2;
        }
        
        return state.selectedChoice === 'feat' && state.selectedFeat !== null;
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
                {level}级属性值提升
            </Typography>
            
            <FormControl component="fieldset">
                <FormLabel component="legend">选择提升方式</FormLabel>
                <RadioGroup value={state.selectedChoice || ''} onChange={handleChoiceChange}>
                    <FormControlLabel
                        value="standardASI"
                        control={<Radio />}
                        label={asiSystem?.choices.standardASI.description}
                    />
                    <FormControlLabel
                        value="feat"
                        control={<Radio />}
                        label="选择一个专长"
                    />
                </RadioGroup>
            </FormControl>

            {state.selectedChoice === 'standardASI' && (
                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        选择要提升的属性（总计+2）
                    </Typography>
                    {Object.entries(ABILITY_LABELS).map(([ability, label]) => {
                        const abilityKey = ability as AbilityName;
                        const value = state.selectedAbilities[abilityKey] || 0;
                        const error = getAbilityScoreError(abilityKey, value);
                        
                        return (
                            <Box key={ability} sx={{ mb: 1 }}>
                                <FormControl fullWidth error={!!error}>
                                    <FormLabel>
                                        {label} (当前: {currentAbilityScores[abilityKey]})
                                    </FormLabel>
                                    <Select
                                        value={value}
                                        onChange={(e) => handleAbilityChange(abilityKey, Number(e.target.value))}
                                    >
                                        <MenuItem value={0}>+0</MenuItem>
                                        <MenuItem value={1}>+1</MenuItem>
                                        <MenuItem value={2}>+2</MenuItem>
                                    </Select>
                                    {error && (
                                        <Typography variant="caption" color="error">
                                            {error}
                                        </Typography>
                                    )}
                                </FormControl>
                            </Box>
                        );
                    })}
                </Box>
            )}
            
            {state.selectedChoice === 'feat' && (
                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                        可选专长
                    </Typography>
                    {availableFeats.map((feat) => (
                        <Box key={feat.name} sx={{ mb: 2 }}>
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={state.selectedFeat === feat.name}
                                        onChange={() => handleFeatChange(feat.name)}
                                        disabled={feat.disabled}
                                    />
                                }
                                label={
                                    <Box>
                                        <Typography variant="subtitle2">
                                            {feat.name}
                                            {feat.disabled && (
                                                <Typography 
                                                    component="span" 
                                                    color="error" 
                                                    sx={{ ml: 1 }}
                                                >
                                                    (已选择或不满足要求)
                                                </Typography>
                                            )}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feat.description}
                                        </Typography>
                                    </Box>
                                }
                            />
                        </Box>
                    ))}
                </Box>
            )}
            
            <Box sx={{ mt: 2 }}>
                <Button
                    variant="contained"
                    onClick={handleConfirm}
                    disabled={!isSelectionValid()}
                >
                    确认选择
                </Button>
            </Box>
        </Box>
    );
};
