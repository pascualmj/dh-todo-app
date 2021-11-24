import React from 'react';

import { StoreProvider } from 'store/StoreProvider';
import { ThemeProvider } from 'contexts/theme/ThemeContext';
import MainRouter from 'router/MainRouter';

// Global Styles
import 'styles/main.scss';

const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <MainRouter />
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
