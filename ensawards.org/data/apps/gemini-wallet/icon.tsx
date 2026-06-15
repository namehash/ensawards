import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 43 43"
    className={cn("p-1 fill-[#26DDF9]", className)}
    {...props}
  >
    <g>
      <g>
        <path
          d="M28.1,0c-7.6,0-14,5.8-14.8,13.3C5.8,14.1,0,20.5,0,28.1C0,36.3,6.7,43,14.9,43c7.6,0,14-5.8,14.8-13.3
			C37.2,28.9,43,22.5,43,14.9C43,6.7,36.3,0,28.1,0 M39.5,16.6c-0.7,5-4.7,9-9.7,9.7v-9.7H39.5z M3.5,26.4c0.7-5,4.7-9,9.7-9.7v9.7
			H3.5z M26.3,29.8c-0.8,5.6-5.7,9.8-11.4,9.8c-5.7,0-10.6-4.2-11.4-9.8H26.3z M26.4,26.4h-9.8v-9.8h9.8V26.4z M39.5,13.2H16.7
			c0.8-5.6,5.7-9.8,11.4-9.8C33.9,3.4,38.7,7.6,39.5,13.2"
        ></path>
      </g>
    </g>
  </svg>
);

export default Icon;
