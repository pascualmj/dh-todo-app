import React from 'react';

import { BaseTodoItem } from 'components/baseTodoItem/BaseTodoItem';
import { ToggleOrder } from './components/toggleOrder/ToggleOrder';
import { TodoListStyles as S } from './TodoList.styles';

export const TodoList = () => {
  return (
    <S.Container>
      <ToggleOrder />
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
