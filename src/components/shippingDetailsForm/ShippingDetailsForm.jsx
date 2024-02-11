import React, { useState } from "react";
import classes from "./shipping-details-form.module.css";
import Input from "../input/Input";

const ShippingDetailsForm = ({ getData, defaultShippingData }) => {
  const [delivery, setDelivery] = useState(defaultShippingData?.delivery);
  const [itemLocation, setItemLocation] = useState(
    defaultShippingData?.itemLocation
  );
  const [returnDuration, setReturnDuration] = useState(
    defaultShippingData?.returnDuration
  );
  const [shippingAndHandling, setShippingAndHandling] = useState(
    defaultShippingData?.shippingAndHandling
  );
  const [shippingTo, setShippingTo] = useState(defaultShippingData?.shippingTo);

  const [shippingData, setShippingData] = useState({
    delivery,
    itemLocation,
    returnDuration,
    shippingAndHandling,
    shippingTo,
  });

  getData(shippingData);

  return (
    <div>
      <div className={`${classes["shipping-details-container"]}`}>
        <div className={`${classes["shipping-form"]}`}>
          <Input
            onChange={(e) => {
              setItemLocation(e.target.value);
              setShippingData({
                ...shippingData,
                itemLocation: e.target.value,
              });
            }}
            value={itemLocation}
            type={"text"}
            placeholder={"Item location"}
            label={"Item location"}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              width: "421px",
              height: "59px",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
            labelStyle={{ color: "white" }}
          />

          <Input
            onChange={(e) => {
              setShippingTo(e.target.value);
              setShippingData({
                ...shippingData,
                shippingTo: e.target.value,
              });
            }}
            value={shippingTo}
            type={"text"}
            placeholder={"Shipping to"}
            label={"Shipping to"}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              width: "421px",
              height: "59px",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
            labelStyle={{ color: "white" }}
          />

          <Input
            onChange={(e) => {
              setDelivery(e.target.value);
              setShippingData({
                ...shippingData,
                delivery: e.target.value,
              });
            }}
            value={delivery}
            type={"text"}
            placeholder={"Delivery"}
            label={"Delivery"}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              width: "421px",
              height: "59px",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
            labelStyle={{ color: "white" }}
          />

          <Input
            onChange={(e) => {
              setReturnDuration(e.target.value);
              setShippingData({
                ...shippingData,
                returnDuration: e.target.value,
              });
            }}
            value={returnDuration}
            type={"text"}
            placeholder={"Return"}
            label={"Return"}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              width: "421px",
              height: "59px",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
            labelStyle={{ color: "white" }}
          />

          <Input
            onChange={(e) => {
              setShippingAndHandling(e.target.value);
              setShippingData({
                ...shippingData,
                shippingAndHandling: e.target.value,
              });
            }}
            value={shippingAndHandling}
            type={"text"}
            placeholder={"Shipping and handling"}
            label={"Shipping and handling"}
            styles={{
              color: "white",
              boxShadow: "10px 20px 30px #0000003d",
              width: "421px",
              height: "59px",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#212121",
              marginTop: "10px",
            }}
            labelStyle={{ color: "white" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingDetailsForm;
