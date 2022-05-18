import Home from '../../components/home/home';
import Login from '../../components/login/login';
import ICustomRouteProps from './customRouteProps.model';

const DEFAULT_PATH = '/';
const LOGIN_PATH = '/login';
const HOME_PATH = '/home';
const DEFAULT_REDIRECT_PATH = LOGIN_PATH;
const ROUTES: ICustomRouteProps[] = [
  {
    id: 2,
    component: Login,
    exact: true,
    isProtected: false,
    path: LOGIN_PATH,
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 3,
    component: Home,
    exact: true,
    isProtected: false,
    path: HOME_PATH,
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
  {
    id: 1,
    component: Home,
    exact: false,
    isProtected: false,
    path: DEFAULT_PATH,
    redirectPath: DEFAULT_REDIRECT_PATH,
  },
]

export {
  ROUTES,
  DEFAULT_REDIRECT_PATH,
  DEFAULT_PATH,
  LOGIN_PATH,
  HOME_PATH,
}