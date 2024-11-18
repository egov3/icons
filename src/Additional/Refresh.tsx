import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Refresh = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 9.99998V4.34308L19.0356 6.30748L18.3638 5.63618C17.5302 4.7907 16.5376 4.11849 15.4432 3.65829C14.3487 3.19809 13.174 2.95899 11.9867 2.95477C10.7994 2.95055 9.62307 3.18128 8.52535 3.63368C7.42764 4.08609 6.43029 4.75121 5.59075 5.59075C4.75121 6.43029 4.08609 7.42764 3.63368 8.52535C3.18128 9.62307 2.95055 10.7994 2.95477 11.9867C2.95899 13.174 3.19809 14.3487 3.65829 15.4432C4.11849 16.5376 4.7907 17.5302 5.63618 18.3638C6.83406 19.5627 8.34622 20.3988 9.9985 20.7758C11.6508 21.1529 13.376 21.0555 14.9753 20.495C16.5747 19.9345 17.9832 18.9335 19.0386 17.6075C20.094 16.2815 20.7534 14.6843 20.9408 13H18.9208C18.6935 14.5577 17.9472 15.9932 16.8025 17.0739C15.6579 18.1547 14.182 18.8175 12.6138 18.9551C11.0456 19.0927 9.47688 18.697 8.16156 17.832C6.84624 16.9671 5.86134 15.6835 5.3663 14.1892C4.87125 12.6948 4.89505 11.0771 5.43383 9.59792C5.97262 8.11876 6.99485 6.86473 8.33504 6.03884C9.67524 5.21296 11.2549 4.86356 12.8184 5.04721C14.3819 5.23086 15.8377 5.93681 16.95 7.05078L17.6216 7.72178L15.3431 9.99998H21Z"
      fill="black"
    />
  </svg>
);
