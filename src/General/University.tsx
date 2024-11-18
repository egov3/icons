import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const University = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6656 8.47236L20.4938 5.74527L11.6656 3L2.83738 5.74527L11.6656 8.47236ZM9.40396 5.73907L11.6656 5.03578L13.9272 5.73907L11.6656 6.4377L9.40396 5.73907Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0281 8.89002V5.96674H18.9208V8.89002H17.0281Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.3923 10.9006C7.3923 13.3307 9.3055 15.3007 11.6656 15.3007C14.0256 15.3007 15.9388 13.3307 15.9388 10.9006V9.73963V7.15231L14.0462 7.73697V10.9006C14.0462 12.2544 12.9804 13.3519 11.6656 13.3519C10.3508 13.3519 9.28496 12.2544 9.28496 10.9006V7.73697L7.3923 7.15231V9.73963V10.9006Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.66663 21H21.6666L20.9746 18.1683C20.4273 15.9289 18.2199 14.5133 15.7919 14.5133H14.0728C13.9126 14.5133 13.7993 14.4593 13.7436 14.4137C13.7257 14.399 13.7171 14.3889 13.7137 14.3841C13.7164 14.3898 13.7209 14.4032 13.7209 14.4252H11.8282C11.8282 15.747 13.0474 16.4622 14.0728 16.4622H15.7919C17.5928 16.4622 18.857 17.4894 19.1391 18.6438L19.2387 19.0511H4.09457L4.19411 18.6438C4.47634 17.489 5.7389 16.4622 7.53928 16.4622H9.25831C10.2837 16.4622 11.5029 15.747 11.5029 14.4252H9.61026C9.61026 14.4032 9.61476 14.3898 9.61741 14.3841C9.61401 14.3889 9.60548 14.399 9.58753 14.4137C9.53181 14.4593 9.41857 14.5133 9.25831 14.5133H7.53928C5.11067 14.5133 2.90582 15.9294 2.35868 18.1683L1.66663 21Z"
      fill="black"
    />
  </svg>
);
