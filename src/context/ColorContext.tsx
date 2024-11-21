// src/context/ColorContext.tsx
import React, { createContext, useState, useContext } from 'react';
import { BLUE, BLUE_DARKER, BLUE_DARKEST } from '@/constants'; // Default color constants

// Define the shape of the context
interface ColorContextProps {
  headerColor: string;
  headerColorDarker: string;
  headerColorDarkest: string;
  headerBorderColor: string;
  setHeaderTheme: (theme: 'blue' | 'green' | 'gray') => void;
}

// Create the context
const ColorContext = createContext<ColorContextProps | undefined>(undefined);

// Map themes to colors
const colorThemes = {
  blue: {
    headerColor: BLUE,
    headerColorDarker: BLUE_DARKER,
    headerColorDarkest: BLUE_DARKEST,
    headerBorderColor: BLUE,
  },
  green: {
    headerColor: '#1A8551', // GREEN
    headerColorDarker: '#10633B', // GREEN_DARKER
    headerColorDarkest: '#093E26', // GREEN_DARKEST
    headerBorderColor: '#1A8551', // GREEN
  },
  gray: {
    headerColor: '#6C757D', // GRAY
    headerColorDarker: '#495057', // GRAY_DARKER
    headerColorDarkest: '#343A40', // GRAY_DARKEST
    headerBorderColor: '#6C757D', // GRAY
  },
};

// Provider component
export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'blue' | 'green' | 'gray'>('blue'); // Default theme

  const currentColors = colorThemes[theme];

  const setHeaderTheme = (theme: 'blue' | 'green' | 'gray') => {
    setTheme(theme); // Update theme
  };

  return (
    <ColorContext.Provider
      value={{
        ...currentColors, // Provide dynamic colors
        setHeaderTheme, // Function to update theme
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook for accessing the context
export const useColorContext = (): ColorContextProps => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColorContext must be used within a ColorProvider');
  }
  return context;
};
