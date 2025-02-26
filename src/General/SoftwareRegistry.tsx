import React from "react";

export const SoftwareRegistry = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M20 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V15C2 15.5304 2.21071 16.0391 2.58579 16.4142C2.96086 16.7893 3.46957 17 4 17H9.1V19.1H7V21H17V19.1H14.9V17H20C20.5304 17 21.0391 16.7893 21.4142 16.4142C21.7893 16.0391 22 15.5304 22 15V5C22 4.46957 21.7893 3.96086 21.4142 3.58579C21.0391 3.21071 20.5304 3 20 3ZM13 19.1H11V17H13V19.1ZM20 15H4V5H20V15Z"
      fill={props.fill ?? "black"}
    />
    <path d="M8 7H16V9H8V7Z" fill={props.fill ?? "black"} />
    <path d="M8 11H16V13H8V11Z" fill={props.fill ?? "black"} />
  </svg>
);
