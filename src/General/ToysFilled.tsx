import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ToysFilled = ({
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
      d="M21.8672 16.458C21.4863 16.7725 21.085 17.0723 20.6719 17.3516C20.2836 17.6147 19.8748 17.86 19.4587 18.0883L18.5079 15.9269C18.1729 15.1655 18 14.3427 18 13.5109V8H20.23C20.6063 7.99981 20.9694 7.86059 21.2493 7.60907C21.5293 7.35756 21.7065 7.01148 21.7469 6.6373C21.7733 6.26935 21.6711 5.90364 21.4577 5.60274C21.2442 5.30184 20.9329 5.08447 20.5769 4.9878L18 4.2192V2H17.5C16.5717 2 15.6815 2.36875 15.0251 3.02513C14.3687 3.6815 14 4.57174 14 5.5V9H6.86427C6.08792 9.00017 5.32839 9.22622 4.6783 9.6506C4.0282 10.075 3.51563 10.6793 3.20307 11.39L2.34078 13.35L4.17078 14.1547L5.03308 12.1947C5.22861 11.7644 5.57156 11.4183 5.99998 11.2187V13.5109C5.99996 14.3427 5.827 15.1655 5.49207 15.9269L4.54127 18.0883C4.12507 17.86 3.71627 17.6147 3.32708 17.3506C2.91497 17.0723 2.51368 16.7725 2.13278 16.458L0.859375 18.001C1.28938 18.3555 1.74317 18.6943 2.20697 19.0078C2.67077 19.3213 3.15618 19.6162 3.65138 19.8857C4.15038 20.1557 4.66498 20.4043 5.18258 20.623C5.70798 20.8447 6.24898 21.043 6.79388 21.213C7.34958 21.3858 7.91498 21.5304 8.47068 21.6437C9.04625 21.7616 9.62738 21.8506 10.2119 21.9103C10.8076 21.97 11.4092 22 12 22C12.5908 22 13.1924 21.97 13.79 21.91C14.3732 21.8503 14.953 21.7613 15.5273 21.6434C16.0941 21.528 16.6548 21.3842 17.2073 21.2127C17.7513 21.0427 18.2923 20.8445 18.8173 20.6227C19.3349 20.404 19.8495 20.1559 20.3485 19.8854C20.8437 19.6154 21.33 19.321 21.7919 19.0085C22.2567 18.694 22.7108 18.3552 23.1405 18.0007L21.8672 16.458ZM16.6143 19.3027C16.1211 19.4551 15.6211 19.584 15.127 19.6846C14.6211 19.7881 14.1035 19.8672 13.5889 19.9199C12.5329 20.0254 11.469 20.0254 10.4131 19.9199C9.89648 19.8672 9.37888 19.7881 8.87108 19.6846C8.37888 19.584 7.87888 19.4551 7.38668 19.3027C7.03268 19.1927 6.68458 19.0549 6.33718 18.9186L7.09548 17.1946C7.25179 16.8393 7.50813 16.5372 7.83322 16.325C8.15831 16.1129 8.5381 16 8.92628 16H15.0737C15.4618 16 15.8416 16.1129 16.1667 16.325C16.4918 16.5372 16.7482 16.8393 16.9045 17.1946L17.6628 18.9186C17.3157 19.055 16.9674 19.1927 16.6143 19.3027Z"
      fill="black"
    />
  </svg>
);
