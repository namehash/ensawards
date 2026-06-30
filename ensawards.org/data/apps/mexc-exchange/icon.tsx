import React from "react";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="93"
    height="72"
    viewBox="-4 -4 93 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59.2033 0C63.2082 4.22074e-05 67.6353 2.28934 69.5324 7.07617L84.2873 43.8115C88.0814 53.1773 81.1252 63.9999 70.2697 64C64.3679 63.9999 58.5712 60.9821 55.5149 53.5938L42.6662 22.2803L29.8186 53.5938C26.7622 60.9821 20.9655 63.9999 15.0637 64C4.20816 64 -2.74799 53.1774 1.0461 43.8115L15.801 7.07617C17.6981 2.28931 22.1252 0 26.1301 0C30.451 0.000171931 34.2452 2.60215 36.6691 7.70117L42.6662 20.3213L48.6643 7.70117C51.0883 2.60215 54.8823 0.00014057 59.2033 0Z"
      fill="#3378FF"
    />
  </svg>
);

export default Icon;
