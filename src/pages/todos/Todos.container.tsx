import React, { useContext } from 'react';
import { UseFormReturn } from 'react-hook-form';

import { useForm } from 'hooks/useForm';

interface ITodosContextValue {
  addTodoForm: UseFormReturn;
}

const TodosContext = React.createContext<ITodosContextValue>({} as ITodosContextValue);

export const useTodosContainer = () => useContext(TodosContext);

export const TodosContainer: React.FC = ({ children }) => {
  const addTodoForm = useForm({
    mode: 'all'
  });

  return <TodosContext.Provider value={{ addTodoForm }}>{children}</TodosContext.Provider>;
};
