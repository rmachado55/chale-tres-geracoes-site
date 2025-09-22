-- Enable RLS on products table and allow public read access for restaurant menu
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to all products (restaurant menu)
CREATE POLICY "Allow public read access to products" 
ON public.products 
FOR SELECT 
USING (true);