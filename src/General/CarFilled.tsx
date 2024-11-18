import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const CarFilled = ({
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
      d="M23 17V12.87C23.0003 12.5017 22.899 12.1405 22.7072 11.8261C22.5154 11.5117 22.2405 11.2563 21.9129 11.0881C20.615 10.4427 19.1977 10.0723 17.75 10L15.0432 6.7518C14.6678 6.30128 14.1979 5.93882 13.6668 5.69009C13.1357 5.44137 12.5564 5.31246 11.97 5.3125H9.62C8.9512 5.31244 8.29079 5.46146 7.68682 5.74872C7.08285 6.03597 6.5505 6.45424 6.1285 6.9731L3.6667 10H2.8758C2.37831 10 1.90119 10.1976 1.54941 10.5494C1.19763 10.9012 1 11.3783 1 11.8758V16.5L3.0558 16.8246C3.18044 17.4964 3.53132 18.1053 4.05008 18.55C4.56884 18.9947 5.22421 19.2484 5.90717 19.2689C6.59014 19.2894 7.25954 19.0754 7.80403 18.6627C8.34853 18.2499 8.73529 17.6631 8.9 17H15.2809C15.4411 17.6482 15.8138 18.224 16.3395 18.6356C16.8652 19.0472 17.5136 19.2709 18.1812 19.2709C18.8489 19.2709 19.4973 19.0472 20.023 18.6356C20.5487 18.224 20.9214 17.6482 21.0816 17H23ZM7.6025 8.1719C7.84587 7.87156 8.15339 7.62951 8.50249 7.46349C8.8516 7.29748 9.23343 7.21172 9.62 7.2125H11.97C12.2779 7.21214 12.5821 7.27966 12.861 7.41026C13.1398 7.54086 13.3864 7.73132 13.5833 7.9681L15.2768 10H6.1158L7.6025 8.1719ZM6 17.5708C5.74288 17.5708 5.49154 17.4946 5.27776 17.3517C5.06397 17.2089 4.89735 17.0058 4.79896 16.7683C4.70056 16.5307 4.67482 16.2694 4.72498 16.0172C4.77514 15.765 4.89895 15.5334 5.08076 15.3516C5.26257 15.1698 5.49421 15.0459 5.74638 14.9958C5.99856 14.9456 6.25994 14.9714 6.49749 15.0698C6.73503 15.1682 6.93807 15.3348 7.08091 15.5486C7.22376 15.7623 7.3 16.0137 7.3 16.2708C7.2996 16.6155 7.16251 16.9459 6.9188 17.1896C6.67509 17.4333 6.34466 17.5704 6 17.5708ZM18.1816 17.5708C17.9245 17.5708 17.6731 17.4946 17.4594 17.3517C17.2456 17.2089 17.079 17.0058 16.9806 16.7683C16.8822 16.5307 16.8564 16.2694 16.9066 16.0172C16.9567 15.765 17.0806 15.5334 17.2624 15.3516C17.4442 15.1698 17.6758 15.0459 17.928 14.9958C18.1802 14.9456 18.4415 14.9714 18.6791 15.0698C18.9166 15.1682 19.1197 15.3348 19.2625 15.5486C19.4054 15.7623 19.4816 16.0137 19.4816 16.2708C19.4812 16.6155 19.3441 16.9459 19.1004 17.1896C18.8567 17.4333 18.5263 17.5704 18.1816 17.5708Z"
      fill="black"
    />
  </svg>
);
