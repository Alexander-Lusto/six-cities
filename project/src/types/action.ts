import { Offer } from './offer';
import { City } from './city';

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
  payload: City;
}

export type Actions = setOffersAction | changeCityAction;
