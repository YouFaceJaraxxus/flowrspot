import { styled } from '@mui/material/styles';

export const ProfileWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 60px',
  margin: 'auto',
}));

const ProfileRow = styled('div')(() => ({
  margin: '0 0 auto 0',
  width: '100%',
}));

const ProfileTextItem = styled('span')(({theme}) => ({
  fontFamily: theme.typography.body2.fontFamily,
  wordBreak: 'break-word',
}));

const ProfileTextItemDark = styled(ProfileTextItem)(({theme}) => ({
  color: theme.palette.grey["500"],
}));

const ProfileTextItemLight = styled(ProfileTextItem)(({theme}) => ({
  color: theme.palette.grey["300"],
}));

export const ProfileAvatarWrapper = styled(ProfileRow)(({theme}) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '70px',
  [theme.breakpoints.down('sm')]:{
    height: 'auto',
    justifyContent: 'center',
  },
  flexWrap: 'wrap',
}));

export const ProfileNameSightings = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginLeft: '20px',
  [theme.breakpoints.down('sm')]:{
    width: '100%',
    marginTop: '20px',
    marginLeft: '0',
  }
}));

export const ProfileName = styled(ProfileTextItemDark)(() => ({
  fontSize: '1.5em',
  marginBottom: '3px',
}));

export const ProfileSightings = styled(ProfileTextItemLight)(() => ({
  fontSize: '0.7em',
}));

export const ProfileDetailPair = styled(ProfileRow)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginTop: '20px',
  marginBottom: '10px',
}));

export const ProfileDetailKey = styled(ProfileTextItemLight)(() => ({
  fontSize: '0.6em',
  marginBottom: '10px',
}));

export const ProfileDetailValue = styled(ProfileTextItemDark)(() => ({
  fontSize: '1.2em',
  fontWeight: 'bolder',
}));
