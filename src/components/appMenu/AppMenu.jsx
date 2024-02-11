import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { BsFilterSquareFill } from "react-icons/bs";

import classes from "./app-menu.module.css";

const AppMenu = ({ options, getOption }) => {
  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<BsFilterSquareFill size={30} />}
          variant="outline"
          _hover={"none"}
          _active={"none"}
          className={`${classes["menu-btn"]}`}
        />
        <MenuList className={`${classes["menu-list"]}`}>
          {options.map((option, i) => {
            return (
              <MenuItem
                key={i}
                className={`${classes["menu-item"]}`}
                onClick={() => getOption(option.replace(/\s+/g, "-"))} //replace spaces with -
              >
                {option}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default AppMenu;
