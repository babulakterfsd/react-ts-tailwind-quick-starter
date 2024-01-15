import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import todoReducer from './features/todoSlice';
import { myCustomReduxLogger } from './middleware/myCustomReduxLogger';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  //   devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myCustomReduxLogger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
