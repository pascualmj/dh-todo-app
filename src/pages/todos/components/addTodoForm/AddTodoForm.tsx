import React from 'react';

import { BaseButton } from 'components/baseButton/BaseButton';
import { AddTodoFormStyles as S } from './AddTodoForm.styles';
import { useTodosContainer } from 'pages/todos/Todos.container';

export const AddTodoForm = () => {
  const { addTodoForm } = useTodosContainer();

  return (
    <S.Form onSubmit={addTodoForm.handleSubmit(data => console.log(data))}>
      <S.Input
        placeholder="Your task here..."
        {...addTodoForm.register('title', { required: true })}
      />
      <S.Select {...addTodoForm.register('priority', { required: true })}>
        <option value="2">High</option>
        <option value="1">Low</option>
      </S.Select>
      <BaseButton variant="secondary" type="submit">
        Add
      </BaseButton>
    </S.Form>
  );
};
