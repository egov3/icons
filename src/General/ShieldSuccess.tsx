import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const ShieldSuccess = ({
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
      d="M9.26561 10.1209L8.06451 11.3231L11.3975 14.6566L16.123 9.93151L14.9219 8.72931L11.3975 12.2523L9.26561 10.1209Z"
      fill="black"
    />
    <path
      d="M12 3.07532L19 5.84662V12.06C18.9976 13.6394 18.5808 15.1904 17.7911 16.5582C17.0014 17.926 15.8666 19.0625 14.5 19.8542L12 21.2971L9.5 19.8537C8.13348 19.0621 6.99868 17.9256 6.209 16.5579C5.41932 15.1903 5.00244 13.6393 5 12.06V5.84662L12 3.07532ZM12 0.924316L3 4.48732V12.06C3.00293 13.9903 3.51243 15.8861 4.47759 17.5578C5.44275 19.2295 6.82976 20.6186 8.5 21.5863L12 23.6064L15.5 21.5859C17.1702 20.6183 18.5572 19.2292 19.5223 17.5576C20.4875 15.8859 20.997 13.9903 21 12.06V4.48732L12 0.924316Z"
      fill="black"
    />
  </svg>
);
