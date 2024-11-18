import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Add = ({
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
    <path d="M22 11H13V2H11V11H2V13H11V22H13V13H22V11Z" fill="black" />
  </svg>
);
