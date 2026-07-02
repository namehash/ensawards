import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="38"
    height="38"
    viewBox="-3.21 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("p-1", className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.8702 1.98267H12.7348V12.9202H29.8702V1.98267ZM12.7348 22.5873L12.7348 12.9202L1.70215 12.9202L1.70217 22.5873C1.70218 30.0007 7.68443 36.0104 15.0639 36.0104H29.8702V24.9271H15.0639C13.7776 24.9271 12.7348 23.8795 12.7348 22.5873Z"
      fill="#5227FF"
    ></path>
  </svg>
);

export default Icon;
