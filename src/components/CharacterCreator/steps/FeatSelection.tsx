import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
} from '@mui/material';
import { Feat, Feature } from '../../../types/types-definition';

interface FeatSelectionProps {
    feat: Feat;
    onSelect: () => void;
    disabled?: boolean;
}

export const FeatSelection: React.FC<FeatSelectionProps> = ({
    feat,
    onSelect,
    disabled = false,
}) => {
    return (
        <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {feat.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                    {feat.description}
                </Typography>

                {feat.prerequisites && (
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="subtitle2" color="primary">
                            前置条件:
                        </Typography>
                        <Box component="ul" sx={{ mt: 0.5, pl: 2 }}>
                            {feat.prerequisites.abilities && (
                                <Typography component="li">
                                    属性要求：
                                    {Object.entries(feat.prerequisites.abilities)
                                        .map(([ability, value]) => `${ability} ${value}`)
                                        .join(', ')}
                                </Typography>
                            )}
                            {feat.prerequisites.race && (
                                <Typography component="li">
                                    种族要求：{feat.prerequisites.race.join(', ')}
                                </Typography>
                            )}
                            {feat.prerequisites.class && (
                                <Typography component="li">
                                    职业要求：{feat.prerequisites.class.join(', ')}
                                </Typography>
                            )}
                            {feat.prerequisites.level && (
                                <Typography component="li">
                                    等级要求：{feat.prerequisites.level}
                                </Typography>
                            )}
                        </Box>
                    </Box>
                )}

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" color="primary">
                        效果:
                    </Typography>
                    <Box component="ul" sx={{ mt: 0.5, pl: 2 }}>
                        {feat.benefits.abilityIncrease && (
                            <Typography component="li">
                                属性提升：
                                {Object.entries(feat.benefits.abilityIncrease)
                                    .map(([ability, value]) => `${ability} +${value}`)
                                    .join(', ')}
                            </Typography>
                        )}
                        {feat.benefits.proficiencies && (
                            <Typography component="li">
                                获得熟练项：{feat.benefits.proficiencies.join(', ')}
                            </Typography>
                        )}
                        {feat.benefits.features?.map((feature: Feature, index: number) => (
                            <Typography key={index} component="li">
                                {feature.name}: {feature.description}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            </CardContent>
            
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={onSelect}
                    disabled={disabled}
                >
                    选择此专长
                </Button>
            </CardActions>
        </Card>
    );
};
