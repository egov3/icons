import React from "react";

export const HomeOutline = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 2.80383L3 8.00003V21H21V8.00003L12 2.80383ZM13.1 19H10.9V14.9H13.1V19ZM19 19H15V13H9V19H5V9.15473L12 5.11323L19 9.15473V19Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
