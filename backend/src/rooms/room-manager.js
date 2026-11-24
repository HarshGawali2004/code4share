// In-memory room registry with participant limits and expiration
// TODO: Track active peer count, TTL expiration, and room eviction
export const activeRooms = new Map();

export function createRoom(roomId, options) {
  return { roomId, peers: new Set() };
}
