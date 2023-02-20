import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import PrivateRoute from '../privateOutlet/privateOutlet';
import PageNotFound from '../../pages/not-found/page-not-found';
import Layout from '../layout/layout';

type Props = {
  cardsNumber: number;
  authorizationToken: boolean;
};

function App(props: Props): JSX.Element {
  const cardsNumber = props.cardsNumber;
  const isAuthorized = props.authorizationToken;

  return (
    <Routes>
      <Route path="/" element={<Layout isAuthorized={isAuthorized}/>} >
        <Route index element={<PageMain cardsNumber={cardsNumber} />} />
        <Route path="login" element={<PageLogin/>} />
        <Route path="favorites" element={<PrivateRoute />}>
          <Route index element={<PageFavorites/>} />
        </Route>
        <Route path="offer/:id" element={<PageRoom></PageRoom>} />
        <Route path="*" element={<PageNotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
