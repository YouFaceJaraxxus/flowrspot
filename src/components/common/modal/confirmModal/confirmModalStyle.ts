import { styled } from '@mui/material/styles';


export const ConfirmModalWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const ConfirmModalTitle = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  wordBreak: 'break-word',
  fontSize: '1.4em',
  color: theme.palette.common.black,
  fontWeight: 'bolder',
  marginBottom: '20px'
}));

export const ButtonsWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ConfirmationModalButton = styled('div')(({theme}) => ({
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
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  minWidth: '100px',
  margin: '20px',
}));