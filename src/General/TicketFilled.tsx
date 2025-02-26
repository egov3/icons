import React from "react";

export const TicketFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M19.5 12C19.5 11.337 19.7634 10.7011 20.2322 10.2322C20.7011 9.76339 21.337 9.5 22 9.5V4H2V9.5C2.66304 9.5 3.29893 9.76339 3.76777 10.2322C4.23661 10.7011 4.5 11.337 4.5 12C4.5 12.663 4.23661 13.2989 3.76777 13.7678C3.29893 14.2366 2.66304 14.5 2 14.5V20H22V14.5C21.337 14.5 20.7011 14.2366 20.2322 13.7678C19.7634 13.2989 19.5 12.663 19.5 12Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
