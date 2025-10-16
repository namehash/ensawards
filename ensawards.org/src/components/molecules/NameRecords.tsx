import { useRecords } from "@ensnode/ensnode-react";
import type { Name } from "@ensnode/ensnode-sdk";
export interface NameRecordsProps {
  name: Name;
}

export function NameRecords({ name }: NameRecordsProps) {
  const { data, isLoading, error } = useRecords({
    name: name,
    selection: {
      addresses: [60], // ETH CoinType
      texts: ["avatar", "com.twitter"],
    },
    query: {
      refetchInterval: 5 * 60 * 1000, // 5 minutes
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (data === undefined) {
    return <div>No data</div>;
  }
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <h3>
        Resolved Records for <b>{name}</b>
      </h3>
      {data.records.addresses && <p>ETH Address: {data.records.addresses["60"]}</p>}
      {data.records.texts && (
        <div>
          <p>Avatar: {data.records.texts.avatar}</p>
          <p>Twitter: {data.records.texts["com.twitter"]}</p>
        </div>
      )}
    </div>
  );
}
