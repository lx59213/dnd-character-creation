import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Paper,
    IconButton,
    Tooltip,
    Card,
    CardContent,
    CardActions,
    CircularProgress,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCharacterContext } from '../context';
import { SpellService } from '../../../services/SpellService';
import { Spell, SpellComponents } from '../../../types/spell';
import { styled } from '@mui/material/styles';

// 法术卡片组件
interface SpellCardProps {
    spell: Spell;
    isSelected: boolean;
    canAdd: boolean;
    onAdd?: () => void;
    onRemove?: () => void;
}

const SpellCardComponent: React.FC<SpellCardProps> = ({
    spell,
    isSelected,
    canAdd,
    onAdd,
    onRemove,
}) => {
    // 将法术成分对象转换为可读的文本
    const getComponentsText = (components: SpellComponents): string => {
        const texts: string[] = [];
        if (components.verbal) texts.push('言语');
        if (components.somatic) texts.push('姿势');
        if (components.material) {
            texts.push('材料' + (components.materials ? `(${components.materials})` : ''));
        }
        return texts.join('、');
    };

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`spell-${spell.id}-content`}
                id={`spell-${spell.id}-header`}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                    <Typography>{spell.name} ({spell.school} {spell.level}环)</Typography>
                    <Box sx={{ ml: 2 }}>
                        {!isSelected && (
                            <Tooltip title={canAdd ? "添加法术" : "已达到法术数量上限"}>
                                <span>
                                    <IconButton
                                        size="small"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onAdd?.();
                                        }}
                                        disabled={!canAdd}
                                        color="primary"
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </span>
                            </Tooltip>
                        )}
                        {isSelected && (
                            <Tooltip title="移除法术">
                                <IconButton
                                    size="small"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onRemove?.();
                                    }}
                                    color="error"
                                >
                                    <RemoveIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <Typography variant="body2">
                        施法时间：{spell.castingTime}
                    </Typography>
                    <Typography variant="body2">
                        施法距离：{spell.range}
                    </Typography>
                    <Typography variant="body2">
                        持续时间：{spell.duration}
                    </Typography>
                    <Typography variant="body2">
                        成分：{getComponentsText(spell.components)}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                        {spell.description}
                    </Typography>
                    {spell.higherLevels && (
                        <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                            升环效果：{spell.higherLevels}
                        </Typography>
                    )}
                </Box>
            </AccordionDetails>
        </Accordion>
    );
};

// 法术列表区域组件
interface SpellListSectionProps {
    spells: { [key: number]: Spell[] };
    selectedSpells: Spell[];
    maxSpells: number;
    onSpellToggle: (spell: Spell) => void;
}

const SpellListSection: React.FC<SpellListSectionProps> = ({
    spells,
    selectedSpells,
    maxSpells,
    onSpellToggle,
}) => {
    const selectedSpellIds = selectedSpells.map(spell => spell.id);
    const canAddMore = selectedSpells.length < maxSpells;

    return (
        <Box>
            {Object.entries(spells).map(([level, levelSpells]) => (
                <Box key={level} sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        {level === '0' ? '戏法' : `${level}环法术`}
                    </Typography>
                    <Grid container spacing={2}>
                        {levelSpells.map((spell) => (
                            <Grid item xs={12} sm={6} md={4} key={spell.id}>
                                <SpellCardComponent
                                    spell={spell}
                                    isSelected={selectedSpellIds.includes(spell.id)}
                                    canAdd={canAddMore}
                                    onAdd={() => onSpellToggle(spell)}
                                    onRemove={() => onSpellToggle(spell)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

// 法术位显示组件
const SpellSlotsSection: React.FC<{ spellSlots: { [key: number]: number } }> = ({
    spellSlots,
}) => {
    return (
        <Grid container spacing={1} sx={{ mb: 3 }}>
            {[...Array(9)].map((_, i) => (
                <Grid item xs={4} sm={2} md={1} key={i + 1}>
                    <Paper
                        sx={{
                            p: 1,
                            textAlign: 'center',
                            bgcolor: 'background.paper',
                            border: 1,
                            borderColor: 'divider'
                        }}
                    >
                        <Typography variant="subtitle2">{i + 1}环</Typography>
                        <Typography variant="h6">{spellSlots[i + 1] || 0}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    );
};

const SpellSelection: React.FC = () => {
    const { character, updateCharacter } = useCharacterContext();
    const [loading, setLoading] = useState(true);
    const [availableSpells, setAvailableSpells] = useState<{ [key: number]: Spell[] }>({});
    const [selectedSpells, setSelectedSpells] = useState<Spell[]>([]);
    const spellService = new SpellService();

    useEffect(() => {
        const loadSpells = async () => {
            setLoading(true);
            try {
                const spells = await spellService.getAvailableSpells(character);
                setAvailableSpells(spells);
                
                // 加载已选法术
                if (character.spells?.preparedSpells) {
                    const prepared = await spellService.getSpellsByIds(character.spells.preparedSpells);
                    setSelectedSpells(prepared);
                }
            } catch (error) {
                console.error('Failed to load spells:', error);
            }
            setLoading(false);
        };

        loadSpells();
    }, [character]);

    const maxPreparedSpells = spellService.calculatePreparedSpellCount(character);
    const spellSlots = spellService.getSpellSlots(character);

    const handleSpellToggle = (spell: Spell) => {
        setSelectedSpells(current => {
            const isSelected = current.some(s => s.id === spell.id);
            if (isSelected) {
                const newSpells = current.filter(s => s.id !== spell.id);
                updateCharacter({
                    ...character,
                    spells: { ...character.spells, preparedSpells: newSpells.map(s => s.id) }
                });
                return newSpells;
            } else if (current.length < maxPreparedSpells) {
                const newSpells = [...current, spell];
                updateCharacter({
                    ...character,
                    spells: { ...character.spells, preparedSpells: newSpells.map(s => s.id) }
                });
                return newSpells;
            }
            return current;
        });
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                法术选择 ({selectedSpells.length}/{maxPreparedSpells})
            </Typography>
            
            <SpellSlotsSection spellSlots={spellSlots} />
            
            <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    已选法术
                </Typography>
                <Grid container spacing={2}>
                    {selectedSpells.map((spell) => (
                        <Grid item xs={12} sm={6} md={4} key={spell.id}>
                            <SpellCardComponent
                                spell={spell}
                                isSelected={true}
                                canAdd={false}
                                onRemove={() => handleSpellToggle(spell)}
                            />
                        </Grid>
                    ))}
                    {selectedSpells.length === 0 && (
                        <Grid item xs={12}>
                            <Box sx={{ p: 3, textAlign: 'center', color: 'text.secondary' }}>
                                <Typography>
                                    还未选择任何法术
                                </Typography>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Box>

            <Typography variant="h6" gutterBottom>
                可选法术
            </Typography>
            <SpellListSection
                spells={availableSpells}
                selectedSpells={selectedSpells}
                maxSpells={maxPreparedSpells}
                onSpellToggle={handleSpellToggle}
            />
        </Box>
    );
};

export default SpellSelection;
