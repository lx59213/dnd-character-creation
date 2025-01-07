import React, { useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Tooltip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import { useCharacterManager } from './context';

interface RenameDialogProps {
    open: boolean;
    currentName: string;
    onClose: () => void;
    onRename: (newName: string) => void;
}

const RenameDialog: React.FC<RenameDialogProps> = ({ open, currentName, onClose, onRename }) => {
    const [name, setName] = useState(currentName);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            onRename(name.trim());
            onClose();
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>重命名角色</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="角色名称"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>取消</Button>
                    <Button type="submit" variant="contained">确定</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

const CharacterTabs: React.FC = () => {
    const {
        tabs,
        activeTabId,
        addCharacter,
        removeCharacter,
        switchCharacter,
        renameCharacter
    } = useCharacterManager();

    const [renameDialogOpen, setRenameDialogOpen] = useState(false);
    const [selectedTabId, setSelectedTabId] = useState<string | null>(null);

    const handleRenameClick = (id: string) => {
        setSelectedTabId(id);
        setRenameDialogOpen(true);
    };

    const handleRenameClose = () => {
        setRenameDialogOpen(false);
        setSelectedTabId(null);
    };

    const handleRename = (newName: string) => {
        if (selectedTabId) {
            renameCharacter(selectedTabId, newName);
        }
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 60,
                right: 0,
                height: 48,
                bgcolor: 'background.paper',
                borderTop: 1,
                borderColor: 'divider',
                display: 'flex',
                alignItems: 'center',
                px: 1,
                gap: 1,
                overflowX: 'auto',
                overflowY: 'hidden',
                boxShadow: '0 -2px 4px rgba(0,0,0,0.05)',
                zIndex: 1000,
                '&::-webkit-scrollbar': {
                    height: '6px',
                },
                '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#bdbdbd',
                    borderRadius: '3px',
                    '&:hover': {
                        background: '#9e9e9e',
                    },
                },
            }}
        >
            {tabs.map(tab => (
                <Box
                    key={tab.id}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: 120,
                        maxWidth: 200,
                        height: 36
                    }}
                >
                    <Button
                        variant={tab.id === activeTabId ? "contained" : "outlined"}
                        size="small"
                        onClick={() => switchCharacter(tab.id)}
                        sx={{
                            flexGrow: 1,
                            textTransform: 'none',
                            justifyContent: 'space-between',
                            minWidth: 0,
                            px: 2,
                            height: '100%',
                            borderRadius: '4px',
                            ...(tab.id === activeTabId && {
                                boxShadow: 'none',
                            })
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {tab.name || '未命名角色'}
                        </Box>
                    </Button>
                    <Box sx={{ display: 'flex', gap: 0.5, ml: 0.5 }}>
                        <IconButton
                            size="small"
                            onClick={() => handleRenameClick(tab.id)}
                            sx={{
                                width: 24,
                                height: 24,
                                '&:hover': {
                                    color: 'primary.main',
                                }
                            }}
                        >
                            <EditIcon fontSize="small" />
                        </IconButton>
                        {tabs.length > 1 && (
                            <IconButton
                                size="small"
                                onClick={() => removeCharacter(tab.id)}
                                sx={{
                                    width: 24,
                                    height: 24,
                                    '&:hover': {
                                        color: 'error.main',
                                    }
                                }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        )}
                    </Box>
                </Box>
            ))}
            
            <Tooltip title="新建角色">
                <IconButton
                    onClick={() => addCharacter()}
                    sx={{
                        ml: 1,
                        bgcolor: 'background.paper',
                        width: 36,
                        height: 36,
                        '&:hover': {
                            bgcolor: 'action.hover'
                        }
                    }}
                >
                    <AddIcon />
                </IconButton>
            </Tooltip>

            <RenameDialog
                open={renameDialogOpen}
                currentName={tabs.find(tab => tab.id === selectedTabId)?.name || ''}
                onClose={handleRenameClose}
                onRename={handleRename}
            />
        </Box>
    );
};

export default CharacterTabs; 