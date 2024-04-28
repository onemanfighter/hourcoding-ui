export type ButtonProps = {
  label: string;
  size?: 'small' | 'default' | 'large';
  isDisabled?: boolean;
  variant?: ButtonVariant;
  clickHandler?: () => void;
};

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
  LINK = 'link',
}
