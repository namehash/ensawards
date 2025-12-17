import type {
  DefaultableChainId,
  ENSNamespaceId,
  NamedRegistrarAction,
  RegistrarActionReferral,
  UnixTimestamp,
} from "@ensnode/ensnode-sdk";
import { Info as InfoIcon, CircleQuestionMark as QuestionmarkIcon } from "lucide-react";
import { type PropsWithChildren, memo } from "react";
import { zeroAddress } from "viem";

import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { DisplayDuration } from "@/components/atoms/datetime/DisplayDuration.tsx";
import { RelativeTime } from "@/components/atoms/datetime/RelativeTime.tsx";
import {
  ResolveAndDisplayIdentity,
  type ResolveAndDisplayIdentityProps,
} from "@/components/atoms/identity";
import { NameDisplay } from "@/components/atoms/identity/utils.tsx";
import { isQualifiedReferral } from "@/components/referral-awards-program/referrals/utils.ts";
import type { ReferralIncentiveProgram } from "@/types/referralIncentivePrograms.ts";
import { useIsMobile } from "@/utils/hooks/useMobile.tsx";
import {
  buildExternalEnsAppProfileUrl,
  getBlockExplorerUrlForTransactionHash,
} from "@/utils/namespace.ts";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import {
  RegistrarActionTypes,
  ZERO_ENCODED_REFERRER,
  buildUnresolvedIdentity,
  isRegistrarActionReferralAvailable,
} from "@ensnode/ensnode-sdk";

interface LabeledFieldProps {
  fieldLabel: string;
  className?: string;
}

/**
 * Display a labeled field.
 */
function LabeledField({ fieldLabel, className, children }: PropsWithChildren<LabeledFieldProps>) {
  return (
    <div
      className={cn(
        "max-sm:w-full flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch",
        className,
      )}
    >
      <p className="text-muted-foreground text-sm leading-normal font-normal">{fieldLabel}</p>
      {children}
    </div>
  );
}

interface ResolveAndDisplayReferrerIdentityProps
  extends Omit<ResolveAndDisplayIdentityProps, "identity"> {
  chainId: DefaultableChainId;
  referral: RegistrarActionReferral;
}

/**
 * Resolve and Display Referrer Identity
 *
 * Resolves and displays the identity of the decoded referrer, or a fallback UI.
 */
function ResolveAndDisplayReferrerIdentity({
  namespaceId,
  chainId,
  referral,
  accelerate = true,
  withLink = true,
  withTooltip = true,
  withAvatar = false,
  withIdentifier = true,
  className,
}: ResolveAndDisplayReferrerIdentityProps) {
  // if encoded referrer is not available or is the zero encoded referrer then
  if (
    !isRegistrarActionReferralAvailable(referral) ||
    referral.encodedReferrer === ZERO_ENCODED_REFERRER
  ) {
    // when we only want to display avatar (without textual identifier) don't display anything (return en empty placeholder).
    // Otherwise, display a hyphen with no avatar
    return withAvatar && !withIdentifier ? (
      <div className="w-10 h-10" />
    ) : (
      <p className="h-[21px]">-</p>
    );
  }

  // if the encoded referrer was not the zeroEncodedReferrer but couldn't be
  // decoded according to the subjective interpretation rules of
  // ENS Holiday Awards then display a tooltip with details
  if (referral.decodedReferrer === zeroAddress) {
    // when we only want to display avatar (without textual identifier) use a dedicated placeholder.
    // Otherwise, display "unknown" plus the placeholder.
    const tooltipContent = (
      <p>
        Encoded referrer
        <code className="block">{referral.encodedReferrer}</code> does not follow the formatting
        requirements of incentive programs.
      </p>
    );

    const unknownAvatarPlaceholder = (className?: string, iconSize = 24) => (
      <div
        className={cn(
          "flex justify-center items-center rounded-full bg-gray-200",
          className,
          !withAvatar && "hidden",
        )}
      >
        <QuestionmarkIcon size={iconSize} className="text-gray-400" />
      </div>
    );

    return withAvatar && !withIdentifier ? (
      unknownAvatarPlaceholder("w-10 h-10", 24)
    ) : (
      <span className="h-[21px] inline-flex items-center gap-2 font-medium">
        {unknownAvatarPlaceholder("w-5 h-5", 16)}
        Unknown
        <GenericTooltip tooltipOffset={0} content={tooltipContent}>
          <InfoIcon size={16} className="flex-shrink-0 fill-neutral-300 text-white" />
        </GenericTooltip>
      </span>
    );
  }

  // resolve and display identity for the decodedReferrer address
  const referrerIdentity = buildUnresolvedIdentity(referral.decodedReferrer, namespaceId, chainId);

  return (
    <ResolveAndDisplayIdentity
      identity={referrerIdentity}
      namespaceId={namespaceId}
      accelerate={accelerate}
      withAvatar={withAvatar}
      withTooltip={withTooltip}
      withIdentifier={withIdentifier}
      className={className}
      withLink={withLink}
    />
  );
}

