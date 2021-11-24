import React, { useCallback, useState, useMemo } from 'react';
import {
  ThemeProvider as SCThemeProvider,
  ThemeContext as SCThemeContext,
  AppThemeType
} from 'styled-components';

import { lightTheme, darkTheme } from '../../config/theme';

export const ThemeContext = SCThemeContext;

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<AppThemeType>('light');

  const toggleTheme = useCallback(() => {
    setTheme(prevState => (prevState === 'light' ? 'dark' : 'light'));
  }, []);

  const memoizedThemeValue = useMemo(() => {
    const t = Object.assign(theme === 'light' ? lightTheme : darkTheme, {
      toggleTheme
    });
    return t;
  }, [theme, toggleTheme]);

  return <SCThemeProvider theme={memoizedThemeValue}>{children}</SCThemeProvider>;
};
