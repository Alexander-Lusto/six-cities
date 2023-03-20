import { TPropertyState } from '../../types/state';
import { setComments, setOfferData, setOffer } from '../action';
import { createReducer } from '@reduxjs/toolkit';

const initialState: TPropertyState = {
  offer: null,
  offersNearby: null,
  comments: null,
};

const propertyReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setOfferData, (state, action) => {
      state.offer = action.payload.offer;
      state.comments = action.payload.comments;
      state.offersNearby = action.payload.offersNearby;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    });
});

export { propertyReducer };
