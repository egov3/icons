import React from "react";

export const ViewList = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M3 3V21H21V3H3ZM19 19H5V13H19V19ZM5 11V5H19V11H5Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
