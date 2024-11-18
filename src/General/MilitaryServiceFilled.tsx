import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const MilitaryServiceFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.4376 5H2V19H19.4376L23.4376 12L19.4376 5ZM14.1851 15.5938L11.6771 13.7715L9.169 15.5938L10.127 12.6454L7.619 10.8232H10.719L11.677 7.875L12.635 10.8232H15.735L13.2269 12.6454L14.1851 15.5938Z"
      fill="black"
    />
  </svg>
);
