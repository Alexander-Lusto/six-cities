import {setOffers, changeCity, requireAuth, requireLogout} from '../store/action';

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

