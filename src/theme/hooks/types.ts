import { HcColor } from '../types';

export type ButtonStyles = {
  backgroundColor?: HcColor;
  color: HcColor;
  borderColor?: HcColor;
};
export interface HcComponentStyles {
  Button: {
    contained: ButtonStyles;
    outlined: ButtonStyles;
    text: ButtonStyles;
    link: ButtonStyles;
  };
  Icon: {
    main: HcColor;
  };
}
