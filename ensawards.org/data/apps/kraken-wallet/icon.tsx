import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("p-1", className)}
    {...props}
  >
    <rect width="100%" height="100%" fill="#E5E7EB" />
  </svg>
);

export default Icon;
