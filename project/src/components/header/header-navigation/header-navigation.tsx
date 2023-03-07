import { Path } from '../../../const';
import { Link } from 'react-router-dom';
import { getAuthInfo } from '../../../services/auth-info';

interface IHeaderProps {
  isAuthorized: boolean;
}

function HeaderNavigation({ isAuthorized }: IHeaderProps) {
  if (isAuthorized) {
    const authInfo = getAuthInfo();

    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={Path.Favorites}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{authInfo.email}</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to={Path.Main}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={Path.SignIn}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

}

export default HeaderNavigation;
