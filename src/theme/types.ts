import { blue, green, neutral, orange, red, system, yellow } from './Color';
import { TEXT_VARIANTS } from './TextVariants';

type Neutral = `grey.${keyof typeof neutral}`;
type Blue = `blue.${keyof typeof blue}`;
type Green = `green.${keyof typeof green}`;
type Red = `red.${keyof typeof red}`;
type Orange = `orange.${keyof typeof orange}`;
type Yellow = `yellow.${keyof typeof yellow}`;
type System = `systemColor.${keyof typeof system}`;

export type HcColor = Neutral | Blue | Green | Red | Orange | Yellow | System;

// Text variants
type HeadersVariant = (typeof TEXT_VARIANTS.HEADERS)[keyof typeof TEXT_VARIANTS.HEADERS];
type TextContentVariant = (typeof TEXT_VARIANTS.CONTENT)[keyof typeof TEXT_VARIANTS.CONTENT];
export type TextVariantsType = HeadersVariant | TextContentVariant | 'default';

export type TextVariant = {
  fontSize: number;
  fontWeight: string;
  lineHeight: number;
  textDecorationLine?: 'none' | 'underline';
};

// Theme type
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

// Provider types
export type HCThemeProviderProps = {
  theme: Theme;
  children: React.ReactNode;
};
