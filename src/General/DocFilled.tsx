import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const DocFilled = ({
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
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM13 14.95H8V13.05H13V14.95ZM16 10.95H8V9.05H16V10.95Z"
      fill="black"
    />
  </svg>
);
