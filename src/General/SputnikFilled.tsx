import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const SputnikFilled = ({
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
      d="M12.833 9.7529L5.14062 17.4453L6.55472 18.8594L14.2471 11.167C13.6859 10.7949 13.2051 10.3141 12.833 9.7529ZM22 7C21.9985 5.6744 21.4712 4.40353 20.5338 3.46619C19.5965 2.52885 18.3256 2.00156 17 2C16.2708 2.00332 15.5513 2.16795 14.8931 2.4821L14.8867 2.4688L1.74512 8.5967L2.59082 10.4092L12.1089 5.9709C11.971 6.61771 11.964 7.2856 12.0884 7.93515C12.2127 8.58471 12.4659 9.20278 12.833 9.7529L16.293 6.2929L17.707 7.7069L14.2471 11.167C14.7973 11.534 15.4152 11.7871 16.0648 11.9115C16.7143 12.0359 17.3822 12.0289 18.029 11.8911L13.5907 21.4091L15.4032 22.2548L21.5312 9.1133L21.5181 9.1071C21.8321 8.44883 21.9966 7.7293 22 7Z"
      fill="black"
    />
  </svg>
);
