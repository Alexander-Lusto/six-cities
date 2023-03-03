import { ActionType, setOffersAction, changeCityAction } from '../types/action';
import { TOffer } from '../types/offer';

export const setOffers = (offers: TOffer[]): setOffersAction => ({
  type: ActionType.setOffers,
  payload: offers,
});

export const changeCity = (cityID: number): changeCityAction => ({
  type: ActionType.changeCity,
  payload: cityID,
});
