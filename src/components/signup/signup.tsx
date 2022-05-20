import { Controller, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { EMAIL_REGEX } from '../../util/constants';
import ISignupForm from './signupForm';
import { CustomForm, SubmitButton, FormTitle, FormWrapper, Error } from '../common/customForm/customFormStyle';
import CustomModal from '../common/modal/customModal';
import { selectCommon } from '../../redux/store/store';
import { closeSignupModal, openLoginModal } from '../../redux/slices/commonSlice';
import CustomInputField from '../common/customInputField/customInputField';
import { DoubleInputWrapper } from './signupStyle';
import moment from 'moment';
import ConfirmModal from '../common/modal/confirmModal/confirmModal';
import { useEffect, useState } from 'react';
import { ISignup } from '../../service/interfaces/usersService';
import { signupAsync } from '../../redux/slices/usersSlice';

const Signup = () => {
  const dispatch = useAppDispatch();
  const { signupModalOpen } = useAppSelector(selectCommon);
  const [signupError, setSignupError] = useState(undefined as string);

  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  }

  const handleConfirmModalAnswer = () => {
    closeConfirmationModal();
    handleCloseSignupModal();
    clearErrors();
    reset();
  }

  const handleConfirmationOk = () => {
    handleConfirmModalAnswer();
    dispatch(openLoginModal());
  }

  const { getValues, handleSubmit, control, reset, clearErrors, setValue } = useForm<ISignupForm>();

  useEffect(() => {
    setValue("dateOfBirth", moment().format("MMM DD, YYYY"));
  }, [])

  const onSubmit = () => {
    setSignupError(null);
    const formData = getValues();
    const signupData = {
      email: formData.email,
      password: formData.password,
      date_of_birth: formData.dateOfBirth,
      first_name: formData.name,
      last_name: formData.lastName,
    } as ISignup;
    dispatch(signupAsync(signupData)).then((response) => {
      if (response.payload) {
        setConfirmationModalOpen(true);
      }
      else {
        setSignupError('Registration error.')
      }
    })

  }

  const handleCloseSignupModal = () => {
    dispatch(closeSignupModal());
    clearErrors();
    setSignupError(null);
  }

  return (
    <CustomModal isOpen={signupModalOpen} handleClose={handleCloseSignupModal}>
      <>
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
                    error={error ? true : false}
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
                    error={error ? true : false}
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

            {/*NOTE: I would use some sort of datepicker here,
          however, this would take time as there arent solutions that can be fine-tuned to this design very easily,
          so I'll leave this as a common "text" input.
          With Material UI, this could be done, but the design 
          */}
            <Controller
              name="dateOfBirth"
              control={control}
              defaultValue=""
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInputField
                  placeholderText={'Date of Birth'}
                  value={moment().format("MMM DD, YYYY")}
                  onValueChange={onChange}
                  error={error ? true : false}
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

            <SubmitButton
              type="submit"
              width='95%'
              margin='20px auto 10px auto'
            >
              Create account
            </SubmitButton>

            {
              signupError && (
                <Error>
                  {signupError}
                </Error>
              )
            }

          </CustomForm>
        </FormWrapper>

        <ConfirmModal
          title="Congratulations! You have successfully signed up for FlowrSpot!"
          isOpen={confirmationModalOpen}
          handleClose={closeConfirmationModal}
          mainButtonAction={handleConfirmationOk}
          mainButtonText="Ok"
        />
      </>
    </CustomModal>

  )
};

export default Signup;