import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ApostilleFilled = ({
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
      d="M2 4V20H22V4H2ZM10 17H7V15H10V17ZM17 17H12V15H17V17Z"
      fill="black"
    />
  </svg>
);
