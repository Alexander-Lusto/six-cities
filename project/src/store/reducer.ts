import { cities } from '../const';
import { TActions, ActionType } from '../types/action';
import { TState } from '../types/state';
import { TCity } from '../types/city';
import { AuthorizationStatus } from '../const';

const DEFAULT_CITY = cities[0];

const initialState = {
  offers: [],
  comments: [],
  currentCity: DEFAULT_CITY,
  authStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: TState = initialState, action: TActions): TState => {
  switch (action.type) {
    case ActionType.SetOffers: {
      return {...state, offers: action.payload, isDataLoaded: true};
    }
    case ActionType.ChangeCity: {
      const city = cities.find((el) => el.id === action.payload) as TCity;
      return {...state, currentCity: city };
    }
    case ActionType.RequireAuth: {
      return {...state, authStatus: action.payload };
    }
    case ActionType.RequireLogout: {
      return {...state, authStatus: AuthorizationStatus.NoAuth };
    }
    case ActionType.SetComments: {
      return {...state, comments: action.payload};
    }
    default:
      return state;
  }
};

export {reducer};
