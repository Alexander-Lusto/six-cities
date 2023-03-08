import {setOffers, changeCity, requireAuth, requireLogout, setComments, setOffer, setOffersNearby, setOfferDataAction} from '../store/action';
import { ThunkAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { TState } from './state';

export enum ActionType {
  SetOffers = 'offers/setOffers',
  SetOfferData = 'offer/setOfferData',
  SetOffer = 'offer/setOffer',
  ChangeCity = 'city/changeCity',
  RequireAuth = 'authorization/requireAuth',
  RequireLogout = 'authorization/requireLogout',
  SetComments = 'comments/setComments',
  SetOffersNearby = 'offer/setOffersNearby',
}

export type TActions =
  | ReturnType<typeof setComments>
  | ReturnType<typeof setOffers>
  | ReturnType<typeof setOffer>
  | ReturnType<typeof setOffersNearby>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof requireAuth>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setOfferDataAction>;

export type TThunkActionResult<R = Promise<void>> = ThunkAction<R, TState, AxiosInstance, TActions>;
export type TThunkAppDispatch = ThunkDispatch<TState, AxiosInstance, TActions>;

