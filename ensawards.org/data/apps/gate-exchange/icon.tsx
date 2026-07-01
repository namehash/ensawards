import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="170"
    height="170"
    viewBox="139 41 170 170"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("p-0.5", className)}
    {...props}
  >
    <path
      d="M224.114 167.436C201.292 167.436 182.792 148.936 182.792 126.114C182.792 103.292 201.292 84.792 224.114 84.792V51C182.606 51 149 84.6061 149 126.114C149 167.622 182.653 201.228 224.114 201.228C265.576 201.228 299.228 167.576 299.228 126.114H265.436C265.436 148.936 246.936 167.436 224.114 167.436Z"
      fill="#0068FF"
    />
    <path d="M265.436 84.792H224.114V126.114H265.436V84.792Z" fill="#17E5A0" />
  </svg>
);

export default Icon;
