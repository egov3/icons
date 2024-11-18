import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Medicine = ({
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
      d="M14 5V10H19V14H14V19H10V14H5V10H10V5H14ZM16 3H8V8H3V16H8V21H16V16H21V8H16V3Z"
      fill="black"
    />
  </svg>
);
