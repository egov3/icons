import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const MyDocumentFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2H4V22H20V2ZM12.7813 9.59871C12.55 9.75462 12.2781 9.83784 12 9.83784C11.6272 9.83741 11.2697 9.68778 11.0061 9.42177C10.7425 9.15577 10.5942 8.79511 10.5938 8.41892C10.5938 8.13828 10.6762 7.86395 10.8307 7.63061C10.9853 7.39727 11.2049 7.2154 11.4618 7.10801C11.7188 7.00061 12.0016 6.97252 12.2744 7.02727C12.5471 7.08201 12.7977 7.21715 12.9944 7.41559C13.191 7.61403 13.325 7.86686 13.3792 8.1421C13.4335 8.41735 13.4057 8.70264 13.2992 8.96192C13.1928 9.22119 13.0125 9.4428 12.7813 9.59871ZM15 16V18H9V16H15ZM14.8901 12.0268C14.1231 11.2545 13.0836 10.8208 12 10.8208C10.9164 10.8208 9.87696 11.2545 9.10987 12.0268L9 12.1377V14H15V12.1377L14.8901 12.0268Z"
      fill="black"
    />
  </svg>
);
