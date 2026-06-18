import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  const reactId = React.useId();
  const id = (name: string) => `${reactId}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("p-1", className)}
      {...props}
    >
      <path
        d="M298.203 83.7645L170.449 0V46.8332L252.405 100.089L242.763 130.598H170.449V169.402H242.763L252.405 199.911L170.449 253.167V300L298.203 216.503L277.313 150.134L298.203 83.7645Z"
        fill={url("paint0_linear")}
      />
      <path
        d="M59.3007 169.402H131.346V130.598H59.0329L49.6589 100.089L131.346 46.8332V0L3.59253 83.7645L24.4831 150.134L3.59253 216.503L131.614 300V253.167L49.6589 199.911L59.3007 169.402Z"
        fill={url("paint1_linear")}
      />
      <mask id={id("mask0")} maskUnits="userSpaceOnUse" x="3" y="0" width="296" height="300">
        <path
          d="M298.204 83.7645L170.45 0V46.8332L252.405 100.089L242.763 130.598H170.45V169.402H242.763L252.405 199.911L170.45 253.167V300L298.204 216.503L277.313 150.134L298.204 83.7645Z"
          fill={url("paint2_linear")}
        />
        <path
          d="M59.301 169.402H131.347V130.598H59.0332L49.6592 100.089L131.347 46.8332V0L3.59277 83.7645L24.4834 150.134L3.59277 216.503L131.615 300V253.167L49.6592 199.911L59.301 169.402Z"
          fill={url("paint3_linear")}
        />
      </mask>
      <g mask={url("mask0")}>
        <rect x="3.75024" width="292.5" height="300" fill={url("paint4_linear")} />
      </g>
      <defs>
        <linearGradient
          id={id("paint0_linear")}
          x1="256.875"
          y1="320.625"
          x2="171.3"
          y2="-32.9459"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B46F9" />
          <stop offset="1" stop-color="#BBFBE0" />
        </linearGradient>
        <linearGradient
          id={id("paint1_linear")}
          x1="256.875"
          y1="320.625"
          x2="171.3"
          y2="-32.9459"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B46F9" />
          <stop offset="1" stop-color="#BBFBE0" />
        </linearGradient>
        <linearGradient
          id={id("paint2_linear")}
          x1="256.875"
          y1="320.625"
          x2="171.3"
          y2="-32.9459"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B46F9" />
          <stop offset="1" stop-color="#BBFBE0" />
        </linearGradient>
        <linearGradient
          id={id("paint3_linear")}
          x1="256.875"
          y1="320.625"
          x2="171.3"
          y2="-32.9459"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0B46F9" />
          <stop offset="1" stop-color="#BBFBE0" />
        </linearGradient>
        <linearGradient
          id={id("paint4_linear")}
          x1="22.5002"
          y1="67.5"
          x2="170.625"
          y2="178.125"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.119792" stop-color="#8952FF" stop-opacity="0.87" />
          <stop offset="1" stop-color="#DABDFF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Icon;
