import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import classes from "./splash.module.css";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }, []);

  return (
    <div className={`${classes["splash-container"]}`}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Splash;
