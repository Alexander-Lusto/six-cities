import { TOffer } from '../../types/offer';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import { useState } from 'react';
import LocationsList from './locations-list/locations-list';
import Sorting from './sorting/sorting';
import { SortType, CardClassName } from '../../const';
import { getCurrentCity, getOffers } from '../../store/main/selectors';
import { useSelector } from 'react-redux';
import MainEmpty from '../main-empty/main-empty';

const DEFAULT_SORT_TYPE = SortType.POPULAR;

function Main(): JSX.Element {
  const allOffers = useSelector(getOffers);
  const currentLocation = useSelector(getCurrentCity);
  const localOffers = allOffers.filter((offer) => offer.city.name === currentLocation.name);
  const points = localOffers.map((offer) => Object.assign({}, offer.location, { id: offer.id }));

  const [activePlaceID, setActivePlaceID] = useState(-1);
  const currentPoint = points.find((point) => point.id === activePlaceID);

  function activeOfferChangeHandler(id: number): void {
    setActivePlaceID(id);
  }

  function getSortedOffers(sortType: string, offers: TOffer[]): TOffer[] {
    const sortedOffers = offers.slice();
    switch (sortType) {
      case SortType.POPULAR:
        break;
      case SortType.PRICE_HIGH:
        sortedOffers.sort((a, b) => b.price - a.price);
        break;
      case SortType.PRICE_LOW:
        sortedOffers.sort((a, b) => a.price - b.price);
        break;
      case SortType.TOP_RATED:
        sortedOffers.sort((a, b) => b.rating - a.rating);
        break;
    }

    return sortedOffers;
  }

  const [currentSortType, changeSortType] = useState(DEFAULT_SORT_TYPE);
  const sortedOffers = getSortedOffers(currentSortType, localOffers);

  if (localOffers.length === 0) {
    return (
      <MainEmpty />
    );
  }

  return (
    <main className="page__main page__main--index" data-testid={'main'}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <LocationsList currentLocation={currentLocation} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{localOffers.length} places to stay in {currentLocation.name}</b>
            <Sorting currentSortType={currentSortType} sortTypeChangeHandler={changeSortType} />
            <PlacesList
              className="cities__places-list places__list tabs__content" childClassName={CardClassName.Main}
              offers={sortedOffers} activeOfferChangeHandler={activeOfferChangeHandler}
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
