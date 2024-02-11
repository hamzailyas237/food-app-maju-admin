import { ActionTypes } from "../constants";

const INITIAL_STATE = {
  classesData: [],
  bookingId: null,
};

const ClassesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CLASSES_DATA:
      return {
        ...state,
        classesData: action.payload,
      };
    case ActionTypes.GET_CLASS_CODE:
      return {
        ...state,
        bookingId: action.payload,
      };
    case ActionTypes.UPDATE_CLASS:
      const remainingClasses = state.classesData.filter((currentClass) => {
        return currentClass._id !== action.payload._id;
      });
      return {
        ...state,
        classesData: [...remainingClasses],
      };
    case ActionTypes.UPDATE_CLASS_STATUS:
      const updatedClasses = state.classesData.filter((currentClass) => {
        return currentClass._id !== action.payload._id;
      });
      return {
        ...state,
        classesData: [...updatedClasses],
      };
    default:
      return {
        ...state,
      };
  }
};

export { ClassesReducer };
