import React from "react";
import logo from "../../assets/logo.png";
import clases from "./mobile-view.module.css";

const MobileView = () => {
  return (
    <div className={`${clases["mobile-view"]}`}>
      <img src={logo} alt="logo" />
      <h1>Open in large screen</h1>
    </div>
  );
};

export default MobileView;
