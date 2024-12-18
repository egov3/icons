import React from "react";

export const ViewGridFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M3 11H11V3H3V11ZM3 21H11V13H3V21ZM13 3V11H21V3H13ZM13 21H21V13H13V21Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
