import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBarLogoWrapper = styled('div')(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  [theme.breakpoints.down('xs')]:{
    justifyContent: 'flex-start',
  }
}));

export const AppBarLogo = styled('img')(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '30px',
}));

export const AppBarLogoText = styled('div')(({theme}) => ({
  color: theme.palette.primary.dark,
  fontWeight: 'bolder',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: '10px',
}));

export const AppBarMenuIcon = styled(MenuIcon)(({theme}) => ({
  color: theme.palette.grey["300"],
}));

export const AppBarCloseIcon = styled(CloseIcon)(({theme}) => ({
  color: theme.palette.grey["300"],
}));

export const NavbarBox = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));

export const NavbarDrawerList = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingLeft: '20px',
}));

export const NavbarMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.grey["300"],
  fontWeight: 'bolder',
  '& > p': {
    fontWeight: 'bolder',
  }
}));

export const NavbarMenuItemPrimary = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: 'bolder',
  '& > p': {
    fontWeight: 'bolder',
  }
}));

export const NavbarMenuButton = styled('button')(({ theme }) => ({
  fontSize: '1em',
  fontFamily: theme.typography.body2.fontFamily,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 15px',
  borderRadius: '50px',
  minWidth: '150px',
  textAlign: 'center',
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
}));
