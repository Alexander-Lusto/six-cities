import { AuthorizationStatus, Path } from '../../../const';
import { Link } from 'react-router-dom';
import { getAuthInfo } from '../../../services/auth-info';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { TActions } from '../../../types/action';
import { logoutAction } from '../../../store/api-actions';
import { TState } from '../../../types/state';


const mapStateToProps = ({ authStatus }: TState) => ({ authStatus });
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({
  onLogout: logoutAction
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function HeaderNavigation({ onLogout, authStatus }: ConnectedComponentProps) {
  if (authStatus === AuthorizationStatus.Auth) {
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
