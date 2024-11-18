import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ViewList = ({
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
    <path d="M3 3V21H21V3H3ZM19 19H5V13H19V19ZM5 11V5H19V11H5Z" fill="black" />
  </svg>
);
