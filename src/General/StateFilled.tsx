import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const StateFilled = ({
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
    <path d="M7 10H4V17H7V10Z" fill="black" />
    <path d="M13.5 10H10.5V17H13.5V10Z" fill="black" />
    <path d="M22 19H2V22H22V19Z" fill="black" />
    <path d="M20 10H17V17H20V10Z" fill="black" />
    <path d="M12 1L2 6V8H22V6L12 1Z" fill="black" />
  </svg>
);
