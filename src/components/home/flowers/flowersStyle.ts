import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface IFlowerFavoriteStarAvatar {
  selected: boolean;
}

export const FlowersWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1044px',
  marginTop: '30px',
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

export const FlowersGridItem = styled('div')(({ theme }) => ({
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
  '&:hover':{
    opacity: '0.8',
    cursor: 'pointer',
  }
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
  borderRadius: '3px',
}));

export const FlowerFavoriteStarWrapper = styled('div')(() => ({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  top: '20px',
  right: '20px',
  color: 'green',
}));

export const FlowerFavoriteStarAvatar = styled('div')<IFlowerFavoriteStarAvatar>(({ theme, selected }) => ({
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: selected ? theme.palette.primary.light : theme.palette.common.white,
  width: '25px',
  height: '25px',
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

const FlowerDetailItem = styled('span')(({ theme }) => ({
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

export const FlowerSightings = styled(FlowerDetailItem)(({ theme }) => ({
  fontSize: '0.9em',
  marginTop: '20px',
  padding: '10px',
  borderRadius: '50px',
  backgroundColor: theme.palette.grey["200"],
}));
