import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { setIsLogged } from '../../redux/slices/userSlice';
import { IHeaderItem } from './headerItem.model';
import { selectCommon, selectUser } from '../../redux/store/store';
import {
  AppBarCloseIcon,
  AppBarLogo,
  AppBarLogoText,
  AppBarLogoWrapper,
  AppBarMenuIcon,
  NavbarBox,
  NavbarDrawerList,
  NavbarMenuItem,
  NavbarMenuItemPrimary,
  NavbarMenuButton
} from './headerStyle';
import { openLoginModal, openProfileModal, openSignupModal, toggleDrawer } from '../../redux/slices/commonSlice';
import { Avatar } from '@mui/material';
import { HOME_PATH } from '../../router/route/routeConfig';
import { IS_LOGGED_LOCAL_STORAGE } from '../../util/constants';
import CustomDrawer from '../common/customDrawer/customDrawer';




const Header = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector(selectUser);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { drawerOpen } = useAppSelector(selectCommon);


  const handleLogout = () => {
    dispatch(setIsLogged(false));
    localStorage.setItem(IS_LOGGED_LOCAL_STORAGE, JSON.stringify(false));
  }



  const navigateToPage = (route: string) => {
    history.push(route);
  }



  const handleHeaderItemClick = (action: Function) => {
    return () => {
      action();
      closeDropdownAndDrawer();
    }
  }

  const closeDropdownAndDrawer = () => {
    dispatch(toggleDrawer(false));
    setAnchorElUser(null);
  }

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer(!drawerOpen));
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClick = () => {
    dispatch(openLoginModal());
  }

  const handleSignupClick = () => {
    dispatch(openSignupModal());
  }

  const handleProfileClick = () => {
    dispatch(openProfileModal());
    setAnchorElUser(null);
  }

  const pages = [
    {
      id: 1,
      protected: false,
      action: () => { navigateToPage(HOME_PATH) },
      title: 'Flowers',
    },
    {
      id: 2,
      protected: true,
      action: () => { navigateToPage(HOME_PATH) },
      title: 'Favorites',
    }
  ] as IHeaderItem[];

  const settings = [
    {
      id: 1,
      title: 'Profile',
      protected: true,
      action: handleProfileClick,
    },
    {
      id: 2,
      action: handleLogout,
      protected: true,
      title: 'Logout',
    }] as IHeaderItem[];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        ...(drawerOpen && { boxShadow: 'none' }),
      }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AppBarLogoWrapper
              onClick={() => {
                navigateToPage('/home')
              }}
            >
              <AppBarLogo src='/favicon.ico' alt="FlowrSpot" />
              <AppBarLogoText>
                FlowrSpot
              </AppBarLogoText>
            </AppBarLogoWrapper>
            <NavbarBox sx={{ display: { xs: 'flex', md: 'none' }, flex: 1 }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleToggleDrawer}
                color="inherit"
              >
                {
                  drawerOpen ?
                    <AppBarCloseIcon />
                    :
                    <AppBarMenuIcon role="openDrawer"/>
                }

              </IconButton>
            </NavbarBox>


            <NavbarBox sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {
                !drawerOpen ?
                  <>
                    {pages.map((page) => (!page.protected || isLogged) && (
                      <NavbarMenuItem key={page.id} onClick={handleHeaderItemClick(page.action)}>
                        <Typography textAlign="center">{page.title}</Typography>
                      </NavbarMenuItem>
                    ))}
                    {
                      !isLogged && (
                        <NavbarMenuItemPrimary onClick={handleHeaderItemClick(handleLoginClick)}>
                          <Typography textAlign="center">Login</Typography>
                        </NavbarMenuItemPrimary>
                      )
                    }

                    {
                      !isLogged && (
                        <NavbarMenuButton onClick={handleHeaderItemClick(handleSignupClick)} sx={{
                          margin: 'auto 0 auto 10px',
                        }}>
                          New account
                        </NavbarMenuButton>
                      )
                    }
                  </>

                  :

                  <AppBarCloseIcon onClick={handleToggleDrawer} />
              }

            </NavbarBox>

            <Box sx={{ flexGrow: 0 }}>
              {isLogged &&
                <Tooltip title="Open settings" sx={{ display: { xs: 'none', md: 'block' } }}>
                  <IconButton onClick={handleOpenUserMenu} sx={{ display: { xs: 'none', md: 'block' } }}>
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
                {settings.map((setting) => (
                  <NavbarMenuItem key={setting.id} onClick={handleHeaderItemClick(setting.action)}>
                    <Typography textAlign="center">{setting.title}</Typography>
                  </NavbarMenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>

        </Container>
      </AppBar >
      <CustomDrawer>
        <NavbarDrawerList>
          {pages.map((page) => (!page.protected || isLogged) && (
            <NavbarMenuItem key={page.id} onClick={handleHeaderItemClick(page.action)} sx={{ margin: '10px auto 10px 0' }}>
              <Typography textAlign="center">{page.title}</Typography>
            </NavbarMenuItem>
          ))}
          {
            !isLogged && (
              <NavbarMenuItemPrimary onClick={handleHeaderItemClick(handleLoginClick)} sx={{ margin: '10px auto 10px 0' }}>
                <Typography textAlign="center">Login</Typography>
              </NavbarMenuItemPrimary>
            )
          }

          {settings.map((setting) => (!setting.protected || isLogged) && (
            <NavbarMenuItem key={setting.id} onClick={handleHeaderItemClick(setting.action)} sx={{ margin: '10px auto 10px 0' }}>
              <Typography textAlign="center">{setting.title}</Typography>
            </NavbarMenuItem>
          ))}

          {
            !isLogged && (
              <NavbarMenuButton onClick={handleHeaderItemClick(handleSignupClick)} sx={{
                margin: '10px auto 10px 10px',
              }}>
                New account
              </NavbarMenuButton>
            )
          }
        </NavbarDrawerList>
      </CustomDrawer>
    </Box>
  );
};
export default Header;
