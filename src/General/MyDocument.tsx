import React from "react";

export const MyDocument = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path d="M15 16V18H9V16H15Z" fill={props.fill ?? "black"} />
    <path
      d="M12.7813 9.59871C12.55 9.75462 12.2781 9.83784 12 9.83784C11.6272 9.83741 11.2697 9.68778 11.0061 9.42177C10.7425 9.15577 10.5942 8.79511 10.5938 8.41892C10.5938 8.13828 10.6762 7.86395 10.8307 7.63061C10.9853 7.39727 11.2049 7.2154 11.4618 7.10801C11.7188 7.00061 12.0016 6.97252 12.2744 7.02727C12.5471 7.08201 12.7977 7.21715 12.9944 7.41559C13.191 7.61403 13.325 7.86686 13.3792 8.1421C13.4335 8.41735 13.4057 8.70264 13.2992 8.96192C13.1928 9.22119 13.0125 9.4428 12.7813 9.59871Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M12 10.8208C13.0836 10.8208 14.1231 11.2545 14.8901 12.0268L15 12.1377V14H9V12.1377L9.10987 12.0268C9.87696 11.2545 10.9164 10.8208 12 10.8208Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 2H20V22H4V2ZM6 4V20H18V4H6Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
