import { ActionTypes } from "../constants";

const INITIAL_STATE = {
  token: null,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export { LoginReducer };
