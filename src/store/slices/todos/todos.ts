import { createSlice } from '@reduxjs/toolkit';

const sliceName = 'todos';

const initialState = {
  list: []
};

const todosSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {}
});

const { reducer } = todosSlice;

export default reducer;

// export const {} = actions;
