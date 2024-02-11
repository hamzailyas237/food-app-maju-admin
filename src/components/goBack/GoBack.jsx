import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const GoBack = ({ onClick, styles }) => {
  return (
    <div
      className="go-back"
      onClick={onClick}
      style={{
        position: styles.position,
        right: "70px",
        top: "40px",
        color: "white",
        backgroundColor: "#1e1e1e",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      <FaArrowLeft color="#0598B5" />
      <p>Back</p>
    </div>
  );
};

export default GoBack;
