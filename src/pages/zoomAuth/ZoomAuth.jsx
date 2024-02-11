import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendClassCodeAction } from "../../store/actions/ZoomClassActions";
import Loader from "../../components/loader/Loader";

const ZoomAuth = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const url = new URL(window.location.href);
  const code = url.searchParams.get("code");

  const { bookingId } = useSelector((state) => {
    return state.ClassesReducer;
  });

  useEffect(() => {
    dispatch(SendClassCodeAction({ status: "active", code, bookingId }, token));
  }, []);

  const { loading } = useSelector((state) => {
    return state.LoaderReducer;
  });
  return (
    <div>
      {loading && <Loader />}
      <h1 style={{ color: "white" }}>Authentication in process...</h1>
    </div>
  );
};

export default ZoomAuth;
