import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ForestFilled = ({
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
      d="M20.362 18.149L15.189 10.157H17.927L12 1L6.073 10.157H8.811L3.638 18.149H11V22H13V18.149H20.362Z"
      fill="black"
    />
  </svg>
);
