import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    className={cn("p-1.5", className)}
    {...props}
  >
    <path
      d="M0.050599 39.1258C-0.474468 30.6311 3.09364 21.1887 10.4422 13.8402C26.4208 -2.13842 59.697 0.101261 59.8862 0.114131C59.7953 0.245997 35.4691 35.5162 6.6421 38.8151C4.41381 39.07 2.2114 39.1703 0.050599 39.1258Z"
      fill="#03CA9B"
    />
    <path
      d="M3.42638 49.9868C4.2493 51.2991 5.22241 52.5281 6.34776 53.6534C16.2112 63.5169 34.0362 61.6838 46.161 49.559C62.1852 33.5348 59.8862 0.114131 59.8862 0.114131C59.798 0.312163 42.3604 39.4003 14.6464 47.9263C10.8843 49.0837 7.11309 49.7579 3.42638 49.9868Z"
      fill="#03CA9B"
    />
  </svg>
);

export default Icon;
