import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Path } from '../../const';
import Footer from '../footer/footer';
import { TOffer } from '../../types/offer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type PageClassMap = {
  [propertyName: string]: string;
}

enum PageClass {
  Main = 'page page--gray page--main',
  SignIn = 'page page--gray page--login',
  Room = 'page',
  NotFound = 'page page--gray page--login',
  Favorites = 'page page__main--favorites',
  FavoritesEmpty = 'page page--favorites-empty',
}

const pathToPageClassMap: PageClassMap = {
  [Path.Main]: PageClass.Main,
  [Path.SignIn]: PageClass.SignIn,
  [Path.Favorites]: PageClass.Favorites,
  [Path.Room]: PageClass.Room,
  [Path.NotFound]: PageClass.NotFound,
};

interface ILayoutProps {
  offers: TOffer[];
}

function Layout({offers}: ILayoutProps): JSX.Element {
  const location = useLocation();
  const path = (location.pathname.startsWith(Path.Room)) ? location.pathname.slice(0, location.pathname.indexOf('/', 1)) : location.pathname;

  const isLoginPage = (path === Path.SignIn);
  const isFavorites = offers.find((offer) => offer.isFavorite);

  const pageClass = pathToPageClassMap[path] ? pathToPageClassMap[path] : pathToPageClassMap[Path.NotFound];
  const className = (location.pathname === Path.Favorites) ? `${isFavorites ? pageClass : PageClass.FavoritesEmpty}` : pageClass;

  return (
    <div className={className}>
      <Header isLoginPage={isLoginPage}></Header>
      <Outlet></Outlet>
      {(location.pathname.startsWith(Path.Room)) || (location.pathname === Path.Favorites) ?
        <Footer /> :
        ''}
      <ToastContainer />
    </div>
  );
}

export default Layout;
