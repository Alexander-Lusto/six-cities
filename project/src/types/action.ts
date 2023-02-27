import { Offer } from './offer';

export enum ActionType {
  setOffers = 'offers/setOffers',
  changeCity = 'cities/changeCity',
}

export type setOffersAction = {
  type: ActionType.setOffers;
  payload: Offer[];
}

export type changeCityAction = {
  type: ActionType.changeCity;
  payload: number;
}

export type Actions = setOffersAction | changeCityAction;
