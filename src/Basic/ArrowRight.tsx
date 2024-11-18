import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ArrowRight = ({
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
      d="M14.9468 16.125L16.1252 17.3033L21.4277 12L16.1252 6.69667L14.9468 7.875L18.2377 11.1667H2.8335V12.8333H18.2377L14.9468 16.125Z"
      fill="black"
    />
  </svg>
);
