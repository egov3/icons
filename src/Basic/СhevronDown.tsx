import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const СhevronDown = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.2319L2.94897 9.18194L4.36297 7.76794L12 15.4039L19.637 7.76794L21.051 9.18194L12 18.2319Z"
      fill="black"
    />
  </svg>
);
