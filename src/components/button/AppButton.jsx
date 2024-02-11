import React from "react";

const AppButton = ({ text, onClick, styles }) => {
  return (
    <button onClick={onClick} style={styles}>
      {text}
    </button>
  );
};

export default AppButton;
