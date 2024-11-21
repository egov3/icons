import React from "react";

export const RegulationFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M13 11.9231V3H11V11.9231C10.347 12.1308 9.77698 12.5409 9.37249 13.0941C8.96801 13.6472 8.75 14.3147 8.75 15C8.75 15.6852 8.96801 16.3527 9.37249 16.9058C9.77698 17.459 10.347 17.8691 11 18.0768V21H13V18.0768C13.653 17.8691 14.2229 17.459 14.6274 16.9058C15.0319 16.3527 15.2499 15.6852 15.2499 15C15.2499 14.3147 15.0319 13.6472 14.6274 13.0941C14.2229 12.5409 13.653 12.1308 13 11.9231ZM20 5.9231V3H18V5.9231C17.347 6.13084 16.777 6.54095 16.3725 7.09408C15.968 7.64722 15.75 8.3147 15.75 8.99995C15.75 9.6852 15.968 10.3527 16.3725 10.9058C16.777 11.459 17.347 11.8691 18 12.0768V21H20V12.0768C20.653 11.8691 21.2229 11.459 21.6274 10.9058C22.0319 10.3527 22.2499 9.6852 22.2499 8.99995C22.2499 8.3147 22.0319 7.64722 21.6274 7.09408C21.2229 6.54095 20.653 6.13084 20 5.9231ZM5.99995 5.9231V3H3.99995V5.9231C3.34695 6.13084 2.77698 6.54095 2.37249 7.09408C1.96801 7.64722 1.75 8.3147 1.75 8.99995C1.75 9.6852 1.96801 10.3527 2.37249 10.9058C2.77698 11.459 3.34695 11.8691 3.99995 12.0768V21H5.99995V12.0768C6.65295 11.8691 7.22293 11.459 7.62741 10.9058C8.03189 10.3527 8.2499 9.6852 8.2499 8.99995C8.2499 8.3147 8.03189 7.64722 7.62741 7.09408C7.22293 6.54095 6.65295 6.13084 5.99995 5.9231Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
