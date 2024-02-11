import axios from "axios";
import { ShowSuccessModalAction } from "../store/actions/ModalActions";
import { HideLoaderAction } from "../store/actions/LoaderActions";

// const API_BASE_URL = "http://192.168.100.205:3002/api/";
// const API_BASE_URL =
//   "https://ultra-fitness-backend-04abe3a7675b.herokuapp.com/api/v1/";

const API_BASE_URL =
  "http://localhost:5000/api";

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
} else {
  axios.defaults.headers.common["Authorization"] = `Bearer ${null}`;
}

export const getData = async (url, headers, cb, params, dispatch) => {
  return await axios
    .get(`${API_BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${headers}`,
      },
      params: params && params,
    })
    .then((res) => {
      // console.log(res);
      cb(res.data);
      dispatch(HideLoaderAction());
    })
    .catch((err) => {
      // console.log(err);
      dispatch(HideLoaderAction());
    });
};

export const createData = async (url, data, cb, headers, dispatch) => {
  await axios
    .post(`${API_BASE_URL}${url}`, data, {
      headers: {
        "Content-Type":
          headers && headers.contentType
            ? headers.contentType
            : "application/json",
        Authorization: `Bearer ${headers?.token ? headers?.token : token ? token : null
          }`,
      },
    })
    .then((res) => {
      // console.log(res);
      cb(res.data);
      dispatch(HideLoaderAction());
    })
    .catch((err) => {
      // console.log(err);
      dispatch(HideLoaderAction());
      dispatch(ShowSuccessModalAction(err?.response?.data?.message));
    });
};

export const updateData = async (url, data, cb, headers, dispatch) => {
  await axios
    .patch(`${API_BASE_URL}${url}`, data, {
      headers: {
        "Content-Type": `${headers && headers.contentType}`,
        Authorization: `Bearer ${headers?.token}`,
        "Access-Control-Allow-Credentials": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      },
    })
    .then((res) => {
      // console.log(res);
      cb(res.data);
      dispatch(HideLoaderAction());
    })
    .catch((err) => {
      // console.log(err);
      dispatch(HideLoaderAction());
      // dispatch(ShowSuccessModalAction(err?.response?.data?.error?.message));
      dispatch(ShowSuccessModalAction(err?.response?.data?.message));

    });
};

export const deleteData = async (url, cb, headers, dispatch) => {
  await axios
    .delete(`${API_BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${headers.token}`,
      },
    })
    .then((res) => {
      // console.log(res);
      cb(res.data);
      dispatch(HideLoaderAction());
    })
    .catch((err) => {
      // console.log(err);
      dispatch(HideLoaderAction());
      dispatch(ShowSuccessModalAction(err?.response?.data?.error?.message));
    });
};
