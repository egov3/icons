import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const СhevronDownSmall = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.08334 10.0833L8.25001 8.91667L12.0833 12.75L15.9167 8.91667L17.0833 10.0833L12.0833 15.0833L7.08334 10.0833Z"
      fill="black"
    />
  </svg>
);
