import React from 'react';
import { IconProps } from './types';
import { ICON_LARGE_SIZE, ICON_MEDIUM_SIZE, ICON_SMALL_SIZE } from './constants';
import { iconsCommon, iconsFilled, iconsHourcoding, iconsOutlined } from './icons';

const Icon = ({ size, color, ...props }: IconProps) => {
  if (props.category === 'hourcoding') {
    return <img src={iconsHourcoding[props.icon]} alt="icon" />;
  }
  const iconSize = size
    ? size === 'small'
      ? ICON_SMALL_SIZE
      : size === 'medium'
        ? ICON_MEDIUM_SIZE
        : ICON_LARGE_SIZE
    : ICON_MEDIUM_SIZE;

  const iconSvg =
    props.category === 'common'
      ? iconsCommon[props.icon]
      : props.category === 'generic'
        ? props.variant === 'filled'
          ? iconsFilled[props.icon]
          : iconsOutlined[props.icon]
        : '';
  const markup = { __html: iconSvg };

  const id = `icon-${props.category}-${props.icon}`;
  return (
    <div
      id={id}
      style={{
        width: iconSize,
        height: iconSize,
        color: color === 'primary' ? 'blue' : color === 'secondary' ? 'red' : 'black'
      }}
      dangerouslySetInnerHTML={markup}
    />
  );
};

export default Icon;
