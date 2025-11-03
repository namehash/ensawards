import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { cn } from "@/utils/tailwindClassConcatenation.ts";
import type { Name } from "@ensnode/ensnode-sdk";
import { CircleUser } from "lucide-react";
import * as React from "react";

export interface EnsAvatarProps {
  name: Name;
  avatarUrl?: URL;
  className?: string;
}

type ImageLoadingStatus = Parameters<
  NonNullable<React.ComponentProps<typeof AvatarImage>["onLoadingStatusChange"]>
>[0];

export const EnsAvatar = ({ name, avatarUrl, className }: EnsAvatarProps) => {
  const [loadingStatus, setLoadingStatus] = React.useState<ImageLoadingStatus>("idle");
  if (avatarUrl === undefined) {
    return (
      <Avatar className={className}>
        <EnsAvatarFallback withUrl={false} />
      </Avatar>
    );
  }

  return (
    <Avatar className={className}>
      <AvatarImage
        src={avatarUrl.href}
        alt={name}
        onLoadingStatusChange={(status: ImageLoadingStatus) => {
          setLoadingStatus(status);
        }}
      />
      {loadingStatus === "error" && <EnsAvatarFallback withUrl={true} />}
      {(loadingStatus === "idle" || loadingStatus === "loading") && <AvatarLoading />}
    </Avatar>
  );
};

//TODO: there was trouble with importing the boring-avatars component.
// Spent too much time on it, and couldn't fix it.
// Decided to rollback to using an icon,
// but would like to investigate more when I have more time.
interface EnsAvatarFallbackProps {
  withUrl: boolean;
}
const EnsAvatarFallback = ({ withUrl }: EnsAvatarFallbackProps) => (
  <CircleUser className={cn("w-[17px] h-[17px]", withUrl ? "text-black" : "text-gray-200")} />
);

const AvatarLoading = () => <div className="h-full w-full rounded-full animate-pulse bg-muted" />;
