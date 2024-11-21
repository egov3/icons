import React from "react";

export const MedicineHelp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 0.924316L3 4.48732V12.06C3.00293 13.9903 3.51243 15.8861 4.47759 17.5578C5.44275 19.2295 6.82976 20.6186 8.5 21.5863L12 23.6064L15.5 21.5859C17.1702 20.6182 18.5572 19.2292 19.5223 17.5576C20.4875 15.8859 20.997 13.9903 21 12.06V4.48732L12 0.924316ZM19 12.06C18.9976 13.6394 18.5808 15.1904 17.7911 16.5582C17.0014 17.9259 15.8666 19.0625 14.5 19.8542L12 21.2971L9.5 19.8537C8.13349 19.062 6.99869 17.9256 6.20901 16.5579C5.41934 15.1902 5.00245 13.6393 5 12.06V5.84662L12 3.07532L19 5.84662V12.06ZM11.2 7.55292V10.2H8.5529V11.8H11.2V14.4468H12.8V11.8H15.4467V10.2H12.8V7.55292H11.2Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
