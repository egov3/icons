import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const GoingAbroadFilled = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 18.9998V20.9998H24V18.9998H0ZM10.5671 14.618L19.0938 12.3748C20.3618 12.035 21.5862 11.5492 22.7422 10.9271C22.9878 10.7949 23.1875 10.5912 23.3146 10.3429C23.4417 10.0946 23.4902 9.81347 23.4538 9.53692C23.4173 9.26037 23.2976 9.00144 23.1106 8.79453C22.9235 8.58762 22.6779 8.44252 22.4064 8.3785L19.2359 7.6308L14.0625 8.9581L8.2539 3.271L6.0691 3.843L9.6719 10.1198L5.2282 11.3264L3.0052 9.1498L0.5938 9.8123L3.3343 14.618H10.5671Z"
      fill="black"
    />
  </svg>
);
