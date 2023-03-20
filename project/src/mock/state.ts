import { DEFAULT_CITY, cities } from '../const';
import { TState } from '../types/state';
import { AuthorizationStatus } from '../const';
import { mockOffers } from './offers';
import { mockComments } from './commetns';

const mockFavoriteOffers = mockOffers.filter((el) => el.isFavorite);

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
  FAVORITES: {
    favoriteOffers: mockFavoriteOffers,
  }
};

export const authorizedState: TState = {
  AUTHORIZATION: {
    authStatus: AuthorizationStatus.Auth,
  },
  MAIN: {
    offers: mockOffers,
    currentCity: cities[3],
    isOffersLoaded: false,
  },
  PROPERTY: {
    offer: mockOffers[0],
    offersNearby: mockOffers.slice(0,3),
    comments: mockComments[3],
  },
  FAVORITES: {
    favoriteOffers: mockFavoriteOffers,
  }
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
  FAVORITES: {
    favoriteOffers: mockFavoriteOffers,
  }
};
