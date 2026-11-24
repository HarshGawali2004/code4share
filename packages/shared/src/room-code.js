// Room code generation and formatting utilities
// TODO: Implement secure random human-readable room codes
export function formatRoomCode(code) {
  return code ? code.trim().toLowerCase() : '';
}
