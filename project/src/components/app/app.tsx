import { Route, Routes } from 'react-router-dom';
import PageFavorites from '../../pages/favorites/page-favorites';
import PageLogin from '../../pages/login/page-login';
import PageMain from '../../pages/main/page-main';
import PageRoom from '../../pages/room/page-room';
import PageNotFound from '../../pages/not-found/page-not-found';
import Layout from '../layout/layout';
import RequireAuth from '../requireAuth/requireAuth';
import { TOffer } from '../../types/offer';
import { cities } from '../../const';

const DEFAULT_LOCATION = cities[3];

interface IAppProps {
  authorizationToken: string;
  offers: TOffer[];
}

function App(props: IAppProps): JSX.Element {
  const isAuthorized = Boolean(props.authorizationToken);

  return (
    <Routes>
      <Route path="/" element={<Layout isAuthorized={isAuthorized} />} >
        <Route index element={<PageMain offers={props.offers} currentLocation={DEFAULT_LOCATION}/>} />
        <Route path="login" element={<PageLogin />} />
        <Route path="favorites" element={
          <RequireAuth isAuthorized={isAuthorized}>
            <PageFavorites offers={props.offers}></PageFavorites>
          </RequireAuth>
        }
        />
        <Route path="offer/:id" element={<PageRoom offers={props.offers} currentLocation={DEFAULT_LOCATION} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
