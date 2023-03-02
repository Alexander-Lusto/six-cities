import { TOffer } from '../../types/offer';
import PlacesList from '../places-list/places-list';
import { cities} from '../../const';
import Map from '../map/map';
import { TCity } from '../../types/city';
import { useState } from 'react';
import LocationsList from './locations-list/locations-list';
import Sorting from './sorting/sorting';

interface IMainProps {
  offers: TOffer[];
  currentLocation: TCity;
}

function Main(props: IMainProps): JSX.Element {
  const [currentLocation, setLocation] = useState(props.currentLocation);
  const localOffers = props.offers.filter((offer) => offer.city.name === currentLocation.name);
  const points = localOffers.map((offer) => Object.assign(offer.city.location, {id: offer.id}));

  const [activePlaceID, setActivePlaceID] = useState(-1);
  const currentPoint = points.find((point) => point.id === activePlaceID);

  function activeOfferChangeHandler(id: number): void {
    setActivePlaceID(id);
  }

  function locationsItemClickHandler(locationName: string): void {
    const location = cities.find((city) => city.name === locationName);
    if (!location) {
      return;
    }
    setLocation(location);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList currentLocation={currentLocation} locationsItemClickHandler={locationsItemClickHandler} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{localOffers.length} places to stay in {currentLocation.name}</b>
            <Sorting />
            <PlacesList
              className="cities__places-list places__list tabs__content" childClassName="cities__place-card"
              offers={localOffers} activeOfferChangeHandler={activeOfferChangeHandler}
            />
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <Map points={points} selectedPoint={currentPoint} city={currentLocation} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
