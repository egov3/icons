import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ArrowUp = ({
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
      d="M2.80798 9.87901L4.22198 11.293L11 4.51501V23H13V4.51501L19.778 11.293L21.192 9.87901L12 0.687012L2.80798 9.87901Z"
      fill="black"
    />
  </svg>
);
