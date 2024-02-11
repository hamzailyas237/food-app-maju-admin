import { Tag, Tooltip } from "@chakra-ui/react";
import React from "react";

const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Tag style={{ backgroundColor: "transparent" }} ref={ref} {...rest}>
    {children}
  </Tag>
));

const AppTooltip = ({ text, label }) => (
  <Tooltip
    hasArrow
    label={label}
    bg={"#00B4D8"}
    fontSize={"10px"}
    width={"150px"}
    borderRadius={"5px"}
  >
    <CustomCard>{text}</CustomCard>
  </Tooltip>
);
export default AppTooltip;
