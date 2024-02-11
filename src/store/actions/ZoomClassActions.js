import { getData, updateData } from "../../apis";
import { ActionTypes } from "../constants";
import { ShowLoaderAction } from "./LoaderActions";
import { ShowSuccessModalAction } from "./ModalActions";

const GetClassesAction = (data) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const getClassesData = (classesData) => {
      dispatch({
        type: ActionTypes.GET_CLASSES_DATA,
        payload: classesData.data,
      });
    };
    getData(`booking/admin/all`, data.token, getClassesData, null, dispatch);
  };
};

const CancelClassAction = (data, token) => {
  return async (dispatch) => {
    const updateClass = (updatedClassData) => {
      dispatch({
        type: ActionTypes.UPDATE_CLASS,
        payload: updatedClassData.data,
      });
      dispatch(ShowSuccessModalAction("Class Cancelled Successfully"));
    };
    updateData(
      `booking/meeting/${data.id}`,
      { status: data.status },
      updateClass,
      {
        token,
        contentType: "application/json",
      },
      dispatch
    );
  };
};

const ConductClassAction = (data) => {
  return async (dispatch) => {
    const getClassCode = async (classCode) => {
      dispatch({
        type: ActionTypes.GET_CLASS_CODE,
        payload: data.bookingId,
      });
      // It will open zoomAuth page
      window.open(classCode.data);
    };
    getData(`booking/keys`, null, getClassCode, null, dispatch);
  };
};

const SendClassCodeAction = (data, token) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const getCode = (classCode) => {
      dispatch({
        type: ActionTypes.GO_TO_CLASS,
      });
      // console.log(classCode.data);
      window.location.replace(classCode.data.zoomStartUrl);
    };
    getData(`booking/start/meeting`, token, getCode, data, dispatch);
  };
};

const MarkClassCompletedAction = (data, token) => {
  return async (dispatch) => {
    const updateClass = (updatedClassData) => {
      dispatch({
        type: ActionTypes.UPDATE_CLASS_STATUS,
        payload: updatedClassData.data,
      });
      // console.log(updatedClassData.data);
      dispatch(
        ShowSuccessModalAction("Class Marked As Completed Successfully")
      );
    };
    updateData(
      `booking/meeting/${data.id}`,
      { status: data.status, meetingCompleted: data.meetingCompleted },
      updateClass,
      {
        token,
        contentType: "application/json",
      },
      dispatch
    );
  };
};

export {
  GetClassesAction,
  CancelClassAction,
  ConductClassAction,
  SendClassCodeAction,
  MarkClassCompletedAction,
};
