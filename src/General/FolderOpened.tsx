import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const FolderOpened = ({
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
      d="M21 9V5H10.9584L8.9584 3H3V9H1L3 21H21L23 9H21ZM4.6943 19L3.361 11H20.6391L19.3058 19H4.6943ZM5 5H8.13L10.13 7H19V9H5V5Z"
      fill="black"
    />
  </svg>
);
