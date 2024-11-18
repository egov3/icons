import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Emergency = ({
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
      d="M12 5.5C12.3461 5.5 12.6845 5.39737 12.9722 5.20507C13.26 5.01278 13.4843 4.73947 13.6168 4.4197C13.7492 4.09993 13.7839 3.74806 13.7164 3.40859C13.6489 3.06913 13.4822 2.75731 13.2374 2.51256C12.9927 2.26782 12.6809 2.10115 12.3414 2.03363C12.0019 1.9661 11.6501 2.00076 11.3303 2.13321C11.0105 2.26566 10.7372 2.48997 10.5449 2.77775C10.3526 3.06554 10.25 3.40388 10.25 3.75C10.25 4.21413 10.4344 4.65925 10.7626 4.98744C11.0908 5.31563 11.5359 5.5 12 5.5ZM2 7V8C2 8.26522 2.10536 8.51957 2.29289 8.70711C2.48043 8.89464 2.73478 9 3 9H9V23H11V16H13V23H15V9H21C21.2652 9 21.5196 8.89464 21.7071 8.70711C21.8946 8.51957 22 8.26522 22 8V7H2ZM13 14H11V9H13V14Z"
      fill="black"
    />
  </svg>
);
