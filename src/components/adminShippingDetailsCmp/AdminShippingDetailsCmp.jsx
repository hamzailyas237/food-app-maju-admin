import React from "react";
import classes from "./admin-shipping-details-cmp.module.css";
import AppButton from "../button/AppButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminShippingDetailsCmp = () => {
  const navigate = useNavigate();

  const { profileData } = useSelector((state) => {
    return state.ProfileReducer;
  });

  return profileData?.map((data, i) => {
    return (
      <div key={i} className={`${classes["admin-shipping-details-container"]}`}>
        <div>
          <h1>Item Location</h1>
          <p>{data?.user?.shippingDetails?.itemLocation}</p>
        </div>
        <div>
          <h1>Shipping to</h1>
          <p>{data?.user?.shippingDetails?.shippingTo}</p>
        </div>
        <div>
          <h1>Delivery</h1>
          <p>{data?.user?.shippingDetails?.delivery}</p>
        </div>
        <div>
          <h1>Return</h1>
          <p>{data?.user?.shippingDetails?.returnDuration}</p>
        </div>
        <div>
          <h1>Shipping and handling</h1>
          <p>{data?.user?.shippingDetails?.shippingAndHandling}</p>
        </div>

        <AppButton
          onClick={() =>
            navigate("/edit/shipping-details", {
              state: data?.user?.shippingDetails,
            })
          }
          text={"Edit"}
          styles={{
            color: "white",
            backgroundColor: "#00B4D8",
            borderRadius: "5px",
            width: "244px",
            height: "48px",
            letterSpacing: "0px",
            opacity: "1",
          }}
        />
      </div>
    );
  });
};

export default AdminShippingDetailsCmp;
