import React, { useState } from "react";
import ShippingDetailsForm from "../../components/shippingDetailsForm/ShippingDetailsForm";
import AppButton from "../../components/button/AppButton";
import AppModal from "../../components/modal/AppModal";
import { useLocation, useNavigate } from "react-router-dom";
import exclamationCircle from "../../assets/exclamationCircle.png";
import GoBack from "../../components/goBack/GoBack";
import classes from "./edit-shipping-details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UpdateProfileAction } from "../../store/actions/ProfileActions";
import { HideSuccessModalAction } from "../../store/actions/ModalActions";
import SuccessModal from "../../components/modal/SuccessModal";
import success from "../../assets/success.png";
import Loader from "../../components/loader/Loader";

const RenderEditShippingDetails = ({ shippingData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [data, setData] = useState({});
  const getData = (data) => {
    setData(data);
  };

  const editProfileHandler = async () => {
    dispatch(UpdateProfileAction({ shippingDetails: data }, token));
  };

  const { modalText, showModal } = useSelector((state) => {
    return state.ModalReducer;
  });

  const { loading } = useSelector((state) => {
    return state.LoaderReducer;
  });

  return (
    <>
      {showModal && (
        <SuccessModal
          open={showModal}
          heading={modalText}
          icon={success}
          closeBtnText={"Close"}
          closeBtnAction={() => {
            dispatch(HideSuccessModalAction());
            navigate("/shipping/details");
          }}
          closeBtnStyle={{
            backgroundColor: "#00b4d8",
            boxShadow: "0px 16px 30px #14A3844D",
            width: "130px",
            height: "48px",
            borderRadius: "30px",
            opacity: 1,
          }}
          headingStyle={{
            textAlign: "center",
          }}
        />
      )}
      <div className={`${classes["shipping-details-main-container"]}`}>
        <GoBack
          styles={{ position: "absolute" }}
          onClick={() => navigate("/shipping/details")}
        />

        <ShippingDetailsForm
          getData={getData}
          defaultShippingData={shippingData}
        />
        <div style={{ display: "flex", marginTop: "50px", gap: "20px" }}>
          <AppButton
            onClick={() => navigate("/shipping/details")}
            text={"Cancel"}
            styles={{
              color: "white",
              backgroundColor: "#1A1A1A ",
              borderRadius: "5px",
              border: "1px solid #00B4D8",
              width: "202px",
              height: "40px",
              font: "normal normal normal 18px/27px Poppins",
              letterSpacing: "0px",
              opacity: "1",
            }}
          />

          <AppModal
            text={loading ? <Loader /> : "Save"}
            heading={"Are You Sure You Want To Edit Shipping Details?"}
            icon={exclamationCircle}
            styles={{
              color: "white",
              backgroundColor: "#00B4D8",
              borderRadius: "5px",
              width: "202px",
              height: "40px",
              font: "normal normal 300 16px/25px Poppins",
              letterSpacing: "0px",
              opacity: "1",
            }}
            headingStyle={{ width: "294px", textAlign: "center" }}
            onReject={() => navigate("/edit/shipping-details")}
            onAccept={editProfileHandler}
            onRejectBtnText={"Cancel"}
            onAcceptBtnText={"Confirm"}
            rejectBtnStyle={{
              backgroundColor: "#1A1A1A ",
              border: "1px solid #00B4D8",
              width: "152px",
              height: "64px",
              borderRadius: "10px",
              opacity: 1,
            }}
            acceptBtnStyle={{
              backgroundColor: "#00B4D8 ",
              width: "152px",
              height: "64px",
              borderRadius: "10px",
              opacity: 1,
            }}
          />
        </div>
      </div>
    </>
  );
};
const EditShippingDetails = () => {
  const location = useLocation();
  return (
    <div>
      <RenderEditShippingDetails shippingData={location.state} />
    </div>
  );
};

export default EditShippingDetails;
