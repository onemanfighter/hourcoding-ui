import { useContext } from 'react';
import { HcThemeContext } from '../HcThemeProvider';
import { flattenColorPalette } from '../Color';
import { HcColor } from '../types';

const useHcColor = () => {
  const theme = useContext(HcThemeContext);

  return (color: HcColor) => flattenColorPalette(theme)[color];
};

export default useHcColor;
