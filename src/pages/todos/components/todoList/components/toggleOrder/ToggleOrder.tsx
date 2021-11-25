import { useTodosContainer } from 'pages/todos/Todos.container';
import React from 'react';

import { ToggleOrderStyles as S } from './ToggleOrder.styles';

export const ToggleOrder = () => {
  const { toggleOrder, ordered } = useTodosContainer();

  return (
    <S.Container onClick={toggleOrder}>
      <S.Icon />
      <S.Text>{ordered ? 'Back to default order' : 'High priority up'}</S.Text>
    </S.Container>
  );
};
