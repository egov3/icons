import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const DocumentDiagramFilled = ({
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
      d="M15.4141 2H4V22H20V6.5859L15.4141 2ZM9.6 16H8V12H9.6V16ZM12.8 16H11.2V8H12.8V16ZM16 16H14.4V10H16V16Z"
      fill="black"
    />
  </svg>
);
