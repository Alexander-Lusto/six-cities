import {Navigate, Outlet} from 'react-router-dom';
import { AppRoute } from '../../const';

const hasAccess = true;

function PrivateOutlet() {
  const auth = hasAccess;
  return auth ? <Outlet /> : <Navigate to={AppRoute.SignIn} />;
}

export default PrivateOutlet;
