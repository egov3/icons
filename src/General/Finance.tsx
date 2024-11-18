import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Finance = ({
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
      d="M3 3V13H21V3H3ZM19 11H5V5H19V11ZM12 9.75C12.3461 9.75 12.6845 9.64736 12.9722 9.45507C13.26 9.26278 13.4843 8.98947 13.6168 8.6697C13.7492 8.34993 13.7839 7.99806 13.7164 7.65859C13.6489 7.31913 13.4822 7.00731 13.2374 6.76256C12.9927 6.51782 12.6809 6.35115 12.3414 6.28363C12.0019 6.2161 11.6501 6.25076 11.3303 6.38321C11.0105 6.51566 10.7372 6.73997 10.5449 7.02775C10.3526 7.31554 10.25 7.65388 10.25 8C10.25 8.46413 10.4344 8.90925 10.7626 9.23744C11.0908 9.56563 11.5359 9.75 12 9.75ZM3 17H21V15H3V17ZM3 21H21V19H3V21Z"
      fill="black"
    />
  </svg>
);
