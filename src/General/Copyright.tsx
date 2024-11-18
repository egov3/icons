import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Copyright = ({
  fill = iconBaseDefaults.fill,
  width = iconBaseDefaults.width,
  height = iconBaseDefaults.height,
}: React.SVGProps<SVGSVGElement> & {
  fill?: string;
  width?: string;
  height?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C19.9976 14.121 19.154 16.1544 17.6542 17.6542C16.1544 19.154 14.121 19.9976 12 20ZM12.7177 7H11.3977C10.4966 7.00003 9.63235 7.35802 8.99516 7.99523C8.35797 8.63244 8 9.49667 8 10.3978V13.6021C8 14.5033 8.35798 15.3675 8.99519 16.0047C9.6324 16.642 10.4966 17 11.3978 17H12.7178C13.5883 17 14.4231 16.6541 15.0387 16.0386C15.6542 15.4231 16 14.5882 16 13.7177V13.6353H14V13.7177C13.9996 14.0577 13.8644 14.3836 13.624 14.624C13.3836 14.8644 13.0577 14.9996 12.7177 15H11.3977C11.0272 14.9994 10.672 14.8519 10.41 14.5899C10.148 14.3279 10.0006 13.9726 10 13.6021V10.3978C10.0004 10.0272 10.1478 9.67192 10.4099 9.40987C10.6719 9.14783 11.0272 9.00042 11.3978 9H12.7178C13.0578 9.0004 13.3837 9.13563 13.6241 9.37602C13.8644 9.61642 13.9996 9.94234 14 10.2823V10.3647H16V10.2823C16 9.41178 15.6542 8.57691 15.0386 7.96136C14.4231 7.34581 13.5882 7 12.7177 7Z"
      fill="black"
    />
  </svg>
);
