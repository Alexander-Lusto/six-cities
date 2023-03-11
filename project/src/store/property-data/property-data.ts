import { TPropertyState } from '../../types/state';
import { setComments } from '../action';
import { createReducer } from '@reduxjs/toolkit';
import { setOfferData } from '../action';

const initialState: TPropertyState = {
  offer: null,
  offersNearby: null,
  comments: null,
};

const propertyData = createReducer(initialState, (builder) => {
  builder
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOfferData, (state, action) => {
      state.offer = action.payload.offer;
      state.comments = action.payload.comments;
      state.offersNearby = action.payload.offersNearby;
    });
});

export { propertyData };
