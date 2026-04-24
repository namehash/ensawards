import { useIsMobile } from "@namehash/namehash-ui";
import { getAppDetailsUrl } from "data/apps/utils";
import { type AwardedEntity, AwardedEntityTypes } from "data/awards/awarded-entity-types";
import { getProtocolDetailsUrl } from "data/protocols/utils";

import { EntityPlaceholderIcon } from "@/components/atoms/icons/EntityPlaceholderIcon";
import { cn } from "@/utils/tailwindClassConcatenation";

export const AwardedEntityField = ({ entity }: { entity?: AwardedEntity }) => {
  const isMobile = useIsMobile();

  if (!entity) return <AwardedEntityFieldContainer value={<span>-</span>} />;

  switch (entity.type) {
    case AwardedEntityTypes.App:
      const AppIcon = entity.app.icon;
      const appDetailsUrl = getAppDetailsUrl(entity.app);
      return (
        <AwardedEntityFieldContainer
          value={
            <a
              href={appDetailsUrl.href}
              className="text-blue-600 hover:underline hover:underline-offset-[25%]"
            >
              {entity.app.name}
            </a>
          }
          icon={
            <a href={appDetailsUrl.href}>
              <AppIcon className={cn("p-0 shrink-0", isMobile ? "w-5 h-5" : "w-10 h-10")} />
            </a>
          }
        />
      );
    case AwardedEntityTypes.Protocol:
      const ProtocolIcon = entity.protocol.icon;
      const protocolDetailsUrl = getProtocolDetailsUrl(entity.protocol);
      return (
        <AwardedEntityFieldContainer
          value={
            <a
              href={protocolDetailsUrl.href}
              className="text-blue-600 hover:underline hover:underline-offset-[25%]"
            >
              {entity.protocol.name}
            </a>
          }
          icon={
            <a href={protocolDetailsUrl.href}>
              <ProtocolIcon className={cn("p-0 shrink-0", isMobile ? "w-5 h-5" : "w-10 h-10")} />
            </a>
          }
        />
      );
    case AwardedEntityTypes.Custom:
      return (
        <AwardedEntityFieldContainer
          value={
            entity.link ? (
              <a
                href={entity.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:underline-offset-[25%]"
              >
                {entity.name}
              </a>
            ) : (
              <span>{entity.name}</span>
            )
          }
        />
      );

    default:
      const _exhaustive: never = entity;
      throw new Error(`Unsupported AwardedEntityType: ${JSON.stringify(_exhaustive)}`);
  }
};

interface AwardedEntityFieldContainerProps {
  value: React.ReactNode;
  icon?: React.ReactNode;
}

const AwardedEntityFieldContainer = ({ value, icon }: AwardedEntityFieldContainerProps) => (
  <div className="sm:min-w-[172px] flex flex-row justify-start items-center gap-3 max-sm:self-stretch">
    <div className="hidden sm:block w-10 h-10 flex items-center justify-center shrink-0">
      {icon ? icon : <EntityPlaceholderIcon className="w-10 h-10" />}
    </div>
    <div className="max-sm:w-full sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0">
      <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
        Entity
      </p>
      <div className="flex flex-row justify-start items-center gap-2">
        <div className="block sm:hidden w-5 h-5 flex items-center justify-center shrink-0">
          {icon ? icon : <EntityPlaceholderIcon className="w-5 h-5" />}
        </div>
        <p className="text-sm leading-normal font-medium max-sm:text-right text-black">{value}</p>
      </div>
    </div>
  </div>
);
