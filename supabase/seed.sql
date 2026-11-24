-- Placeholder seed data for subscription plans
INSERT INTO public.plans (id, name, limits, price_cents, currency)
VALUES
  ('free', 'Free', '{"session_minutes": 60, "max_participants": 2, "sessions_per_day": 5, "max_file_kb": 256, "saved_files": 0}'::jsonb, 0, 'USD'),
  ('pro', 'Pro', '{"session_minutes": 480, "max_participants": 10, "sessions_per_day": 50, "max_file_kb": 2048, "saved_files": 10}'::jsonb, 900, 'USD')
ON CONFLICT (id) DO NOTHING;
