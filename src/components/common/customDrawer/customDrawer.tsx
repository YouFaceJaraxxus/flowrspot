import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useAppDispatch, useAppSelector } from '../../../redux/store/hooks';
import { selectCommon } from '../../../redux/store/store';
import { toggleDrawer } from '../../../redux/slices/commonSlice';
import { CustomDrawerWrapper } from './customDrawerStyle';



const CustomDrawer = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const { drawerOpen } = useAppSelector(selectCommon);

  const closeDrawer =
    () =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        dispatch(toggleDrawer(false));
      };


  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={closeDrawer()}
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
      }}
    >
      <CustomDrawerWrapper
        role="presentation"
      >
        <Divider />
        <List>
          {children}
        </List>
      </CustomDrawerWrapper>
    </Drawer>
  );
}


export default CustomDrawer;