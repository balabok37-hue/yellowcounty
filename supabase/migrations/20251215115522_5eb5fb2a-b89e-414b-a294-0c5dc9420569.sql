
-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy for user_roles: only admins can view roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create machines table
CREATE TABLE public.machines (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    year INTEGER NOT NULL,
    hours INTEGER,
    miles INTEGER,
    price NUMERIC(12, 2) NOT NULL,
    original_price NUMERIC(12, 2),
    discount INTEGER,
    location TEXT NOT NULL DEFAULT 'Billings, MT',
    category TEXT NOT NULL,
    description TEXT,
    specs JSONB,
    is_hot_offer BOOLEAN DEFAULT false,
    is_sold BOOLEAN DEFAULT false,
    image_position TEXT,
    sort_order INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on machines
ALTER TABLE public.machines ENABLE ROW LEVEL SECURITY;

-- Public can view all machines
CREATE POLICY "Anyone can view machines"
ON public.machines
FOR SELECT
USING (true);

-- Only admins can insert machines
CREATE POLICY "Admins can insert machines"
ON public.machines
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can update machines
CREATE POLICY "Admins can update machines"
ON public.machines
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete machines
CREATE POLICY "Admins can delete machines"
ON public.machines
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create machine_images table
CREATE TABLE public.machine_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    machine_id UUID REFERENCES public.machines(id) ON DELETE CASCADE NOT NULL,
    url TEXT NOT NULL,
    position INTEGER NOT NULL DEFAULT 0,
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on machine_images
ALTER TABLE public.machine_images ENABLE ROW LEVEL SECURITY;

-- Public can view all machine images
CREATE POLICY "Anyone can view machine images"
ON public.machine_images
FOR SELECT
USING (true);

-- Only admins can insert machine images
CREATE POLICY "Admins can insert machine images"
ON public.machine_images
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can update machine images
CREATE POLICY "Admins can update machine images"
ON public.machine_images
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete machine images
CREATE POLICY "Admins can delete machine images"
ON public.machine_images
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create storage bucket for machine images
INSERT INTO storage.buckets (id, name, public) VALUES ('machine-images', 'machine-images', true);

-- Storage policies for machine-images bucket
CREATE POLICY "Anyone can view machine images in storage"
ON storage.objects
FOR SELECT
USING (bucket_id = 'machine-images');

CREATE POLICY "Admins can upload machine images"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'machine-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update machine images in storage"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'machine-images' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete machine images in storage"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'machine-images' AND public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Apply trigger to machines table
CREATE TRIGGER update_machines_updated_at
BEFORE UPDATE ON public.machines
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
