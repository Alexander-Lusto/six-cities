import { Offer } from '../../../types/offer';
import FavoritesCard from './favorites-card/favorites-card';

function LocationsItem(props: { location: string; offers: Offer[] }): JSX.Element {
  const localOffers = props.offers.filter((offer) => offer.city.name === props.location);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{props.location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {localOffers.map((localOffer) => <FavoritesCard key={`${localOffer.city.name}-${localOffer.id}`} offer={localOffer} />)}
      </div>
    </li>
  );
}


export default LocationsItem;
