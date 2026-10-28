REVOKE EXECUTE ON FUNCTION public.has_assise_access(uuid) FROM anon, public;
GRANT EXECUTE ON FUNCTION public.has_assise_access(uuid) TO authenticated, service_role;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, public;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;