import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const BankFolderFilled = ({
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
      d="M22 21V5H9.958L7.958 3H2V21H22ZM11 17H13V13.5H15V11.6471H9V13.5H11V17ZM15 9.5H9V10.902H15V9.5Z"
      fill="black"
    />
  </svg>
);
