import {createConfig, ENSNodeProvider} from "@ensnode/ensnode-react";
import {NameRecords} from "@/components/molecules/NameRecords.tsx";
import type {Name} from "@ensnode/ensnode-sdk";
import {useState} from "react";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {shadcnButtonVariants} from "@/components/ui/shadcnButtonStyles.ts";

export interface ProviderWrapperProps {
    connectionURL: string;
}

const EXAMPLE_NAMES: Name[] = [
    "vitalik.eth",
    "gregskril.eth",
    "katzman.base.eth",
    "jesse.base.eth",
    "alain.linea.eth",
    "goinfrex.linea.eth",
    "brantly.eth",
    "lightwalker.eth",
]

export function EnsNodeReactContent({connectionURL}: ProviderWrapperProps){
    const config = createConfig({ url: connectionURL });
    const [selectedName, setSelectedName] = useState(EXAMPLE_NAMES[0]);

    return (
        <ENSNodeProvider config={config}>
            <div className="w-full h-fit flex flex-col justify-start items-start gap-6">
                <h1 className="">Select a name to preview its avatar</h1>
                <div className="flex flex-row flex-wrap justify-start items-center gap-4">{EXAMPLE_NAMES.map((name) =>               <button
                        key={name}
                        className={cn(
                            shadcnButtonVariants({
                                variant: selectedName === name ? "default" : "outline",
                                size: "default",
                                className: "onScrollButton rounded-full",
                            }),
                        )}
                        onClick={() => setSelectedName(name)}
                    >
                        {name}
                    </button>
                )}</div>
            </div>
            <NameRecords name={selectedName} />
        </ENSNodeProvider>
    );
}