import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Phone = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.5 2H8.5C7.83696 2 7.20107 2.26339 6.73223 2.73223C6.26339 3.20107 6 3.83696 6 4.5V19.5C6 20.163 6.26339 20.7989 6.73223 21.2678C7.20107 21.7366 7.83696 22 8.5 22H15.5C16.163 22 16.7989 21.7366 17.2678 21.2678C17.7366 20.7989 18 20.163 18 19.5V4.5C18 3.83696 17.7366 3.20107 17.2678 2.73223C16.7989 2.26339 16.163 2 15.5 2ZM16 19.5C15.9998 19.6326 15.9471 19.7596 15.8534 19.8534C15.7596 19.9471 15.6326 19.9998 15.5 20H8.5C8.36744 19.9998 8.24036 19.9471 8.14662 19.8534C8.05289 19.7596 8.00016 19.6326 8 19.5V4.5C8.00016 4.36744 8.05289 4.24036 8.14662 4.14662C8.24036 4.05289 8.36744 4.00016 8.5 4H15.5C15.6326 4.00016 15.7596 4.05289 15.8534 4.14662C15.9471 4.24036 15.9998 4.36744 16 4.5V19.5ZM12 17C11.8022 17 11.6089 17.0586 11.4444 17.1685C11.28 17.2784 11.1518 17.4346 11.0761 17.6173C11.0004 17.8 10.9806 18.0011 11.0192 18.1951C11.0578 18.3891 11.153 18.5673 11.2929 18.7071C11.4327 18.847 11.6109 18.9422 11.8049 18.9808C11.9989 19.0194 12.2 18.9996 12.3827 18.9239C12.5654 18.8482 12.7216 18.72 12.8315 18.5556C12.9414 18.3911 13 18.1978 13 18C13 17.7348 12.8946 17.4804 12.7071 17.2929C12.5196 17.1054 12.2652 17 12 17Z"
      fill="black"
    />
  </svg>
);
