import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const FolderOpenedFilled = ({
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
      d="M1 10L3 21H21L23 10H1ZM21 5H10.9584L8.9584 3H3V8H21V5Z"
      fill="black"
    />
  </svg>
);
