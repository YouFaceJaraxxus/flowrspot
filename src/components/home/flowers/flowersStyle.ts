import { styled } from '@mui/material/styles';

export const FlowersWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1044px',
}));

export const FlowersGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '95%',
  maxWidth: '1024px',
}));

export const FlowersGridItem = styled('div')(({theme}) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '23%',
  height: '300px',  
  padding: '1%',
  [theme.breakpoints.down('lg')]: {
    width: '31%',
  },
  [theme.breakpoints.down('md')]: {
    width: '48%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '98%',
  },
}));

export const FlowerImageWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
}));

export const FlowerImage = styled('img')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  borderRadius: '5px',
}));

export const FlowerDetails = styled('div')(() => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  bottom: '30px',
  left: '50%',
  transform: 'translate(-50%, 0)',
}));

const FlowerDetailItem = styled('span')(({theme}) => ({
  textAlign: 'center',
  color: theme.palette.common.white,
  fontFamily: theme.typography.body2.fontFamily,
}));

export const FlowerName = styled(FlowerDetailItem)(() => ({
  fontSize: '1.4em',
  fontWeight: 'bold',
}));

export const FlowerLatinName = styled(FlowerDetailItem)(() => ({
  fontStyle: 'italic',
  fontSize: '0.8em',
  marginTop: '5px',
  opacity: '0.7',
}));

export const FlowerSightings = styled(FlowerDetailItem)(({theme}) => ({
  fontSize: '0.9em',
  marginTop: '20px',
  padding: '10px',
  borderRadius: '50px',
  backgroundColor: theme.palette.grey["200"],
}));
