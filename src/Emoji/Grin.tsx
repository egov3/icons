import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Grin = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM7.4583 9.1562C7.94731 9.1562 8.41629 9.35046 8.76207 9.69624C9.10785 10.042 9.3021 10.511 9.3021 11H5.6146C5.6146 10.511 5.80885 10.042 6.15461 9.69627C6.50036 9.3505 6.96932 9.15623 7.4583 9.1562ZM12 18C11.1153 17.9984 10.2562 17.7029 9.5577 17.1598C8.85924 16.6168 8.36104 15.857 8.1414 15H15.8586C15.639 15.857 15.1408 16.6168 14.4423 17.1598C13.7438 17.7029 12.8847 17.9984 12 18ZM14.6979 11C14.6961 10.7567 14.7425 10.5155 14.8343 10.2902C14.9262 10.065 15.0617 9.86012 15.2331 9.68747C15.4045 9.51481 15.6083 9.37778 15.8329 9.28427C16.0575 9.19076 16.2984 9.14262 16.5417 9.14262C16.7849 9.14262 17.0258 9.19076 17.2504 9.28427C17.475 9.37778 17.6788 9.51481 17.8502 9.68747C18.0216 9.86012 18.1571 10.065 18.249 10.2902C18.3408 10.5155 18.3872 10.7567 18.3854 11H14.6979Z"
      fill="black"
    />
  </svg>
);
