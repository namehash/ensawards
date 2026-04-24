import { appliesToAllApps } from "data/apps/utils";
import { type BestPractice } from "data/ens-best-practices/types";
import { formatBestPracticeTarget } from "data/ens-best-practices/utils";
import { appliesToAllProtocols } from "data/protocols/utils";

export const AppliesToBadges = ({ bestPractice }: { bestPractice: BestPractice }) => {
  const appliesToBadgeStyles =
    "flex justify-center items-center px-2 py-[2px] rounded-md border border-gray-200 bg-white text-black text-xs leading-4 font-semibold";

  if (appliesToAllApps(bestPractice.appliesTo))
    return <span className={appliesToBadgeStyles}>Apps</span>;

  if (appliesToAllProtocols(bestPractice.appliesTo))
    return <span className={appliesToBadgeStyles}>Protocols</span>;

  return (
    <div className="flex flex-row justify-start items-center gap-1">
      {bestPractice.appliesTo.map((target) => (
        <span key={`applies-to-${target}-badge`} className={appliesToBadgeStyles}>
          {formatBestPracticeTarget(target, { lowercase: false, plural: false })}
        </span>
      ))}
    </div>
  );
};
