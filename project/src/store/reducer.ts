import { cities } from '../const';
import { TActions, ActionType } from '../types/action';
import { TState } from '../types/state';
import { TCity } from '../types/city';

const DEFAULT_CITY = cities[0];

const initialState = {
  offers: [],
  currentCity: DEFAULT_CITY,
};

const reducer = (state: TState = initialState, action: TActions): TState => {
  switch (action.type) {
    case ActionType.SetOffers: {
      return {...state, offers: action.payload};
    }
    case ActionType.ChangeCity: {
      const city = cities.find((el) => el.id === action.payload) as TCity;
      return {...state, currentCity: city };
    }
    default:
      return state;
  }
};

export {reducer};
