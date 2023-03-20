import Header from '../header/header';
import { Outlet, useLocation } from 'react-router-dom';
import { Path } from '../../const';
import Footer from '../footer/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getOffers } from '../../store/main/selectors';

enum PageClass {
  Main = 'page page--gray page--main',
  SignIn = 'page page--gray page--login',
  Room = 'page',
  NotFound = 'page page--gray page--login',
  Favorites = 'page page__main--favorites',
  FavoritesEmpty = 'page page--favorites-empty',
}

type TPathToPageClassMap = {
  [propertyName: string]: string;
}

const pathToPageClassMap: TPathToPageClassMap = {
  [Path.Main]: PageClass.Main,
  [Path.SignIn]: PageClass.SignIn,
  [Path.Favorites]: PageClass.Favorites,
  [Path.Room]: PageClass.Room,
  [Path.NotFound]: PageClass.NotFound,
};

function Layout(): JSX.Element {
  const location = useLocation();
  const offers = useSelector(getOffers);
  const path = (location.pathname.startsWith(Path.Room)) ? location.pathname.slice(0, location.pathname.indexOf('/', 1)) : location.pathname;

  const isLoginPage = (path === Path.SignIn);
  const isFavorites = offers.find((offer) => offer.isFavorite);

  const pageClass = pathToPageClassMap[path] ? pathToPageClassMap[path] : pathToPageClassMap[Path.NotFound];
  const className = (location.pathname === Path.Favorites) ? `${isFavorites ? pageClass : PageClass.FavoritesEmpty}` : pageClass;

  return (
    <div className={className}>
      <Header isLoginPage={isLoginPage} />
      <Outlet />
      {(location.pathname.startsWith(Path.Room)) || (location.pathname === Path.Favorites) ?
        <Footer /> :
        ''}
      <ToastContainer />
    </div>
  );
}

export default Layout;
