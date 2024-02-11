import { ActionTypes } from "../constants";

const ShowSuccessModalAction = (modalSuccessText) => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SHOW_MODAL,
      payload: modalSuccessText,
    });
  };
};

const HideSuccessModalAction = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.HIDE_MODAL,
    });
  };
};

export { ShowSuccessModalAction, HideSuccessModalAction };
