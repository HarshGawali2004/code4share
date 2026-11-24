-- Plans table (configuration driven)
CREATE TABLE IF NOT EXISTS public.plans (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  limits JSONB NOT NULL DEFAULT '{}'::jsonb,
  price_cents INTEGER NOT NULL DEFAULT 0,
  currency TEXT NOT NULL DEFAULT 'USD'
);

-- RLS: anyone can read available plans
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Plans are publicly viewable" ON public.plans FOR SELECT USING (true);
