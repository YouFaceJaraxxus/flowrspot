import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import IUser from '../../models/user/user';
import { IGetCurrentUserResponse, ILogin, ILoginResponse, ISignup, ISignupResponse } from '../../service/interfaces/usersService';
import { usersHttpService as usersService } from '../../service/usersService/usersHttpService';

interface UsersState {
  currentUser: IUser | undefined;
  fetchingCurrentUser: boolean;
  loggingIn: boolean;
  signingUp: boolean;
  auth_token: string;
}

const initialState: UsersState = {
  currentUser: undefined,
  fetchingCurrentUser: false,
  loggingIn: false,
  signingUp: false,
  auth_token: '',
};

export const getCurrentUserAsync = createAsyncThunk(
  'users/getUsers',
  async (authToken: string): Promise<IGetCurrentUserResponse> => {
    const response = await usersService.getCurrentUserInfo(authToken);
    return response;
  },
);

export const loginAsync = createAsyncThunk(
  'users/login',
  async (data: ILogin): Promise<ILoginResponse> => {
    const response = await usersService.login(data);
    return response;
  },
);

export const signupAsync = createAsyncThunk(
  'users/signup',
  async (data: ISignup): Promise<ISignupResponse> => {
    const response = await usersService.signup(data);
    return response;
  },
);


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserAsync.pending, (state) => {
        state.fetchingCurrentUser = true;
      })
      .addCase(getCurrentUserAsync.fulfilled, (state, action) => {
        state.currentUser = action.payload.user;
        state.fetchingCurrentUser = false;
      })
      .addCase(getCurrentUserAsync.rejected, (state) => {
        state.fetchingCurrentUser = false;
      })

      .addCase(signupAsync.pending, (state) => {
        state.loggingIn = true;
      })
      .addCase(signupAsync.fulfilled, (state, action) => {
        state.auth_token = action.payload.auth_token;
        state.loggingIn = false;
      })
      .addCase(signupAsync.rejected, (state) => {
        state.loggingIn = false;
      })

      .addCase(loginAsync.pending, (state) => {
        state.signingUp = true;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.auth_token = action.payload.auth_token;
        state.signingUp = false;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.signingUp = false;
      })
  },
});

export default usersSlice.reducer;
