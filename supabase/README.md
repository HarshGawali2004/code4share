# Supabase Configuration & Migrations

- Every table must have Row Level Security (RLS) enabled.
- Users can only read and modify their own records.
- 48-hour file deletion is managed via scheduled cleanup and Storage API hooks.
- Exact deletion mechanisms to be verified against latest Supabase documentation.
