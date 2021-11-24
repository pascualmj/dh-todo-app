import { BaseTodoItem } from 'components/baseTodoItem/BaseTodoItem';
import React from 'react';

import { TodoListStyles as S } from './TodoList.styles';

export const TodoList = () => {
  return (
    <S.Container>
      <BaseTodoItem
        priority="2"
        title="Saraza"
        onDelete={() => {
          console.log('delete item!');
        }}
        onToggle={() => {
          console.log('toggle item!');
        }}
        done
      />
    </S.Container>
  );
};
