'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import data from '@/data';

type ThemeMode = 'light' | 'dark';

type ColorScheme = typeof data.settings.colorScheme;

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  colors: ColorScheme['light'] & ColorScheme['shared'];
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
  colors: { ...data.settings.colorScheme.light, ...data.settings.colorScheme.shared },
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const colors = {
    ...(mode === 'light' ? data.settings.colorScheme.light : data.settings.colorScheme.dark),
    ...data.settings.colorScheme.shared
  };

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