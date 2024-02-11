import { createData, deleteData, getData, updateData } from "../../apis";
import { ActionTypes } from "../constants";
import { ShowLoaderAction } from "./LoaderActions";
import { ShowSuccessModalAction } from "./ModalActions";

// <-- Deprecated -->
const GetAllProductsAction = (token) => {
  return async (dispatch) => {
    const handleProductsData = (productsData) => {
      dispatch({
        type: ActionTypes.GET_ALL_PRODUCTS,
        payload: productsData.data,
      });
      // console.log("productsData ==>", productsData.data);
    };

    getData(`products/admin/all`, token, handleProductsData);
  };
};

const GetRestuarantsAction = (token, productType, sortType) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleProductsData = (productsData) => {
      dispatch({
        type: ActionTypes.GET_ALL_RESTAURANTS,
        payload: productsData,
      });
      // console.log("productsData ==>", productsData.data);
    };
    getData(
      `/restaurants?city=all`,
      token,
      handleProductsData,
      // {
      //   productType,
      //   sortType,
      // },
      null,
      dispatch
    );
  };
};

const GetSingleProductAction = (data) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleProductData = (productData) => {
      dispatch({
        type: ActionTypes.GET_SINGLE_RESTAURANT,
        payload: productData.data,
      });
      // console.log("productData ==>", productData.data);
    };

    getData(
      `products/${data.id}`,
      data.token,
      handleProductData,
      null,
      dispatch
    );
  };
};

const DeleteProductAction = (data) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleProductData = (productData) => {
      dispatch({
        type: ActionTypes.DELETE_A_RESTAURANT,
        payload: productData.data,
      });
      //   console.log("productData ==>", productData.data);
      dispatch(ShowSuccessModalAction("Product Deleted Successfully"));
    };

    deleteData(
      `products/${data.id}`,
      handleProductData,
      {
        token: data.token,
      },
      dispatch
    );
  };
};

const AddProductAction = (data, token) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleProductData = (productData) => {
      dispatch({
        type: ActionTypes.ADD_RESTAURANT,
        payload: productData.data,
      });
      // console.log("productData ==>", productData.data);
      dispatch(ShowSuccessModalAction("Product Added Successfully"));
    };

    let formData = new FormData();

    const imagesToSend = [];
    for (let key in data) {
      if (key == "images" && data.images) {
        for (var i = 0; i < data.images.length; i++) {
          imagesToSend.push(data.images[i]);
          formData.append(key, imagesToSend[i]);
        }
      } else if (key == "shippingDetails") {
        formData.append(key, JSON.stringify(data[key]));
      } else {
        formData.append(key, data[key]);
      }
    }

    createData(
      `products`,
      formData,
      handleProductData,
      {
        token,
        contentType: "multipart/form-data",
      },
      dispatch
    );
  };
};

const EditProductAction = (data, token, id, statusUpdate) => {
  return async (dispatch) => {
    dispatch(ShowLoaderAction());

    const handleProductData = (productData) => {
      dispatch({
        type: ActionTypes.EDIT_RESTAURANT,
        payload: productData.data,
      });
      // console.log("productData ==>", productData.data);
      if (statusUpdate) {
        dispatch(ShowSuccessModalAction("Status Updated Successfully!"));
      } else {
        dispatch(ShowSuccessModalAction("Product Updated Successfully"));
      }
    };

    let formData = new FormData();
    const imagesToSend = [];

    for (let key in data) {
      if (key === "shippingDetails") {
        formData.append(key, JSON.stringify(data[key]));
      } else if (key == "images" && data.images) {
        for (var i = 0; i < data.images.length; i++) {
          imagesToSend.push(data.images[i]);
          formData.append(key, imagesToSend[i]);
        }
      } else {
        formData.append(key, data[key]);
      }
    }
    updateData(
      `products/${id}`,
      formData,
      handleProductData,
      {
        token,
        contentType: "multipart/form-data",
      },
      dispatch
    );
  };
};

export {
  GetSingleProductAction,
  DeleteProductAction,
  AddProductAction,
  EditProductAction,
  GetRestuarantsAction,
};
