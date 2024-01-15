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
    updateTodo: (state, action: PayloadAction<TTodo>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos[todoIndex] = action.payload;
    },
    deleteTodo: (state, action: PayloadAction<TTodo>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.todos.splice(todoIndex, 1);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
