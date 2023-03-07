import { Path } from '../../../const';
import { Link } from 'react-router-dom';
import { getAuthInfo } from '../../../services/auth-info';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { TActions } from '../../../types/action';
import { logoutAction } from '../../../store/api-actions';

interface IHeaderProps {
  isAuthorized: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({
  onLogout: logoutAction
}, dispatch);

const connector = connect(null, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IHeaderProps;

function HeaderNavigation({ isAuthorized, onLogout }: ConnectedComponentProps) {
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
            <a className="header__nav-link" onClick={() => onLogout()}>
              <span className="header__signout">Sign out</span>
            </a>
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

export default connector(HeaderNavigation);
