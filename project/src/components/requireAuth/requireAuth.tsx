import { Navigate } from 'react-router-dom';
import { Path } from '../../const';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { TActions } from '../../types/action';
import { TState } from '../../types/state';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/authorization-process/selectors';


interface IRequireAuthProps {
  children: JSX.Element;
}

const mapStateToProps = (state: TState) => ({ authStatus: getAuthorizationStatus(state) });
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IRequireAuthProps;

function RequireAuth({ children, authStatus }: ConnectedComponentProps): JSX.Element {
  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <Navigate to={Path.SignIn}></Navigate>
    );
  }

  return children;
}

export default connector(RequireAuth);
