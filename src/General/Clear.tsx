import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Clear = (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM8.99997 7.23244L7.2322 9.00021L10.2322 12.0002L7.2322 15.0002L8.99997 16.768L12 13.768L15 16.768L16.7677 15.0002L13.7677 12.0002L16.7677 9.00021L15 7.23244L12 10.2324L8.99997 7.23244Z"
      fill="black"
    />
  </svg>
);
