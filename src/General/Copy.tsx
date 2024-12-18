import React from "react";

export const Copy = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M6 7H4V21H16V19H6V7ZM8 3V17H20V3H8ZM18 15H10V5H18V15Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
