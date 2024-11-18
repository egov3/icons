import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Medicine = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 5V10H19V14H14V19H10V14H5V10H10V5H14ZM16 3H8V8H3V16H8V21H16V16H21V8H16V3Z"
      fill="black"
    />
  </svg>
);
