import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ViewListFilled = ({
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
    <path d="M3 21H21V13H3V21ZM3 3V11H21V3H3Z" fill="black" />
  </svg>
);
