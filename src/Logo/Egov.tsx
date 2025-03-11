import React from "react";

export const Egov = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 69 24"
    {...props}
    fill="none"
  >
    <path
      d="M65.7371 0C65.6715 0 65.6126 0.0400244 65.5884 0.100985L61.0744 11.4748C61.0476 11.5421 60.9523 11.5421 60.9256 11.4748L56.4116 0.100985C56.3874 0.0400243 56.3284 0 56.2629 0H53.1522C53.0448 0 52.9713 0.108277 53.0109 0.208065L59.2383 15.899C59.2625 15.96 59.3214 16 59.387 16H62.6129C62.6785 16 62.7375 15.96 62.7617 15.899L68.9891 0.208064C69.0287 0.108277 68.9552 0 68.8478 0H65.7371Z"
      fill={props.fill ?? "black"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.99979 12.8C9.54147 12.8 10.9134 12.0732 11.7916 10.9435C11.8225 10.9038 11.8698 10.88 11.9201 10.88H15.2325C15.3448 10.88 15.422 10.9929 15.3785 11.0964C14.1682 13.9771 11.3202 16 7.99979 16C3.58152 16 -0.000207186 12.4183 -0.000207186 8C-0.000207186 3.58172 3.58152 0 7.99979 0C12.4181 0 15.9998 3.58172 15.9998 8C15.9998 8.38885 15.9721 8.77121 15.9184 9.14523C15.9073 9.22299 15.8402 9.28 15.7616 9.28H5.27546C5.17218 9.28 5.12054 9.28 5.07915 9.25093C5.03776 9.22185 5.02138 9.1764 4.9886 9.0855C4.8664 8.74656 4.79979 8.38106 4.79979 8C4.79979 7.61894 4.8664 7.25344 4.9886 6.9145C5.02138 6.8236 5.03776 6.77815 5.07915 6.74907C5.12054 6.72 5.17218 6.72 5.27546 6.72H12.4171C12.5228 6.72 12.5995 6.61924 12.5669 6.51869C11.9426 4.59264 10.1338 3.2 7.99979 3.2C5.86575 3.2 4.05698 4.59264 3.43272 6.51869C3.28151 6.98523 3.19979 7.48307 3.19979 8C3.19979 8.51693 3.28151 9.01477 3.43272 9.48131C4.05698 11.4074 5.86575 12.8 7.99979 12.8ZM25.8397 0.177987C25.8397 0.0865214 25.763 0.0135247 25.6717 0.01994C23.1508 0.197189 20.9522 1.54273 19.6138 3.51859C19.5625 3.59439 19.5874 3.69736 19.6667 3.74314L22.1707 5.18886C22.2427 5.23044 22.3344 5.20973 22.3839 5.14295C23.1559 4.10222 24.339 3.38481 25.6931 3.23093C25.7758 3.22153 25.8397 3.15248 25.8397 3.06923V0.177987ZM26.7866 3.23069C26.7039 3.22132 26.6397 3.15224 26.6397 3.06896V0.16C26.6397 0.0716344 26.7113 0 26.7997 0H34.0798C34.1682 0 34.2398 0.0716344 34.2398 0.16V1.6008C34.2398 2.37506 33.6896 3.0208 32.9588 3.16834C32.8295 3.19444 32.7528 3.35131 32.8278 3.45985C33.7183 4.74971 34.2398 6.31394 34.2398 8C34.2398 10.6646 32.9373 13.0249 30.9342 14.4789C30.8276 14.5563 30.849 14.7241 30.9732 14.7681L34.1332 15.8873C34.1971 15.9099 34.24 15.9707 34.239 16.0384C34.178 20.3254 30.6676 24 26.2409 24C22.416 24 19.2181 21.315 18.4288 17.7267C18.4098 17.6402 18.4664 17.5556 18.5533 17.5385L21.3801 16.9843C21.4665 16.9673 21.5501 17.0236 21.5703 17.1092C22.0709 19.2254 23.972 20.8 26.2409 20.8C28.1042 20.8 29.7195 19.738 30.5147 18.1861C30.5578 18.1021 30.5151 18.0005 30.4259 17.9696C29.7134 17.7229 28.9524 17.4937 28.1722 17.2588C27.7034 17.1176 27.2277 16.9743 26.7512 16.8238C26.6848 16.8029 26.6397 16.7412 26.6397 16.6715V12.931C26.6397 12.8478 26.7039 12.7787 26.7866 12.7693C29.1803 12.4983 31.0402 10.4664 31.0402 8C31.0402 5.53358 29.1803 3.50165 26.7866 3.23069ZM22.189 10.8005C22.2607 10.7592 22.3519 10.7795 22.4016 10.8457C23.1812 11.8851 24.3661 12.6094 25.6938 12.7675C25.7762 12.7774 25.8397 12.8463 25.8397 12.9293V16.3021C25.8397 16.4118 25.7319 16.4889 25.6283 16.4529C23.3054 15.6442 21.0855 14.5669 19.7119 12.6228C19.6786 12.576 19.6459 12.5288 19.6137 12.4812C19.5625 12.4054 19.5874 12.3026 19.6667 12.2568L22.189 10.8005ZM21.7701 5.88134C21.8422 5.92295 21.8701 6.01275 21.8369 6.08909C21.5826 6.67465 21.4415 7.32086 21.4415 8C21.4415 8.67338 21.5871 9.31759 21.8474 9.90318C21.8815 9.97972 21.8538 10.0703 21.7812 10.1122L19.2673 11.5636C19.188 11.6094 19.0864 11.5795 19.0464 11.4971C18.5202 10.4119 18.24 9.21023 18.2398 8.00109L18.2409 8L18.242 7.9989C18.2421 6.74488 18.5308 5.55826 19.0452 4.50184C19.0852 4.4196 19.1867 4.38982 19.266 4.43555L21.7701 5.88134ZM49.2798 8C49.2798 10.651 47.1308 12.8 44.4798 12.8C41.8288 12.8 39.6798 10.651 39.6798 8C39.6798 5.34903 41.8288 3.2 44.4798 3.2C47.1308 3.2 49.2798 5.34903 49.2798 8ZM52.4798 8C52.4798 12.4183 48.8981 16 44.4798 16C40.0615 16 36.4798 12.4183 36.4798 8C36.4798 3.58172 40.0615 0 44.4798 0C48.8981 0 52.4798 3.58172 52.4798 8Z"
      fill={props.fill ?? "black"}
    />
  </svg>
);
