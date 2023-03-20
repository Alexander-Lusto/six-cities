import { TFavoritesState } from '../../types/state';
import { setFavoriteOffers } from '../action';
import { favoritesReducer } from './favorites-reducer';
import { mockOffers } from '../../mock/offers';

describe('Reducer mainReducer', () => {
  test('should set favorite offers in state', () => {
    const state: TFavoritesState = {favoriteOffers: []};
    const favoriteOffers = mockOffers.filter((el) => el.isFavorite);

    expect(favoritesReducer(state, setFavoriteOffers (favoriteOffers))).toEqual({favoriteOffers: favoriteOffers});
  });

});
