import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Doc = ({
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
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM18 20H6V4H14.5856L18 7.4144V20ZM8 14.95H13V13.05H8V14.95ZM8 10.95H16V9.05H8V10.95Z"
      fill="black"
    />
  </svg>
);
