import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const AttachFileAdd = ({
  fill = iconBaseDefaults.fill,
  width = iconBaseDefaults.width,
  height = iconBaseDefaults.height,
}: React.SVGProps<SVGSVGElement> & {
  fill?: string;
  width?: string;
  height?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
  >
    <path
      d="M16.1731 11.1923V6.38463H17.6731V11.1923H16.1731ZM10.9039 17.3711C10.4616 17.198 10.101 16.9131 9.82214 16.5163C9.5433 16.1195 9.40389 15.6685 9.40389 15.1634V6.38463H10.9039V17.3711ZM11.8552 21.5C10.2312 21.5 8.8526 20.93 7.71926 19.7901C6.58595 18.6501 6.01929 17.2682 6.01929 15.6442V6.65383C6.01929 5.49999 6.41992 4.51923 7.22119 3.71155C8.02247 2.90385 9.00003 2.5 10.1539 2.5C11.3077 2.5 12.2853 2.90385 13.0865 3.71155C13.8878 4.51923 14.2885 5.49999 14.2885 6.65383V14H12.7885V6.64423C12.7782 5.90576 12.5218 5.28043 12.0191 4.76825C11.5164 4.25607 10.8947 3.99998 10.1539 3.99998C9.41618 3.99998 8.79265 4.25767 8.28329 4.77305C7.77392 5.28843 7.51924 5.91536 7.51924 6.65383V15.6442C7.50899 16.8532 7.92694 17.8814 8.77309 18.7288C9.61925 19.5763 10.6468 20 11.8558 20C12.2493 20 12.6231 19.9522 12.9773 19.8567C13.3315 19.7612 13.666 19.6179 13.9808 19.4269V21.0942C13.65 21.2275 13.3068 21.3285 12.951 21.3971C12.5952 21.4657 12.23 21.5 11.8552 21.5ZM16.1731 20.5V17.6923H13.3654V16.1923H16.1731V13.3846H17.6731V16.1923H20.4807V17.6923H17.6731V20.5H16.1731Z"
      fill="#1C1B1F"
    />
  </svg>
);
