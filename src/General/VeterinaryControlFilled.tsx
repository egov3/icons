import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const VeterinaryControlFilled = (
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
      d="M9.9584 5L7.9584 3H2V21H22V5H9.9584ZM15.4471 13.8H12.8V16.4468H11.2V13.8H8.5529V12.2H11.2V9.5529H12.8V12.2H15.4467L15.4471 13.8Z"
      fill="black"
    />
  </svg>
);
