import { cities } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';

const DEFAULT_CITY = cities[0];

const initialState = {
  offers: [],
  currentCity: DEFAULT_CITY,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.setOffers:
      return {...state, offers: action.payload};
    case ActionType.changeCity:
      return {...state, currentCity: action.payload};
    default:
      return state;
  }
};

export {reducer};
