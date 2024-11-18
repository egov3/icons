import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ArrowLeft = ({
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
      d="M9.31433 7.87499L8.13599 6.69666L2.8335 12L8.13599 17.3033L9.31433 16.125L6.0235 12.8333H21.4277V11.1667H6.0235L9.31433 7.87499Z"
      fill="black"
    />
  </svg>
);
