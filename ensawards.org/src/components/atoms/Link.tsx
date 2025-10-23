import React, {type PropsWithChildren, type Ref} from "react";
import {ExternalLink as ExternalLinkIcon} from "lucide-react";
import {cn} from "@/utils/tailwindClassConcatenation.ts";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    href: string;
    className?: string;
}

/**
 * Renders an link.
 */

//TODO: For some reason inlining is not working when in .astro, but it's just fine in .tsx.
// Probably related to hydration. Be careful and investigate later
export function Link({href, className, children, ...props}: PropsWithChildren<LinkProps>) {
    return (
        <a
            href={href}
            className={cn("group inline-flex flex-col justify-start items-start gap-0", className)}
            {...props}
        >
            <p className="flex flex-row flex-nowrap gap-1 justify-start max-sm:items-start items-center transition-all duration-200">
                {children}
            </p>
            <span
                className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-[1px] bg-current self-stretch" />
        </a>
    );
}

interface ExternalLinkWithIconProps extends LinkProps {
    iconSize?: number;
}

/**
 * Renders an external link
 */
export function ExternalLink({href, className, children}: PropsWithChildren<LinkProps>){
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={className}
        >
            {children}
        </Link>
    );
}


/**
 * Renders an external link with an external link icon.
 */
export function ExternalLinkWithIcon({href, className, iconSize = 16, children}: PropsWithChildren<ExternalLinkWithIconProps>) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={className}
        >
                {children}
                <ExternalLinkIcon size={iconSize}
                                  className="sm:pb-[2px] opacity-40 group-hover:opacity-100"/>
        </Link>
    );
}