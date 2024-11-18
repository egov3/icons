import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Request = (props: IIcon = iconBaseDefaults) => (
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
      d="M6.47709 18.7089C6.87221 18.026 7.74613 17.7927 8.42904 18.1878C9.47833 18.7949 10.6964 19.1429 12 19.1429C13.3036 19.1429 14.5217 18.7949 15.571 18.1878C16.2539 17.7927 17.1278 18.026 17.5229 18.7089C17.918 19.3918 17.6847 20.2657 17.0018 20.6608C15.5293 21.5128 13.8194 22 12 22C10.1806 22 8.47067 21.5128 6.99817 20.6608C6.31526 20.2657 6.08196 19.3918 6.47709 18.7089Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.29111 6.47709C5.97402 6.87221 6.20731 7.74613 5.81219 8.42904C5.20507 9.47833 4.85714 10.6964 4.85714 12C4.85714 13.3036 5.20507 14.5217 5.81219 15.571C6.20731 16.2539 5.97402 17.1278 5.29111 17.5229C4.6082 17.918 3.73428 17.6847 3.33916 17.0018C2.48718 15.5293 2 13.8194 2 12C2 10.1806 2.48718 8.47067 3.33916 6.99817C3.73428 6.31526 4.6082 6.08196 5.29111 6.47709Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7089 6.47709C19.3918 6.08196 20.2657 6.31526 20.6608 6.99816C21.5128 8.47067 22 10.1806 22 12C22 13.8194 21.5128 15.5293 20.6608 17.0018C20.2657 17.6847 19.3918 17.918 18.7089 17.5229C18.026 17.1278 17.7927 16.2539 18.1878 15.571C18.7949 14.5217 19.1429 13.3036 19.1429 12C19.1429 10.6964 18.7949 9.47833 18.1878 8.42904C17.7927 7.74613 18.026 6.87221 18.7089 6.47709Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.99816 3.33916C8.47067 2.48718 10.1806 2 12 2C13.8194 2 15.5293 2.48718 17.0018 3.33916C17.6847 3.73428 17.918 4.6082 17.5229 5.29111C17.1278 5.97402 16.2539 6.20731 15.571 5.81219C14.5217 5.20507 13.3036 4.85714 12 4.85714C10.6964 4.85714 9.47833 5.20507 8.42904 5.81219C7.74613 6.20731 6.87221 5.97402 6.47709 5.29111C6.08196 4.6082 6.31526 3.73428 6.99816 3.33916Z"
      fill="black"
    />
  </svg>
);
