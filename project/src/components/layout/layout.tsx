import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Path } from '../../const';


type PageClassMap = {
  [propertyName: string]: string;
}

const pageClassMap: PageClassMap = {
  [Path.Main]: 'page page--gray page--main',
  [Path.SignIn]: 'page page--gray page--login',
  [Path.Favorites]: 'page',
  [Path.Room]: 'page',
  [Path.NotFound]: 'page page--gray page--login',
};


function Layout(): JSX.Element {
  const location = useLocation();
  const path = (location.pathname.startsWith(Path.Room)) ? location.pathname.slice(0, location.pathname.indexOf('/', 1)) : location.pathname;
  const pageClass = pageClassMap[path] ? pageClassMap[path] : pageClassMap[Path.NotFound];
  const isLoginPage = (path === Path.SignIn);

  return (
    <div className={pageClass}>
      <Header isLoginPage={isLoginPage}></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Layout;
