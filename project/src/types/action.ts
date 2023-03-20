import { setOffers, changeCity, requireAuth, requireLogout, setComments, setOfferData, updateOffer, setOffer } from '../store/action';
import { ThunkAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { TState } from './state';
import { Action } from 'redux';

export enum ActionType {
  SetOffers = 'offers/setOffers',
  SetOfferData = 'offer/setOfferData',
  SetComments = 'comments/setComments',
  ChangeCity = 'city/changeCity',
  RequireAuth = 'authorization/requireAuth',
  RequireLogout = 'authorization/requireLogout',
  UpdateOffer = 'offers/updateOffer',
  SetOffer = 'offer/setOffer',
}

export type TAuthActions =
  | ReturnType<typeof requireAuth>
  | ReturnType<typeof requireLogout>;

export type TMainActions =
  | ReturnType<typeof setOffers>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof updateOffer>;

export type TPropertyActions =
  | ReturnType<typeof setOfferData>
  | ReturnType<typeof setComments>
  | ReturnType<typeof setOffer>;

export type TThunkActionResult<R = Promise<void>> = ThunkAction<R, TState, AxiosInstance, Action>;
export type TThunkAppDispatch = ThunkDispatch<TState, AxiosInstance, Action>;

