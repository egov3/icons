import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Apostille = ({
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
      d="M2 4V20H22V4H2ZM20 18H4V6H20V18ZM17 14H12V16H17V14ZM10 14H7V16H10V14Z"
      fill="black"
    />
  </svg>
);
