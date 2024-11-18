import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ServicesFilled = ({
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
      d="M19 3H5V5H19V3ZM3 7V21H21V7H3ZM13 16.95H8V15.05H13V16.95ZM16 12.95H8V11.05H16V12.95Z"
      fill="black"
    />
  </svg>
);
