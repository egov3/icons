import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Bag = ({
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
      d="M10 4H14V6H10V4ZM20 18C19.9997 18.2651 20 19 20 19C20 19 19.2651 18.9997 19 19H5C4.73487 18.9997 4 19 4 19C4 19 4.00029 18.2651 4 18V9C4.00029 8.73487 4 8 4 8C4 8 4.73487 8.00029 5 8H19C19.2651 8.00029 20 8 20 8C20 8 19.9997 8.73487 20 9V18ZM19 6H16V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V6H5C4.20435 6 2 6 2 6C2 6 2 8.20435 2 9V18C2 18.7956 2 21 2 21C2 21 4.20435 21 5 21H19C19.7956 21 22 21 22 21C22 21 22 18.7956 22 18V9C22 8.20435 22 6 22 6C22 6 19.7956 6 19 6Z"
      fill="black"
    />
    <path
      d="M9.2011 11.4209L11.333 13.5522L14.8574 10.0293L16.0585 11.2314L11.333 15.9565L8 12.623L9.2011 11.4209Z"
      fill="black"
    />
  </svg>
);
