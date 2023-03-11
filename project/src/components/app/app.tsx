import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import RequireAuth from '../requireAuth/requireAuth';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { TState } from '../../types/state';
import { setOffers } from '../../store/action';
import { isCheckedAuth } from '../../types/utils';
import Spinner from '../spinner/spinner';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import NotFound404 from '../not-found-404/not-found-404';
import { getOffers } from '../../store/main-data/selectors';
import { checkIfOffersLoaded } from '../../store/main-data/selectors';
import { getAuthorizationStatus } from '../../store/authorization-process/selectors';

const mapStateToProps = (state: TState) => ({
  offers: getOffers(state),
  isOffersLoaded: checkIfOffersLoaded(state),
  authStatus: getAuthorizationStatus(state),
});
const mapDispatchToProps = (dispatch: Dispatch ) => bindActionCreators({ setOffers }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const { authStatus, isOffersLoaded, offers } = props;

  if (!isCheckedAuth(authStatus) && !isOffersLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Main offers={offers} />} />
        <Route path="login" element={<Login />} />
        <Route path="favorites" element=
          {
            <RequireAuth>
              <Favorites offers={offers}></Favorites>
            </RequireAuth>
          }
        />
        <Route path="offer/:id" element={<Property />}/>
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}

export default connector(App);
