import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Edit = ({
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
      d="M20.5859 4.58593L19.4141 3.41413C18.8512 2.85222 18.0884 2.53662 17.293 2.53662C16.4976 2.53662 15.7348 2.85222 15.1719 3.41413L3 15.5859V21H8.4141L20.5859 8.82813C21.1478 8.26524 21.4634 7.50238 21.4634 6.70703C21.4634 5.91167 21.1478 5.14882 20.5859 4.58593ZM7.5856 19H5V16.4144L14 7.41443L16.5858 10L7.5856 19ZM19.1718 7.41393L18 8.58583L15.4142 6.00003L16.5861 4.82813C16.774 4.64135 17.0281 4.53651 17.293 4.53651C17.5579 4.53651 17.812 4.64135 17.9999 4.82813L19.172 6.00003C19.3587 6.18786 19.4635 6.44194 19.4635 6.70678C19.4635 6.97162 19.3585 7.2261 19.1718 7.41393Z"
      fill="black"
    />
  </svg>
);
