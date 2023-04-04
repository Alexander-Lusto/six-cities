import { AuthorizationStatus } from '../../const';
import { requireAuth, requireLogout } from '../action';
import { authorizationReducer } from './authorization-reducer';
import { TAuthorizationState } from '../../types/state';

describe('Reducer: authorization-process', () => {

  test('should set authStatus in state to "Auth"', () => {
    const state: TAuthorizationState = {authStatus: AuthorizationStatus.Unknown};
    expect(authorizationReducer(state, requireAuth(AuthorizationStatus.Auth))).toEqual({authStatus: AuthorizationStatus.Auth});
  });

  test('should set authStatus in state to "NoAuth"', () => {
    const state: TAuthorizationState = {authStatus: AuthorizationStatus.Unknown};
    expect(authorizationReducer(state, requireAuth(AuthorizationStatus.NoAuth))).toEqual({authStatus: AuthorizationStatus.NoAuth});
  });

  test('should change authStatus in state from "Auth" to "NoAuth"', () => {
    const state: TAuthorizationState = {authStatus: AuthorizationStatus.Auth};
    expect(authorizationReducer(state, requireLogout())).toEqual({authStatus: AuthorizationStatus.NoAuth});
  });

  test('without additional parameters should return initial state', () => {
    expect(authorizationReducer(undefined, {type: 'UNKNOWN_ACTION'})).toEqual({authStatus: AuthorizationStatus.Unknown});
  });
});
