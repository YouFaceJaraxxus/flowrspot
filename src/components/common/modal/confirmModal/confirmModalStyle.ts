import { CustomButton } from './../../customButton/customButtonStyle';
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

export const ConfirmationModalButton = styled(CustomButton)(({theme}) => ({
  minWidth: '100px',
  margin: '20px',
}));