import { useContext } from 'react';
import { Theme } from '../types';
import { HcComponentStyles } from './types';
import { HcThemeContext } from '../HcThemeProvider';

const useHcComponentTheme = (): HcComponentStyles => {
  const theme = useContext(HcThemeContext);

  return {
    Button: {
      primary: theme === Theme.LIGHT ? 'blue.500' : 'blue.300',
      secondary: theme === Theme.LIGHT ? 'grey.200' : 'grey.700',
      tertiary: theme === Theme.LIGHT ? 'red.500' : 'red.300'
    },
    Icon: {
      main: theme === Theme.LIGHT ? 'green.500' : 'green.300'
    }
  };
};

export default useHcComponentTheme;
