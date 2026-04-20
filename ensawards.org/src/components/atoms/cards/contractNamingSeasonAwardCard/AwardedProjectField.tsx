import { useIsMobile } from "@namehash/namehash-ui";
import { getAppDetailsUrl } from "data/apps/utils";
import { type AwardedProject, AwardedProjectTypes } from "data/awards/awarded-project-types";
import { getProtocolDetailsUrl } from "data/protocols/utils";

import { cn } from "@/utils/tailwindClassConcatenation";

export const AwardedProjectField = ({ project }: { project?: AwardedProject }) => {
  const isMobile = useIsMobile();

  if (!project) return <AwardedProjectFieldContainer value={<span>-</span>} />;

  switch (project.type) {
    case AwardedProjectTypes.App:
      const AppIcon = project.app.icon;
      const appDetailsUrl = getAppDetailsUrl(project.app);
      return (
        <AwardedProjectFieldContainer
          value={
            <a
              href={appDetailsUrl.href}
              className="text-blue-600 hover:underline hover:underline-offset-[25%]"
            >
              {project.app.name}
            </a>
          }
          icon={
            <a href={appDetailsUrl.href}>
              <AppIcon className={cn("p-0 shrink-0", isMobile ? "w-5 h-5" : "w-10 h-10")} />
            </a>
          }
        />
      );
    case AwardedProjectTypes.Protocol:
      const ProtocolIcon = project.protocol.icon;
      const protocolDetailsUrl = getProtocolDetailsUrl(project.protocol);
      return (
        <AwardedProjectFieldContainer
          value={
            <a
              href={protocolDetailsUrl.href}
              className="text-blue-600 hover:underline hover:underline-offset-[25%]"
            >
              {project.protocol.name}
            </a>
          }
          icon={
            <a href={protocolDetailsUrl.href}>
              <ProtocolIcon className={cn("p-0 shrink-0", isMobile ? "w-5 h-5" : "w-10 h-10")} />
            </a>
          }
        />
      );
    case AwardedProjectTypes.Custom:
      return (
        <AwardedProjectFieldContainer
          value={
            project.link ? (
              <a
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:underline-offset-[25%]"
              >
                {project.name}
              </a>
            ) : (
              <span>{project.name}</span>
            )
          }
        />
      );
  }
};

interface AwardedProjectFieldContainerProps {
  value: React.ReactNode;
  icon?: React.ReactNode;
}

const AwardedProjectFieldContainer = ({ value, icon }: AwardedProjectFieldContainerProps) => (
  <div className="sm:min-w-[172px] flex flex-row justify-start items-center gap-3 max-sm:self-stretch">
    <div className="hidden sm:block w-10 h-10 flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div className="max-sm:w-full sm:min-w-[120px] flex flex-row sm:flex-col flex-nowrap justify-between sm:justify-center items-start gap-0">
      <p className="text-muted-foreground text-sm leading-normal font-normal cursor-default">
        Project
      </p>
      <div className="flex flex-row justify-start items-center gap-2">
        <div className="block sm:hidden w-5 h-5 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <p className="text-sm leading-normal font-medium max-sm:text-right text-black">{value}</p>
      </div>
    </div>
  </div>
);
