import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const CustomsFilled = ({
  fill = iconBaseDefaults.fill,
  width = iconBaseDefaults.width,
  height = iconBaseDefaults.height,
}: React.SVGProps<SVGSVGElement> & {
  fill?: string;
  width?: string;
  height?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 11V5C9 3 7.65414 3 6.5 3C4 3 3 4.61496 3 6.6V19H2V21H11.375V19H10V11Z"
      fill="black"
    />
    <path d="M10 5H13.5L11.5 11H10V5Z" fill="black" />
    <path d="M22 11L18.5 11L20.5 5L22 5V11Z" fill="black" />
    <path d="M16.5 11L13.5 11L15.5 5L18.5 5L16.5 11Z" fill="black" />
  </svg>
);
