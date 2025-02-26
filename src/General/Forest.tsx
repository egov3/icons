import React from "react";

export const Forest = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M20.69 18.1491L16.845 12.2083H19.2543L12 1L4.7458 12.2083H7.155L3.31 18.1491H11V22H13V18.1491H20.69ZM8.75 13.2407L10.6478 10.3083H8.2387L12 4.4968L15.7613 10.3083H13.3521L15.25 13.2407L17.1971 16.2491H6.8029L8.75 13.2407Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
