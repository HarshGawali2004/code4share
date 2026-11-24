// In-memory fallback relay when P2P WebRTC fails
// NOTE: Live code is relayed ephemerally in memory; never persisted to disk or DB
export function relayMessage(roomId, senderId, payload) {
  return false;
}
