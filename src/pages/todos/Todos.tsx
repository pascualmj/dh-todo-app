import React from 'react';

import { TodosContainer } from './Todos.container';
import { AddTodoForm } from './components/addTodoForm/AddTodoForm';
import { TodoList } from './components/todoList/TodoList';
import { TodosStyles as S } from './Todos.styles';
import { TodosFooter } from './components/todosFooter/TodosFooter';

const Todos = () => {
  return (
    <TodosContainer>
      <S.Container>
        <S.Title>What you have for today?</S.Title>
        <AddTodoForm />
        <TodoList />
        <TodosFooter />
      </S.Container>
    </TodosContainer>
  );
};

export default Todos;
