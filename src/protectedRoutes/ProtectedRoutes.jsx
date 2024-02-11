import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// ** DEPRECATED
const ProtectedRoutes = () => {
  const { token } = useSelector((state) => {
    return state.LoginReducer;
  });
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
