import React from 'react';
import { IconProps } from './types';
import { iconsCommon, iconsFilled, iconsHourcoding, iconsOutlined } from './icons';
import { getIconSize } from './utils';

const Icon = ({ size, color, ...props }: IconProps) => {
  if (props.category === 'hourcoding') {
    return <img src={iconsHourcoding[props.icon]} alt="icon" />;
  }
  const iconSvg =
    props.category === 'common'
      ? iconsCommon[props.icon]
      : props.category === 'generic'
        ? props.variant === 'filled'
          ? iconsFilled[props.icon]
          : iconsOutlined[props.icon]
        : '';
  const markup = { __html: iconSvg };
  const iconSize = getIconSize(size);

  const id = `icon-${props.category}-${props.icon}`;
  return (
    <div
      data-testId={id}
      style={{
        width: iconSize,
        height: iconSize,
        // [TODO]: Add theming support for color .
        color: color === 'primary' ? 'blue' : color === 'secondary' ? 'red' : 'black'
      }}
      dangerouslySetInnerHTML={markup}
    />
  );
};

export default Icon;
