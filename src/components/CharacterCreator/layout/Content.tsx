import React from 'react';
import { Box } from '@mui/material';

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Box
      sx={{
        flex: 2,
        height: '100vh',
        backgroundColor: '#ffffff',
        padding: '20px',
        overflowY: 'auto',
      }}
    >
      {children}
    </Box>
  );
};

export default Content;
