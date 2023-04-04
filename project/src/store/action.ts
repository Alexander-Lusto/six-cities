import { ActionType } from '../types/action';
import { TOffer } from '../types/offer';
import { TOfferData } from '../types/offerData';
import { TComment } from '../types/comment';
import { AuthorizationStatus } from '../const';
import { createAction } from '@reduxjs/toolkit';

export const setOffers = createAction<TOffer[]>(ActionType.SetOffers);
export const setOfferData = createAction<TOfferData>(ActionType.SetOfferData);
export const setComments = createAction<TComment[]>(ActionType.SetComments);
export const changeCity = createAction<number>(ActionType.ChangeCity);
export const requireAuth = createAction<AuthorizationStatus>(ActionType.RequireAuth);
export const requireLogout = createAction(ActionType.RequireLogout);
export const updateOffer = createAction<TOffer>(ActionType.UpdateOffer);
export const setOffer = createAction<TOffer>(ActionType.SetOffer);
export const setFavoriteOffers = createAction<TOffer[]>(ActionType.SetFavoriteOffers);
