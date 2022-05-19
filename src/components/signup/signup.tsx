import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { setIsLogged } from '../../redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { EMAIL_REGEX, IS_LOGGED_LOCAL_STORAGE } from '../../util/constants';
import ISignupForm from './signupForm';
import { CustomForm, SubmitButton, FormTitle, FormWrapper } from '../common/customForm/customFormStyle';
import { HOME_PATH } from '../../router/route/routeConfig';
import CustomModal from '../common/modal/customModal';
import { selectCommon } from '../../redux/store/store';
import { closeSignupModal } from '../../redux/slices/commonSlice';
import CustomInputField from '../common/customInputField/customInputField';
import { DoubleInputWrapper } from './signupStyle';

const Signup = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { signupModalOpen } = useAppSelector(selectCommon);

  const { handleSubmit, control, reset, clearErrors } = useForm<ISignupForm>();

  const onSubmit = () => {
    dispatch(setIsLogged(true));
    localStorage.setItem(IS_LOGGED_LOCAL_STORAGE, JSON.stringify(true));
    history.push(HOME_PATH);
    handleCloseSignupModal();
    reset();
  }

  const handleCloseSignupModal = () => {
    dispatch(closeSignupModal());
    clearErrors();
  }

  return (
    <CustomModal isOpen={signupModalOpen} handleClose={handleCloseSignupModal}>
      <FormWrapper>
        <FormTitle>
          Create an account
        </FormTitle>
        <CustomForm
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >

          <DoubleInputWrapper width="100%">
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInputField
                  placeholderText={'First Name'}
                  value={value}
                  onValueChange={onChange}
                  error={error? true : false}
                  errorMessage={error ? error.message : null}
                  type="text"
                  wrapperWidth="40%"
                />
              )}
              rules={{
                required: 'Name required',
              }}
            />

            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInputField
                  placeholderText={'Last Name'}
                  value={value}
                  onValueChange={onChange}
                  error={error? true : false}
                  errorMessage={error ? error.message : null}
                  type="text"
                  wrapperWidth="40%"
                />
              )}
              rules={{
                required: 'Last Name required',
              }}
            />
          </DoubleInputWrapper>

          <Controller
            name="dateOfBirth"
            control={control}
            defaultValue={new Date()}
            render={({
              field: { onChange, value },
              fieldState: { error },
            }) => (
              <CustomInputField
                placeholderText={'Date of Birth'}
                value={new Date().toDateString()}
                onValueChange={onChange}
                error={error? true : false}
                errorMessage={error ? error.message : null}
                type="text"
                width="90%"
              />
            )}
            rules={{
              required: 'Date of Birth required',
            }}
          />

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
                error={error? true : false}
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
                error={error? true : false}
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

          <SubmitButton
            type="submit"
            width='95%'
            margin='20px auto 10px auto'
          >
            Create account
          </SubmitButton>
        </CustomForm>
      </FormWrapper>
    </CustomModal>

  )
};

export default Signup;