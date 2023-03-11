import { cities, DEFAULT_CITY } from '../../const';
import { TCity } from '../../types/city';
import { TMainState } from '../../types/state';
import { createReducer } from '@reduxjs/toolkit';
import { setOffers, changeCity } from '../action';

const initialState: TMainState = {
  offers: [],
  currentCity: DEFAULT_CITY,
  isOffersLoaded: false,
};

const mainData = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(changeCity, (state, action) => {
      const city = cities.find((el) => el.id === action.payload) as TCity;
      state.currentCity = city;
    });
});

export { mainData };
