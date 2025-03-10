import React from "react";

export const Allowances = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M1 5V19H23V5H1ZM21 17H3V7H21V17ZM12 15.25C13.2116 14.4375 15.421 12.3611 15.421 10.7361C15.421 9.6392 14.961 8.75 13.8067 8.75C13.3759 8.78794 12.9685 8.96227 12.6435 9.24766C12.3186 9.53304 12.0932 9.91461 12 10.3369C11.9068 9.91461 11.6814 9.53304 11.3565 9.24766C11.0315 8.96227 10.6241 8.78794 10.1933 8.75C9.0388 8.75 8.579 9.6392 8.579 10.7361C8.579 12.3611 10.7884 14.4375 12 15.25Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
