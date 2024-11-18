import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Copy = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7H4V21H16V19H6V7ZM8 3V17H20V3H8ZM18 15H10V5H18V15Z"
      fill="black"
    />
  </svg>
);
