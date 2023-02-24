import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import PageNotFound from '../../pages/not-found/page-not-found';
import Layout from '../layout/layout';
import RequireAuth from '../requireAuth/requireAuth';
import { Offer } from '../../types/offer';
import { cities } from '../../const';


interface IAppProps {
  authorizationToken: boolean;
  offers: Offer[];
}

const currentLocation = cities[0];

function App(props: IAppProps): JSX.Element {
  const isAuthorized = props.authorizationToken;

  return (
    <Routes>
      <Route path="/" element={<Layout isAuthorized={isAuthorized} />} >
        <Route index element={<PageMain offers={props.offers} currentLocation={currentLocation} />} />
        <Route path="login" element={<PageLogin />} />
        <Route path="favorites" element={
          <RequireAuth isAuthorized={isAuthorized}>
            <PageFavorites offers={props.offers}></PageFavorites>
          </RequireAuth>
        }
        />
        <Route path="offer/:id" element={<PageRoom offers={props.offers} currentLocation={currentLocation}></PageRoom>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
