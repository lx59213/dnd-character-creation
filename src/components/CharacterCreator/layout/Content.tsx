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
        paddingBottom: '68px', // 增加底部内边距，确保内容不被底部导航栏遮挡
        overflowY: 'auto',
      }}
    >
      {children}
    </Box>
  );
};

export default Content;
