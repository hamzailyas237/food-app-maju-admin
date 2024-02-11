import { ActionTypes } from "../constants";

const INITIAL_STATE = {
  orders: [],
  currentOrder: [],
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case ActionTypes.GET_SINGLE_ORDER:
      return {
        ...state,
        currentOrder: [action.payload],
      };
    case ActionTypes.EDIT_ORDER:
      return {
        ...state,
        currentOrder: [action.payload],
      };
    default:
      return { ...state };
  }
};

export { OrderReducer };
