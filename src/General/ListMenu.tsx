import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const ListMenu = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 19.5858V21H16.4142L19.6365 17.7778L18.2222 16.3636L15 19.5858ZM21.0759 15.4191L20.5809 14.9241C20.5205 14.8637 20.4489 14.8158 20.37 14.7832C20.2911 14.7505 20.2066 14.7337 20.1213 14.7337C20.0359 14.7337 19.9514 14.7505 19.8725 14.7832C19.7936 14.8158 19.722 14.8637 19.6616 14.9241L19.0707 15.5151L20.4849 16.9293L21.0759 16.3383C21.1978 16.2164 21.2663 16.0511 21.2663 15.8787C21.2663 15.7063 21.1978 15.541 21.0759 15.4191ZM19 5H5V7H19V5ZM5 19H13V17H5V19ZM19 11H5V13H19V11Z"
      fill="black"
    />
  </svg>
);
