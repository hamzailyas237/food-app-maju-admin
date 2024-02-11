import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/reset-password/ResetPassword";
import NewPassword from "./pages/new-password/NewPassword";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";
import AdminProducts from "./pages/adminProducts/AdminProducts";
import AdminProductDetails from "./pages/adminProductDetails/AdminProductDetails";
import AddProduct from "./pages/addProduct/AddProduct";
import Featured from "./pages/featured/Featured";
import AdminShippingDetails from "./pages/adminShippingDetails/AdminShippingDetails";
import EditShippingDetails from "./pages/editShippingDetails/EditShippingDetails";
import AdminProductOrders from "./pages/adminProductOrders/AdminProductOrders";
import EditProduct from "./pages/editProduct/EditProduct";
import AdminProductOrderDetails from "./pages/adminProductOrderDetails/AdminProductOrderDetails";
import Splash from "./pages/splash/Splash";
import Navbar from "./components/navbar/Navbar";
import { useMediaQuery } from "@chakra-ui/react";
import MobileView from "./pages/mobileView/MobileView";
import ZoomClasses from "./pages/zoomClasses/ZoomClasses";
import ZoomAuth from "./pages/zoomAuth/ZoomAuth";
import ChangePassword from "./pages/changePassword/ChangePassword";
import ErrorPage from "./pages/errorPage/ErrorPage";
import { useSelector } from "react-redux";

const App = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)");
  const { token } = useSelector((state) => {
    return state.LoginReducer;
  });

  return (
    <div>
      {isSmallerThan850 ? (
        <MobileView />
      ) : token ? (
        <Routes>
          <Route
            element={
              <Navbar>
                <Outlet />
              </Navbar>
            }
          >
            <Route path="/" element={!token ? <Splash /> : <Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/admin-products" element={<AdminProducts />} />
            <Route
              path="/admin-product-details"
              element={<AdminProductDetails />}
            />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="/product/featured" element={<Featured />} />
            <Route
              path="/shipping/details"
              element={<AdminShippingDetails />}
            />
            <Route
              path="/edit/shipping-details"
              element={<EditShippingDetails />}
            />
            <Route path="/product-orders" element={<AdminProductOrders />} />
            <Route path="/product/edit" element={<EditProduct />} />
            <Route
              path="/admin-product-order-details"
              element={<AdminProductOrderDetails />}
            />
            <Route path="zoomCode" element={<ZoomAuth />} />
            <Route path="/classes" element={<ZoomClasses />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route
              path="/*"
              element={<ErrorPage styles={{ height: "70vh" }} />}
            />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={!token ? <Splash /> : <Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
          <Route
            path="/*"
            element={<ErrorPage styles={{ height: "100vh" }} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
