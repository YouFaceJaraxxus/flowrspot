import { configureStore } from '@reduxjs/toolkit';
import commonSlice from '../slices/commonSlice';
import flowersSlice from '../slices/flowersSlice';
import userSlice from '../slices/userSlice';

const store = configureStore({
  reducer: {
    common: commonSlice,
    user: userSlice,
    flowers: flowersSlice,
  },
})
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const selectCommon = (state: RootState) => state.common;
const selectUser = (state: RootState) => state.user;
const selectFlowers = (state: RootState) => state.flowers;

export type{
  RootState,
  AppDispatch,
}

export {
  selectCommon,
  selectUser,
  selectFlowers,
}

export default store;