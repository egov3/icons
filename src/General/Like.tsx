import React from "react";

export const Like = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M4 21H7V8.99998H4V21ZM19.5454 8.99998H13.9092L15.5223 3.35098C15.6295 2.97564 15.5902 2.57358 15.4123 2.22612C15.2344 1.87865 14.9312 1.61171 14.564 1.47928L13.376 1.05078L9 9.15328V21H18.2163L18.4963 20.7025C20.4723 18.5766 21.5628 15.7769 21.5451 12.8746V11C21.5451 10.4696 21.3344 9.96094 20.9594 9.58587C20.5844 9.21081 20.0758 9.00006 19.5454 8.99998Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
