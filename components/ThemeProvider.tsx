'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import data from '@/data';

const ThemeContext = createContext({
  mode: 'light',
  toggleTheme: () => {},
  colors: data.settings.colorScheme.light,
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const colors = mode === 'light' ? data.settings.colorScheme.light : data.settings.colorScheme.dark;

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-gradient', colors.primaryGradient);
    document.documentElement.style.setProperty('--secondary-gradient', colors.secondaryGradient);
    document.documentElement.style.setProperty('--background-color', colors.background);
    document.documentElement.style.setProperty('--text-color', colors.text);
  }, [colors]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}