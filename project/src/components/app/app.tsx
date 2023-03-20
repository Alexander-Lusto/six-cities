import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/layout';
import RequireAuth from '../requireAuth/requireAuth';
import { isCheckedAuth } from '../../types/utils';
import Spinner from '../spinner/spinner';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import NotFound404 from '../not-found-404/not-found-404';
import { getOffers } from '../../store/main/selectors';
import { checkIfOffersLoaded } from '../../store/main/selectors';
import { getAuthorizationStatus } from '../../store/authorization/selectors';
import { useSelector } from 'react-redux';

function App(): JSX.Element {
  const offers = useSelector(getOffers);
  const isOffersLoaded = useSelector(checkIfOffersLoaded);
  const authStatus = useSelector(getAuthorizationStatus);

  if (!isCheckedAuth(authStatus) && !isOffersLoaded) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout offers={offers}/>} >
        <Route index element={<Main offers={offers} />} />
        <Route path="login" element={<Login />} />
        <Route path="favorites" element=
          {
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
        <Route path="offer/:id" element={<Property />}/>
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
}
export default App;
