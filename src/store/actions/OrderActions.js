import { getData, updateData } from "../../apis";
import { ActionTypes } from "../constants";
import { ShowLoaderAction } from "./LoaderActions";
import { ShowSuccessModalAction } from "./ModalActions";

// <-- Deprecated -->
const GetAllOrdersAction = (token) => {
  return async (dispatch) => {
    const handleOrdersData = (ordersData) => {
      dispatch({
        type: ActionTypes.GET_ALL_ORDERS,
        payload: ordersData.data,
      });
      //   console.log("ordersData ==>", ordersData.data);
    };

    getData(`users/orders/admin/all`, token, handleOrdersData);
  };
};

const GetOrdersAction = (token, productType, sortType, search) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleOrdersData = (ordersData) => {
      dispatch({
        type: ActionTypes.GET_ALL_ORDERS,
        payload: ordersData,
      });
      //   console.log("ordersData ==>", ordersData.data);
    };
    getData(
      `users/orders/admin/all`,
      token,
      handleOrdersData,
      {
        status: productType,
        sortType,
        search,
      },
      dispatch
    );
  };
};

const GetSingleOrderAction = (data) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleOrderData = (orderData) => {
      dispatch({
        type: ActionTypes.GET_SINGLE_ORDER,
        payload: orderData.data,
      });
      // console.log("orderData ==>", orderData.data);
    };
    getData(
      `users/order/detail/${data.id}`,
      data.token,
      handleOrderData,
      null,
      dispatch
    );
  };
};

const EditOrderAction = (data, token, id) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleOrderData = (orderData) => {
      dispatch({
        type: ActionTypes.EDIT_ORDER,
        payload: orderData.data,
      });
      //   console.log("orderData ==>", orderData.data);
      dispatch(ShowSuccessModalAction("Status Updated Successfully!"));
    };

    updateData(
      `users/admin/update-order/${id}`,
      data,
      handleOrderData,
      {
        token,
        contentType: "application/json",
      },
      dispatch
    );
  };
};
export { GetOrdersAction, GetSingleOrderAction, EditOrderAction };
