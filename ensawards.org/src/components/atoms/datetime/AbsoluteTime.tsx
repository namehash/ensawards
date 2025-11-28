import type { UnixTimestamp } from "@ensnode/ensnode-sdk";
import { fromUnixTime, intlFormat } from "date-fns";
import { useEffect, useState } from "react";

/**
 * Client-only absolute time component
 */
export function AbsoluteTime({
  timestamp,
  options,
}: {
  timestamp: UnixTimestamp;
  options: Intl.DateTimeFormatOptions;
}) {
  const date = fromUnixTime(timestamp);
  const [absoluteTime, setAbsoluteTime] = useState<string>("");

  useEffect(() => {
    setAbsoluteTime(intlFormat(date, options));
  }, [date, options]);

  return <>{absoluteTime}</>;
}
