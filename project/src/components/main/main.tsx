import { Offer } from '../../types/offer';
import PlacesList from '../places-list/places-list';
import { cities} from '../../const';
import Map from '../map/map';
import { useState } from 'react';
import LocationsItem from './locations-item/locations-item';
import { bindActionCreators, Dispatch} from'@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';
import { Actions } from '../../types/action';
import { State } from '../../types/state';


interface IMainProps {
  offers: Offer[];
}

const mapStateToProps = ({currentCity}: State) => ({
  currentLocation: currentCity,
});
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & IMainProps;

function Main(props: ConnectedComponentProps): JSX.Element {
  const currentLocation = props.currentLocation;
  const localOffers = props.offers.filter((offer) => offer.city.name === currentLocation.name);
  const points = localOffers.map((offer) => Object.assign({}, offer.city.location, {id: offer.id}));

  const [activePlaceID, setActivePlaceID] = useState(-1);
  const currentPoint = points.find((point) => point.id === activePlaceID);

  function activeOfferChangeHandler(id: number): void {
    setActivePlaceID(id);
  }

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((city) => (
              <LocationsItem key={city.id} locationName={city.name} locationID={city.id}
                isActive={city.name === currentLocation.name}
              />
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{localOffers.length} places to stay in {currentLocation.name}</b>
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

export default connector(Main);
