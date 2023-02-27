import { cities } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { City } from '../types/city';

const DEFAULT_CITY = cities[3];

const initialState = {
  offers: [],
  currentCity: DEFAULT_CITY,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.setOffers: {
      return {...state, offers: action.payload};
    }
    case ActionType.changeCity: {
      const city = cities.find((el) => el.id === action.payload) as City;
      return {...state, currentCity: city };
    }
    default:
      return state;
  }
};

export {reducer};
