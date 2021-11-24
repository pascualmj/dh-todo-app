import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { TBaseButtonVariant } from 'app-types/components/baseButton';
import { BaseButtonStyles as S } from './BaseButton.styles';

interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: TBaseButtonVariant;
}

export const BaseButton = forwardRef<HTMLButtonElement, IBaseButtonProps>(
  ({ text = '', variant = 'primary', ...otherProps }, ref) => (
    <S.Button variant={variant} {...otherProps} ref={ref}>
      {text}
    </S.Button>
  )
);
