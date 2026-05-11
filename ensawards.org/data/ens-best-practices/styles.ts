// NOTE: These styles are part of the `data/ens-best-practices` directory
// solely because it includes content defined as `JSX` elements.
//
// The only purpose of these Tailwind classes is to help style those elements.
// Neither should be used anywhere else across the codebase.

// Separated from the other utils to avoid circular dependency issues.

export const bestPracticeTechnicalDetailsLinkStyles =
  "text-black underline underline-offset-[25%] decoration-black/40 hover:decoration-black transition-all duration-200";

export const acceptanceTestDetailsContainerStyles =
  "flex flex-col justify-start items-center gap-3";
