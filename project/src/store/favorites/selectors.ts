import { NameSpace } from '../root-reducer';
import { TState } from '../../types/state';
import { TOffer } from '../../types/offer';

export const getFavoriteOffers = (state: TState): TOffer[] | null => state[NameSpace.favorites].favoriteOffers;
