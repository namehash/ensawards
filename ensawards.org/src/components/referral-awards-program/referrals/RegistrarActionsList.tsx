import { useAutoAnimate } from "@formkit/auto-animate/react";
import { type ReferralProgramEditionConfig } from "@namehash/ens-referrals/v1";
import {
  getEnsManagerNameDetailsUrl,
  RegistrarActionCardLoading,
  RegistrarActionCardMemo,
  useNow,
} from "@namehash/namehash-ui";
import type { Address } from "viem";

import type { ENSNamespaceId } from "@ensnode/datasources";
import { type NamedRegistrarAction } from "@ensnode/ensnode-sdk";

import { getEnsAdvocateDetailsRelativePath, getEnsAwardsBaseUrl } from "@/utils";

interface DisplayRegistrarActionsListProps {
  namespaceId: ENSNamespaceId;
  registrarActions: NamedRegistrarAction[];
  referralProgramEditions: ReferralProgramEditionConfig[];
  showReferrer?: boolean;
}

/**
 * Displays a list of {@link NamedRegistrarAction}s.
 */
export function DisplayRegistrarActionsList({
  namespaceId,
  registrarActions,
  referralProgramEditions,
  showReferrer = true,
}: DisplayRegistrarActionsListProps) {
  const [animationParent] = useAutoAnimate();
  const now = useNow();

  return (
    <div
      ref={animationParent}
      className="w-full h-fit box-border flex flex-col justify-start items-center gap-3 relative"
    >
      {registrarActions.map((namedRegistrarAction) => {
        // TODO: Reintroduce the "Incentive program" field once the related helper API is ready.
        // See https://github.com/namehash/ensnode/issues/1797 for more details
        // // if the registrar action is qualified for a given referral program edition,
        // // add the program edition's config to the list.
        // const qualifiedReferralPrograms = referralProgramEditions.filter((edition) =>
        //   isQualifiedReferral(edition, namedRegistrarAction),
        // );

        return (
          <RegistrarActionCardMemo
            key={namedRegistrarAction.action.id}
            namespaceId={namespaceId}
            namedRegistrarAction={namedRegistrarAction}
            now={now}
            showReferrer={showReferrer}
            links={{
              name: {
                isExternal: true,
                link: getEnsManagerNameDetailsUrl(namedRegistrarAction.name, namespaceId),
              },
              registrant: {
                isExternal: false,
                link: new URL(
                  getEnsAdvocateDetailsRelativePath(namedRegistrarAction.action.registrant),
                  getEnsAwardsBaseUrl(),
                ),
              },
              referrer: {
                isExternal: false,
                getLink: (address: Address, _namespaceId: ENSNamespaceId) =>
                  new URL(getEnsAdvocateDetailsRelativePath(address), getEnsAwardsBaseUrl()),
              },
            }}
            // TODO: Reintroduce the "Incentive program" field once the related helper API is ready.
            // See https://github.com/namehash/ensnode/issues/1797 for more details
            // referralProgramField={
            //   <LabeledField fieldLabel="Incentive program" className="sm:w-[15%] min-w-[162px]">
            //     <div className="w-fit sm:h-[21px] flex flex-row flex-nowrap justify-start items-center gap-2">
            //       <p className="text-black font-medium max-sm:text-right">
            //         {qualifiedReferralPrograms.length === 0
            //           ? "-"
            //           : qualifiedReferralPrograms
            //               .map((referralProgram) => referralProgram.displayName)
            //               .join(", ")}
            //       </p>
            //     </div>
            //   </LabeledField>
            // }
          />
        );
      })}
    </div>
  );
}

interface DisplayRegistrarActionsListLoadingProps {
  recordsPerPage: number;
  showReferrer?: boolean;
}

/**
 * Displays a loading state for a list of {@link NamedRegistrarAction}s.
 */
export function DisplayRegistrarActionsListLoading({
  recordsPerPage,
  showReferrer = true,
}: DisplayRegistrarActionsListLoadingProps) {
  return (
    <div className="w-full space-y-3 relative z-10">
      {[...Array(recordsPerPage)].map((_, idx) => (
        // TODO: Reintroduce the "Incentive program" field once the related helper API is ready.
        // See https://github.com/namehash/ensnode/issues/1797 for more details
        <RegistrarActionCardLoading
          key={idx}
          showReferrer={showReferrer}
          showReferralProgramField={false}
        />
      ))}
    </div>
  );
}
