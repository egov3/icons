import React from "react";

export const ChatFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <g clipPath="url(#clip0_1932_11191)">
      <mask
        id="mask0_1932_11191"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1932_11191)">
        <path
          d="M16 7.5V4.5C16 3.83696 15.7366 3.20107 15.2678 2.73223C14.7989 2.26339 14.163 2 13.5 2H4.5C3.83696 2 3.20107 2.26339 2.73223 2.73223C2.26339 3.20107 2 3.83696 2 4.5V14.0559L6.0559 10H13.5C14.163 10 14.7989 9.73661 15.2678 9.26777C15.7366 8.79893 16 8.16304 16 7.5ZM19.5 12H10.5C9.83696 12 9.20107 12.2634 8.73223 12.7322C8.26339 13.2011 8 13.837 8 14.5V17.5C8 18.163 8.26339 18.7989 8.73223 19.2678C9.20107 19.7366 9.83696 20 10.5 20H17.9441L22 24.0559V14.5C22 13.837 21.7366 13.2011 21.2678 12.7322C20.7989 12.2634 20.163 12 19.5 12Z"
          fill={props.fill ?? "black"}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1932_11191">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
