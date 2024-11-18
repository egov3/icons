import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const PublicOrderFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 3V21H21V3H3ZM19 16H14.0208V16.0208C14.0153 16.5476 13.8022 17.051 13.4277 17.4216C13.0532 17.7922 12.5476 18 12.0208 18H12C11.4696 18 10.9609 17.7893 10.5858 17.4142C10.2107 17.0391 10 16.5304 10 16H5V14H19V16ZM14.0208 9V9.0208C14.0153 9.54762 13.8022 10.051 13.4277 10.4216C13.0532 10.7922 12.5476 11 12.0208 11H12C11.4696 11 10.9609 10.7893 10.5858 10.4142C10.2107 10.0391 10 9.53043 10 9H5V5H19V9H14.0208Z"
      fill="black"
    />
  </svg>
);
