import { Offer } from '../../types/offer';
import PlacesList from '../places-list/places-list';
import { locations } from '../../const';

type MainProps = {
  offers: Offer[];
  currentLocation: string;
};

function Main(props: MainProps): JSX.Element {
  const currentLocation = props.currentLocation;
  const localOffers = props.offers.filter((offer) => offer.city.name === currentLocation);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {locations.map((location) => <LocationsItem key={location} location={location} isActive={location === currentLocation} />)}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <PlacesList offers={localOffers}></PlacesList>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  );
}

function LocationsItem(props: { location: string; isActive: boolean }): JSX.Element {
  return (
    <li className="locations__item">
      <a className={
        props.isActive ?
          'locations__item-link tabs__item tabs__item--active' :
          'locations__item-link tabs__item'
      } href="#"
      >
        <span>{props.location}</span>
      </a>
    </li>
  );
}

export default Main;
