import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="-1.5 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("p-1", className)}
    {...props}
  >
    <path d="M14 2L10.5 0L6.99999 2L10.5 4L14 2Z" fill="#079A4B" />
    <path
      d="M1.50898e-06 6L3.49999 4L7 6.00001L3.5 8L3.5 16L10.5 20L17.5 16V8L14 6L17.5 4L21 6L21 18L10.5 24L0 18L1.50898e-06 6Z"
      fill="#079A4B"
    />
    <path
      d="M13.978 14.0126V10.0126L10.478 8.01257L6.97795 10.0126V14.0126L10.478 16.0126L13.978 14.0126Z"
      fill="#079A4B"
    />
  </svg>
);

export default Icon;
