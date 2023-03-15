import { AuthorizationStatus } from '../../const';
import { requireAuth, requireLogout } from '../action';
import { authorizationProcess } from './authorization-process';

describe('Reducer: authorization-process', () => {

  test('should set authStatus in state to "Auth"', () => {
    const state = {authStatus: AuthorizationStatus.Unknown};
    expect(authorizationProcess(state, requireAuth(AuthorizationStatus.Auth))).toEqual({authStatus: AuthorizationStatus.Auth});
  });

  test('should set authStatus in state to "NoAuth"', () => {
    const state = {authStatus: AuthorizationStatus.Unknown};
    expect(authorizationProcess(state, requireAuth(AuthorizationStatus.NoAuth))).toEqual({authStatus: AuthorizationStatus.NoAuth});
  });

  test('should change authStatus in state from "Auth" to "NoAuth"', () => {
    const state = {authStatus: AuthorizationStatus.Auth};
    expect(authorizationProcess(state, requireLogout())).toEqual({authStatus: AuthorizationStatus.NoAuth});
  });
});
