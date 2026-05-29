import React from "react";

const Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    {...props}
  >
    <rect width="512" height="512" fill="#86EE1E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M322.178 277.865H277.394V233.081H232.608V188.295H322.178V277.865ZM187.824 322.648H232.608V277.864H187.824V322.648ZM132.27 159.569V351.376C132.27 366.191 144.28 378.203 159.096 378.203H350.904C365.72 378.203 377.73 366.191 377.73 351.376V159.569C377.73 144.752 365.72 132.742 350.904 132.742H159.096C144.28 132.742 132.27 144.752 132.27 159.569V159.569Z"
      fill="#080909"
    />
  </svg>
);

export default Icon;
