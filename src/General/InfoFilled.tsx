import React from "react";

export const InfoFilled = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <path
      d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12.95 17H11.05V10.5H12.95V17ZM12 9.15C11.7726 9.15 11.5502 9.08255 11.3611 8.95619C11.172 8.82983 11.0246 8.65022 10.9375 8.44009C10.8505 8.22995 10.8277 7.99872 10.8721 7.77565C10.9165 7.55257 11.026 7.34766 11.1868 7.18683C11.3477 7.026 11.5526 6.91647 11.7757 6.8721C11.9987 6.82772 12.23 6.8505 12.4401 6.93754C12.6502 7.02458 12.8298 7.17198 12.9562 7.36109C13.0826 7.55021 13.15 7.77255 13.15 8C13.15 8.305 13.0288 8.59751 12.8132 8.81317C12.5975 9.02884 12.305 9.15 12 9.15Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
