import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const HomeOutline = (
  iconBaseDefaults: React.SVGProps<SVGSVGElement> & IIcon
) => (
  <svg
    width={iconBaseDefaults.width}
    height={iconBaseDefaults.height}
    viewBox="0 0 24 24"
    fill={iconBaseDefaults.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.80383L3 8.00003V21H21V8.00003L12 2.80383ZM13.1 19H10.9V14.9H13.1V19ZM19 19H15V13H9V19H5V9.15473L12 5.11323L19 9.15473V19Z"
      fill="black"
    />
  </svg>
);
