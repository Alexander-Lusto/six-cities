import {setOffers, changeCity, requireAuth, requireLogout} from '../store/action';
import { ThunkAction } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { TState } from './state';

export enum ActionType {
  SetOffers = 'offers/setOffers',
  ChangeCity = 'cities/changeCity',
  RequireAuth = 'authorization/requireAuth',
  RequireLogout = 'authorization/requireLogout',
}

export type TActions =
  | ReturnType<typeof setOffers>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof requireAuth>
  | ReturnType<typeof requireLogout>;

export type TThunkActionResult<R = Promise<void>> = ThunkAction<R, TState, AxiosInstance, TActions>;
export type TThunkAppDispatch = ThunkDispatch<TState, AxiosInstance, TActions>;

