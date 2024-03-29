import { styled } from '@mui/material/styles';

export interface IInputPlaceholderWrapper{
  haserror: boolean | string;
  width?: string;
}

export interface ICustomInputFieldWrapper{
  width?: string;
}

export const CustomInputFieldWrapper = styled('div')<ICustomInputFieldWrapper>(({width}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '10px auto',
  width: width?? '100%',
}));


export const InputPlaceholderWrapper = styled('div')<IInputPlaceholderWrapper>(({theme, haserror, width}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: theme.palette.grey['400'],
  padding: '10px',
  borderRadius: '3px',
  //even though we could simply pass a boolean (true/false), it causes a red warning "passed `true`/`false` for non-boolean value"
  border: haserror === 'true'? `1px solid ${theme.palette.error.main}` : 'none',
  width: width?? '100%',
}));

export const CustomInputFieldPlaceholder = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.grey['400'],
  color: theme.palette.grey['300'],
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: '0.8em',
}));


export const CustomInputFieldInput = styled('input')(({theme}) => ({
  backgroundColor: theme.palette.grey['400'],
  fontFamily: theme.typography.body2.fontFamily,
  fontSize: '1.1em',
  border: 'none',
  outline: 'none',
  '&:focus':{
    border: 'none',
    outline: 'none',
  },
  marginTop: '2px',
  width: '100%',
}));

export const CustomInputFieldError = styled('div')(({theme}) => ({
  backgroundColor: theme.palette.grey['400'],
  color: theme.palette.error.main,
  fontFamily: theme.typography.body2.fontFamily,
  width: '90%',
  fontSize: '0.8em',
  wordBreak: 'break-word',
}));