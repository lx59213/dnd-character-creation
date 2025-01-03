import React, { useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
} from '@mui/material';
import { useCharacterContext } from '../context';

export const CharacterControl: React.FC = () => {
    const { resetCharacter } = useCharacterContext();
    const [resetDialogOpen, setResetDialogOpen] = useState(false);

    const handleResetClick = () => {
        setResetDialogOpen(true);
    };

    const handleResetConfirm = () => {
        resetCharacter();
        setResetDialogOpen(false);
    };

    const handleResetCancel = () => {
        setResetDialogOpen(false);
    };

    return (
        <Paper 
            elevation={3}
            sx={{ 
                p: 2,
                mb: 2,
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'background.paper',
            }}
        >
            <Button
                variant="contained"
                color="error"
                onClick={handleResetClick}
                sx={{ ml: 1 }}
            >
                重置角色
            </Button>

            <Dialog
                open={resetDialogOpen}
                onClose={handleResetCancel}
            >
                <DialogTitle>确认重置</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        你确定要重置角色吗？这将清除所有已保存的数据，且无法恢复。
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleResetCancel}>取消</Button>
                    <Button onClick={handleResetConfirm} color="error">
                        确认重置
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};
