import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const LicensesFilled = ({
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
      d="M3 2H21V22H3V3.00029V2ZM5 4V20H19V4H5Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 9.5C8.5 7.56701 10.067 6 12 6C13.933 6 15.5 7.56701 15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2426 12.1213L9.12132 14.2426L8.76777 12.4749L7 12.1213L9.12132 10L11.2426 12.1213Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 12.1213L15.1213 14.2427L15.4749 12.4749L17.2426 12.1213L15.1213 10L13 12.1213Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16H16V18H8V16Z"
      fill="black"
    />
  </svg>
);
