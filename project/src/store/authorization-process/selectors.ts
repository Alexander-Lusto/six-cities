import { NameSpace } from '../root-reducer';
import { TState } from '../../types/state';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus => state[NameSpace.authorization].authStatus;
