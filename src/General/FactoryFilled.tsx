import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const FactoryFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 1H1V23H23V4.38197L15 8.38197V4.38197L7 8.38197V1ZM11 13H5V19H11V13ZM19 13H13V19H19V13Z"
      fill="black"
    />
  </svg>
);
