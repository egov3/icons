import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const PharmacyFilled = ({
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
      d="M6 1H18V6H6V1ZM6.00104 7H17.999L21 10.9875V23H3V10.9875L6.00104 7ZM11.2 11.6061V14.2532H8.55292V15.8532H11.2V18.5H12.8V15.8532H15.4467V14.2532H12.8V11.6061H11.2Z"
      fill="black"
    />
  </svg>
);
