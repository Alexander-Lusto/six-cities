import { NameSpace } from '../root-reducer';
import { TState } from '../../types/state';
import { TOffer } from '../../types/offer';
import { TCity } from '../../types/city';

export const getOffers = (state: TState): TOffer[] => state[NameSpace.main].offers;
export const getCurrentCity = (state: TState): TCity => state[NameSpace.main].currentCity;
export const checkIfOffersLoaded = (state: TState): boolean => state[NameSpace.main].isOffersLoaded;
