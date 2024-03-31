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
    <button
      onClick={onClickHandler}
      className={`${sizeCss} ${variantCss}`}
      style={{
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: isDisabled ? 0.5 : 1,
        fontSize: size === 'small' ? '0.75rem' : size === 'medium' ? '1rem' : '1.25rem',
        height: size === 'small' ? '2rem' : size === 'medium' ? '2.5rem' : '3rem',
        width: size === 'small' ? '6rem' : size === 'medium' ? '8rem' : '10rem',
        backgroundColor: props.variant === 'contained' ? 'green' : 'white',
        color: props.variant === 'contained' ? 'white' : 'green',
        border: props.variant === 'outlined' ? '1px solid green' : 'none',
        borderRadius: props.variant === 'circle' ? '50%' : '0.25rem'
      }}
      disabled={isDisabled}>
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
