import { TActions, ActionType } from '../../types/action';
import { TPropertyState } from '../../types/state';

const initialState = {
  offer: null,
  offersNearby: null,
  comments: null,
};

const propertyData = (state: TPropertyState = initialState, action: TActions): TPropertyState => {
  switch (action.type) {
    case ActionType.SetComments: {
      return { ...state, comments: action.payload };
    }
    case ActionType.SetOfferData: {
      return {
        ...state,
        offer: action.payload.offer,
        offersNearby: action.payload.offersNearby,
        comments: action.payload.comments,
      };
    }
    default:
      return state;
  }
};

export { propertyData };
