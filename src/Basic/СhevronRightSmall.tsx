import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const СhevronRightSmall = ({
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
      d="M10.1667 17L9 15.8333L12.8333 12L9 8.16667L10.1667 7L15.1667 12L10.1667 17Z"
      fill="black"
    />
  </svg>
);
