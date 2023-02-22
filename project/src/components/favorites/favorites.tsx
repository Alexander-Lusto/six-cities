import { Offer } from '../../types/offer';
import LocationsItem from './locations-item/locations-item';

interface Props {
  offers: Offer[];
}

function Favorites({ offers}: Props): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const cities: string[] = Array.from(new Set(favoriteOffers.map((offer) => offer.city.name)));

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cities.map((city) => <LocationsItem key={city} location={city} offers={favoriteOffers} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Favorites;
