// Constants
import * as types from "./users.constants";

export const initialState = {
  users: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
