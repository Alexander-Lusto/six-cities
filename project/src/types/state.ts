import { TCity } from './city';
import { TOffer } from './offer';
import { AuthorizationStatus } from '../const';
import { TComment } from './comment';

export type TState = {
  offers: TOffer[];
  offer: TOffer | null;
  offersNearby: TOffer[] | null;
  comments: TComment[] | null;
  currentCity: TCity;
  authStatus: AuthorizationStatus;
  isOffersLoaded: boolean;
};
