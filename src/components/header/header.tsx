import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { setIsLogged } from '../../redux/slices/userSlice';
import { IHeaderSetting, IHeaderTab } from './headerConfig.model';
import { selectUser } from '../../redux/store/store';
import { AppBarLogo, AppBarLogoWrapper } from './headerStyle';
import { IS_LOGGED_LOCAL_STORAGE } from '../../util/constants';
import { AccountCircle } from '@mui/icons-material';
import { openLoginModal, setTheme } from '../../redux/slices/commonSlice';

const pages = [] as IHeaderTab[];


const Header = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector(selectUser);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const settings = isLogged ? [
    {
      id: 1,
      title: 'Logout',
      action: () => {
        dispatch(setIsLogged(false));
        localStorage.setItem(IS_LOGGED_LOCAL_STORAGE, JSON.stringify(false));
      },
      protected: false,
    }
  ] as IHeaderSetting[]

    :

    [
      {
        id: 1,
        title: 'Login',
        action: () => {
          dispatch(openLoginModal());
        },
        protected: false,
      }
    ] as IHeaderSetting[];

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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                <MenuItem key={page.id} onClick={() => handleCloseNavMenu(page)}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (!page.protected || isLogged) && (
              <Button
                key={page.id}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AccountCircle />
              </IconButton>
            </Tooltip>
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
