import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const RealEstate = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.80371L3 7.99991V20.9999H21V7.99991L12 2.80371ZM19 18.9999H5V9.15461L12 5.11311L19 9.15461V18.9999Z"
      fill="black"
    />
    <path
      d="M13 17H11V13.5H9V11.6471H15V13.5H13V17ZM9 9.5H15V10.902H9V9.5Z"
      fill="black"
    />
  </svg>
);
