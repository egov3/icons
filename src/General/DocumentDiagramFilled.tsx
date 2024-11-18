import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const DocumentDiagramFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM9.6 16H8V12H9.6V16ZM12.8 16H11.2V8H12.8V16ZM16 16H14.4V10H16V16Z"
      fill="black"
    />
  </svg>
);
