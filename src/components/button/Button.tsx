import React from 'react';
import { ButtonProps } from './types';

const Button = ({ size = 'medium', isDisabled = false, clickHandler, ...props }: ButtonProps) => {
  const variantCss = props.variant === 'contained' ? 'bg-black' : 'bg-white';
  const sizeCss = size === 'small' ? 'px-4 py-2' : size === 'medium' ? 'px-6 py-3' : 'px-8 py-4';
  const onClickHandler = () => {
    if (isDisabled) {
      return;
    }
    if (clickHandler) clickHandler();
  };

  return (
    <button onClick={onClickHandler} className="bg-black h-10" disabled={isDisabled}>
      {props.variant === 'contained' || props.variant === 'outlined' || props.variant === 'text'
        ? props.label
        : null}
      {props.variant === 'icon' || props.variant === 'circle' ? (
        <img src={props.icon} alt="icon" />
      ) : null}
    </button>
  );
};

export default Button;
