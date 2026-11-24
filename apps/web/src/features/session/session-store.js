// Reactive store for room and peer session state
// TODO: Track current room ID, peer list, and connection health
export const initialSessionState = {
  roomId: null,
  peers: [],
  mode: 'p2p'
};
