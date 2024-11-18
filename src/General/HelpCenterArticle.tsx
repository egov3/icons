import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const HelpCenterArticle = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17H11V7H1V17ZM3 9H9V15H3V9ZM14 7V9H23V7H14ZM14 13H23V11H14V13ZM14 17H23V15H14V17Z"
      fill="black"
    />
  </svg>
);
