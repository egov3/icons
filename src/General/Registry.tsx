import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Registry = ({
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
      d="M2 4V20H22V4H2ZM9 18H4V6H9V18ZM20 18H11V6H20V18ZM18 8H13V10H18V8ZM16 12H13V14H16V12Z"
      fill="black"
    />
  </svg>
);
