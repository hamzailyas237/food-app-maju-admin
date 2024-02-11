import { createData, updateData } from "../../apis";
import { ActionTypes } from "../constants";
import { ShowLoaderAction } from "./LoaderActions";
import { ShowSuccessModalAction } from "./ModalActions";

const LoginAction = (data, navigate) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleLoginData = (loginData) => {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: loginData.token,
      });
      localStorage.setItem("token", loginData.token);
      navigate("/");
    };

    createData(
      `/login`,
      {
        email: data.email,
        password: data.password,
        role: "admin",
      },
      handleLoginData,
      { contentType: "application/json" },
      dispatch
    );
  };
};

const LogoutAction = (token, navigate) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleLogout = (logoutData) => {
      dispatch({
        type: ActionTypes.LOGOUT,
        // payload: null,
      });
      localStorage.clear();
      navigate("/login");
    };
    createData(`users/logout`, {}, handleLogout, { token }, dispatch);
  };
};

const ResetPasswordAction = (data, token) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handlePasswordReset = (updatedPassword) => {
      dispatch({
        type: ActionTypes.CHANGE_PASSWORD,
      });
      dispatch(ShowSuccessModalAction("Password Updated Successfully"));
    };
    updateData(
      `/user`,
      data,
      handlePasswordReset,
      { token, contentType: "application/json" },
      dispatch
    );
  };
};
export { LoginAction, LogoutAction, ResetPasswordAction };
