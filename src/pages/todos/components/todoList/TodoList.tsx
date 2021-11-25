import React from 'react';

import { BaseTodoItem } from 'components/baseTodoItem/BaseTodoItem';
import { ToggleOrder } from './components/toggleOrder/ToggleOrder';
import { useTodosContainer } from 'pages/todos/Todos.container';
import { TodoListStyles as S } from './TodoList.styles';

export const TodoList = () => {
  const { todosList } = useTodosContainer();

  return (
    <S.Container>
      <ToggleOrder />
      {todosList.map(item => (
        <BaseTodoItem
          priority={item.priority}
          title={item.title}
          onDelete={() => {
            console.log('delete item!');
          }}
          onToggle={() => {
            console.log('toggle item!');
          }}
          done={item.done}
          key={item.id}
        />
      ))}
    </S.Container>
  );
};
