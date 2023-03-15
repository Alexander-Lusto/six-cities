import { TPropertyState } from '../../types/state';
import { setComments, setOfferData, setOffer } from '../action';
import { propertyData } from './property-data';
import { mockComments } from '../../mock/commetns';
import { mockOffers } from '../../mock/offers';
import { TOfferData } from '../../types/offerData';


describe('Reducer propertyData', () => {
  test('should set offer in state', () => {
    const state: TPropertyState = { offer: null, offersNearby: null, comments: null };
    expect(propertyData(state, setOffer(mockOffers[0]))).toEqual({ offer: mockOffers[0], offersNearby: null, comments: null });
  });

  test('should set comments in state', () => {
    const state: TPropertyState = { offer: mockOffers[2], offersNearby: null, comments: null };
    expect(propertyData(state, setComments(mockComments[0]))).toEqual({ offer: mockOffers[2], offersNearby: null, comments: mockComments[0] });
  });

  test('should set offer, comments, offersNearby in state', () => {
    const state: TPropertyState = { offer: null, offersNearby: null, comments: null };
    const mockOffersNearby = [mockOffers[1], mockOffers[2], mockOffers[3]];
    const mockOfferData: TOfferData = {offer: mockOffers[0], offersNearby: mockOffersNearby, comments: mockComments[0]};

    expect(propertyData(state, setOfferData(mockOfferData))).toEqual({offer: mockOffers[0], offersNearby: mockOffersNearby,comments: mockComments[0]});
  });

  test('without additional parameters should return initial state', () => {
    expect(propertyData(undefined, {type: 'UNKNOWN_ACTION'})).toEqual({ offer: null, offersNearby: null, comments: null });
  });
});
