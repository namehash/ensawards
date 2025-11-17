import * as React from "react";
import type {ButtonProps} from "@headlessui/react";
import {cn} from "@/utils/tailwindClassConcatenation.ts";
import {shadcnButtonVariants} from "@/components/ui/shadcnButtonStyles.ts";

export interface CopyButtonProps extends Omit<ButtonProps, "onClick"> {
    value: string;
    message?: string;
    icon?: React.ReactNode;
    successIcon?: React.ReactNode;
}

export function CopyButton({
                               value,
                               message = "Copied to clipboard",
                               icon,
                               successIcon,
                               className,
                               children,
                               ...props
                           }: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false);
    const [isCopying, setIsCopying] = React.useState(false);

    React.useEffect(() => {
        if (hasCopied) {
            const timeout = setTimeout(() => setHasCopied(false), 2000);
            return () => clearTimeout(timeout);
        }
    }, [hasCopied]);

    async function copyToClipboard() {
        if (isCopying) return;

        try {
            setIsCopying(true);
            await navigator.clipboard.writeText(value);
            setHasCopied(true);
        } catch (error) {
            console.error("Failed to copy text:", error);

            //TODO: Removed the toaster for the sake of simplicity.
            // Can add sonner (toaster) or a simple alert,
            // depending on allocated time and given feedback
        } finally {
            setIsCopying(false);
        }
    }

    return (
        <button
            type="button"
            onClick={copyToClipboard}
            disabled={isCopying}
            className={cn(shadcnButtonVariants({
                variant: "outline",
                size: "sm",
                className: className,
            }),)}
            {...props}
        >
            {hasCopied ? (successIcon ? successIcon : "Copied") : (icon ? icon : "Copy")}
            <span className="sr-only">Copy to clipboard</span>
        </button>
    );
}
