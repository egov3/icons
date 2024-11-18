import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const FolderOpenedFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 10L3 21H21L23 10H1ZM21 5H10.9584L8.9584 3H3V8H21V5Z"
      fill="black"
    />
  </svg>
);
