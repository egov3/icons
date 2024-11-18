import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ShareV1 = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 9.00004H15V11H18V20H6V11H9V9.00004H4V22H20V9.00004ZM11 16H13V3.91414L15.5 6.41414L16.9141 5.00004L12 0.0859375L7.0859 5.00004L8.5 6.41414L11 3.91414V16Z"
      fill="black"
    />
  </svg>
);
