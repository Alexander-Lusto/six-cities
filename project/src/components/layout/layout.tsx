import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';


type PageClassMap = {
  [propertyName: string]: string;
}

const pageClassMap: PageClassMap = {
  [AppRoute.Main]: 'page page--gray page--main',
  [AppRoute.SignIn]: 'page page--gray page--login',
  [AppRoute.Favorites]: 'page',
  [AppRoute.Room]: 'page',
  [AppRoute.NotFound]: 'page page--gray page--login',
};


type Props = {
  isAuthorized: boolean;
}

function Layout(props: Props): JSX.Element {
  const location = useLocation();
  const path = location.pathname;
  const pageClass = pageClassMap[path] ? pageClassMap[path] : pageClassMap[AppRoute.NotFound];
  const isLoginPage = (path === AppRoute.SignIn);

  return (
    <div className={pageClass}>
      <Header isAuthorized={props.isAuthorized} isLoginPage={isLoginPage}></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;