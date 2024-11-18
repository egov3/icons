import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Pharmacy = (
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
      d="M6 1H18V6H6V1ZM8 3V4H16V3H8Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.00118 7H18.0146L21 11.1796V23H2.99999L2.99997 11.7084L6.00118 7ZM7.0981 9L4.99999 12.2916V21H19V11.8205L16.9854 9H7.0981Z"
      fill="black"
    />
    <path
      d="M11.2 14.2532V11.6061H12.8V14.2532H15.4467V15.8532H12.8V18.5H11.2V15.8532H8.55292V14.2532H11.2Z"
      fill="black"
    />
  </svg>
);
