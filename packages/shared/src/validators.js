// Shared input and file validators
// TODO: Implement room code and session payload validation
export function isValidRoomCode(code) {
  return typeof code === 'string' && code.length >= 4;
}
