import ICustomInputFieldProps from "./customInputFieldProps";
import { CustomInputFieldError, CustomInputFieldInput, CustomInputFieldPlaceholder, CustomInputFieldWrapper, InputPlaceholderWrapper } from "./customInputFieldStyle";

const CustomInputField = ({
  type,
  value,
  onValueChange,
  placeholderText,
  error,
  errorMessage,
  width,
}: ICustomInputFieldProps) => {

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  }

  return (
    <CustomInputFieldWrapper>
      <InputPlaceholderWrapper error={error} width={width}>
        <CustomInputFieldPlaceholder>{placeholderText}</CustomInputFieldPlaceholder>
        <CustomInputFieldInput type={type} value={value} onChange={handleValueChange} />
      </InputPlaceholderWrapper>
      {error && <CustomInputFieldError>{errorMessage}</CustomInputFieldError>}
    </CustomInputFieldWrapper>
  )
}

export default CustomInputField;