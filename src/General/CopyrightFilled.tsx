import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const CopyrightFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM16 10.3647H14V10.2823C13.9996 9.94233 13.8644 9.61638 13.624 9.37599C13.3836 9.13559 13.0577 9.00037 12.7177 9H11.3977C11.0271 9.00045 10.6719 9.14787 10.4098 9.40991C10.1478 9.67195 10.0004 10.0272 10 10.3978V13.6021C10.0006 13.9727 10.148 14.3279 10.41 14.5899C10.672 14.8519 11.0272 14.9994 11.3978 15H12.7178C13.0578 14.9996 13.3837 14.8643 13.624 14.6239C13.8644 14.3836 13.9996 14.0576 14 13.7177V13.6353H16V13.7177C16 14.5882 15.6542 15.4231 15.0386 16.0386C14.4231 16.6542 13.5882 17 12.7177 17H11.3977C10.4966 16.9999 9.63234 16.6419 8.99516 16.0047C8.35797 15.3675 8 14.5032 8 13.6021V10.3978C8 9.49665 8.35799 8.6324 8.9952 7.99519C9.63241 7.35798 10.4967 7 11.3978 7H12.7178C13.5883 7.00003 14.4231 7.34585 15.0387 7.9614C15.6542 8.57695 16 9.4118 16 10.2823V10.3647Z"
      fill="black"
    />
  </svg>
);
