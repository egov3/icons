import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const СhevronLeft = ({
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
      d="M14.8181 21.051L5.76807 12L14.8181 2.94897L16.2321 4.36297L8.59606 12L16.2321 19.637L14.8181 21.051Z"
      fill="black"
    />
  </svg>
);
