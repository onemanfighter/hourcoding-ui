import React from 'react';
import { ButtonProps } from './types';

const Button = ({ size = 'medium', isDisabled = false, clickHandler, ...props }: ButtonProps) => {
  const onClickHandler = () => {
    if (isDisabled) {
      return;
    }
    if (clickHandler) clickHandler();
  };

  return (
    <button
      onClick={onClickHandler}
      className=" outline-double bg-grey h-10 p-2 hover:bg-black hover:text-white rounded-sm hover:shadow-md transition duration-300 ease-in-out"
      disabled={isDisabled}
    >
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
