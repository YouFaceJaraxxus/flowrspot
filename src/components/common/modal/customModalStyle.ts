import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '400px',
  backgroundColor: theme.palette.common.white,
  p: 4,
  [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
    minWidth: '0px',
    width: '80%',
  },
  borderRadius: '3px',
  padding: '25px 20px',
  boxShadow: `2px 2px ${theme.palette.grey['100']}`,
}));

export const ModalBoxContent = styled(Box)(({ theme }) => ({
  position: 'relative',
}));

export const ModalCloseButton = styled('div')(({theme}) => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: '-20px',
  right: '-10px',
  '&:hover':{
    opacity: '0.8',
    cursor: 'pointer',
  },
  color: theme.palette.grey["300"],
}));