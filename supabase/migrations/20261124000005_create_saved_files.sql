-- Saved files metadata table
CREATE TABLE IF NOT EXISTS public.saved_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  storage_path TEXT NOT NULL,
  size INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  expires_at TIMESTAMPTZ NOT NULL DEFAULT (timezone('utc'::text, now()) + INTERVAL '48 hours')
);

-- RLS: users manage own saved files
ALTER TABLE public.saved_files ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own saved files" ON public.saved_files FOR SELECT USING (auth.uid() = user_id);
-- Note: 48h cleanup is executed via scheduled cron job + Supabase Storage cleanup.
