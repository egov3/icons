import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Handshake = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3672 10.3672L21.1309 9.13001L19.3082 10.9519L14.8 6.44341L12.2453 7.89841C12.0336 8.01884 11.7883 8.06645 11.547 8.03393C11.3056 8.00141 11.0816 7.89057 10.9094 7.71841L10.57 7.38001L13.4538 4.49721C13.6505 4.29919 13.8845 4.14218 14.1424 4.03531C14.4002 3.92843 14.6767 3.87381 14.9558 3.87461H18.3171V2.12501H14.9561C14.447 2.12365 13.9427 2.22329 13.4724 2.41817C13.002 2.61304 12.575 2.89928 12.2161 3.26031L11.9161 3.56031L11.6161 3.26031C11.2572 2.89926 10.8302 2.613 10.3598 2.41812C9.88946 2.22325 9.38513 2.12362 8.87601 2.12501H5.51461V3.87501H8.87601C9.15523 3.8743 9.43183 3.92896 9.6898 4.03583C9.94777 4.14269 10.182 4.29965 10.3789 4.49761L10.6789 4.79761L9.06741 6.40821C8.80989 6.66621 8.66526 7.01584 8.66526 7.38036C8.66526 7.74489 8.80989 8.09452 9.06741 8.35251L9.67091 8.95611C10.115 9.39847 10.6918 9.68321 11.313 9.76679C11.9342 9.85036 12.5657 9.72818 13.1109 9.41891L14.5064 8.62501L19.2812 13.4C19.444 13.5627 19.5355 13.7833 19.5356 14.0134C19.5357 14.2435 19.4444 14.4642 19.2817 14.627C19.1191 14.7898 18.8984 14.8813 18.6683 14.8814C18.4382 14.8815 18.2175 14.7902 18.0547 14.6275L16.8594 13.4322L15.6211 14.6705L16.8164 15.8658L16.8213 15.8697L17.3513 16.401C17.5139 16.5634 17.6053 16.7837 17.6055 17.0134C17.6056 17.2432 17.5145 17.4636 17.3522 17.6262C17.2718 17.7067 17.1763 17.7705 17.0712 17.8142C16.9662 17.8578 16.8535 17.8802 16.7398 17.8803C16.51 17.8805 16.2896 17.7894 16.127 17.627L13.737 15.2363C13.4257 14.9336 13.0402 14.718 12.6193 14.6111C12.719 14.1803 12.7076 13.7313 12.5862 13.3061C12.4649 12.8809 12.2375 12.4935 11.9255 12.1802C11.6071 11.8753 11.217 11.6542 10.7921 11.5368C10.3672 11.4195 9.91974 11.4095 9.49001 11.5078C9.37351 11.0551 9.13885 10.6414 8.81001 10.3091H8.80901C8.32552 9.82725 7.67071 9.55622 6.9881 9.55632C6.3055 9.55641 5.65077 9.82713 5.16741 10.3091L4.52511 10.9514L2.67681 9.10351L1.43851 10.3408L3.28931 12.1919C2.96717 12.5193 2.73747 12.9262 2.62356 13.3711C2.50965 13.8161 2.5156 14.2833 2.6408 14.7252C2.766 15.1671 3.00599 15.568 3.33636 15.8871C3.66673 16.2062 4.07571 16.4321 4.52171 16.5419C4.4517 16.9191 4.4657 17.307 4.56269 17.6782C4.65968 18.0493 4.83729 18.3945 5.08288 18.6892C5.32846 18.9839 5.63599 19.2208 5.98356 19.3831C6.33113 19.5454 6.71021 19.6291 7.09381 19.6282C7.15821 19.6282 7.22181 19.6146 7.28611 19.6099C7.36583 20.083 7.57421 20.525 7.88842 20.8875C8.20264 21.2501 8.61057 21.5191 9.06753 21.6652C9.52448 21.8113 10.0128 21.8288 10.4791 21.7159C10.9453 21.6029 11.3715 21.3638 11.7109 21.0247L11.916 20.8196L12.1309 21.0345C12.4704 21.374 12.8968 21.6136 13.3634 21.7271C13.8299 21.8405 14.3187 21.8235 14.7762 21.6778C15.2338 21.5321 15.6424 21.2634 15.9575 20.901C16.2725 20.5387 16.4818 20.0966 16.5625 19.6233C16.9594 19.6505 17.3572 19.5868 17.7257 19.437C18.0942 19.2872 18.4236 19.0553 18.6889 18.7589C18.9542 18.4625 19.1484 18.1095 19.2566 17.7267C19.3649 17.344 19.3843 16.9415 19.3135 16.5501C19.7583 16.4371 20.1655 16.2089 20.4942 15.8886C20.8228 15.5684 21.0615 15.1672 21.186 14.7255C21.3105 14.2838 21.3167 13.8171 21.2037 13.3723C21.0907 12.9275 20.8627 12.5203 20.5425 12.1915L22.3672 10.3672ZM4.55181 13.4L6.40531 11.546C6.56002 11.3916 6.7697 11.3048 6.98831 11.3048C7.20692 11.3048 7.41659 11.3916 7.57131 11.546L7.57231 11.5465C7.65688 11.6308 7.72397 11.731 7.76972 11.8413C7.81547 11.9516 7.83898 12.0699 7.83891 12.1893C7.83884 12.3088 7.81518 12.427 7.76929 12.5372C7.7234 12.6475 7.65619 12.7476 7.57151 12.8318L6.58581 13.8173L5.77731 14.6256C5.61251 14.7838 5.39295 14.8721 5.16456 14.8721C4.93616 14.8721 4.7166 14.7838 4.55181 14.6256C4.47103 14.5453 4.40693 14.4498 4.36319 14.3447C4.31944 14.2395 4.29692 14.1267 4.29692 14.0128C4.29692 13.8989 4.31944 13.7861 4.36319 13.681C4.40693 13.5758 4.47103 13.4803 4.55181 13.4ZM6.48051 17.625C6.39973 17.5447 6.33563 17.4492 6.29189 17.3441C6.24814 17.2389 6.22562 17.1261 6.22562 17.0122C6.22562 16.8983 6.24814 16.7855 6.29189 16.6804C6.33563 16.5752 6.39973 16.4797 6.48051 16.3994L7.01461 15.8651L7.01561 15.8643L8.81001 14.07L8.81341 14.0657L9.46231 13.4167C9.54267 13.3354 9.63831 13.2708 9.74373 13.2267C9.84914 13.1825 9.96226 13.1596 10.0766 13.1593C10.1909 13.159 10.3041 13.1813 10.4098 13.2249C10.5154 13.2685 10.6114 13.3326 10.6922 13.4134C10.773 13.4943 10.837 13.5903 10.8805 13.696C10.9241 13.8017 10.9463 13.915 10.9459 14.0293C10.9455 14.1436 10.9225 14.2567 10.8782 14.362C10.8339 14.4674 10.7693 14.563 10.6879 14.6433L7.70611 17.625C7.54117 17.7829 7.32165 17.8711 7.09331 17.8711C6.86497 17.8711 6.64544 17.7829 6.48051 17.625ZM9.24711 19.7871C9.08481 19.6243 8.99367 19.4037 8.99367 19.1738C8.99367 18.9439 9.08481 18.7234 9.24711 18.5605L11.333 16.4746C11.4095 16.3979 11.5003 16.3369 11.6004 16.2954C11.7004 16.2538 11.8077 16.2324 11.916 16.2324C12.0243 16.2324 12.1316 16.2538 12.2317 16.2954C12.3317 16.3369 12.4226 16.3979 12.499 16.4746L12.559 16.5346C12.6356 16.6111 12.6964 16.702 12.7379 16.8021C12.7794 16.9021 12.8007 17.0093 12.8007 17.1176C12.8007 17.2259 12.7794 17.3331 12.7379 17.4332C12.6964 17.5332 12.6356 17.6241 12.559 17.7006L10.4731 19.7865C10.3105 19.949 10.0901 20.0403 9.86023 20.0404C9.63037 20.0406 9.40985 19.9494 9.24711 19.7871ZM14.5947 19.7959C14.4299 19.9541 14.2103 20.0424 13.9819 20.0424C13.7535 20.0424 13.5339 19.9541 13.3691 19.7959L13.1543 19.5811L13.7969 18.9385C13.9934 18.7372 14.1556 18.5051 14.2769 18.2513L14.5957 18.5703C14.6763 18.6508 14.7402 18.7463 14.7837 18.8515C14.8273 18.9567 14.8497 19.0695 14.8496 19.1833C14.8495 19.2972 14.8269 19.4099 14.7832 19.515C14.7395 19.6201 14.6754 19.7156 14.5947 19.7959Z"
      fill="black"
    />
  </svg>
);
