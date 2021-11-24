import { useContext } from 'react';

import { ThemeContext } from '../contexts/theme/ThemeContext';

export const useTheme = () => useContext(ThemeContext);
