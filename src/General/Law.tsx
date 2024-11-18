import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Law = ({
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
      d="M7 2C6.20435 2 5.44129 2.31607 4.87868 2.87868C4.31607 3.44129 4 4.20435 4 5V19C4 19.7956 4.31607 20.5587 4.87868 21.1213C5.44129 21.6839 6.20435 22 7 22H20V2H7ZM18 20H7C6.73487 19.9997 6.48069 19.8943 6.29321 19.7068C6.10574 19.5193 6.00029 19.2651 6 19V7.8163C6.32031 7.93452 6.65859 7.99666 7 8H18V20ZM18 6H7C6.73478 6 6.48043 5.89464 6.29289 5.70711C6.10536 5.51957 6 5.26522 6 5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4H18V6ZM15 11H9V13H15V11Z"
      fill="black"
    />
  </svg>
);
