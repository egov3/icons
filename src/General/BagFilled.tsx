import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const BagFilled = ({
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
      d="M16 6H22V21H2V6H8V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6ZM14 4H10V6H14V4ZM11.333 13.5522L9.2011 11.4209L8 12.623L11.333 15.9565L16.0585 11.2314L14.8574 10.0293L11.333 13.5522Z"
      fill="black"
    />
  </svg>
);
