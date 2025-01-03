import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Paper,
    Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCharacterContext } from '../context';
import { MasteryProficienciesService } from '../../../services/MasteryProficienciesService';
import { ProficiencyType, Proficiency } from '../../../types/proficiency';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    '&:hover': {
        boxShadow: theme.shadows[4],
    },
}));

const MasteryProficiencies: React.FC = () => {
    const { character } = useCharacterContext();
    const masteryService = MasteryProficienciesService.getInstance();
    const [weaponProficiencies, setWeaponProficiencies] = useState<Proficiency[]>([]);
    const [armorProficiencies, setArmorProficiencies] = useState<Proficiency[]>([]);
    const [toolProficiencies, setToolProficiencies] = useState<Proficiency[]>([]);
    const [savingThrowProficiencies, setsavingThrowProficiencies] = useState<Proficiency[]>([]);

    useEffect(() => {
        // 调试信息
        console.log('Character:', character);
        console.log('Weapon proficiencies:', masteryService.getWeaponProficiencies(character));
        console.log('Armor proficiencies:', masteryService.getArmorProficiencies(character));
        console.log('Tool proficiencies:', masteryService.getToolProficiencies(character));
        console.log('savingThrow proficiencies:', masteryService.getsavingThrowProficiencies(character));
        masteryService.debugProficiencyData();

        setWeaponProficiencies(masteryService.getWeaponProficiencies(character));
        setArmorProficiencies(masteryService.getArmorProficiencies(character));
        setToolProficiencies(masteryService.getToolProficiencies(character));
        setsavingThrowProficiencies(masteryService.getsavingThrowProficiencies(character));
    }, [character, masteryService]);

    const renderProficiencySection = (title: string, proficiencies: Proficiency[], type: ProficiencyType) => (
        <StyledPaper>
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>{title}</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {proficiencies.map((prof) => (
                    <Chip
                        key={prof.id}
                        label={prof.displayName}
                        size="small"
                        color="primary"
                        variant="outlined"
                    />
                ))}
            </Box>
        </StyledPaper>
    );

    return (
        <Box>
            {renderProficiencySection('武器熟练项', weaponProficiencies, 'weapon')}
            {renderProficiencySection('护甲熟练项', armorProficiencies, 'armor')}
            {renderProficiencySection('工具熟练项', toolProficiencies, 'tool')}
            {renderProficiencySection('豁免熟练项', savingThrowProficiencies, 'savingThrow')}
        </Box>
    );
};

export default MasteryProficiencies;
