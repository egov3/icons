import React from "react";
import { iconBaseDefaults } from "../constants/iconDefaults";
import { IIcon } from "../interfaces/IIcon";

export const Ship = (props: IIcon = iconBaseDefaults) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 24"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.3236 14.9954L20.7777 11.6418C20.8402 11.1801 20.7396 10.7112 20.4932 10.3158C20.2468 9.92039 19.8702 9.62341 19.4282 9.4761L19 9.3333V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H13.5V2H10.5V3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V9.3333L4.5718 9.4761C4.12986 9.62343 3.75321 9.92041 3.50685 10.3158C3.2605 10.7112 3.15989 11.1802 3.2224 11.6418L3.6765 14.9951C2.85412 14.5492 1.93541 14.3106 1 14.3V16.2C1.79947 16.2134 2.57684 16.4646 3.2329 16.9217C4.19755 17.5774 5.3337 17.935 6.5 17.95C7.66659 17.9349 8.80302 17.5773 9.7681 16.9217C10.4159 16.4476 11.1978 16.1921 12.0005 16.1921C12.8032 16.1921 13.5851 16.4476 14.2329 16.9217C15.1911 17.5911 16.3317 17.95 17.5005 17.95C18.6693 17.95 19.8099 17.5911 20.7681 16.9217C21.4237 16.4645 22.2008 16.2132 23 16.2V14.3C22.0646 14.3106 21.1459 14.5493 20.3236 14.9954ZM6.9 5C6.9 4.97348 6.91054 4.94804 6.92929 4.92929C6.94804 4.91054 6.97348 4.9 7 4.9H17C17.0265 4.9 17.052 4.91054 17.0707 4.92929C17.0895 4.94804 17.1 4.97348 17.1 5V8.7L12 7L6.9 8.7V5ZM18.276 15.9569C17.7585 16.0671 17.2236 16.0681 16.7057 15.9598C16.1878 15.8515 15.6981 15.6364 15.2681 15.3281C14.3085 14.6624 13.1684 14.3056 12.0005 14.3056C10.8326 14.3056 9.69251 14.6624 8.7329 15.3281C8.07649 15.7845 7.29936 16.0357 6.5 16.05C6.23846 16.0464 5.9781 16.0142 5.7236 15.9538L5.1052 11.387C5.10209 11.3639 5.10712 11.3405 5.11942 11.3208C5.13173 11.301 5.15053 11.2862 5.1726 11.2788L12 9.0027L18.8274 11.2786C18.8495 11.286 18.8683 11.3008 18.8806 11.3205C18.893 11.3403 18.898 11.3637 18.8949 11.3868L18.276 15.9569ZM15.2681 19.3281C14.3085 18.6624 13.1684 18.3056 12.0005 18.3056C10.8326 18.3056 9.69251 18.6624 8.7329 19.3281C8.07649 19.7845 7.29936 20.0357 6.5 20.05C5.70095 20.0359 4.92411 19.7847 4.2681 19.3283C3.30306 18.6726 2.16661 18.315 1 18.3V20.2C1.79947 20.2134 2.57684 20.4646 3.2329 20.9217C4.19755 21.5774 5.3337 21.935 6.5 21.95C7.66659 21.9349 8.80302 21.5773 9.7681 20.9217C10.4159 20.4476 11.1978 20.1921 12.0005 20.1921C12.8032 20.1921 13.5851 20.4476 14.2329 20.9217C15.1911 21.5911 16.3317 21.95 17.5005 21.95C18.6693 21.95 19.8099 21.5911 20.7681 20.9217C21.4237 20.4645 22.2008 20.2132 23 20.2V18.3C21.8337 18.3149 20.6975 18.6725 19.7329 19.3283C19.0847 19.8014 18.3029 20.0563 17.5005 20.0562C16.698 20.0562 15.9163 19.8012 15.2681 19.3281Z"
      fill="black"
    />
  </svg>
);
