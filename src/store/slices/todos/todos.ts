import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from 'app-types/models';
import type { RootState } from '../../types/storeHooks.types';
import { getNewId } from 'services/idGen/idGen';

const sliceName = 'todos';

interface IState {
  list: {
    ordered: boolean;
    todos: ITodo[];
  };
}

const initialState: IState = {
  list: {
    ordered: false,
    todos: []
  }
};

const todosSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Pick<ITodo, 'priority' | 'title'>>) {
      state.list.todos.unshift({
        id: getNewId(),
        done: false,
        ...action.payload
      });
    },
    toggleTodo(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      const todo = state.list.todos.find(todo => todo.id === action.payload.id);
      if (todo) todo.done = !todo.done;
    },
    removeTodo(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      state.list.todos = state.list.todos.filter(todo => todo.id !== action.payload.id);
    },
    clearTodos(state) {
      state.list.todos = [];
    },
    toggleOrder(state) {
      state.list.ordered = !state.list.ordered;
    }
  }
});

const { actions, reducer } = todosSlice;

export default reducer;

export const { addTodo, removeTodo, toggleTodo, clearTodos, toggleOrder } = actions;

// Selectors
const todosSelector = (state: RootState) => state.todos.list.todos;
const orderedSelector = (state: RootState) => state.todos.list.ordered;
export const memoizedTodos = createSelector(todosSelector, orderedSelector, (todos, ordered) => {
  if (ordered) return todos.slice().sort((a, b) => b.priority.localeCompare(a.priority));

  return todos;
});
