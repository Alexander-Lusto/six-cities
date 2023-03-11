import { Navigate } from 'react-router-dom';
import { Path } from '../../const';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/authorization-process/selectors';
import { useSelector } from 'react-redux';

interface IRequireAuthProps {
  children: JSX.Element;
}

function RequireAuth({ children }: IRequireAuthProps): JSX.Element {
  const authStatus = useSelector(getAuthorizationStatus);

  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <Navigate to={Path.SignIn}></Navigate>
    );
  }

  return children;
}

export default RequireAuth;
