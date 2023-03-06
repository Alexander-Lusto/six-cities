import {setOffers, changeCity} from '../store/action';

export enum ActionType {
  SetOffers = 'offers/setOffers',
  ChangeCity = 'cities/changeCity',
}

export type TActions =
  | ReturnType<typeof setOffers>
  | ReturnType<typeof changeCity>;
