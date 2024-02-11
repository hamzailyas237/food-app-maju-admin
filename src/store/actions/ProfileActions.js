import { getData, updateData } from "../../apis";
import { ActionTypes } from "../constants";
import { ShowSuccessModalAction } from "./ModalActions";
import { HideLoaderAction, ShowLoaderAction } from "./LoaderActions";

const GetProfileDataAction = (token) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleProfileData = (profileData) => {
      dispatch({
        type: ActionTypes.GET_PROFILE_DATA,
        payload: profileData.data,
      });
      // console.log("profile data ==>", profileData.data);
    };

    getData(`/users/admin`, token, handleProfileData, null, dispatch);
  };
};

const UpdateProfileAction = (data, token) => {
  console.log('data', data);

  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const updateProfile = (updatedProfileData) => {
      dispatch({
        type: ActionTypes.UPDATE_PROFILE,
        payload: updatedProfileData.data,
      });
      // console.log(updatedProfileData.data);
      dispatch(HideLoaderAction());
      dispatch(ShowSuccessModalAction("Your Profile Update Successfully"));
    };

    // let formData = new FormData();
    // for (let key in data) {
    //   if (key === "shippingDetails") {
    //     formData.append(key, JSON.stringify(data[key]));
    //   } else {
    //     formData.append(key, data[key]);
    //   }
    // }
    updateData(
      `/user`,
      data,
      updateProfile,
      {
        token,
        // contentType: "multipart/form-data",
        contentType: "application/json",
      },
      dispatch
    );
  };
};
export { GetProfileDataAction, UpdateProfileAction };
