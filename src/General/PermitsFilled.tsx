import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const PermitsFilled = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 2H21V22H3V3.00029V2ZM7.5 15.5H16.5V17.5H7.5V15.5ZM11 13.4142L16.4142 8.00003L15 6.58582L11 10.5858L9.00003 8.58582L7.58582 10L11 13.4142Z"
      fill="black"
    />
  </svg>
);
