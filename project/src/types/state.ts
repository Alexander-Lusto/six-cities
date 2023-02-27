import { City } from './city';
import { Offer } from './offer';

export type State = {
  offers: Offer[];
  currentCity: City;
};
