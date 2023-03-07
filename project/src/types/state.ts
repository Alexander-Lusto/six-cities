import { TCity } from './city';
import { TOffer } from './offer';
import { AuthorizationStatus } from '../const';
import { TComment } from './comment';

export type TState = {
  offers: TOffer[];
  currentCity: TCity;
  authStatus: AuthorizationStatus;
  comments: TComment[];
  isDataLoaded: boolean;
};
