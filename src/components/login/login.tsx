import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { setIsLogged } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { EMAIL_REGEX, IS_LOGGED_LOCAL_STORAGE } from '../../util/constants';
import ILoginForm from './loginForm';
import { CustomForm, SubmitButton, FormTitle, FormWrapper } from '../common/customForm/customFormStyle';
import { HOME_PATH } from '../../router/route/routeConfig';
import CustomModal from '../common/modal/customModal';
import { selectCommon } from '../../redux/store/store';
import { closeLoginModal } from '../../redux/slices/commonSlice';
import CustomInputField from '../common/customInputField/customInputField';

const Login = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { loginModalOpen } = useAppSelector(selectCommon);

  const { handleSubmit, control } = useForm<ILoginForm>();

  const onSubmit = () => {
    dispatch(setIsLogged(true));
    localStorage.setItem(IS_LOGGED_LOCAL_STORAGE, JSON.stringify(true));
    history.push(HOME_PATH);
    handleCloseLoginModal();
  }

  const handleCloseLoginModal = () => {
    dispatch(closeLoginModal());
  }

  return (
    <CustomModal isOpen={loginModalOpen} handleClose={handleCloseLoginModal}>
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
                error={!!error}
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
                error={!!error}
                errorMessage={error ? error.message : null}
                type="password"
                width="90%"
              />
            )}
            rules={{
              required: 'Password',
              minLength: {
                value: 8,
                message: 'Password must contain at least 8 characters',
              },
            }}
          />

          <SubmitButton
            type="submit"
            width='95%'
            margin='20px auto 10px auto'
          >
            Login to your account
          </SubmitButton>
        </CustomForm>
      </FormWrapper>
    </CustomModal>

  )
};

export default Login;