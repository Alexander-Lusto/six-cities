import { ActionType, setOffersAction, changeCityAction } from '../types/action';
import { Offer } from '../types/offer';
import { City } from '../types/city';

export const setOffers = (offers: Offer[]): setOffersAction => ({
  type: ActionType.setOffers,
  payload: offers,
});

export const changeCity = (city: City): changeCityAction => ({
  type: ActionType.changeCity,
  payload: city,
});
