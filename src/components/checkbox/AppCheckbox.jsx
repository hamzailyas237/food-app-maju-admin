import { Checkbox } from "@chakra-ui/react";

import React from "react";

const AppCheckbox = ({ styles, onChange, value }) => {
  return (
    <>
      <Checkbox
        value={value == "Indefinite Weeks" ? "" : value}
        onChange={onChange}
        size="lg"
        colorScheme={styles.color}
        style={styles}
      ></Checkbox>
    </>
  );
};

export default AppCheckbox;
