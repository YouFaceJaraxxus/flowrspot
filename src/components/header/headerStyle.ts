import { styled } from '@mui/material/styles';

export const AppBarLogoWrapper = styled('form')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}));

export const AppBarLogo = styled('img')(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '30px',
}));
