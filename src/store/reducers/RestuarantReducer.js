import { ActionTypes } from "../constants";

const INITIAL_STATE = {
  restaurants: [],
  currentRestaurant: [],
};

const RestuarantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case ActionTypes.GET_SINGLE_RESTAURANT:
      return {
        ...state,
        currentProduct: [action.payload],
      };
    case ActionTypes.DELETE_A_RESTAURANT:
      const remainingProducts = state.products.data.filter((product) => {
        return product._id !== action.payload._id;
      });
      return {
        ...state,
        products: {
          ...state.products,
          data: remainingProducts,
        },
      };
    case ActionTypes.EDIT_RESTAURANT:
      return {
        ...state,
        currentProduct: [action.payload],
      };
    default:
      return { ...state };
  }
};

export { RestuarantReducer };
