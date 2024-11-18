import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ForestFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.362 18.149L15.189 10.157H17.927L12 1L6.073 10.157H8.811L3.638 18.149H11V22H13V18.149H20.362Z"
      fill="black"
    />
  </svg>
);
