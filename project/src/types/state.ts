import { TCity } from './city';
import { TOffer } from './offer';
import { AuthorizationStatus } from '../const';
import { TComment } from './comment';
import { RootState } from '../store/root-reducer';

export type TPropertyState = {
  offer: TOffer | null;
  offersNearby: TOffer[] | null;
  comments: TComment[] | null;
};

export type TAuthorizationState = {
  authStatus: AuthorizationStatus;
};

export type TMainState = {
  offers: TOffer[];
  currentCity: TCity;
  isOffersLoaded: boolean;
};

export type TFavoritesState = {
  favoriteOffers: TOffer[] | [] | null;
}

export type TState = RootState; // TPropertyState & TAuthorizationState & TMainState;
