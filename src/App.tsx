import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import CharacterCreator from './components/CharacterCreator';
import { CharacterProvider } from './components/CharacterCreator/context';
import { CharacterManagerProvider } from './components/CharacterManager/context';
import CharacterTabs from './components/CharacterManager/CharacterTabs';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CharacterManagerProvider>
        <CharacterProvider>
          <CharacterCreator />
          <CharacterTabs />
        </CharacterProvider>
      </CharacterManagerProvider>
    </ThemeProvider>
  );
}

export default App;