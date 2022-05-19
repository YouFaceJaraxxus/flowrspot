import { styled } from '@mui/material/styles';

export interface IInputPlaceholderWrapper{
  error: boolean;
  width?: string;
}

export const CustomInputFieldWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  margin: '10px auto',
  width: '100%',
}));


export const InputPlaceholderWrapper = styled('div')<IInputPlaceholderWrapper>(({theme, error, width}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  backgroundColor: theme.palette.grey['400'],
  padding: '10px',
  borderRadius: '3px',
  border: error? `1px solid ${theme.palette.error.main}` : 'none',
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