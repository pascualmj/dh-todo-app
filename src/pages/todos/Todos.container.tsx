/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import { ITodo } from 'app-types/models';
import { useAppSelector, useAppDispatch } from 'hooks/store/storeHooks';
import { useForm } from 'hooks/useForm';
import {
  addTodo as addTodoAction,
  clearTodos as clearTodoAction,
  removeTodo as removeTodoAction,
  toggleTodo as toggleTodoAction
} from 'store/slices/todos/todos';

type TFormValues = Pick<ITodo, 'title' | 'priority'>;

interface ITodosContextValue {
  addTodoForm: UseFormReturn<TFormValues>;
  todosList: ITodo[];
  onSubmit: SubmitHandler<TFormValues>;
  cleanList: () => void;
  deleteTodo: (data: Pick<ITodo, 'id'>) => void;
  toggleTodo: (data: Pick<ITodo, 'id'>) => void;
}

const TodosContext = React.createContext<ITodosContextValue>({} as ITodosContextValue);

export const useTodosContainer = () => useContext(TodosContext);

export const TodosContainer: React.FC = ({ children }) => {
  const { list } = useAppSelector(state => state.todos);
  const dispatch = useAppDispatch();
  const addTodoForm = useForm<TFormValues>({
    mode: 'all'
  });

  const onSubmit = (data: TFormValues) => {
    dispatch(addTodoAction(data));
    addTodoForm.reset();
  };
  const cleanList = () => dispatch(clearTodoAction());
  const deleteTodo = (data: Pick<ITodo, 'id'>) => dispatch(removeTodoAction(data));
  const toggleTodo = (data: Pick<ITodo, 'id'>) => dispatch(toggleTodoAction(data));

  return (
    <TodosContext.Provider
      value={{ addTodoForm, todosList: list, onSubmit, cleanList, deleteTodo, toggleTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
