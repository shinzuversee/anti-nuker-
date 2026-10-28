CREATE TABLE public.actus_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL DEFAULT '',
  hashtags text[] NOT NULL DEFAULT '{}',
  image_path text,
  link_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.actus_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.actus_posts TO authenticated;
GRANT ALL ON public.actus_posts TO service_role;

ALTER TABLE public.actus_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read actus" ON public.actus_posts
  FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Admins can insert actus" ON public.actus_posts
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update actus" ON public.actus_posts
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role))
  WITH CHECK (public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete actus" ON public.actus_posts
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE TRIGGER actus_posts_updated_at BEFORE UPDATE ON public.actus_posts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE POLICY "Anyone can read actus media" ON storage.objects
  FOR SELECT TO anon, authenticated USING (bucket_id = 'actus-media');
CREATE POLICY "Admins can upload actus media" ON storage.objects
  FOR INSERT TO authenticated WITH CHECK (bucket_id = 'actus-media' AND public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can update actus media" ON storage.objects
  FOR UPDATE TO authenticated USING (bucket_id = 'actus-media' AND public.has_role(auth.uid(), 'admin'::public.app_role));
CREATE POLICY "Admins can delete actus media" ON storage.objects
  FOR DELETE TO authenticated USING (bucket_id = 'actus-media' AND public.has_role(auth.uid(), 'admin'::public.app_role));