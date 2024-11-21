import React from "react";

export const ShieldWarninng = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12.95 8.5L12.5907 12.5H11.4093L11.05 8.5H12.95Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M11.4907 14.3472C11.6415 14.2465 11.8187 14.1927 12 14.1927C12.2431 14.1927 12.4763 14.2893 12.6482 14.4612C12.8201 14.6331 12.9167 14.8663 12.9167 15.1094C12.9167 15.2907 12.8629 15.4679 12.7622 15.6187C12.6615 15.7694 12.5183 15.8869 12.3508 15.9563C12.1833 16.0257 11.999 16.0439 11.8212 16.0085C11.6433 15.9731 11.48 15.8858 11.3518 15.7576C11.2236 15.6294 11.1363 15.4661 11.1009 15.2882C11.0655 15.1104 11.0837 14.9261 11.1531 14.7586C11.2225 14.5911 11.34 14.4479 11.4907 14.3472Z"
      fill={props.fill ?? "black"}
    />
    <path
      d="M12 3.07532L19 5.84662V12.06C18.9976 13.6394 18.5808 15.1904 17.7911 16.5582C17.0014 17.926 15.8666 19.0625 14.5 19.8542L12 21.2971L9.5 19.8537C8.13348 19.0621 6.99868 17.9256 6.209 16.5579C5.41932 15.1903 5.00244 13.6393 5 12.06V5.84662L12 3.07532ZM12 0.924316L3 4.48732V12.06C3.00293 13.9903 3.51243 15.8861 4.47759 17.5578C5.44275 19.2295 6.82976 20.6186 8.5 21.5863L12 23.6064L15.5 21.5859C17.1702 20.6183 18.5572 19.2292 19.5223 17.5576C20.4875 15.8859 20.997 13.9903 21 12.06V4.48732L12 0.924316Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
