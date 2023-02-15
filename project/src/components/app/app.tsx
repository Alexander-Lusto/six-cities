import { AppRoute } from '../../const';
import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import NotFound404 from '../not-found-404/not-found-404';
import PrivateRoute from '../privateRoute/privateRoute';


type Props = {
  cardsNumber: number;
};

function App(props: Props): JSX.Element {
  const { cardsNumber} = props;

  return (
    <Routes>
      <Route path={AppRoute.SignIn} element={<PageLogin/>} />

      <Route path={AppRoute.Favorites} element={<PageFavorites />} />

      <Route path={AppRoute.Room} element={<PageRoom></PageRoom>} />

      <Route path={AppRoute.Main} element={<PageMain cardsNumber={cardsNumber} />} />

      <Route element={<NotFound404 />}/>
    </Routes>
  );
}

export default App;
