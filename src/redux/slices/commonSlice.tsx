import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SUCCESS } from '../../util/constants';

interface ISnackbarConfig {
  showSnackbar: boolean;
  snackbarText: string;
  snackbarType: 'success' | 'error';
}

interface IProgressCircleConfig{
  showProgress: boolean;
  progressText: string;
  progressSize: number;
}

interface ICommon {
  theme: 'light' | 'dark';
  snackbarConfig: ISnackbarConfig;
  progressCircleConfig: IProgressCircleConfig;
  loginModalOpen: boolean;
  signupModalOpen: boolean;
}



const initialState: ICommon = {
  theme: 'light',
  snackbarConfig: {
    showSnackbar: false,
    snackbarText: '',
    snackbarType: SUCCESS,
  },
  progressCircleConfig: {
    showProgress: false,
    progressText: '',
    progressSize: 0,
  },
  loginModalOpen: false,
  signupModalOpen: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    openSnackbar: (state, action: PayloadAction<ISnackbarConfig>) => {
      state.snackbarConfig = action.payload;
    },
    closeSnackbar: (state) => {
      state.snackbarConfig = {
        showSnackbar: false,
        snackbarText: '',
        snackbarType: SUCCESS,
      }
    },
    openProgress: (state, action: PayloadAction<IProgressCircleConfig>) => {
      state.progressCircleConfig = action.payload;
    },
    closeProgress: (state) => {
      state.progressCircleConfig = {
        showProgress: false,
        progressText: '',
        progressSize: 0,
      }
    },
    openLoginModal: (state) => {
      state.loginModalOpen = true;
      state.signupModalOpen = false;
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false;
      state.signupModalOpen = true;
    },
    openSignupModal: (state) => {
      state.signupModalOpen = true;
      state.loginModalOpen = false;
    },
    closeSignupModal: (state) => {
      state.signupModalOpen = true;
      state.loginModalOpen = false;
    }
  },
})

export const {
  setTheme,
  openSnackbar,
  closeSnackbar,
  openProgress,
  closeProgress,
  openLoginModal,
  closeLoginModal,
  openSignupModal,
  closeSignupModal,
} = commonSlice.actions;

export default commonSlice.reducer; 