import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomDrawerWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  width: '100vw',
  paddingTop: '10vh',
}));