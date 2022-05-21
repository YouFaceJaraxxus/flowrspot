import { SUCCESS } from '../../util/constants'
import reducer, { initialState, openLoginModal } from './commonSlice'


test('should set modal open to true', () => {
  const previousState = initialState;
  expect(reducer(previousState, openLoginModal())).toEqual({
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
    loginModalOpen: true,
    signupModalOpen: false,
    profileModalOpen: false,
    drawerOpen: false,
  })
})