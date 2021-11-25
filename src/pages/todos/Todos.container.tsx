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
  toggleTodo as toggleTodoAction,
  toggleOrder as toggleOrderAction,
  memoizedTodos
} from 'store/slices/todos/todos';

type TFormValues = Pick<ITodo, 'title' | 'priority'>;

interface ITodosContextValue {
  addTodoForm: UseFormReturn<TFormValues>;
  todosList: ITodo[];
  ordered: boolean;
  onSubmit: SubmitHandler<TFormValues>;
  deleteTodo: (data: Pick<ITodo, 'id'>) => void;
  toggleTodo: (data: Pick<ITodo, 'id'>) => void;
  cleanList: () => void;
  toggleOrder: () => void;
}

const TodosContext = React.createContext<ITodosContextValue>({} as ITodosContextValue);

export const useTodosContainer = () => useContext(TodosContext);

export const TodosContainer: React.FC = ({ children }) => {
  const todosList = useAppSelector(memoizedTodos);
  const ordered = useAppSelector(state => state.todos.list.ordered);
  const dispatch = useAppDispatch();
  const addTodoForm = useForm<TFormValues>({
    mode: 'all'
  });

  const onSubmit = (data: TFormValues) => {
    dispatch(addTodoAction(data));
  };
  const deleteTodo = (data: Pick<ITodo, 'id'>) => dispatch(removeTodoAction(data));
  const toggleTodo = (data: Pick<ITodo, 'id'>) => dispatch(toggleTodoAction(data));
  const cleanList = () => dispatch(clearTodoAction());
  const toggleOrder = () => dispatch(toggleOrderAction());

  return (
    <TodosContext.Provider
      value={{
        addTodoForm,
        todosList,
        onSubmit,
        cleanList,
        deleteTodo,
        toggleTodo,
        toggleOrder,
        ordered
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};
