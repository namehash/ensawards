import type { Protocol, ProtocolId } from "./types.ts";

const definedProtocols = new Map<ProtocolId, Protocol>();

export function defineProtocol(protocol: Protocol): void {
  // enforce protocol's id uniqueness invariant
  if (definedProtocols.has(protocol.id)) {
    throw new Error(`Protocol with id=${protocol.id} is already defined`);
  }

  definedProtocols.set(protocol.id, protocol);
}

export function getDefinedProtocols(): Protocol[] {
  return [...definedProtocols.values()];
}
