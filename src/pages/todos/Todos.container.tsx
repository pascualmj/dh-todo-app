/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import { ITodo } from 'app-types/models';
import { useAppSelector, useAppDispatch } from 'hooks/store/storeHooks';
import { useForm } from 'hooks/useForm';
import { addTodo as addTodoAction } from 'store/slices/todos/todos';

type TFormValues = Pick<ITodo, 'title' | 'priority'>;

interface ITodosContextValue {
  addTodoForm: UseFormReturn<TFormValues>;
  todosList: ITodo[];
  onSubmit: SubmitHandler<TFormValues>;
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
  };

  return (
    <TodosContext.Provider value={{ addTodoForm, todosList: list, onSubmit }}>
      {children}
    </TodosContext.Provider>
  );
};
