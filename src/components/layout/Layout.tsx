import { useAppSelector } from '../../redux/store/hooks';
import { selectCommon } from '../../redux/store/store';
import ProgressCircle from '../common/progressCircle/progressCircle';
import Snackbar from '../common/snackbar/snackbar';
import Header from '../header/header';
import Login from '../login/login';
import Signup from '../signup/signup';
import { LayoutWrapper } from './layoutStyle';

const Layout = ({ children }: any) => {
  const { snackbarConfig, progressCircleConfig } = useAppSelector(selectCommon);
  const { showSnackbar } = snackbarConfig;
  const { showProgress } = progressCircleConfig;
  return (
    <LayoutWrapper>
      <Header />
      {children}
      {showSnackbar && <Snackbar />}
      {showProgress && <ProgressCircle />}
      <Login />
      <Signup />
    </LayoutWrapper>
  )
};

export default Layout;