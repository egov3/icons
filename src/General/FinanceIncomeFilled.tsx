import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const FinanceIncomeFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.0416 4H13V1H11V4H8.9584L12 7.0416L15.0416 4ZM2 9V21H22V9H2ZM12 18C11.4067 18 10.8266 17.8241 10.3333 17.4944C9.83994 17.1648 9.45542 16.6962 9.22836 16.1481C9.0013 15.5999 8.94189 14.9967 9.05764 14.4147C9.1734 13.8328 9.45912 13.2982 9.87868 12.8787C10.2982 12.4591 10.8328 12.1734 11.4147 12.0576C11.9967 11.9419 12.5999 12.0013 13.1481 12.2284C13.6962 12.4554 14.1648 12.8399 14.4944 13.3333C14.8241 13.8266 15 14.4067 15 15C15 15.7956 14.6839 16.5587 14.1213 17.1213C13.5587 17.6839 12.7956 18 12 18Z"
      fill="black"
    />
  </svg>
);
