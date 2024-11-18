import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const RealEstateFilled = (
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
      d="M3 7.99991L12 2.80371L21 7.99991V20.9999H3V7.99991ZM11 13.5V17H13V13.5H15V11.6471H9V13.5H11ZM15 10.902V9.5H9V10.902H15Z"
      fill="black"
    />
  </svg>
);
