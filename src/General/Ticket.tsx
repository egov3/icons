import React from "react";

export const Ticket = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M20 6V8.1265C19.1414 8.34835 18.3808 8.84919 17.8378 9.55034C17.2948 10.2515 17.0001 11.1132 17.0001 12C17.0001 12.8868 17.2948 13.7485 17.8378 14.4497C18.3808 15.1508 19.1414 15.6517 20 15.8735V18H4V15.8735C4.85863 15.6517 5.61922 15.1508 6.16223 14.4497C6.70524 13.7485 6.9999 12.8868 6.9999 12C6.9999 11.1132 6.70524 10.2515 6.16223 9.55034C5.61922 8.84919 4.85863 8.34835 4 8.1265V6H20ZM22 4H2V10H3C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14H2V20H22V14H21C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10H22V4Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M20 6V8.1265C19.1414 8.34835 18.3808 8.84919 17.8378 9.55034C17.2948 10.2515 17.0001 11.1132 17.0001 12C17.0001 12.8868 17.2948 13.7485 17.8378 14.4497C18.3808 15.1508 19.1414 15.6517 20 15.8735V18H4V15.8735C4.85863 15.6517 5.61922 15.1508 6.16223 14.4497C6.70524 13.7485 6.9999 12.8868 6.9999 12C6.9999 11.1132 6.70524 10.2515 6.16223 9.55034C5.61922 8.84919 4.85863 8.34835 4 8.1265V6H20ZM22 4H2V10H3C3.53043 10 4.03914 10.2107 4.41421 10.5858C4.78929 10.9609 5 11.4696 5 12C5 12.5304 4.78929 13.0391 4.41421 13.4142C4.03914 13.7893 3.53043 14 3 14H2V20H22V14H21C20.4696 14 19.9609 13.7893 19.5858 13.4142C19.2107 13.0391 19 12.5304 19 12C19 11.4696 19.2107 10.9609 19.5858 10.5858C19.9609 10.2107 20.4696 10 21 10H22V4Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
