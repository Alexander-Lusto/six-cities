import LocationsItem from './locations-item/locations-item';
import { cities } from '../../const';
import EmptyFavorites from '../empty-favorites/empty-favorites';
import { useDispatch } from 'react-redux';
import { TThunkAppDispatch } from '../../types/action';
import { fetchFavoriteOffersAction } from '../../store/api-actions';
import { getFavoriteOffers } from '../../store/favorites/selectors';
import { useSelector } from 'react-redux';
import Spinner from '../spinner/spinner';


function Favorites(): JSX.Element {
  const dispatch = useDispatch<TThunkAppDispatch>();
  dispatch(fetchFavoriteOffersAction());
  const favoriteOffers = useSelector(getFavoriteOffers);

  if (!favoriteOffers) {
    return <Spinner />;
  }

  const locations = cities.filter((city) => favoriteOffers.find((offer) => offer.city.name === city.name));

  if(favoriteOffers.length === 0) {
    return <EmptyFavorites />;
  }

  return (
    <main className="page__main page__main--favorites" data-testid={'favorites'}>
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {locations.map((city) => <LocationsItem key={city.id} location={city.name} offers={favoriteOffers} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
