import React from "react";

export const HousingRelationsFilled = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 2.80371L3 7.99991V20.9999H21V7.99991L12 2.80371ZM11.2 16.4348C10.1851 16.0152 9.09821 15.7973 8 15.7931V9.99991H8.2283C9.24391 10.0034 10.2506 10.1897 11.2002 10.5499L11.2 16.4348ZM16 15.7927C14.9018 15.7968 13.8149 16.0148 12.8 16.4344V10.5504C13.7495 10.1901 14.7561 10.0036 15.7717 9.99991H16V15.7927Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
