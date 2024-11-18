import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const RegistryFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 20H9V4H2V20ZM11 4V20H22V4H11ZM17 14H14V12H17V14ZM19 10H14V8H19V10Z"
      fill="black"
    />
  </svg>
);
