import { GenericTooltip } from "@/components/atoms/GenericTooltip.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import { EnsIcon } from "@namehash/namehash-ui";

export interface EnsManagerAppLinkProps {
  link: string;
  text: string;
  withIcon?: boolean;
  className?: string;
}

export const EnsManagerAppLink = ({
  link,
  text,
  withIcon = false,
  className,
}: EnsManagerAppLinkProps) => {
  if (!withIcon) {
    return (
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="text-sm leading-normal font-medium text-blue-600 whitespace-nowrap hover:underline hover:underline-offset-[25%]"
      >
        {text}
      </a>
    );
  }

  return (
    <TooltipProvider delayDuration={200} skipDelayDuration={0}>
      <a href={link} rel="noreferrer" target="_blank">
        <GenericTooltip tooltipOffset={4} content={<p>{text}</p>}>
          <EnsIcon
            width={20}
            height={16}
            className={cn("text-[#0080BC] cursor-pointer", className)}
          />
        </GenericTooltip>
      </a>
    </TooltipProvider>
  );
};
