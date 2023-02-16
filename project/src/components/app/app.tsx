import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import PrivateRoute from '../privateOutlet/privateOutlet';
import PageNotFound from '../../pages/not-found/page-not-found';


type Props = {
  cardsNumber: number;
  authorizationToken: boolean;
};

function App(props: Props): JSX.Element {
  const cardsNumber = props.cardsNumber;
  const isAuthorized = props.authorizationToken;

  return (
    <Routes>
      <Route path={AppRoute.SignIn} element={<PageLogin isAuthorized={isAuthorized} />} />

      <Route path={AppRoute.Favorites} element={<PrivateRoute />}>
        <Route path={AppRoute.Favorites} element={<PageFavorites isAuthorized={isAuthorized}/>} />
      </Route>

      <Route path={AppRoute.Room} element={<PageRoom isAuthorized={isAuthorized}></PageRoom>} />
      <Route path={AppRoute.Main} element={<PageMain cardsNumber={cardsNumber} isAuthorized={isAuthorized} />} />

      <Route path="*" element={<PageNotFound isAuthorized={isAuthorized}/>}/>
    </Routes>
  );
}

export default App;
