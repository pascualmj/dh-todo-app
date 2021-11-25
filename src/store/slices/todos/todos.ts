import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITodo } from 'app-types/models';
import { getNewId } from 'services/idGen/idGen';

const sliceName = 'todos';

interface IState {
  list: ITodo[];
}

const initialState: IState = {
  list: []
};

const todosSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Pick<ITodo, 'priority' | 'title'>>) {
      state.list.unshift({
        id: getNewId(),
        done: false,
        ...action.payload
      });
    },
    toggleTodo(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      const todo = state.list.find(todo => todo.id === action.payload.id);
      if (todo) todo.done = !todo.done;
    },
    removeTodo(state, action: PayloadAction<Pick<ITodo, 'id'>>) {
      state.list = state.list.filter(todo => todo.id !== action.payload.id);
    }
  }
});

const { actions, reducer } = todosSlice;

export default reducer;

export const { addTodo, removeTodo, toggleTodo } = actions;
