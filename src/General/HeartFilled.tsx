import React from "react";

export const HeartFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M16.6684 3C15.7326 3.04459 14.821 3.31166 14.0091 3.77905C13.1972 4.24644 12.5085 4.90068 12 5.6875C11.4915 4.90068 10.8028 4.24644 9.99089 3.77905C9.17899 3.31166 8.26736 3.04459 7.3316 3C3.9564 3 2 5.5992 2 8.8055C2 13.5555 8.4583 19.6251 12 22C15.5417 19.6251 22 13.5555 22 8.8055C22 5.5992 20.0436 3 16.6684 3Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
