import { ActionType } from '../types/action';
import { TOffer } from '../types/offer';
import { AuthorizationStatus } from '../const';

export const setOffers = (offers: TOffer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);

export const changeCity = (cityID: number) => ({
  type: ActionType.ChangeCity,
  payload: cityID,
} as const);

export const requireAuth = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuth,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
