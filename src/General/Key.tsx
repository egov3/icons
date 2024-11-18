import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Key = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6934 9C11.033 7.85615 10.0136 6.96218 8.79342 6.45673C7.57315 5.95127 6.2202 5.8626 4.9444 6.20445C3.6686 6.5463 2.54125 7.29957 1.7372 8.34743C0.933137 9.3953 0.497314 10.6792 0.497314 12C0.497314 13.3208 0.933137 14.6047 1.7372 15.6526C2.54125 16.7004 3.6686 17.4537 4.9444 17.7956C6.2202 18.1374 7.57315 18.0487 8.79342 17.5433C10.0136 17.0378 11.033 16.1439 11.6934 15H12.836L14.836 13.75L16.836 15L18.836 13.75L20.836 15L23.5027 13.3333V9H11.6934ZM21.7027 12.3357L20.836 12.8773L19.79 12.2236L18.836 11.6273L17.882 12.2236L16.836 12.8773L15.79 12.2236L14.836 11.6273L13.882 12.2236L12.3198 13.2H10.656L10.136 14.0977C9.67415 14.8989 8.96076 15.5252 8.10654 15.8795C7.25231 16.2338 6.30503 16.2963 5.41168 16.0572C4.51833 15.8181 3.72886 15.2909 3.16578 14.5573C2.60269 13.8237 2.29747 12.9247 2.29747 12C2.29747 11.0752 2.60269 10.1762 3.16578 9.44264C3.72886 8.70904 4.51833 8.1818 5.41168 7.94273C6.30503 7.70365 7.25231 7.76611 8.10654 8.1204C8.96076 8.4747 9.67415 9.10103 10.136 9.9022L10.656 10.8H21.7027V12.3357ZM5.50277 10.55C5.21599 10.55 4.93565 10.635 4.69719 10.7944C4.45874 10.9537 4.27289 11.1802 4.16314 11.4451C4.0534 11.7101 4.02468 12.0016 4.08063 12.2829C4.13658 12.5642 4.27468 12.8225 4.47747 13.0253C4.68025 13.2281 4.93862 13.3662 5.21989 13.4221C5.50116 13.4781 5.79271 13.4494 6.05766 13.3396C6.32261 13.2299 6.54907 13.044 6.7084 12.8056C6.86773 12.5671 6.95277 12.2868 6.95277 12C6.95277 11.6154 6.8 11.2466 6.52807 10.9747C6.25615 10.7028 5.88733 10.55 5.50277 10.55Z"
      fill="black"
    />
  </svg>
);
