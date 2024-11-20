import React from "react";

export const Brain = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.625 11.625C23.6238 10.6013 23.3439 9.59729 22.8154 8.72062C22.2869 7.84395 21.5297 7.1277 20.625 6.64872C20.6039 5.6551 20.2797 4.69166 19.6957 3.88749C19.1117 3.08333 18.2959 2.47686 17.3575 2.14936C16.4192 1.82187 15.4032 1.78898 14.4456 2.05512C13.4881 2.32125 12.6347 2.87369 12 3.63841C11.3652 2.87369 10.5119 2.32125 9.55433 2.05512C8.59678 1.78898 7.58077 1.82187 6.64244 2.14936C5.7041 2.47686 4.88828 3.08333 4.30429 3.88749C3.7203 4.69166 3.39605 5.6551 3.37498 6.64872C2.46936 7.1264 1.7113 7.8422 1.18251 8.71895C0.653725 9.59571 0.374268 10.6002 0.374268 11.624C0.374268 12.6479 0.653725 13.6524 1.18251 14.5291C1.7113 15.4059 2.46936 16.1217 3.37498 16.5993C3.39568 17.5931 3.71967 18.5568 4.30352 19.3613C4.88736 20.1657 5.70317 20.7725 6.64158 21.1002C7.58 21.428 8.59617 21.461 9.55389 21.1949C10.5116 20.9288 11.3651 20.3764 12 19.6115C12.6349 20.3764 13.4884 20.9288 14.4461 21.1949C15.4038 21.461 16.42 21.428 17.3584 21.1002C18.2968 20.7725 19.1126 20.1657 19.6964 19.3613C20.2803 18.5568 20.6043 17.5931 20.625 16.5993C21.53 16.1212 22.2875 15.4055 22.8161 14.529C23.3447 13.6525 23.6244 12.6485 23.625 11.625ZM8.24998 19.125C7.68357 19.1249 7.13238 18.9416 6.6787 18.6025C6.22503 18.2634 5.89321 17.7866 5.73279 17.2434C5.82654 17.2434 5.90998 17.25 5.99998 17.25H6.74998C7.04835 17.25 7.3345 17.1314 7.54547 16.9205C7.75645 16.7095 7.87498 16.4233 7.87498 16.125C7.87498 15.8266 7.75645 15.5405 7.54547 15.3295C7.3345 15.1185 7.04835 15 6.74998 15H5.99998C5.20341 15.0005 4.43232 14.7193 3.82313 14.2061C3.21393 13.6929 2.8059 12.9807 2.67121 12.1956C2.53653 11.4105 2.68388 10.6031 3.08719 9.91617C3.4905 9.22926 4.12377 8.70713 4.87498 8.44216C5.09441 8.36458 5.28438 8.22085 5.41871 8.03078C5.55303 7.84071 5.6251 7.61366 5.62498 7.38091V6.74997C5.62498 6.05378 5.90154 5.3861 6.39382 4.89382C6.88611 4.40154 7.55379 4.12497 8.24998 4.12497C8.94617 4.12497 9.61385 4.40154 10.1061 4.89382C10.5984 5.3861 10.875 6.05378 10.875 6.74997V12.3918C10.6599 12.2539 10.4342 12.1332 10.2 12.0309C9.92648 11.9116 9.61676 11.9058 9.33897 12.0148C9.06118 12.1238 8.83808 12.3387 8.71873 12.6122C8.59938 12.8857 8.59357 13.1954 8.70258 13.4732C8.81158 13.751 9.02647 13.9741 9.29998 14.0934C9.85313 14.3344 10.3064 14.7586 10.5835 15.2945C10.8605 15.8305 10.9445 16.4456 10.8213 17.0362C10.698 17.6269 10.375 18.157 9.90672 18.5374C9.43841 18.9179 8.85334 19.1253 8.24998 19.125ZM18 15H17.25C16.9516 15 16.6655 15.1185 16.4545 15.3295C16.2435 15.5405 16.125 15.8266 16.125 16.125C16.125 16.4233 16.2435 16.7095 16.4545 16.9205C16.6655 17.1314 16.9516 17.25 17.25 17.25H18C18.0937 17.25 18.1781 17.25 18.2672 17.2434C18.1422 17.6669 17.9124 18.0521 17.5991 18.3633C17.2857 18.6744 16.899 18.9015 16.4746 19.0235C16.0501 19.1454 15.6018 19.1584 15.1711 19.0611C14.7404 18.9638 14.3411 18.7594 14.0104 18.4668C13.6796 18.1743 13.428 17.803 13.2788 17.3874C13.1296 16.9718 13.0877 16.5252 13.1569 16.0891C13.2261 15.653 13.4043 15.2414 13.6748 14.8924C13.9453 14.5433 14.2996 14.2682 14.7047 14.0925C14.9782 13.9731 15.1931 13.75 15.3021 13.4722C15.4111 13.1944 15.4053 12.8847 15.2859 12.6112C15.1666 12.3377 14.9435 12.1228 14.6657 12.0138C14.3879 11.9048 14.0782 11.9106 13.8047 12.03C13.5705 12.1323 13.3448 12.253 13.1297 12.3909V6.74997C13.1297 6.05378 13.4062 5.3861 13.8985 4.89382C14.3908 4.40154 15.0585 4.12497 15.7547 4.12497C16.4509 4.12497 17.1185 4.40154 17.6108 4.89382C18.1031 5.3861 18.3797 6.05378 18.3797 6.74997V7.38091C18.3795 7.61366 18.4516 7.84071 18.5859 8.03078C18.7203 8.22085 18.9102 8.36458 19.1297 8.44216C19.8842 8.70473 20.5212 9.22647 20.9272 9.91457C21.3332 10.6027 21.482 11.4125 21.347 12.2C21.212 12.9874 20.802 13.7015 20.19 14.215C19.578 14.7286 18.8036 15.0084 18.0047 15.0047L18 15ZM19.5 10.875C19.5 11.1733 19.3815 11.4595 19.1705 11.6705C18.9595 11.8814 18.6733 12 18.375 12C17.3804 12 16.4266 11.6049 15.7233 10.9016C15.0201 10.1984 14.625 9.24454 14.625 8.24997V7.87497C14.625 7.5766 14.7435 7.29046 14.9545 7.07948C15.1655 6.8685 15.4516 6.74997 15.75 6.74997C16.0483 6.74997 16.3345 6.8685 16.5455 7.07948C16.7565 7.29046 16.875 7.5766 16.875 7.87497V8.24997C16.875 8.6478 17.033 9.02933 17.3143 9.31063C17.5956 9.59194 17.9772 9.74997 18.375 9.74997C18.6733 9.74997 18.9595 9.8685 19.1705 10.0795C19.3815 10.2905 19.5 10.5766 19.5 10.875ZM9.37498 8.24997C9.37498 9.24454 8.97989 10.1984 8.27663 10.9016C7.57337 11.6049 6.61954 12 5.62498 12C5.32661 12 5.04046 11.8814 4.82948 11.6705C4.61851 11.4595 4.49998 11.1733 4.49998 10.875C4.49998 10.5766 4.61851 10.2905 4.82948 10.0795C5.04046 9.8685 5.32661 9.74997 5.62498 9.74997C6.0228 9.74997 6.40433 9.59194 6.68564 9.31063C6.96694 9.02933 7.12498 8.6478 7.12498 8.24997V7.87497C7.12498 7.5766 7.24351 7.29046 7.45448 7.07948C7.66546 6.8685 7.95161 6.74997 8.24998 6.74997C8.54835 6.74997 8.8345 6.8685 9.04548 7.07948C9.25645 7.29046 9.37498 7.5766 9.37498 7.87497V8.24997Z"
      fill="black"
    />
  </svg>
);
