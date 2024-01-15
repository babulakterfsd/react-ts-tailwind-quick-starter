import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TTodo } from '../../types/commonTypes';
import { todoInitialState } from '../initialStates';

const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        isCompleted: false,
      });
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
