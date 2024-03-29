import { Controller, useForm } from 'react-hook-form';
import { setIsLogged } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { EMAIL_REGEX } from '../../util/constants';
import ILoginForm from './loginForm';
import { CustomForm, FormTitle, FormWrapper } from '../common/customForm/customFormStyle';
import CustomModal from '../common/modal/customModal';
import { selectCommon, selectUsers } from '../../redux/store/store';
import { closeLoginModal, openProfileModal } from '../../redux/slices/commonSlice';
import CustomInputField from '../common/customInputField/customInputField';
import { useState } from 'react';
import ConfirmModal from '../common/modal/confirmModal/confirmModal';
import { ILogin, ILoginResponse } from '../../service/interfaces/usersService';
import { getCurrentUserAsync, loginAsync, resetLoginError } from '../../redux/slices/usersSlice';
import { Error } from '../common/customForm/customFormStyle';
import { CustomButton } from '../common/customButton/customButtonStyle';

const Login = () => {
  const dispatch = useAppDispatch();
  const { loginModalOpen } = useAppSelector(selectCommon);
  const { loginError } = useAppSelector(selectUsers);

  const { getValues, handleSubmit, control, reset, clearErrors } = useForm<ILoginForm>();

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  }

  const handleConfirmModalAnswer = () => {
    closeConfirmationModal();
    handleCloseLoginModal();
    clearErrors();
    reset();
  }

  const handleConfirmationOk = () => {
    handleConfirmModalAnswer();
  }

  const handleConfirmationProfile = () => {
    handleConfirmModalAnswer();
    dispatch(openProfileModal());
  }

  const onSubmit = () => {
    dispatch(resetLoginError());
    const data = getValues() as ILogin;
    dispatch(loginAsync(data)).then((response) => {
      if (response.payload) {
        dispatch(getCurrentUserAsync((response.payload as ILoginResponse).auth_token))
          .then(() => {
            dispatch(setIsLogged(true));
            setConfirmationModalOpen(true);
          })
      }
    })

  }

  const handleCloseLoginModal = () => {
    dispatch(resetLoginError());
    dispatch(closeLoginModal());
    clearErrors();
  }

  return (
    <CustomModal 
      isOpen={loginModalOpen} 
      handleClose={handleCloseLoginModal}
      hasCloseButton
    >
      <>
        <FormWrapper>
          <FormTitle>
            Welcome Back
          </FormTitle>
          <CustomForm
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInputField
                  placeholderText={'Email address'}
                  value={value}
                  onValueChange={onChange}
                  error={error ? true : false}
                  errorMessage={error ? error.message : null}
                  type="text"
                  width="90%"
                />
              )}
              rules={{
                required: 'Email required',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Invalid format. Example: myName@domain.com'
                }
              }}
            />

            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInputField
                  placeholderText={'Password'}
                  value={value}
                  onValueChange={onChange}
                  error={error ? true : false}
                  errorMessage={error ? error.message : null}
                  type="password"
                  width="90%"
                />
              )}
              rules={{
                required: 'Password required',
                minLength: {
                  value: 8,
                  message: 'Password must contain at least 8 characters',
                },
              }}
            />

            <CustomButton
              type="submit"
              width='95%'
              margin='20px auto 10px auto'
            >
              Login to your account
            </CustomButton>
            {loginError && (
              <Error>
                {loginError}
              </Error>
            )}
          </CustomForm>
        </FormWrapper>
        <ConfirmModal
          title="Congratulations! You have successfully logged into FlowrSpot!"
          isOpen={confirmationModalOpen}
          handleClose={closeConfirmationModal}
          mainButtonAction={handleConfirmationOk}
          mainButtonText="Ok"
          secondaryButtonAction={handleConfirmationProfile}
          secondaryButtonText="Profile"
        />
      </>
    </CustomModal>

  )
};

export default Login;