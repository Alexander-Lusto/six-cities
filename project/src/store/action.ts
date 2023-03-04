import { ActionType } from '../types/action';
import { TOffer } from '../types/offer';

export const setOffers = (offers: TOffer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);

export const changeCity = (cityID: number) => ({
  type: ActionType.ChangeCity,
  payload: cityID,
} as const);
