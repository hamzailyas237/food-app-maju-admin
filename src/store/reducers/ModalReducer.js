import { ActionTypes } from "../constants";

const INITIAL_STATE = {
  showModal: false,
  modalText: "",
};

const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        showModal: true,
        modalText: action.payload,
      };
    case ActionTypes.HIDE_MODAL:
      return {
        showModal: false,
      };
    default:
      return state;
  }
};

export { ModalReducer };
