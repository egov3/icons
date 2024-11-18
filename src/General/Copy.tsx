import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Copy = ({
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
      d="M6 7H4V21H16V19H6V7ZM8 3V17H20V3H8ZM18 15H10V5H18V15Z"
      fill="black"
    />
  </svg>
);
