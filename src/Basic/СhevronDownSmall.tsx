import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const СhevronDownSmall = ({
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
      d="M7.08334 10.0833L8.25001 8.91667L12.0833 12.75L15.9167 8.91667L17.0833 10.0833L12.0833 15.0833L7.08334 10.0833Z"
      fill="black"
    />
  </svg>
);
