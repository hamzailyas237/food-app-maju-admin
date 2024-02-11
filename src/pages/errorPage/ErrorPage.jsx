import React from "react";
import logo from "../../assets/logo.png";
import classes from "./error-page.module.css";

const ErrorPage = ({ styles }) => {
  return (
    <div className={classes.container} style={styles}>
      <img src={logo} alt="logo" />
      <h1>ERROR 404, PAGE NOT FOUND</h1>
    </div>
  );
};

export default ErrorPage;
