import React from "react";

export const ClearAlternative = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M11.4 16L14 13.4L16.6 16L18 14.6L15.4 12L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4L12.6 12L10 14.6L11.4 16ZM3 12L7.35 5.85C7.53333 5.58333 7.77083 5.375 8.0625 5.225C8.35417 5.075 8.66667 5 9 5H19C19.55 5 20.0208 5.19583 20.4125 5.5875C20.8042 5.97917 21 6.45 21 7V17C21 17.55 20.8042 18.0208 20.4125 18.4125C20.0208 18.8042 19.55 19 19 19H9C8.66667 19 8.35417 18.925 8.0625 18.775C7.77083 18.625 7.53333 18.4167 7.35 18.15L3 12Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
