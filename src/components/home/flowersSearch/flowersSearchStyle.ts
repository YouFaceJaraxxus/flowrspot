import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FlowersSearchWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginBottom: '10px',
  background: 'url("./images/flowers_search_background.png")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '500px',
}));

export const FlowersSearchItems = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '440px',
  margin: 'auto',

  [theme.breakpoints.down('md')]: {
    width: '60%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '90%',
  },
}));

export const FlowersSearchTitle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.common.white,
  fontSize: '2em',
  fontWeight: 'bolder',
}));

export const FlowersSearchSubtitle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  fontFamily: theme.typography.subtitle1.fontFamily,
  color: theme.palette.common.white,
  fontSize: '0.7em',
  fontWeight: '400',
  opacity: '0.7',
  marginTop: '2px',
}));

export const FlowersSearchInput = styled(TextField)(({ theme }) => ({
  textAlign: 'center',
  fontFamily: theme.typography.body2.fontFamily,
  marginTop: '30px',
  backgroundColor: theme.palette.common.white,
  borderRadius: '3px',
  '&> div > input': {
    color: theme.palette.grey["300"],
    fontWeight: 'bolder',
    '&::placeholder':{
      color: theme.palette.grey["300"],
      fontWeight: 'bolder',
    }
  }
}));