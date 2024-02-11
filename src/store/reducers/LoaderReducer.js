import { ActionTypes } from "../constants";

const INITIAL_STATE = {
  loading: false,
};

const LoaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export { LoaderReducer };
