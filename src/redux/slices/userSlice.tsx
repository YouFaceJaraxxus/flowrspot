import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IUser {
  isLogged: boolean;
}

const initialState: IUser = {
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setCheckedIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
  },
})

export const {
  setIsLogged,
} = userSlice.actions;

export default userSlice.reducer; 