-- Add SELECT policy for leads table (restrict to service role only for admin access)
-- Currently anyone can INSERT, but nobody can SELECT/UPDATE/DELETE which is secure

-- For now, we'll keep the current setup secure:
-- Public can INSERT leads (contact form)
-- No public SELECT (leads are private)
-- No public UPDATE/DELETE (leads cannot be modified by public)

-- Add comment to document security setup
COMMENT ON TABLE public.leads IS 'Contact form submissions. INSERT allowed for public, SELECT/UPDATE/DELETE restricted to service role (admin dashboard).';