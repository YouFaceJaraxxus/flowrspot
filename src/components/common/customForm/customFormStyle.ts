import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100%',
  margin: 'auto',
}));

export const FormWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const FormTitle = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: '1.2em',
  fontWeight: 'bolder',
  margin: '10px auto',
}));

export const FormTextField = styled(TextField)(() => ({
  minWidth: '300px'
}));

export const Error = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
  marginLeft: '20px',
  wordBreak: 'break-word',
}));