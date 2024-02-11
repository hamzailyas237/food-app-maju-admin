import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AppPhoneInput = ({
  inputStyles,
  dropDownStyles,
  containerStyles,
  onChange,
  value,
}) => {
  return (
    <>
      <PhoneInput
        onChange={(countryCode) => onChange(countryCode)}
        inputStyle={inputStyles}
        buttonStyle={dropDownStyles}
        dropdownStyle={dropDownStyles}
        containerStyle={containerStyles}
        country={"us"}
        value={value}
      />
    </>
  );
};

export default AppPhoneInput;
