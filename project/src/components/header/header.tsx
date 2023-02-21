import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import HeaderNavigation from './header-navigation/header-navigation';

interface IHeaderProps {
  isAuthorized: boolean;
  isLoginPage?: boolean;
}

function Header({ isAuthorized, isLoginPage = false }: IHeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {isLoginPage ? '' : <HeaderNavigation isAuthorized={isAuthorized}></HeaderNavigation>}
        </div>
      </div>
    </header>
  );
}

export default Header;
