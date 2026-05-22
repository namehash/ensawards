import React from "react";

import { cn } from "@/utils/tailwindClassConcatenation";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  const reactId = React.useId();
  const id = (name: string) => `${reactId}-${name}`;
  const url = (name: string) => `url(#${id(name)})`;

  return (
    <svg
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("bg-white", className)}
      {...props}
    >
      <path
        d="M250.102 436.323C323.5 436.323 383 377.172 383 304.205C383 276.204 374.238 250.238 359.291 228.868L249.212 294.746L139.134 231.478C125.273 252.337 117.204 277.334 117.204 304.205C117.204 377.172 176.705 436.323 250.102 436.323Z"
        fill={url("paint0_radial")}
      />
      <path
        d="M250.102 436.323C323.5 436.323 383 377.172 383 304.205C383 276.204 374.238 250.238 359.291 228.868L249.212 294.746L139.134 231.478C125.273 252.337 117.204 277.334 117.204 304.205C117.204 377.172 176.705 436.323 250.102 436.323Z"
        fill={url("paint1_radial")}
        fill-opacity="0.5"
      />
      <path
        d="M250.102 436.323C323.5 436.323 383 377.172 383 304.205C383 276.204 374.238 250.238 359.291 228.868L249.212 294.746L139.134 231.478C125.273 252.337 117.204 277.334 117.204 304.205C117.204 377.172 176.705 436.323 250.102 436.323Z"
        fill={url("paint2_radial")}
      />
      <path
        d="M250.102 436.323C323.5 436.323 383 377.172 383 304.205C383 276.204 374.238 250.238 359.291 228.868L249.212 294.746L139.134 231.478C125.273 252.337 117.204 277.334 117.204 304.205C117.204 377.172 176.705 436.323 250.102 436.323Z"
        fill={url("paint3_radial")}
      />
      <path
        d="M156.512 207.737L250.102 261.236V64.6091L156.512 207.737Z"
        fill={url("paint4_radial")}
      />
      <path
        d="M156.512 207.737L250.102 261.236V64.6091L156.512 207.737Z"
        fill={url("paint5_radial")}
      />
      <path
        d="M343.536 207.737L250.102 261.236V64.6091L343.536 207.737Z"
        fill={url("paint6_radial")}
      />
      <path
        d="M343.536 207.737L250.102 261.236V64.6091L343.536 207.737Z"
        fill={url("paint7_radial")}
      />
      <path
        d="M343.536 207.737L250.102 261.236V64.6091L343.536 207.737Z"
        fill={url("paint8_linear")}
        fill-opacity="0.6"
      />
      <path
        d="M359.291 228.842L250.102 294.591V435.703L359.291 228.842Z"
        fill={url("paint9_radial")}
      />
      <path
        d="M359.291 228.842L250.102 294.591V435.703L359.291 228.842Z"
        fill={url("paint10_radial")}
      />
      <path
        d="M359.291 228.842L250.102 294.591V435.703L359.291 228.842Z"
        fill={url("paint11_radial")}
      />
      <path
        d="M139.042 231.323L250.102 294.591V435.703L139.042 231.323Z"
        fill={url("paint12_radial")}
      />
      <path
        d="M139.042 231.323L250.102 294.591V435.703L139.042 231.323Z"
        fill={url("paint13_radial")}
      />
      <path
        d="M139.042 231.323L250.102 294.591V435.703L139.042 231.323Z"
        fill={url("paint14_radial")}
      />
      <defs>
        <radialGradient
          id={id("paint0_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(348.77 397.304) rotate(-145.131) scale(241.786 323.368)"
        >
          <stop stop-color="#8AFBED" stop-opacity="0" />
          <stop offset="0.671495" stop-color="#00A3FF" stop-opacity="0.45726" />
          <stop offset="1" stop-color="#198CF6" />
        </radialGradient>
        <radialGradient
          id={id("paint1_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(217.316 212.912) rotate(52.8106) scale(232.777 189.377)"
        >
          <stop stop-color="#35C2FF" />
          <stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint2_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(124.199 222.987) rotate(59.2776) scale(101.707 130.309)"
        >
          <stop stop-color="#3B52FC" />
          <stop offset="1" stop-color="#3B52FC" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint3_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(366.013 198.506) rotate(90.1891) scale(151.384 193.956)"
        >
          <stop stop-color="#2A6BFF" />
          <stop offset="1" stop-color="#2A6BFF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint4_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(249.89 162.648) rotate(157.682) scale(115.003 288.641)"
        >
          <stop stop-color="#00A3FF" />
          <stop offset="0.943718" stop-color="#00A3FF" stop-opacity="0.29" />
        </radialGradient>
        <radialGradient
          id={id("paint5_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(208.634 87.0918) rotate(78.8158) scale(133.943 247.785)"
        >
          <stop stop-color="#FF7272" />
          <stop offset="0.179674" stop-color="#FF72A7" />
          <stop offset="1" stop-color="#7A51FF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint6_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(239.61 71.6037) rotate(84.1933) scale(325.923 134.229)"
        >
          <stop stop-color="#FFBFAB" />
          <stop offset="0.364808" stop-color="#FF67A8" stop-opacity="0.87" />
          <stop offset="0.723967" stop-color="#6BAFFF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint7_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(250.102 230.482) rotate(-50.3051) scale(99.3444 150.668)"
        >
          <stop stop-color="#2238FF" />
          <stop offset="1" stop-color="#0047FF" stop-opacity="0" />
        </radialGradient>
        <linearGradient
          id={id("paint8_linear")}
          x1="344.03"
          y1="237.476"
          x2="282.577"
          y2="209.498"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29EDFE" />
          <stop offset="1" stop-color="#29EDFE" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id={id("paint9_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(250.311 409.87) rotate(-65.2378) scale(130.47 293.736)"
        >
          <stop stop-color="#4DEAFF" />
          <stop offset="0.943718" stop-color="#00A3FF" stop-opacity="0.1" />
        </radialGradient>
        <radialGradient
          id={id("paint10_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(234.052 318.082) rotate(9.61547) scale(118.64 113.538)"
        >
          <stop stop-color="#35AAFF" />
          <stop offset="0.0001" stop-color="#0057FF" />
          <stop offset="1" stop-color="#00A3FF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint11_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(359.018 222.987) rotate(125.701) scale(122.431 64.6234)"
        >
          <stop stop-color="#2241FF" />
          <stop offset="1" stop-color="#1EA0FF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint12_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(249.89 410.179) rotate(-115.402) scale(129.58 297.215)"
        >
          <stop stop-color="#64E3FF" />
          <stop offset="1" stop-color="#00A3FF" stop-opacity="0.29" />
        </radialGradient>
        <radialGradient
          id={id("paint13_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(149.18 269.954) rotate(50.7041) scale(126.054 122.205)"
        >
          <stop stop-color="#3687FF" />
          <stop offset="1" stop-color="#354BFF" stop-opacity="0" />
        </radialGradient>
        <radialGradient
          id={id("paint14_radial")}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(139.187 237.476) rotate(46.273) scale(79.508 43.2047)"
        >
          <stop stop-color="#1858FF" />
          <stop offset="1" stop-color="#3A70FF" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Icon;
