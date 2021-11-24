import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { TBaseButtonVariant } from 'app-types/components/baseButton';
import { BaseButtonStyles as S } from './BaseButton.styles';

interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TBaseButtonVariant;
  children?: React.ReactNode;
}

export const BaseButton = forwardRef<HTMLButtonElement, IBaseButtonProps>(
  ({ variant = 'primary', children, ...otherProps }, ref) => (
    <S.Button variant={variant} {...otherProps} ref={ref}>
      {children}
    </S.Button>
  )
);
