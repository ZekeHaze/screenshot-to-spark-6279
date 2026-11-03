CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  motivo text NOT NULL,
  nombre text NOT NULL,
  empresa text,
  correo text NOT NULL,
  telefono text,
  mensaje text NOT NULL
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cualquiera puede enviar contacto" ON public.contact_submissions FOR INSERT TO anon, authenticated
WITH CHECK (char_length(nombre) BETWEEN 1 AND 100 AND char_length(correo) BETWEEN 3 AND 255 AND char_length(mensaje) BETWEEN 1 AND 1000 AND motivo IN ('general','distribucion','comercial'));