import React from "react";

const Icon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="93"
    height="93"
    viewBox="34.16 3.5 93 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M85.5881 56.6164L98.0561 43.9989L80.6568 26L63.2575 43.9989L75.7255 56.5795L67.9279 64.5036L47.1185 43.9989L56.6566 34.2891H65.1681L71.6144 27.3064H53.5647L37.3335 43.9989L67.9279 73.9631L80.6568 61.6005L93.3857 74L123.98 43.9989L107.749 27.3433H89.6992L96.1455 34.3259H104.657L114.195 43.9989L93.3857 64.5405L85.5881 56.6164ZM80.6573 51.1132L73.4081 43.9964L80.6573 36.3354L87.9065 43.9964L80.6573 51.1132Z"
      fill="#D8AE15"
    />
  </svg>
);

export default Icon;
