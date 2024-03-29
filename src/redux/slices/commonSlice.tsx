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
  snackbarConfig: ISnackbarConfig;
  progressCircleConfig: IProgressCircleConfig;
  loginModalOpen: boolean;
  signupModalOpen: boolean;
  profileModalOpen: boolean;
  drawerOpen: boolean;
}



export const initialState: ICommon = {
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
  profileModalOpen: false,
  drawerOpen: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
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
    },
    openSignupModal: (state) => {
      state.signupModalOpen = true;
      state.loginModalOpen = false;
    },
    closeSignupModal: (state) => {
      state.signupModalOpen = false;
    },
    openProfileModal: (state) => {
      state.profileModalOpen = true;
      state.signupModalOpen = false;
      state.loginModalOpen = false;
    },
    closeProfileModal: (state) => {
      state.profileModalOpen = false;
    },
    toggleDrawer: (state, action: PayloadAction<boolean>)=>{
      state.drawerOpen = action.payload;
    },
  },
})

export const {
  openSnackbar,
  closeSnackbar,
  openProgress,
  closeProgress,
  openLoginModal,
  closeLoginModal,
  openSignupModal,
  closeSignupModal,
  openProfileModal,
  closeProfileModal,
  toggleDrawer,
} = commonSlice.actions;

export default commonSlice.reducer; 