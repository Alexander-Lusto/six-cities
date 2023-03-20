import { TFavoritesState } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setFavoriteOffers } from '../action';

const initialState: TFavoritesState = {
  favoriteOffers: null,
};

const favoritesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    });
});

export { favoritesReducer };
