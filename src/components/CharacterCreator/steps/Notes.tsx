import React, { useState, useEffect } from 'react';
import {
    Box,
    TextField,
    Typography,
    Paper,
} from '@mui/material';
import { useCharacterContext } from '../context';

const Notes: React.FC = () => {
    const { character, updateCharacter } = useCharacterContext();
    const [notes, setNotes] = useState(character.notes || '');

    // 同步全局状态的变化到本地状态
    useEffect(() => {
        setNotes(character.notes || '');
    }, [character.notes]);

    // 处理备注更改
    const handleNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newNotes = event.target.value;
        setNotes(newNotes);
        updateCharacter({ notes: newNotes });
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
                角色备注
            </Typography>
            <Paper elevation={0} sx={{ p: 2, backgroundColor: 'background.paper' }}>
                <TextField
                    fullWidth
                    multiline
                    rows={10}
                    variant="outlined"
                    placeholder="在这里输入你的角色备注..."
                    value={notes}
                    onChange={handleNotesChange}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: '#ffffff',
                        }
                    }}
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                    你可以在这里记录角色的重要信息、背景故事细节、或者游戏过程中的笔记。
                </Typography>
            </Paper>
        </Box>
    );
};

export default Notes; 