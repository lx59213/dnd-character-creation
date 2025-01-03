import React, { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import CharacterCreator from './components/CharacterCreator';
import { GameDataService } from './services/GameDataService';
import { CharacterProvider } from './components/CharacterCreator/context';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const gameService = GameDataService.getInstance();
        await gameService.initialize();
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load game data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load game data');
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <div>Error: {error}</div>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CharacterProvider>
        <CharacterCreator />
      </CharacterProvider>
    </ThemeProvider>
  );
};

export default App;