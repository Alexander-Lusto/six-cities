import { Offer } from '../../types/offer';

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

function FavoritesCard(props: { offer: Offer }): JSX.Element {
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={props.offer.previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{props.offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(props.offer.rating) * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{props.offer.title}</a>
        </h2>
        <p className="place-card__type">{props.offer.type}</p>
      </div>
    </article>
  );
}

export default Favorites;
