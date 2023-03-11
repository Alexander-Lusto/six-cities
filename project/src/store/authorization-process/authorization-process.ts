import { TActions, ActionType } from '../../types/action';
import { TAuthorizationState } from '../../types/state';
import { AuthorizationStatus } from '../../const';

const initialState = {
  authStatus: AuthorizationStatus.Unknown,
};

const authorizationProcess = (state: TAuthorizationState = initialState, action: TActions): TAuthorizationState => {
  switch (action.type) {
    case ActionType.RequireAuth: {
      return { ...state, authStatus: action.payload };
    }
    case ActionType.RequireLogout: {
      return { ...state, authStatus: AuthorizationStatus.NoAuth };
    }
    default:
      return state;
  }
};

export { authorizationProcess };

