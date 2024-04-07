import { ICON_LARGE_SIZE, ICON_MEDIUM_SIZE, ICON_SMALL_SIZE } from './constants';
import { IconProps } from './types';

const getIconSize = (size: IconProps['size']) => {
  return size
    ? size === 'small'
      ? ICON_SMALL_SIZE
      : size === 'medium'
        ? ICON_MEDIUM_SIZE
        : ICON_LARGE_SIZE
    : ICON_MEDIUM_SIZE;
};

export { getIconSize };
