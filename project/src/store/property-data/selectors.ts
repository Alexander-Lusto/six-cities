import { NameSpace } from '../root-reducer';
import { TState } from '../../types/state';
import { TOffer } from '../../types/offer';
import { TComment } from '../../types/comment';

export const getOffer = (state: TState): TOffer | null => state[NameSpace.property].offer;
export const getComments = (state: TState): TComment[] | null => state[NameSpace.property].comments;
export const getOffersNearby = (state: TState): TOffer[] | null => state[NameSpace.property].offersNearby;
