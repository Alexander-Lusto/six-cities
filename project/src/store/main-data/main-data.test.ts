import { cities, DEFAULT_CITY } from '../../const';
import { TMainState } from '../../types/state';
import { setOffers, changeCity, updateOffer } from '../action';
import { mainData } from './main-data';
import { mockOffers } from '../../mock/offers';
import { TOffer } from '../../types/offer';

describe('reducer mainData', () => {
  test('should set offers and change isOffersLoaded to "true" in state', () => {
    const state: TMainState = {offers: [], isOffersLoaded: false, currentCity: DEFAULT_CITY};

    expect(mainData(state, setOffers(mockOffers))).toEqual({offers: mockOffers, isOffersLoaded: true, currentCity: DEFAULT_CITY});
  });

  test('should change currentCity in state', () => {
    const state: TMainState = {offers: mockOffers, isOffersLoaded: true, currentCity: DEFAULT_CITY};
    const newCityID = 5;

    expect(mainData(state, changeCity(newCityID))).toEqual({offers: mockOffers, isOffersLoaded: true, currentCity: cities[5]});
  });

  test('should update one of offers in state', () => {
    const state: TMainState = {offers: mockOffers, isOffersLoaded: true, currentCity: DEFAULT_CITY};
    const newOffer = Object.assign({}, mockOffers[0], {isFavorite: true});
    const index = mockOffers.findIndex((el) => el.id === newOffer.id);
    const updatedOffers = ([] as TOffer[]).concat(mockOffers.slice(0, index), newOffer ,mockOffers.slice(index + 1));

    expect(mainData(state, updateOffer(newOffer))).toEqual({offers: updatedOffers, isOffersLoaded: true, currentCity: DEFAULT_CITY});
  });

  test('without additional parameters should return initial state', () => {
    expect(mainData(undefined, {type: 'UNKNOWN_ACTION'})).toEqual({offers: [], isOffersLoaded: false, currentCity: DEFAULT_CITY});
  });
});
