import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Apostille = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4V20H22V4H2ZM20 18H4V6H20V18ZM17 14H12V16H17V14ZM10 14H7V16H10V14Z"
      fill="black"
    />
  </svg>
);
