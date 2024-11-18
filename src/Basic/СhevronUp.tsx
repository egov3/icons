import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const СhevronUp = ({
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
      d="M19.637 16.2319L12 8.59594L4.36297 16.2319L2.94897 14.8179L12 5.76794L21.051 14.8179L19.637 16.2319Z"
      fill="black"
    />
  </svg>
);
