import { AuthorizationStatus } from '../../const';
import { createReducer } from '@reduxjs/toolkit';
import { requireAuth,requireLogout } from '../action';
import { TAuthorizationState } from '../../types/state';

const initialState: TAuthorizationState = {
  authStatus: AuthorizationStatus.Unknown,
};

const authorizationProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuth, (state, action) => {
      state.authStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authStatus = AuthorizationStatus.NoAuth;
    });
});

export { authorizationProcess };

