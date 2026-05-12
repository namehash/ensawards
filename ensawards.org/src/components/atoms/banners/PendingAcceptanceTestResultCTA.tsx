import { type App } from "data/apps/types.ts";

import { GitHubOutlineIcon } from "@/components/atoms/icons/GitHubOutlineIcon";
import { shadcnButtonVariants } from "@/components/ui/shadcnButtonStyles";
import { cn } from "@/utils/tailwindClassConcatenation";

export interface PendingAcceptanceTestResultCTAProps {
  app: App;
}

export const PendingAcceptanceTestResultCTA = ({ app }: PendingAcceptanceTestResultCTAProps) => (
  <div className="w-full max-w-[1216px] h-fit flex flex-col items-start justify-start gap-3">
    <h3 className="text-base leading-normal">
      Waiting for a community submission of the result of this acceptance test on {app.name}.
    </h3>
    <div className="w-full h-px bg-border" />
    <div className="w-full flex flex-row flex-wrap justify-between items-center gap-3">
      <p className="text-base leading-6 font-normal text-muted-foreground">
        Contributions are open
      </p>
      <a
        href={`https://github.com/namehash/ensawards/tree/main/ensawards.org/data/apps/${app.appSlug}/benchmarks/index.tsx`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          shadcnButtonVariants({
            variant: "default",
            size: "default",
            className: "cursor-pointer rounded-full",
          }),
        )}
      >
        <GitHubOutlineIcon />
        Submit result on GitHub
      </a>
    </div>
  </div>
);
