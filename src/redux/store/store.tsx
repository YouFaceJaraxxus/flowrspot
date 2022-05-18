import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '../slices/commonSlice';
import userSlice from '../slices/userSlice';

const store = configureStore({
  reducer: {
    common: commonSlice,
    user: userSlice,
  },
})
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectCommon = (state: RootState) => state.common;
const selectUser = (state: RootState) => state.user;

export type{
  RootState,
  AppDispatch,
}

export {
  selectCommon,
  selectUser,
}

export default store;