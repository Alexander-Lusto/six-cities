import { TCity } from './city';
import { TOffer } from './offer';

export type State = {
  offers: TOffer[];
  currentCity: TCity;
};
