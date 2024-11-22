import React, { createContext, useContext, useState } from 'react';

// Define available themes
export type Theme = 'blue' | 'green' | 'gray';

// Define the structure of themes
const themes: Record<
  Theme,
  {
    defaultColor: string;
    defaultColorHover: string;
    darker: string;
    darkerHover: string;
    darkest: string;
    darkestHover: string;
  }
> = {
  blue: {
    defaultColor: 'bg-[#155BCB] text-white',
    defaultColorHover: 'hover:bg-[#0C326F]',
    darker: 'bg-[#0C326F]',
    darkerHover: 'hover:bg-[#155BCB]',
    darkest: 'bg-[#071D41]',
    darkestHover: 'hover:bg-[#0C326F]',
  },
  green: {
    defaultColor: 'bg-[#1A8551] text-white',
    defaultColorHover: 'hover:bg-[#10633B]',
    darker: 'bg-[#10633B]',
    darkerHover: 'hover:bg-[#1A8551]',
    darkest: 'bg-[#093E26]',
    darkestHover: 'hover:bg-[#10633B]',
  },
  gray: {
    defaultColor: 'bg-[#DFE1E2]',
    defaultColorHover: 'hover:bg-[#C6CACE]',
    darker: 'bg-[#C6CACE]',
    darkerHover: 'hover:bg-[#DFE1E2]',
    darkest: 'bg-[#A9AEB1]',
    darkestHover: 'hover:bg-[#C6CACE]',
  },
};

// Context type definition
interface ColorContextType {
  defaultColor: string;
  defaultColorHover:string;
  darker: string;
  darkerHover:string;
  darkest: string;
  darkestHover:string;
  setHeaderTheme: (theme: Theme) => void;
  currentTheme: Theme;
}

// Create context
const ColorContext = createContext<ColorContextType | undefined>(undefined);

// Provider component
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('blue'); // Default theme

  // Function to change theme
  const setHeaderTheme = (theme: Theme) => setCurrentTheme(theme);

  // Current theme values
  const { defaultColor, defaultColorHover, darker, darkerHover, darkest, darkestHover } = themes[currentTheme];

  // Context value
  const value: ColorContextType = {
    defaultColor,
    defaultColorHover,
    darker,
    darkerHover,
    darkest,
    darkestHover,
    setHeaderTheme,
    currentTheme,
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

// Custom hook for using the context
export const useColorContext = (): ColorContextType => {
  const context = useContext(ColorContext);
  if (!context) throw new Error('useColorContext must be used within a ColorProvider');
  return context;
};
