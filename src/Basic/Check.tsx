import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Check = ({
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
      d="M9.50003 18.399L1.29303 10.192L2.70703 8.77795L9.50003 15.571L21.293 3.77795L22.707 5.19195L9.50003 18.399Z"
      fill="black"
    />
  </svg>
);
