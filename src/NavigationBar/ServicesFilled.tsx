import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ServicesFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5V5H19V3ZM3 7V21H21V7H3ZM13 16.95H8V15.05H13V16.95ZM16 12.95H8V11.05H16V12.95Z"
      fill="black"
    />
  </svg>
);
