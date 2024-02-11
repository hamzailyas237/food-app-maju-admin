import { ActionTypes } from "../constants";

const ShowLoaderAction = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.SHOW_LOADER,
    });
  };
};

const HideLoaderAction = () => {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.HIDE_LOADER,
    });
  };
};

export { ShowLoaderAction, HideLoaderAction };
