import React from "react";
import { Spinner } from "@chakra-ui/react";
import classes from "./loader.module.css";

const Loader = ({ styles }) => {
  return (
    <div className={`${classes["loader-container"]}`} style={styles}>
      <Spinner speed="0.65s" size={"lg"} thickness="3px" />
    </div>
  );
};

export default Loader;
