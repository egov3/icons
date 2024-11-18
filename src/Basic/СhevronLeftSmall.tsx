import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const СhevronLeftSmall = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 7L15.1667 8.16667L11.3333 12L15.1667 15.8333L14 17L9 12L14 7Z"
      fill="black"
    />
  </svg>
);
