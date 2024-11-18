import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const СhevronRight = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.182 21.051L7.76801 19.637L15.404 12L7.76801 4.36297L9.182 2.94897L18.232 12L9.182 21.051Z"
      fill="black"
    />
  </svg>
);
