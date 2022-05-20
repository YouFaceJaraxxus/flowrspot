import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { setIsLogged } from '../../redux/slices/userSlice';
import { IHeaderSetting, IHeaderTab } from './headerConfig.model';
import { selectUser } from '../../redux/store/store';
import { AppBarLogo, AppBarLogoWrapper, NavbarBox, NavbarMenuItem, NavbarMenuItemPrimary, NavbarNewAccountButton } from './headerStyle';
import { openLoginModal, openSignupModal, setTheme } from '../../redux/slices/commonSlice';
import { Avatar } from '@mui/material';
import { HOME_PATH } from '../../router/route/routeConfig';

const pages = [
  {
    id: 1,
    protected: false,
    route: HOME_PATH,
    title: 'Flowers'
  }
] as IHeaderTab[];


const Header = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector(selectUser);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const logout = () => {
    dispatch(setIsLogged(false));
  }

  const settings = [{
    id: 1,
    action: logout,
    protected: true,
    title: 'Logout'
  }] as IHeaderSetting[]

  const handleNavClick = (route: string, logout = false) => {
    history.push(route);
    if (logout) dispatch(setIsLogged(false));
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (page: IHeaderTab) => {
    setAnchorElNav(null);
    history.push(page.route);
  };

  const handleCloseUserMenu = (setting: IHeaderSetting) => {
    setAnchorElUser(null);
    if (setting.action) setting.action();
  };

  const handleLoginClick = () => {
    dispatch(openLoginModal());
  }

  const handleSignupClick = () => {
    dispatch(openSignupModal());
  }

  const toggleTheme = (theme: 'light' | 'dark') => {
    dispatch(setTheme(theme));
    setAnchorElUser(null);
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppBarLogoWrapper
            sx={{
              display: { xs: 'none', md: 'flex' }, mr: 1
            }}
            onClick={() => {
              handleNavClick('/home')
            }}
          >
            <AppBarLogo src='/favicon.ico' alt="FlowrSpot" />
            FlowrSpot
          </AppBarLogoWrapper>
          <NavbarBox sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu

              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (!page.protected || isLogged) && (
                <NavbarMenuItem key={page.id} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </NavbarMenuItem>
              ))}
              {
                !isLogged && (
                  <>
                    <NavbarMenuItemPrimary>
                      <Typography textAlign="center" onClick={handleLoginClick}>Login</Typography>
                    </NavbarMenuItemPrimary>
                    <NavbarMenuItemPrimary onClick={handleSignupClick}>
                      <Typography textAlign="center">New account</Typography>
                    </NavbarMenuItemPrimary>
                  </>
                )
              }
            </Menu>
          </NavbarBox>

          <AppBarLogoWrapper
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              flexGrow: 1,
            }}
            onClick={() => {
              handleNavClick('/home')
            }}
          >
            <AppBarLogo src='/favicon.ico' alt="FlowrSpot" />
          </AppBarLogoWrapper>
          <NavbarBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (!page.protected || isLogged) && (
              <NavbarMenuItem key={page.id} onClick={() => handleCloseNavMenu(page)}>
                <Typography textAlign="center">{page.title}</Typography>
              </NavbarMenuItem>
            ))}
            {
              !isLogged && (
                <>
                  <NavbarMenuItemPrimary onClick={handleLoginClick}>
                    <Typography textAlign="center">Login</Typography>
                  </NavbarMenuItemPrimary>
                  <NavbarNewAccountButton onClick={handleSignupClick}>
                    New account
                  </NavbarNewAccountButton>
                </>
              )
            }

          </NavbarBox>

          <Box sx={{ flexGrow: 0 }}>
            {isLogged &&
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="./images/profile_avatar.png" />
                </IconButton>
              </Tooltip>}
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="center" onClick={() => { toggleTheme('light') }}>Light theme</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" onClick={() => { toggleTheme('dark'); }}>Dark theme</Typography>
              </MenuItem>
              {settings.map((setting) => (
                <MenuItem key={setting.id} onClick={() => handleCloseUserMenu(setting)}>
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
