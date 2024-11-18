import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const TourismFilled = ({
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
      d="M15.7915 10.9861C14.2278 5.94839 11.7033 2.30309 9.76236 2.30309C9.63375 2.30295 9.50568 2.31976 9.38146 2.35309C7.40146 2.88359 6.90456 7.54619 8.14706 13.0348L15.7915 10.9861ZM17.7015 10.3932L17.7247 10.4681L21.7941 9.37809C21.114 7.46558 19.9227 5.77609 18.3496 4.49326C16.7766 3.21044 14.882 2.38338 12.8718 2.10199C14.9875 3.72829 16.6376 6.96589 17.7015 10.3932ZM15.1881 20.007L13.4913 13.673L11.5597 14.1906L13.0852 19.8852C9.93265 19.8661 6.82007 20.5907 4.00006 22H21.9443C19.8275 20.9421 17.5401 20.2673 15.1881 20.007ZM6.19646 13.476C5.41056 10.0048 5.21816 6.36029 6.22336 3.88749C4.62631 5.13698 3.40185 6.79988 2.68278 8.69585C1.9637 10.5918 1.77746 12.6485 2.14426 14.6428L6.21366 13.5528L6.19646 13.476Z"
      fill="black"
    />
  </svg>
);
