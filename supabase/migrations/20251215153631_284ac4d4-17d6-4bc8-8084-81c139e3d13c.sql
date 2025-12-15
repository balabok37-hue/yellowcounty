-- Add is_reserved column to machines table
ALTER TABLE public.machines ADD COLUMN is_reserved boolean DEFAULT false;