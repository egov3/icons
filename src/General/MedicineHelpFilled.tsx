import React from "react";

export const MedicineHelpFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 0.924316L3 4.48732V12.06C3.00293 13.9903 3.51243 15.8861 4.47759 17.5578C5.44275 19.2295 6.82976 20.6186 8.5 21.5863L12 23.6064L15.5 21.5859C17.1702 20.6182 18.5572 19.2292 19.5223 17.5576C20.4875 15.8859 20.997 13.9903 21 12.06V4.48732L12 0.924316ZM15.4471 11.8H12.8V14.4468H11.2V11.8H8.5529V10.2H11.2V7.55292H12.8V10.2H15.4467L15.4471 11.8Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
