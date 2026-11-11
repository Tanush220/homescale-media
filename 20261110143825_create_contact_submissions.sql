/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) — submitter's full name
  - `business_name` (text) — optional business / company name
  - `email` (text, not null) — contact email
  - `phone` (text) — contact phone number
  - `business_type` (text) — type of home-service business (roofing, construction, etc.)
  - `services_interested` (text[]) — selected services of interest
  - `message` (text) — additional message
  - `status` (text, default 'new') — tracking status for the agency owner
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`.
- Grant INSERT to `anon, authenticated` so the public contact form can submit.
- Grant SELECT/UPDATE/DELETE to `authenticated` only (agency owner reads/manages submissions after sign-in).
- No SELECT policy for anon: public visitors must not read other people's submissions.
- INSERT policy for anon + authenticated with a permissive WITH CHECK (anyone may submit the form).

3. Notes
- This is a public contact form on a marketing site. Anyone may submit, but only
  authenticated agency staff can view or manage the submissions later.
- `services_interested` is a text array so the multi-select service checkboxes
  can be stored as a list.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  business_name text,
  email text NOT NULL,
  phone text,
  business_type text,
  services_interested text[] DEFAULT '{}',
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public may submit the contact form (INSERT only).
GRANT INSERT ON contact_submissions TO anon, authenticated;

-- Authenticated agency staff can read & manage submissions.
GRANT SELECT, UPDATE, DELETE ON contact_submissions TO authenticated;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact" ON contact_submissions;
CREATE POLICY "auth_select_contact"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_contact" ON contact_submissions;
CREATE POLICY "auth_update_contact"
ON contact_submissions FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact" ON contact_submissions;
CREATE POLICY "auth_delete_contact"
ON contact_submissions FOR DELETE
TO authenticated
USING (true);
