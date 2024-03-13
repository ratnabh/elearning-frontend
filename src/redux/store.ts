// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/usersSlice';
export const store = configureStore({
  reducer: {
    userReducer
    // our reducers goes here
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;