import { TCity } from './city';
import { TOffer } from './offer';

export type TState = {
  offers: TOffer[];
  currentCity: TCity;
};
