import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Hourglass = ({
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
      d="M17 4V5.9562C16.9994 6.65192 16.7576 7.32591 16.3157 7.8633L13.9557 10.7286L12.9091 12L13.9561 13.2714L16.3161 16.1367C16.7578 16.6742 16.9995 17.3481 17 18.0438V20H7V18.0438C7.0006 17.3481 7.24244 16.6741 7.6843 16.1367L10.0443 13.2714L11.0909 12L10.0439 10.7286L7.6839 7.8633C7.24222 7.32583 7.00053 6.65187 7 5.9562V4H17ZM19 2H5V5.9562C4.99991 7.11584 5.40291 8.23946 6.14 9.1347L8.5 12L6.14 14.8653C5.40291 15.7605 4.99991 16.8842 5 18.0438V22H19V18.0438C19.0001 16.8842 18.5971 15.7605 17.86 14.8653L15.5 12L17.86 9.1347C18.5971 8.23946 19.0001 7.11584 19 5.9562V2Z"
      fill="black"
    />
  </svg>
);
