import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";

export const HousingRelations = ({
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
      d="M12 2.80371L3 7.99991V20.9999H21V7.99991L12 2.80371ZM19 18.9999H5V9.15461L12 5.11311L19 9.15461V18.9999ZM11.6233 10.7099C10.5527 10.2416 9.39682 9.9999 8.2283 9.99991H8V15.7927C9.315 15.7927 10.6119 16.0989 11.7881 16.687L12 16.7931L12.2113 16.6874C13.3876 16.0992 14.6848 15.793 16 15.7931V9.99991H15.7717C14.6031 9.99984 13.4472 10.2416 12.3766 10.7099L12 10.8749L11.6233 10.7099ZM12.6414 12.3406L13.018 12.1758C13.4619 11.9812 13.9251 11.8342 14.4 11.7373V14.3222C13.5742 14.4556 12.7681 14.6908 12 15.0222C11.2319 14.6909 10.4258 14.4558 9.6 14.3222V11.7373C10.0748 11.8342 10.5381 11.9813 10.9819 12.1759L11.3587 12.3407L12 12.6213L12.6414 12.3406Z"
      fill="black"
    />
  </svg>
);
