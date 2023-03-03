import { Navigate } from 'react-router-dom';
import { Path } from '../../const';

interface IRequireAuthProps {
  children: JSX.Element;
  authorizationToken: string;
}

function RequireAuth({children, authorizationToken}: IRequireAuthProps): JSX.Element {
  if (!authorizationToken) {
    return (
      <Navigate to={Path.SignIn}></Navigate>
    );
  }

  return children;
}

export default RequireAuth;
