import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const TruckFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 12L21.6654 8.3184C21.5254 7.93213 21.2698 7.59835 20.9334 7.36246C20.597 7.12657 20.1961 7.00001 19.7852 7H15V14H14V6C14 5.73478 13.8946 5.48043 13.7071 5.29289C13.5196 5.10536 13.2652 5 13 5H2C1.73478 5 1.48043 5.10536 1.29289 5.29289C1.10536 5.48043 1 5.73478 1 6V18H3.3953C3.55553 18.5752 3.89972 19.0822 4.37525 19.4434C4.85079 19.8046 5.43151 20.0001 6.02865 20.0001C6.62579 20.0001 7.20651 19.8046 7.68205 19.4434C8.15758 19.0822 8.50177 18.5752 8.662 18H16.0541C16.2144 18.5752 16.5586 19.0822 17.0341 19.4433C17.5096 19.8045 18.0904 20 18.6875 20C19.2846 20 19.8654 19.8045 20.3409 19.4433C20.8164 19.0822 21.1606 18.5752 21.3209 18H23V12ZM6.0286 18.3C5.82093 18.3 5.61792 18.2384 5.44525 18.123C5.27258 18.0077 5.138 17.8437 5.05853 17.6518C4.97905 17.46 4.95826 17.2488 4.99878 17.0452C5.03929 16.8415 5.13929 16.6544 5.28614 16.5075C5.43298 16.3607 5.62008 16.2607 5.82376 16.2202C6.02744 16.1797 6.23855 16.2005 6.43042 16.2799C6.62228 16.3594 6.78627 16.494 6.90164 16.6667C7.01702 16.8393 7.0786 17.0423 7.0786 17.25C7.07828 17.5284 6.96756 17.7953 6.77071 17.9921C6.57387 18.189 6.30698 18.2997 6.0286 18.3ZM16.8 8.8H19.7852C19.8263 8.80002 19.8663 8.81268 19.8999 8.83626C19.9336 8.85984 19.9591 8.8932 19.9731 8.9318L21.0854 12H16.8V8.8ZM18.6875 18.3C18.4798 18.3 18.2768 18.2384 18.1042 18.123C17.9315 18.0077 17.7969 17.8437 17.7174 17.6518C17.638 17.46 17.6172 17.2488 17.6577 17.0452C17.6982 16.8415 17.7982 16.6544 17.945 16.5075C18.0919 16.3607 18.279 16.2607 18.4827 16.2202C18.6863 16.1797 18.8975 16.2005 19.0893 16.2799C19.2812 16.3594 19.4452 16.494 19.5605 16.6667C19.6759 16.8393 19.7375 17.0423 19.7375 17.25C19.7372 17.5284 19.6265 17.7953 19.4296 17.9921C19.2328 18.189 18.9659 18.2997 18.6875 18.3Z"
      fill="black"
    />
  </svg>
);
