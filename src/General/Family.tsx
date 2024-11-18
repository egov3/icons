import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const Family = ({
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
      d="M17 5.5C17.3461 5.5 17.6845 5.39737 17.9723 5.20507C18.2601 5.01278 18.4844 4.73947 18.6168 4.4197C18.7493 4.09993 18.7839 3.74806 18.7164 3.40859C18.6489 3.06913 18.4822 2.75731 18.2375 2.51256C17.9927 2.26782 17.6809 2.10115 17.3414 2.03363C17.002 1.9661 16.6501 2.00076 16.3303 2.13321C16.0106 2.26566 15.7372 2.48997 15.545 2.77775C15.3527 3.06554 15.25 3.40388 15.25 3.75C15.25 4.21413 15.4344 4.65925 15.7626 4.98744C16.0908 5.31563 16.5359 5.5 17 5.5ZM7.00003 5.5C7.34614 5.5 7.68449 5.39737 7.97227 5.20507C8.26006 5.01278 8.48436 4.73947 8.61682 4.4197C8.74927 4.09993 8.78393 3.74806 8.7164 3.40859C8.64888 3.06913 8.48221 2.75731 8.23746 2.51256C7.99272 2.26782 7.6809 2.10115 7.34143 2.03363C7.00197 1.9661 6.6501 2.00076 6.33033 2.13321C6.01056 2.26566 5.73725 2.48997 5.54495 2.77775C5.35266 3.06554 5.25003 3.40388 5.25003 3.75C5.25003 4.21413 5.4344 4.65925 5.76259 4.98744C6.09078 5.31563 6.5359 5.5 7.00003 5.5ZM7.00003 7C6.31307 6.9981 5.63257 7.1325 4.99792 7.39542C4.36327 7.65834 3.78708 8.04456 3.30273 8.5317L3.00983 8.8247V16H5.65003V22H8.35003V16H10.99V8.8247L10.6971 8.5317C10.2128 8.04458 9.63664 7.65838 9.00203 7.39546C8.36741 7.13254 7.68695 6.99813 7.00003 7ZM8.99003 14H5.01003V9.6859C5.57818 9.24151 6.27872 9.00007 7.00003 9.00007C7.72133 9.00007 8.42188 9.24151 8.99003 9.6859V14ZM19.6025 8.19L19.4111 7.9985C18.7714 7.35945 17.9042 7.00049 17 7.00049C16.0958 7.00049 15.2286 7.35945 14.5889 7.9985L14.3975 8.19L11.8154 17H15.65V22H18.35V17H22.185L19.6025 8.19ZM14.4857 15L16.1639 9.2733C16.4065 9.09578 16.6994 9.00009 17 9.00009C17.3006 9.00009 17.5934 9.09578 17.836 9.2733L19.5143 15H14.4857Z"
      fill="black"
    />
  </svg>
);
