import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const SocialRegistry1 = ({
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
      d="M22 2H13V3.00004V22H22V2ZM18.5 15V5.5H16.5V15H18.5ZM18.5 17.5C18.5 18.0523 18.0523 18.5 17.5 18.5C16.9477 18.5 16.5 18.0523 16.5 17.5C16.5 16.9477 16.9477 16.5 17.5 16.5C18.0523 16.5 18.5 16.9477 18.5 17.5Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2H2V3.00004V22H11V2ZM7.5 15L7.5 5.5H5.5L5.5 15H7.5ZM7.5 17.5C7.5 18.0523 7.05228 18.5 6.5 18.5C5.94772 18.5 5.5 18.0523 5.5 17.5C5.5 16.9477 5.94772 16.5 6.5 16.5C7.05228 16.5 7.5 16.9477 7.5 17.5Z"
      fill="black"
    />
  </svg>
);
