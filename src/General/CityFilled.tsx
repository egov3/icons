import React from "react";

export const CityFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M16 7V2H8V12.8557L5 11.1236L2 12.8557V21H22V7H16ZM6 17H4V15H6V17ZM13 17H11V15H13V17ZM13 12H11V10H13V12ZM13 7H11V5H13V7ZM20 17H18V15H20V17ZM20 12H18V10H20V12Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
