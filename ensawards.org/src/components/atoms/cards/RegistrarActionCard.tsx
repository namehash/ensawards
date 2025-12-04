import { memo, type PropsWithChildren } from "react";
import { zeroAddress } from "viem";
import { Info as InfoIcon, Check as CheckIcon, X as XIcon } from "lucide-react";
import type {
    DefaultableChainId,
    ENSNamespaceId,
    NamedRegistrarAction,
    RegistrarActionReferral,
} from "@ensnode/ensnode-sdk";

import {
    buildUnresolvedIdentity,
    isRegistrarActionReferralAvailable,
    RegistrarActionTypes,
    ZERO_ENCODED_REFERRER,
} from "@ensnode/ensnode-sdk";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {ResolveAndDisplayIdentity} from "@/components/atoms/identity";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {buildExternalEnsAppProfileUrl, getBlockExplorerUrlForTransactionHash} from "@/utils/namespace.ts";
import {RelativeTime} from "@/components/atoms/datetime/RelativeTime.tsx";
import {NameDisplay} from "@/components/atoms/identity/utils.tsx";
import {DisplayDuration} from "@/components/atoms/datetime/DisplayDuration.tsx";
import {useIsMobile} from "@/utils/hooks/useMobile.tsx";

// TODO: Restyle all elements accordingly to Figma

interface LabeledFieldProps {
    fieldLabel: string;
    className?: string;
}

/**
 * Display a labeled field.
 */
function LabeledField({ fieldLabel, className, children }: PropsWithChildren<LabeledFieldProps>) {
    return (
        <div className={cn("max-sm:w-full flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0 max-sm:self-stretch", className)}>
            <p className="text-muted-foreground text-sm leading-normal font-normal">{fieldLabel}</p>
            {children}
        </div>
    );
}

interface ResolveAndDisplayReferrerIdentityProps {
    namespaceId: ENSNamespaceId;
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
                                           }: ResolveAndDisplayReferrerIdentityProps) {
    // if encoded referrer is not available or is the zero encoded referrer then
    // display a hyphen
    if (
        !isRegistrarActionReferralAvailable(referral) ||
        referral.encodedReferrer === ZERO_ENCODED_REFERRER
    ) {
        return <p className="h-[21px]">-</p>;
    }

    // if the encoded referrer was not the zeroEncodedReferrer but couldn't be
    // decoded according to the subjective interpretation rules of
    // ENS Holiday Awards then display a tooltip with details
    if (referral.decodedReferrer === zeroAddress) {
        return (
            <span className="inline-flex align-middle gap-1">
        Unknown
        <Tooltip delayDuration={1000}>
          <TooltipTrigger>
            <InfoIcon className="flex-shrink-0" />
          </TooltipTrigger>
          <TooltipContent
              side="top"
              className="bg-gray-50 text-sm text-black text-left shadow-md outline-none w-fit"
          >
            Encoded referrer
            <code className="block">{referral.encodedReferrer}</code> does not follow the formatting
            requirements of ENS Holiday Awards.
          </TooltipContent>
        </Tooltip>
      </span>
        );
    }

    // resolve and display identity for the decodedReferrer address
    const referrerIdentity = buildUnresolvedIdentity(referral.decodedReferrer, namespaceId, chainId);

    return (
        <ResolveAndDisplayIdentity
            identity={referrerIdentity}
            namespaceId={namespaceId}
            withAvatar={false}
            withTooltip={false}
            className="font-medium"
        />
    );
}

/**
 * Display Registrar Action Card loading state
 */
export function RegistrarActionCardLoading() {
    return (
        <div className="w-full min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 text-sm bg-white">
            <LabeledField fieldLabel="Name" className="w-[30%] min-w-[192px]">
                <div className="animate-pulse mt-1 h-6 bg-muted rounded-sm w-3/5" />
            </LabeledField>

            <LabeledField fieldLabel="Registered" className="w-[15%] min-w-[140px]">
                <div className="animate-pulse mt-1 h-6 bg-muted rounded-sm w-4/5" />
            </LabeledField>

            <LabeledField fieldLabel="Duration" className="w-[10%] min-w-[140px]">
                <div className=" animate-pulse mt-1 h-6 bg-muted rounded-sm w-4/5" />
            </LabeledField>

            <LabeledField fieldLabel="Registrant" className="w-1/5 min-w-[192px]">
                {/*TODO: Improve skeleton*/}
                <div className="animate-pulse mt-1 h-6 bg-muted rounded-sm w-3/5" />
            </LabeledField>

            <LabeledField fieldLabel="Referrer" className="w-[15%]  min-w-[140px]">
                <div className=" animate-pulse mt-1 h-6 bg-muted rounded-sm w-full" />
            </LabeledField>

            <LabeledField fieldLabel="ENS Holiday Awards" className="w-[15%] min-w-[140px]">
                {/*TODO: Improve skeleton*/}
                <div className=" animate-pulse mt-1 h-6 bg-muted rounded-sm w-full"/>
            </LabeledField>
        </div>
    );
}

