import React from "react";
const TextArea = ({ styles, label, labelStyle, onChange, value }) => {
  return (
    <>
      <label style={labelStyle}>{label}</label>
      <textarea
        style={styles}
        onChange={onChange}
        defaultValue={value}
      ></textarea>
    </>
  );
};

export default TextArea;
