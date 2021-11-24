import React, { forwardRef, InputHTMLAttributes } from 'react';

import { BaseInputStyles as S } from './BaseInput.styles';

export const BaseInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <S.Input {...props} ref={ref} />;
  }
);
