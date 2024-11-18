import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const СhevronRight = ({
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
      d="M9.182 21.051L7.76801 19.637L15.404 12L7.76801 4.36297L9.182 2.94897L18.232 12L9.182 21.051Z"
      fill="black"
    />
  </svg>
);
