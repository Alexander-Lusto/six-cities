import { TCity } from './city';
import { TOffer } from './offer';
import { AuthorizationStatus } from '../const';

export type TState = {
  offers: TOffer[];
  currentCity: TCity;
  authStatus: AuthorizationStatus;
};
