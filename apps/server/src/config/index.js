// Server configuration from environment variables
// TODO: Validate required environment variables at startup
export const config = {
  port: process.env.PORT || 4000,
  supabaseUrl: process.env.SUPABASE_URL || '',
  roomTtlMinutes: Number(process.env.ROOM_TTL_MINUTES) || 60
};