export interface RegistrarActionCardLoadingProps {
  showReferrer?: boolean;
}

/**
 * Display Registrar Action Card loading state
 */
export function RegistrarActionCardLoading({
  showReferrer = true,
}: RegistrarActionCardLoadingProps) {
  const isMobile = useIsMobile();

  return (
    <div className="w-full min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 text-sm bg-white">
      <LabeledField fieldLabel="Name" className="w-[15%] min-w-[162px]">
        <div className="animate-pulse h-[14px] mt-[4px] mb-[3px] bg-gray-200 rounded-sm w-1/4 sm:w-4/5" />
      </LabeledField>

      <LabeledField fieldLabel="Registrar action" className="w-[15%] min-w-[110px]">
        <div className="animate-pulse h-[14px] mt-[4px] mb-[3px] bg-gray-200 rounded-sm w-1/5 sm:w-3/4" />
      </LabeledField>

      <LabeledField fieldLabel="Duration" className="w-[10%] min-w-[110px]">
        <div className=" animate-pulse h-[14px] mt-[4px] mb-[3px] bg-gray-200 rounded-sm w-1/4 sm:w-2/3" />
      </LabeledField>

      <div className="flex flex-row flex-nowrap justify-start items-center gap-3 max-sm:w-full w-[15%] min-w-[162px]">
        {!isMobile && <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />}
        <LabeledField fieldLabel="Registrant" className="sm:min-w-[110px]">
          <div className="w-full flex flex-row flex-nowrap max-sm:justify-end justify-start items-center gap-2">
            {isMobile && <div className="animate-pulse w-5 h-5 bg-gray-200 rounded-full" />}
            <div className="animate-pulse h-[14px] mt-[4px] mb-[3px] bg-gray-200 rounded-sm w-1/4 sm:w-4/5" />
          </div>
        </LabeledField>
      </div>

      {showReferrer && (
        <div className="flex flex-row flex-nowrap justify-start items-center gap-3 max-sm:w-full w-[15%] min-w-[162px]">
          {!isMobile && <div className="animate-pulse w-10 h-10 bg-gray-200 rounded-full" />}
          <LabeledField fieldLabel="Referrer" className="sm:min-w-[110px]">
            <div className="w-full flex flex-row flex-nowrap max-sm:justify-end justify-start items-center gap-2">
              {isMobile && <div className="animate-pulse w-5 h-5 bg-gray-200 rounded-full" />}
              <div className="animate-pulse h-[14px] mt-[4px] mb-[3px] bg-gray-200 rounded-sm w-1/4 sm:w-3/5" />
            </div>
          </LabeledField>
        </div>
      )}

      <LabeledField fieldLabel="Incentive program" className="w-[15%] min-w-[162px]">
        <div className=" animate-pulse h-[14px] mt-[4px] mb-[3px] bg-gray-200 rounded-sm w-1/4 sm:w-4/5" />
      </LabeledField>
    </div>
  );
}

export interface RegistrarActionCardProps {
  namespaceId: ENSNamespaceId;
  namedRegistrarAction: NamedRegistrarAction;
  referralIncentiveProgram: ReferralIncentiveProgram;
  now: UnixTimestamp;
  showReferrer?: boolean;
}

/**
 * Display a single Registrar Action
 */
