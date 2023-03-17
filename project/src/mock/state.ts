import { DEFAULT_CITY } from '../const';
import { TState } from '../types/state';
import { AuthorizationStatus } from '../const';

export const initialState: TState = {
  AUTHORIZATION: {
    authStatus: AuthorizationStatus.Unknown,
  },
  MAIN: {
    offers: [],
    currentCity: DEFAULT_CITY,
    isOffersLoaded: false,
  },
  PROPERTY: {
    offer: null,
    offersNearby: null,
    comments: null,
  },
};

export const authorizedState: TState = {
  AUTHORIZATION: {
    authStatus: AuthorizationStatus.Auth,
  },
  MAIN: {
    offers: [],
    currentCity: DEFAULT_CITY,
    isOffersLoaded: false,
  },
  PROPERTY: {
    offer: null,
    offersNearby: null,
    comments: null,
  },
};

export const unAuthorizedState: TState = {
  AUTHORIZATION: {
    authStatus: AuthorizationStatus.NoAuth,
  },
  MAIN: {
    offers: [],
    currentCity: DEFAULT_CITY,
    isOffersLoaded: false,
  },
  PROPERTY: {
    offer: null,
    offersNearby: null,
    comments: null,
  },
};
