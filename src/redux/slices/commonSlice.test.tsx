import { SUCCESS } from '../../util/constants'
import reducer, { openLoginModal } from './commonSlice'

test('should open modal', () => {
  const previousState = {
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
    profileModalOpen: false,
    drawerOpen: false,
  }
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