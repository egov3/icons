import React from "react";

export const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M9.50003 18.399L1.29303 10.192L2.70703 8.77795L9.50003 15.571L21.293 3.77795L22.707 5.19195L9.50003 18.399Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
