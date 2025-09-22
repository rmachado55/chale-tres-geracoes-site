-- Disable RLS on products table since this is a public-facing restaurant menu
ALTER TABLE public.products DISABLE ROW LEVEL SECURITY;