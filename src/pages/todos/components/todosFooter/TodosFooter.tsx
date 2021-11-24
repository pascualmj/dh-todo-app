import React from 'react';

import { TodosFooterStyles as S } from './TodosFooter.styles';

export const TodosFooter = () => {
  return (
    <S.Container>
      <S.Text>You have 4 tasks</S.Text>
      <S.ClearButton>Clear todos</S.ClearButton>
    </S.Container>
  );
};
