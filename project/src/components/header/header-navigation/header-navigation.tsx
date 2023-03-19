import { AuthorizationStatus, Path } from '../../../const';
import { Link } from 'react-router-dom';
import { getAuthInfo } from '../../../services/auth-info';
import { logoutAction } from '../../../store/api-actions';
import { getAuthorizationStatus } from '../../../store/authorization-process/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { TThunkAppDispatch } from '../../../types/action';


function HeaderNavigation() {
  const dispatch = useDispatch<TThunkAppDispatch>();
  const authStatus = useSelector(getAuthorizationStatus);
  const isAuthorized = (authStatus === AuthorizationStatus.Auth);
  const authInfo = getAuthInfo();

  return (
    <nav className="header__nav" data-testid={'header-nav'}>
      <ul className="header__nav-list">
        {isAuthorized ?
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={Path.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{authInfo.email}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" onClick={() => {
                dispatch(logoutAction());
              }}
              >
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </>
          :
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to={Path.SignIn}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
