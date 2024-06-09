import { ButtonProps, ButtonVariant } from './types';
import { motion } from 'framer-motion';
import { useHcColor, useHcComponentTheme, useHcTextVariants } from '../../theme';
import { BUTTON_BORDER_RADIUS } from './constants';

const Button = ({
  size = 'large',
  label,
  isDisabled = false,
  variant = ButtonVariant.CONTAINED,
  clickHandler,
}: ButtonProps) => {
  const buttonTheme = useHcComponentTheme().Button[variant];
  const getTextVariant = useHcTextVariants();
  const getColor = useHcColor();

  const textVariant = () => {
    if (size === 'small') {
      return getTextVariant('buttonSmall');
    } else if (size === 'default') {
      return getTextVariant('buttonDefault');
    } else if (size === 'large') {
      return getTextVariant('buttonLarge');
    } else {
      return getTextVariant('buttonDefault');
    }
  };

  const onClickHandler = () => {
    if (isDisabled) {
      return;
    }

    if (clickHandler) clickHandler();
  };

  return (
    <motion.button
      onClick={onClickHandler}
      disabled={isDisabled}
      animate={{
        scale: isDisabled ? 1 : 1.1,
        transition: {
          duration: 0.3,
        },
      }}
      whileHover={
        isDisabled
          ? {}
          : {
              scale: 1.2,
              backgroundColor: getColor('neutral.600'),
              transition: {
                duration: 0.3,
              },
            }
      }
      whileTap={
        isDisabled
          ? {}
          : {
              scale: 1,
              transition: {
                duration: 0.1,
              },
            }
      }
      style={{
        padding: size === 'small' ? '4px 8px' : size === 'default' ? '6px 12px' : '8px 16px',
        border: variant === ButtonVariant.OUTLINED ? '1px solid' : 'none',
        ...textVariant(),
        borderRadius: BUTTON_BORDER_RADIUS,
        borderColor: buttonTheme.borderColor ? getColor(buttonTheme.borderColor) : 'transparent',
        color: getColor(buttonTheme.color),
        background: buttonTheme.backgroundColor
          ? getColor(buttonTheme.backgroundColor)
          : 'transparent',
      }}
    >
      {label}
    </motion.button>
  );
};

export default Button;
