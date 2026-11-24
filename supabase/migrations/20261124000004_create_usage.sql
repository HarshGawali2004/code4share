-- Usage tracking table
CREATE TABLE IF NOT EXISTS public.usage (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_or_device_id TEXT NOT NULL,
  day DATE NOT NULL DEFAULT CURRENT_DATE,
  sessions_count INTEGER NOT NULL DEFAULT 0,
  minutes_used INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT unique_usage_day UNIQUE (user_or_device_id, day)
);

-- RLS: users read own usage metrics
ALTER TABLE public.usage ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users view own usage" ON public.usage FOR SELECT USING (user_or_device_id = auth.uid()::text);
