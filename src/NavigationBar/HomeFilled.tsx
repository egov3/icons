import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const HomeFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.80383L3 8.00003V21H21V8.00003L12 2.80383ZM10 19V13H14V19H10Z"
      fill="black"
    />
  </svg>
);
