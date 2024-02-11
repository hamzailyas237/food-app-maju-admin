import React from "react";

const RadioButton = ({ label, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={label}
        name="status"
        value={label}
        onChange={onChange}
      />
       
      <label style={{ fontSize: "18px" }} htmlFor={label}>
        {label}
      </label>
       
    </div>
  );
};

export default RadioButton;
