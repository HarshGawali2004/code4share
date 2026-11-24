// Scheduled job to purge expired 48-hour saved files
// TODO: Query saved_files where expires_at < NOW() and delete from Storage
export async function purgeExpiredFiles() {
  return 0;
}
