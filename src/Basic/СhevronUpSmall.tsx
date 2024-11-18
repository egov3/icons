import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const СhevronUpSmall = ({
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
      d="M17.0833 13.9167L15.9167 15.0833L12.0833 11.25L8.25001 15.0833L7.08334 13.9167L12.0833 8.91667L17.0833 13.9167Z"
      fill="black"
    />
  </svg>
);
