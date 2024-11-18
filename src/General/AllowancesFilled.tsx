import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const AllowancesFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5V19H23V5H1ZM12 15.8C10.5833 14.85 8 12.4222 8 10.5222C8 9.24 8.5377 8.2 9.8875 8.2C10.3912 8.24433 10.8676 8.44814 11.2475 8.78182C11.6274 9.11549 11.891 9.56164 12 10.0554C12.109 9.56164 12.3726 9.11549 12.7525 8.78182C13.1324 8.44814 13.6088 8.24433 14.1125 8.2C15.4623 8.2 16 9.24 16 10.5222C16 12.4222 13.4167 14.85 12 15.8Z"
      fill="black"
    />
  </svg>
);
