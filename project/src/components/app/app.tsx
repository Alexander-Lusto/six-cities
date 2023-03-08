import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import PageNotFound from '../../pages/not-found/page-not-found';
import Layout from '../layout/layout';
import RequireAuth from '../requireAuth/requireAuth';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { TActions } from '../../types/action';
import { TState } from '../../types/state';
import { setOffers } from '../../store/action';
import { isCheckedAuth, isAuthorized } from '../../types/utils';
import Spinner from '../spinner/spinner';


const mapStateToProps = ({ offers, isOffersLoaded, authStatus }: TState) => ({ offers, isOffersLoaded, authStatus });
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({ setOffers }, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authStatus, isOffersLoaded, offers} = props;

  if (!isCheckedAuth(authStatus) && !isOffersLoaded) {
    return (
      <Spinner />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Layout isAuthorized={isAuthorized(authStatus)} />} >
        <Route index element={<PageMain offers={offers} />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="favorites" element={
          <RequireAuth isAuthorized={isAuthorized(authStatus)}>
            <PageFavorites offers={offers}></PageFavorites>
          </RequireAuth>
        }
        />
        <Route path="offer/:id" element={<PageRoom />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default connector(App);
