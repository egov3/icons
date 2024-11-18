import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const BurgerMenu = ({
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
    <path d="M5 5V7H19V5H5ZM5 13H19V11H5V13ZM5 19H19V17H5V19Z" fill="black" />
  </svg>
);
