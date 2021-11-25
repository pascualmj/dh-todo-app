import React from 'react';

import { ErrorBoundary } from 'services/errorBoundary/ErrorBoundary';
import { StoreProvider } from 'store/StoreProvider';
import { ThemeProvider } from 'contexts/theme/ThemeContext';
import MainRouter from 'router/MainRouter';

// Global Styles
import 'styles/main.scss';

const App = () => {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <MainRouter />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};

export default App;
