import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const СhevronLeft = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.8181 21.051L5.76807 12L14.8181 2.94897L16.2321 4.36297L8.59606 12L16.2321 19.637L14.8181 21.051Z"
      fill="black"
    />
  </svg>
);
