import { ActionType } from '../types/action';
import { TOffer } from '../types/offer';
import { TOfferData } from '../types/offerData';
import { TComment } from '../types/comment';
import { AuthorizationStatus } from '../const';

export const setOffers = (offers: TOffer[]) => ({
  type: ActionType.SetOffers,
  payload: offers,
} as const);

export const setOffer = (offer: TOffer) => ({
  type: ActionType.SetOffer,
  payload: offer,
} as const);

export const setComments = (comments: TComment[]) => ({
  type: ActionType.SetComments,
  payload: comments,
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

export const setOffersNearby = (offers: TOffer[]) => ({
  type: ActionType.SetOffersNearby,
  payload: offers,
} as const);

export const setOfferDataAction = (data: TOfferData) => ({
  type: ActionType.SetOfferData,
  payload: data,
} as const);
