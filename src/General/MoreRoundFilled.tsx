import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const MoreRoundFilled = (props: IIcon = iconBaseDefaults) => (
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
      d="M6.4443 3.6853C8.08879 2.58649 10.0222 2 12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7363 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 13.9778 21.4135 15.9112 20.3147 17.5557C19.2159 19.2002 17.6541 20.4819 15.8268 21.2388C13.9996 21.9957 11.9889 22.1937 10.0491 21.8079C8.10929 21.422 6.32746 20.4696 4.92894 19.0711C3.53041 17.6725 2.578 15.8907 2.19215 13.9509C1.8063 12.0111 2.00433 10.0004 2.76121 8.17317C3.51809 6.3459 4.79981 4.78412 6.4443 3.6853ZM5.17143 13.0593C5.46518 13.3531 5.8183 13.5 6.23078 13.5C6.64328 13.5 6.9964 13.3531 7.29014 13.0593C7.58389 12.7656 7.73076 12.4125 7.73076 12C7.73076 11.5875 7.58389 11.2344 7.29014 10.9406C6.9964 10.6469 6.64328 10.5 6.23078 10.5C5.8183 10.5 5.46518 10.6469 5.17143 10.9406C4.8777 11.2344 4.73083 11.5875 4.73083 12C4.73083 12.4125 4.8777 12.7656 5.17143 13.0593ZM12 13.5C11.5875 13.5 11.2344 13.3531 10.9407 13.0593C10.6469 12.7656 10.5 12.4125 10.5 12C10.5 11.5875 10.6469 11.2344 10.9407 10.9406C11.2344 10.6469 11.5875 10.5 12 10.5C12.4125 10.5 12.7656 10.6469 13.0594 10.9406C13.3531 11.2344 13.5 11.5875 13.5 12C13.5 12.4125 13.3531 12.7656 13.0594 13.0593C12.7656 13.3531 12.4125 13.5 12 13.5ZM16.7099 13.0593C17.0036 13.3531 17.3567 13.5 17.7692 13.5C18.1817 13.5 18.5348 13.3531 18.8286 13.0593C19.1223 12.7656 19.2692 12.4125 19.2692 12C19.2692 11.5875 19.1223 11.2344 18.8286 10.9406C18.5348 10.6469 18.1817 10.5 17.7692 10.5C17.3567 10.5 17.0036 10.6469 16.7099 10.9406C16.4161 11.2344 16.2693 11.5875 16.2693 12C16.2693 12.4125 16.4161 12.7656 16.7099 13.0593Z"
      fill="black"
    />
  </svg>
);
