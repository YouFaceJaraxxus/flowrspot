import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ICustomButton{
  width?: string;
  margin?: string;
}
export const CustomButton = styled('button')<ICustomButton>(({ theme, width, margin }) => ({
  width: width?? '100%',
  fontSize: '1em',
  fontFamily: theme.typography.body2.fontFamily,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 10px',
  borderRadius: '3px',
  textAlign: 'center',
  wordBreak: 'break-word',
  '&:hover': {
    opacity: 0.8,
    cursor: 'pointer',
  },
  border: 'none',
  outline: 'none',
  '&:focus': {
    outline: 'none',
    border: 'none',
  },
  margin: margin?? 'auto',
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
}));

export const FormTextField = styled(TextField)(() => ({
  minWidth: '300px'
}));

export const Error = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
  marginLeft: '20px',
  wordBreak: 'break-word',
}));