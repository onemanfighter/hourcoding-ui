import React from 'react';
import { createContext } from 'react';
import { HCThemeProviderProps, Theme } from './types';

const HcThemeContext = createContext<Theme>(Theme.DARK);

const HcThemeProvider = ({ theme, children }: HCThemeProviderProps) => {
  return <HcThemeContext.Provider value={theme}>{children}</HcThemeContext.Provider>;
};

export default HcThemeProvider;
export { HcThemeContext };
