// React hook for session and room state
// TODO: Return active room, peer connections, and signaling status
export function useSession() {
  return { connected: false, peers: [] };
}
