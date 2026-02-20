import type { Protocol, ProtocolId } from "./types.ts";

const definedProtocols = new Map<ProtocolId, Protocol>();

export function defineProtocol(protocol: Protocol): void {
  definedProtocols.set(protocol.id, protocol);
}

export function getDefinedProtocols(): Protocol[] {
  return [...definedProtocols.values()];
}
