import { Navigate } from "react-router-dom";
import { AppRoute } from "../../const";

interface IRequireAuthProps {
  children: JSX.Element;
  isAuthorized: boolean;
}

function RequireAuth({children, isAuthorized}: IRequireAuthProps): JSX.Element {
  if (!isAuthorized) {
    return <Navigate to={AppRoute.SignIn}></Navigate>
  }

  return children;
}

export default RequireAuth;
