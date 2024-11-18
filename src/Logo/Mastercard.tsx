import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Mastercard = ({
  fill = iconBaseDefaults.fill,
  width = iconBaseDefaults.width,
  height = iconBaseDefaults.height,
}: React.SVGProps<SVGSVGElement> & {
  fill?: string;
  width?: string;
  height?: string;
}) => (
  <svg
    width="35"
    height={height}
    viewBox="0 0 35 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.5"
      y="0.5"
      width="33.5"
      height="23"
      rx="2"
      fill="white"
      stroke="#D9D9D9"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5714 17.5462C16.255 18.6506 14.5475 19.3174 12.6815 19.3174C8.51807 19.3174 5.14291 15.9979 5.14291 11.9031C5.14291 7.80826 8.51807 4.48877 12.6815 4.48877C14.5475 4.48877 16.2551 5.15551 17.5715 6.25997C18.8879 5.15552 20.5955 4.48879 22.4614 4.48879C26.6249 4.48879 30 7.80829 30 11.9031C30 15.9979 26.6249 19.3174 22.4614 19.3174C20.5955 19.3174 18.8878 18.6506 17.5714 17.5462Z"
      fill="#ED0006"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5714 17.5462C19.1923 16.1863 20.2202 14.1627 20.2202 11.9031C20.2202 9.64341 19.1923 7.61986 17.5714 6.25994C18.8878 5.1555 20.5954 4.48877 22.4614 4.48877C26.6248 4.48877 30 7.80826 30 11.9031C30 15.9979 26.6248 19.3174 22.4614 19.3174C20.5954 19.3174 18.8878 18.6506 17.5714 17.5462Z"
      fill="#F9A000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.5715 17.5462C19.1924 16.1863 20.2202 14.1627 20.2202 11.9031C20.2202 9.64347 19.1924 7.61993 17.5715 6.26001C15.9506 7.61993 14.9228 9.64347 14.9228 11.9031C14.9228 14.1627 15.9506 16.1863 17.5715 17.5462Z"
      fill="#FF5E00"
    />
  </svg>
);
