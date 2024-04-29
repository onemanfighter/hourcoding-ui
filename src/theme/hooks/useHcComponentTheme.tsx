import { useContext } from 'react';
import { Theme } from '../types';
import { HcComponentStyles } from './types';
import { HcThemeContext } from '../HcThemeProvider';

const useHcComponentTheme = (): HcComponentStyles => {
  const theme = useContext(HcThemeContext);

  return {
    Button: {
      contained: {
        backgroundColor: theme === Theme.LIGHT ? 'green.500' : 'green.300',
        color: theme === Theme.LIGHT ? 'neutral.0' : 'neutral.200',
        borderColor: theme === Theme.LIGHT ? 'blue.500' : 'blue.300',
      },
      outlined: {
        backgroundColor: theme === Theme.LIGHT ? 'neutral.0' : 'neutral.600',
        color: theme === Theme.LIGHT ? 'green.500' : 'green.300',
        borderColor: theme === Theme.LIGHT ? 'green.500' : 'green.300',
      },
      text: {
        color: theme === Theme.LIGHT ? 'green.500' : 'green.200',
      },
      link: {
        color: theme === Theme.LIGHT ? 'blue.500' : 'blue.300',
      },
    },
    Icon: {
      main: theme === Theme.LIGHT ? 'green.500' : 'green.300',
    },
  };
};

export default useHcComponentTheme;
