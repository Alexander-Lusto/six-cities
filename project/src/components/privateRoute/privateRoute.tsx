
import {Navigate} from 'react-router-dom';
import { AppRoute } from '../../const';

const hasAccess = false;

type Props = {
  children: JSX.Element;
}

function PrivateRoute (props: Props): JSX.Element {

  if (!hasAccess) {
    return <Navigate to={AppRoute.SignIn}></Navigate>;
  }

  return props.children;
}

export default PrivateRoute;