export function RegistrarActionCard({
  namespaceId,
  namedRegistrarAction,
  referralIncentiveProgram,
  now,
  showReferrer = true,
}: RegistrarActionCardProps) {
  const isMobile = useIsMobile();
  const { registrant, registrationLifecycle, type, referral, transactionHash } =
    namedRegistrarAction.action;
  const { chainId } = registrationLifecycle.subregistry.subregistryId;

  const transactionDetailUrl = getBlockExplorerUrlForTransactionHash(chainId, transactionHash);
  const withTransactionLink = ({ children }: PropsWithChildren) =>
    // wrap `children` content with a transaction link only if the URL is defined
    transactionDetailUrl ? (
      <a
        target="_blank"
        className="w-fit text-blue-600 font-medium hover:underline hover:underline-offset-[25%]"
        href={transactionDetailUrl.toString()}
      >
        {children}
      </a>
    ) : (
      children
    );

  const registrantIdentity = buildUnresolvedIdentity(registrant, namespaceId, chainId);

  return (
    <div className="w-full min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 text-sm bg-white">
      <LabeledField fieldLabel="Name" className="w-[15%] min-w-[162px]">
        <a
          target="_blank"
          href={buildExternalEnsAppProfileUrl(namedRegistrarAction.name, namespaceId)?.href}
          className="max-sm:max-w-3/4 sm:w-full box-border overflow-x-auto text-blue-600 font-medium hover:underline hover:underline-offset-[25%] whitespace-nowrap"
        >
          <NameDisplay name={namedRegistrarAction.name} className="h-[21px]" />
        </a>
      </LabeledField>

      <LabeledField
        fieldLabel={type === RegistrarActionTypes.Registration ? "Registered" : "Renewed"}
        className="w-[15%] min-w-[110px]"
      >
        <p className="h-[21px] font-medium">
          <RelativeTime
            timestamp={namedRegistrarAction.action.block.timestamp}
            tooltipPosition="top"
            conciseFormatting={true}
            contentWrapper={withTransactionLink}
            relativeTo={now}
          />
        </p>
      </LabeledField>

      <LabeledField fieldLabel="Duration" className="w-[10%] min-w-[110px]">
        <p className="h-[21px] font-medium">
          <DisplayDuration duration={namedRegistrarAction.action.incrementalDuration} />
        </p>
      </LabeledField>

      <div className="flex flex-row flex-nowrap justify-start items-center gap-3 max-sm:w-full w-[15%] min-w-[162px]">
        {!isMobile && (
          <ResolveAndDisplayIdentity
            identity={registrantIdentity}
            namespaceId={namespaceId}
            withAvatar={true}
            withTooltip={false}
            withIdentifier={false}
          />
        )}
        <LabeledField fieldLabel="Registrant" className="sm:min-w-[110px]">
          <ResolveAndDisplayIdentity
            identity={registrantIdentity}
            namespaceId={namespaceId}
            withAvatar={isMobile}
            withTooltip={false}
            className="font-medium sm:max-[1220px]:max-w-[110px] min-[1220px]:max-w-[140px]"
          />
        </LabeledField>
      </div>

      {showReferrer && (
        <div className="flex flex-row flex-nowrap justify-start items-center gap-3 max-sm:w-full w-[15%] min-w-[162px]">
          {!isMobile && (
            <ResolveAndDisplayReferrerIdentity
              chainId={chainId}
              namespaceId={namespaceId}
              referral={referral}
              withAvatar={true}
              withIdentifier={false}
              withTooltip={false}
            />
          )}
          <LabeledField fieldLabel="Referrer" className="w-[15%] min-w-[110px]">
            <ResolveAndDisplayReferrerIdentity
              chainId={chainId}
              namespaceId={namespaceId}
              referral={referral}
              withAvatar={isMobile}
              withIdentifier={true}
              withTooltip={false}
            />
          </LabeledField>
        </div>
      )}

      <LabeledField fieldLabel="Incentive program" className="w-[15%] min-w-[162px]">
        <div className="w-fit sm:h-[21px] flex flex-row flex-nowrap justify-start items-center gap-2">
          <p className="text-black font-medium max-sm:text-right">
            {isQualifiedReferral(referralIncentiveProgram, namedRegistrarAction)
              ? referralIncentiveProgram.name
              : "-"}
          </p>
        </div>
      </LabeledField>
    </div>
  );
}

export const RegistrarActionCardMemo = memo(RegistrarActionCard);
