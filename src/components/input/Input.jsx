import React from "react";

const Input = ({
  type,
  placeholder,
  styles,
  label,
  labelStyle,
  onChange,
  value,
}) => {
  return (
    <div>
      <div>
        <label htmlFor={label} style={labelStyle}>
          {label}
        </label>
      </div>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={value ? value : ""}
        style={styles}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
