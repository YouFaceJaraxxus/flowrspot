import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeConfig = ({ children }: any) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff',
        contrastText: '#fff',
        dark: 'rgba(236, 188, 179, 1)',
        light: 'rgba(236, 188, 179, 1)',
      },
      secondary: {
        main: '#e9e7ff',
        contrastText: '#e9e7ff',
      },
      text: {
        primary: '#20383C',
        secondary: '#000000',
      },
      error: {
        main: '#e74c3c',
        light: '#f8caca',
      },
      success: {
        main: '#2ECC71',
        light: '#c0fdd9',
      },
      common: {
        white: '#FFFFFF',
      },
      grey: {
        "100": '#b9b6b6',
        "200": 'rgba(0, 0, 0, 0.5)',
        "300": 'rgba(148, 158, 160, 1)',
        "400": '#F5F6F7',
        "500": 'rgba(51, 65, 68, 1)',
      }
    },
    typography: {
      fontFamily: ['Montserrat', 'Ubuntu', 'Playfair Display','"Helvetica Neue"', 'Arial', 'sans-serif'].join(
        ',',
      ),
      body1: {
        fontFamily: 'Montserrat',
      },
      body2: {
        fontFamily: 'Ubuntu',
      },
      subtitle1:{
        fontFamily: 'Playfair Display',
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 700,
        lg: 950,
        xl: 1440,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: '#6b6b6b #2b2b2b',
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: 'none',
              width: 8,
              height: 5,
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 10,
              backgroundColor: '#948CFC',
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: '#2b2b2b',
            },
          },
        },
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeConfig;
