import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../../redux/store/hooks';
import { selectUser } from '../../redux/store/store';
import ICustomRouteProps from './customRouteProps.model';

const CustomRoute = (props: ICustomRouteProps) => {

  const { isProtected, component: Component, exact, path, redirectPath } = props;
  const { isLogged } = useAppSelector(selectUser);
  
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        if(!isLogged && isProtected){
          return <Redirect to={{ pathname: redirectPath }}/>
        }else return <Component />
      }}
    />
  )
};

export default CustomRoute;