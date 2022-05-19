import Home from '../../components/home/home';
import ICustomRouteProps from './customRouteProps.model';

const DEFAULT_PATH = '/';
const HOME_PATH = '/home';
const DEFAULT_REDIRECT_PATH = HOME_PATH;
const ROUTES: ICustomRouteProps[] = [
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
  HOME_PATH,
}