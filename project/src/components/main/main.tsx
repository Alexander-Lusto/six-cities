import { TOffer } from '../../types/offer';
import PlacesList from '../places-list/places-list';
import Map from '../map/map';
import { useState } from 'react';
import LocationsList from './locations-list/locations-list';
import { bindActionCreators, Dispatch } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { TActions } from '../../types/action';
import { TState } from '../../types/state';
import Sorting from './sorting/sorting';
import { SortType } from '../../const';

const DEFAULT_SORT_TYPE = SortType.POPULAR;

interface IMainProps {
  offers: TOffer[];
}

const mapStateToProps = ({ currentCity }: TState) => ({currentLocation: currentCity});
const mapDispatchToProps = (dispatch: Dispatch<TActions>) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IMainProps;

function Main(props: ConnectedComponentProps): JSX.Element {
  const currentLocation = props.currentLocation;
  const localOffers = props.offers.filter((offer) => offer.city.name === currentLocation.name);
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

  return (
    <main className="page__main page__main--index">
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
              className="cities__places-list places__list tabs__content" childClassName="cities__place-card"
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

export default connector(Main);
