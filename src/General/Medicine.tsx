import React from "react";

export const Medicine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M14 5V10H19V14H14V19H10V14H5V10H10V5H14ZM16 3H8V8H3V16H8V21H16V16H21V8H16V3Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
