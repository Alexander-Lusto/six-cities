import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import PrivateRoute from '../private-outlet/private-outlet';
import PageNotFound from '../../pages/not-found/page-not-found';
import { Offer } from '../../types/offer';


type Props = {
  authorizationToken: boolean;
  offers: Offer[];
};

const currentLocation = 'Amsterdam';

function App(props: Props): JSX.Element {
  const isAuthorized = props.authorizationToken;

  return (
    <Routes>
      <Route path={AppRoute.SignIn} element={<PageLogin isAuthorized={isAuthorized} />} />

      <Route path={AppRoute.Favorites} element={<PrivateRoute />}>
        <Route path={AppRoute.Favorites}
          element={<PageFavorites isAuthorized={isAuthorized} offers={props.offers} />}
        />
      </Route>

      <Route path={AppRoute.Room} element={<PageRoom isAuthorized={isAuthorized} offer={props.offers[0]} offers={props.offers}></PageRoom>} />
      <Route path={AppRoute.Main} element={<PageMain isAuthorized={isAuthorized} offers={props.offers} currentLocation={currentLocation}/>} />

      <Route path="*" element={<PageNotFound isAuthorized={isAuthorized} />} />
    </Routes>
  );
}

export default App;
