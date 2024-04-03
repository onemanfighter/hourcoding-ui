export type IconProps = {} & (
  | {
      category: 'generic';
      size?: 'small' | 'medium' | 'large';
      variant?: 'filled' | 'outlined';
      color?: 'primary' | 'secondary' | 'tertiary';
      icon: GenericIcon;
    }
  | {
      category: 'common';
      size?: 'small' | 'medium' | 'large';
      color?: 'primary' | 'secondary' | 'tertiary';
      icon: CommonIcon;
    }
  | {
      category: 'hourcoding';
      size?: 'small' | 'medium' | 'large';
      color?: 'primary' | 'secondary' | 'tertiary';
      icon: HourcodingIcon;
    }
);

export enum HourcodingIcon {
  HOURCODING = 'hourCoding'
}
export enum GenericIcon {
  HOME = 'home',
  BACK = 'back'
}

export enum CommonIcon {
  ADD = 'add',
  REMOVE = 'remove',
  QR = 'qr'
}
