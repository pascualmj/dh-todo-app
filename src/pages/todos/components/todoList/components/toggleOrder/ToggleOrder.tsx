import React from 'react';

import { ToggleOrderStyles as S } from './ToggleOrder.styles';

export const ToggleOrder = () => {
  return (
    <S.Container
      onClick={() => {
        console.log('toggle order!');
      }}
    >
      <S.Icon />
      <S.Text>High priority up</S.Text>
    </S.Container>
  );
};
