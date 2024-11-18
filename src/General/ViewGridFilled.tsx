import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ViewGridFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 11H11V3H3V11ZM3 21H11V13H3V21ZM13 3V11H21V3H13ZM13 21H21V13H13V21Z"
      fill="black"
    />
  </svg>
);
