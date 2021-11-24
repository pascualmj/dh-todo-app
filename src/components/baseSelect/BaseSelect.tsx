import React, { forwardRef, SelectHTMLAttributes } from 'react';

import { BaseSelectStyles as S } from './BaseSelect.styles';

export const BaseSelect = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  (props, ref) => {
    return (
      <S.Select {...props} ref={ref}>
        {props.children}
      </S.Select>
    );
  }
);
