import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

import icon from "./icon.jpg";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("px-1 bg-white rounded-md", className)}
    {...props}
  >
    <image href={icon.src} width="24" height="24" />
  </svg>
);

export default Icon;