export interface RegistrarActionCardProps {
    namespaceId: ENSNamespaceId;
    namedRegistrarAction: NamedRegistrarAction;
}

/**
 * Display a single Registrar Action
 */
export function RegistrarActionCard({
                                               namespaceId,
                                               namedRegistrarAction,
                                           }: RegistrarActionCardProps) {
    const isMobile = useIsMobile();
    const {registrant, registrationLifecycle, type, referral, transactionHash} =
        namedRegistrarAction.action;
    const {chainId} = registrationLifecycle.subregistry.subregistryId;

    const transactionDetailUrl = getBlockExplorerUrlForTransactionHash(chainId, transactionHash);
    const withTransactionLink = ({children}: PropsWithChildren) =>
        // wrap `children` content with a transaction link only if the URL is defined
        transactionDetailUrl ? (
            <a target="_blank" className="w-fit text-blue-600 font-medium hover:underline hover:underline-offset-[25%]" href={transactionDetailUrl.toString()}>{children}</a>
        ) : (
            children
        );

    const registrantIdentity = buildUnresolvedIdentity(registrant, namespaceId, chainId);

    return (
        <div className="w-full min-h-[80px] box-border flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start sm:items-center gap-2 p-4 sm:p-6 sm:gap-y-5 rounded-2xl border border-gray-200 text-sm bg-white">
            <LabeledField fieldLabel="Name" className="w-1/5 min-w-[192px]">
                <div className="sm:w-full h-[21px] overflow-x-auto">
                    {/*TODO: Temporarily assuming that for the registered (renewed) name we'd want to link to ENSManagerApp */}
                    <a
                        target="_blank"
                        href={buildExternalEnsAppProfileUrl(namedRegistrarAction.name, namespaceId)?.href}
                        className="w-fit text-blue-600 font-medium hover:underline hover:underline-offset-[25%]"
                    >
                        <NameDisplay name={namedRegistrarAction.name} />
                    </a>
                </div>
            </LabeledField>

            <LabeledField
                fieldLabel={type === RegistrarActionTypes.Registration ? "Registered" : "Renewed"}
                className="w-[15%] min-w-[140px]"
            >
                <p className="h-[21px]"><RelativeTime
                    timestamp={namedRegistrarAction.action.block.timestamp}
                    tooltipPosition="top"
                    conciseFormatting={true}
                    contentWrapper={withTransactionLink}
                /></p>
            </LabeledField>

            <LabeledField fieldLabel="Duration" className="w-[10%]  min-w-[140px]">
                <p className="h-[21px] font-medium">
                    <DisplayDuration duration={namedRegistrarAction.action.incrementalDuration}/>
                </p>
            </LabeledField>

            <div className="flex flex-row flex-nowrap justify-start items-center gap-3 max-sm:w-full w-1/5 min-w-[192px]">
                {!isMobile && <ResolveAndDisplayIdentity
                    identity={registrantIdentity}
                    namespaceId={namespaceId}
                    accelerate={true}
                    withAvatar={true}
                    withTooltip={false}
                    withIdentifier={false}
                    className="font-medium"
                    avatarStyles="w-10 h-10"
                />}
                <LabeledField fieldLabel="Registrant" className="sm:min-w-[140px]">
                    <ResolveAndDisplayIdentity
                        identity={registrantIdentity}
                        namespaceId={namespaceId}
                        accelerate={true}
                        withAvatar={isMobile}
                        withTooltip={false}
                        className="font-medium sm:max-w-[140px] sm:overflow-x-auto"
                        avatarStyles="w-5 h-5"
                    />
                </LabeledField>
            </div>

            <LabeledField fieldLabel="Referrer" className="w-[15%] min-w-[140px]">
                <ResolveAndDisplayReferrerIdentity
                    chainId={chainId}
                    namespaceId={namespaceId}
                    referral={referral}
                />
            </LabeledField>

            <LabeledField fieldLabel="ENS Holiday Awards" className="w-[15%] min-w-[140px]">
                <div className="w-fit h-[21px] flex flex-row flex-nowrap justify-start items-center gap-2">
                    {/*TODO: Should the qualification be determined somehow else? What about potential bulk registration?*/}
                    {referral.decodedReferrer === null ? <XIcon size={20} className="text-red-600" /> : <CheckIcon size={20} className="text-emerald-600"/>}
                    <p className="text-black font-medium">{referral.decodedReferrer === null ? "Not qualified" : "Qualified"}</p>
                </div>
            </LabeledField>
        </div>
    );
}

export const RegistrarActionCardMemo = memo(RegistrarActionCard);
