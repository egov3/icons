import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const BurgerMenu = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 5V7H19V5H5ZM5 13H19V11H5V13ZM5 19H19V17H5V19Z" fill="black" />
  </svg>
);
