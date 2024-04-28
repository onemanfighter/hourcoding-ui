import { HcColor, Theme } from './types';

const neutral = {
  0: '#ffffff',
  100: '#fafafa',
  200: '#f5f5f5',
  300: '#f0f0f0',
  400: '#e5e5e5',
  500: '#d9d9d9',
  600: '#bfbfbf',
  700: '#8c8c8c',
  800: '#595959',
  900: '#262626',
  1000: '#000000',
};

const green = {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
};

const red = {
  50: '#fff1f1',
  100: '#ffd7d9',
  200: '#ffb3b8',
  300: '#ff8389',
  400: '#fa4d56',
  500: '#da1e28',
  600: '#a2191f',
  700: '#7c151c',
  800: '#501514',
  900: '#3d0d12',
};

const blue = {
  50: '#ebf5ff',
  100: '#e1effe',
  200: '#c3ddfd',
  300: '#a4cafe',
  400: '#76a9fa',
  500: '#3f83f8',
  600: '#1c64f2',
  700: '#1a56db',
  800: '#1e429f',
  900: '#233876',
};

const orange = {
  50: '#fff8f1',
  100: '#feecdc',
  200: '#fcd9bd',
  300: '#fdba8c',
  400: '#ff8a4c',
  500: '#ff5a1f',
  600: '#d03801',
  700: '#b43403',
  800: '#8a2c0d',
  900: '#73230d',
};

const yellow = {
  50: '#fdfdea',
  100: '#fdf6b2',
  200: '#fce96a',
  300: '#faca15',
  400: '#e3a008',
  500: '#c27803',
  600: '#9f580a',
  700: '#8e4b10',
  800: '#723b13',
  900: '#633112',
};

const system = {
  info: blue[500],
  success: green[500],
  warning: yellow[500],
  error: red[500],
};

const flattenColors = (color: object, colorName: string) => {
  const flattenedColor: { [key: string]: string } = {};
  Object.entries(color).forEach(([key, value]) => {
    flattenedColor[`${colorName}.${key}`] = value;
  });
  return flattenedColor;
};

export { neutral, green, red, blue, orange, yellow, system };

export const flattenColorPalette = (theme: Theme) => {
  const colors = {
    ...flattenColors(neutral, 'grey'),
    ...flattenColors(green, 'green'),
    ...flattenColors(red, 'red'),
    ...flattenColors(blue, 'blue'),
    ...flattenColors(orange, 'orange'),
    ...flattenColors(yellow, 'yellow'),
    ...flattenColors(system, 'systemColor'),
    primaryText: theme === Theme.LIGHT ? neutral[1000] : neutral[0],
    secondaryText: theme === Theme.LIGHT ? neutral[800] : neutral[200],
  };
  return colors as unknown as { [key in HcColor]: string };
};

export const Colors = {
  neutral,
  green,
  red,
  blue,
  orange,
  yellow,
  system,
};
