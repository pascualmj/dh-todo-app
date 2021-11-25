import { useTodosContainer } from 'pages/todos/Todos.container';
import React from 'react';

import { TodosFooterStyles as S } from './TodosFooter.styles';

export const TodosFooter = () => {
  const { cleanList, todosList } = useTodosContainer();

  return (
    <S.Container>
      <S.Text>
        You have {todosList.length} task{todosList.length === 1 ? '' : 's'}
      </S.Text>
      <S.ClearButton onClick={cleanList}>Clear todos</S.ClearButton>
    </S.Container>
  );
};
