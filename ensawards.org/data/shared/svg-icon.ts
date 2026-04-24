import type { JSX } from "astro/jsx-runtime";

/**
 * An SVG icon written as a simple React component.
 *
 * @example
 * For reference on how to implement an `SvgIcon`, see one of the existing icons in the codebase, such as:
 * * `ensawards.org/data/apps/blockscout-explorer/icon.tsx`
 * * `ensawards.org/data/projects/aave/icon.tsx`
 * * `ensawards.org/data/protocols/cork-defi/icon.tsx`
 *
 * You can achieve the desired effect by simply swapping the SVG part from one of the examples with your own.
 */
export type SvgIcon = (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
