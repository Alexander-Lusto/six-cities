import { ActionType, setOffersAction, changeCityAction } from '../types/action';
import { Offer } from '../types/offer';

export const setOffers = (offers: Offer[]): setOffersAction => ({
  type: ActionType.setOffers,
  payload: offers,
});

export const changeCity = (cityID: number): changeCityAction => ({
  type: ActionType.changeCity,
  payload: cityID,
});
