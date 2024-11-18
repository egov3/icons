import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Close = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.707 4.70697L19.293 3.29297L12 10.586L4.70697 3.29297L3.29297 4.70697L10.586 12L3.29297 19.293L4.70697 20.707L12 13.414L19.293 20.707L20.707 19.293L13.414 12L20.707 4.70697Z"
      fill="black"
    />
  </svg>
);
