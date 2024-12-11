import { SET_ROUTE } from './actions';

const initialState = {
  route: {
    coordinates: [],
    distance: 0,
    duration: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROUTE:
      return {
        ...state,
        route: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

