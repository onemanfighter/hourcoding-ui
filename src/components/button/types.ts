type ButtonProps = {
  isDisabled?: boolean;
  size: 'small' | 'medium' | 'large';
  clickHandler?: () => void;
} & (ButtonWithText | ButtonWithIcon | ButtonWithIconAndText);

type ButtonWithText = {
  variant: 'contained' | 'outlined' | 'text';
  label: string;
};

type ButtonWithIcon = {
  variant: 'icon' | 'circle';
  icon: string;
};

type ButtonWithIconAndText = {
  variant: 'icon-and-text';
  icon: string;
  label: string;
  iconPosition: 'left' | 'right';
};

export type { ButtonProps };
