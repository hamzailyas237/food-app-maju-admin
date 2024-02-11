import { ActionTypes } from "../constants";

const INITIAL_STATE = {
  profileData: [],
};

const ProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_PROFILE_DATA:
      return {
        ...state,
        profileData: [action.payload],
      };
    case ActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        profileData: [action.payload],
      };
    default:
      return state;
  }
};

export { ProfileReducer };
