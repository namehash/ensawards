import { type App } from "data/apps/types.ts";

import GitHubOutlineIcon from "@/assets/githubOutlineIcon.svg";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface PendingAcceptanceTestResultCTAProps {
  app: App;
}

export const PendingAcceptanceTestResultCTA = ({ app }: PendingAcceptanceTestResultCTAProps) => (
  <div className="w-full max-w-[1216px] h-fit flex flex-col min-[670px]:flex-row items-start min-[670px]:items-center justify-start min-[670px]:justify-between gap-3 min-[670px]:gap-5 p-4 rounded-2xl border border-gray-200 bg-white">
    <h3 className="text-base leading-normal font-semibold text-slate-800">
      Acceptance test result pending
    </h3>
    <div className="min-[670px]:hidden w-full h-px bg-border" />
    <div className="w-full min-[670px]:w-fit flex flex-row justify-between min-[670px]:justify-start items-center gap-4">
      <p className="text-base leading-6 font-normal text-muted-foreground">Submit the result</p>
      <a
        href={`https://github.com/namehash/ensawards/tree/main/ensawards.org/data/apps/${app.appSlug}/benchmarks/index.tsx`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          shadcnButtonVariants({
            variant: "secondary",
            size: "default",
            className: "cursor-pointer rounded-full",
          }),
        )}
      >
        <img src={GitHubOutlineIcon.src} alt="GitHub icon" />
        Edit on Github
      </a>
    </div>
  </div>
);
