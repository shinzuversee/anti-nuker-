CREATE OR REPLACE FUNCTION public.has_assise_access(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin'::public.app_role)
      OR EXISTS (
        SELECT 1 FROM public.reservations r
        WHERE r.user_id = _user_id AND r.status = 'paid'::public.reservation_status
      )
$$;

CREATE TABLE public.assise_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL DEFAULT '',
  position integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.assise_notes TO authenticated;
GRANT ALL ON public.assise_notes TO service_role;
ALTER TABLE public.assise_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Assise members can read notes" ON public.assise_notes
FOR SELECT TO authenticated USING (public.has_assise_access(auth.uid()));
CREATE POLICY "Admins can insert notes" ON public.assise_notes
FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update notes" ON public.assise_notes
FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete notes" ON public.assise_notes
FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TRIGGER assise_notes_updated_at BEFORE UPDATE ON public.assise_notes
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.assise_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  storage_path text NOT NULL,
  file_name text NOT NULL,
  file_size integer,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.assise_documents TO authenticated;
GRANT ALL ON public.assise_documents TO service_role;
ALTER TABLE public.assise_documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Assise members can read documents" ON public.assise_documents
FOR SELECT TO authenticated USING (public.has_assise_access(auth.uid()));
CREATE POLICY "Admins can insert documents" ON public.assise_documents
FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update documents" ON public.assise_documents
FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete documents" ON public.assise_documents
FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TRIGGER assise_documents_updated_at BEFORE UPDATE ON public.assise_documents
FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE POLICY "Assise members can read assise files" ON storage.objects
FOR SELECT TO authenticated
USING (bucket_id = 'assise-documents' AND public.has_assise_access(auth.uid()));

CREATE POLICY "Admins can upload assise files" ON storage.objects
FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'assise-documents' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update assise files" ON storage.objects
FOR UPDATE TO authenticated
USING (bucket_id = 'assise-documents' AND public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete assise files" ON storage.objects
FOR DELETE TO authenticated
USING (bucket_id = 'assise-documents' AND public.has_role(auth.uid(), 'admin'::public.app_role));