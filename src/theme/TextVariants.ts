import { TextVariant } from './types';

const Headers = {
  H1: 'header1',
  H2: 'header2',
  H3: 'header3',
  H4: 'header4',
  H5: 'header5',
  H6: 'header6',
} as const;

const PrimaryContent = {
  TEXT: 'primaryContentText',
  LINK: 'primaryContentLink',
} as const;

const ButtonTextVariant = {
  SMALL: 'buttonSmall',
  DEFAULT: 'buttonDefault',
  LARGE: 'buttonLarge',
} as const;

const ButtonVariant = {
  TEXT: ButtonTextVariant,
} as const;

export const TEXT_VARIANTS = {
  HEADERS: Headers,
  CONTENT: PrimaryContent,
  BUTTON: ButtonVariant,
} as const;

export const TextVariantsImp: Record<string, TextVariant> = {
  [TEXT_VARIANTS.HEADERS.H1]: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.HEADERS.H2]: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.HEADERS.H3]: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.HEADERS.H4]: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.HEADERS.H5]: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.HEADERS.H6]: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.CONTENT.TEXT]: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.CONTENT.LINK]: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.5,
    textDecorationLine: 'underline',
  },
  [TEXT_VARIANTS.BUTTON.TEXT.SMALL]: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.BUTTON.TEXT.DEFAULT]: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  [TEXT_VARIANTS.BUTTON.TEXT.LARGE]: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 1.5,
  },
  default: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 1.5,
  },
};
