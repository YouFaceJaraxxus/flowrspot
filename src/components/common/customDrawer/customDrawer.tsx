import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useAppDispatch, useAppSelector } from '../../../redux/store/hooks';
import { selectCommon } from '../../../redux/store/store';
import { toggleDrawer } from '../../../redux/slices/commonSlice';


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
    >
      <Box
        sx={{ width: '90vw' }}
        role="presentation"
        onClick={closeDrawer()}
        onKeyDown={closeDrawer()}
      >
        <Divider />
        <List>
          {children}
        </List>
      </Box>
    </Drawer>
  );
}


export default CustomDrawer;