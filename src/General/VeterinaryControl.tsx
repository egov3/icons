import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const VeterinaryControl = (
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
      d="M10.9584 5L8.9584 3H2V21H22V5H10.9584ZM20 19H4V5H8.13L10.13 7H20V19ZM8.5529 13.8H11.2V16.4468H12.8V13.8H15.4467V12.2H12.8V9.5529H11.2V12.2H8.5529V13.8Z"
      fill="black"
    />
  </svg>
);
