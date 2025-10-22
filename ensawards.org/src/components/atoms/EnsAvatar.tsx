import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
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
        <EnsAvatarFallback />
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
      {loadingStatus === "error" && <EnsAvatarFallback />}
      {(loadingStatus === "idle" || loadingStatus === "loading") && <AvatarLoading />}
    </Avatar>
  );
};

//TODO: there was trouble with importing the boring-avatars component.
// Spent too much time on it, and couldn't fix it.
// Decided to rollback to using an icon,
// but would like to investigate more when I have more time.
const EnsAvatarFallback = () => <CircleUser className="w-[21px] h-[21px] text-gray-200" />;

const AvatarLoading = () => <div className="h-full w-full rounded-full animate-pulse bg-muted" />;
