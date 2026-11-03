import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { MessageCircle, MapPin, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT_NAME, LOCATION, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Limonson" },
      { name: "description", content: "Información general, distribución y solicitudes comerciales de Limonson." },
      { property: "og:title", content: "Contacto — Limonson" },
      { property: "og:description", content: "Escríbenos o contáctanos por WhatsApp." },
    ],
  }),
  component: Contacto,
});

const motivos = [
  { id: "general", label: "Información general" },
  { id: "distribucion", label: "Distribución" },
  { id: "comercial", label: "Solicitud comercial" },
] as const;

const schema = z.object({
  motivo: z.enum(["general", "distribucion", "comercial"]),
  nombre: z.string().trim().min(1, "Escribe tu nombre").max(100),
  empresa: z.string().trim().max(120).optional(),
  correo: z.string().trim().email("Correo no válido").max(255),
  telefono: z.string().trim().max(30).optional(),
  mensaje: z.string().trim().min(1, "Escribe tu mensaje").max(1000),
});

const field = "w-full rounded-2xl border-2 border-input bg-card px-4 py-3 outline-none transition-colors focus:border-ring";

function Contacto() {
  const [motivo, setMotivo] = useState<(typeof motivos)[number]["id"]>("general");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse({ ...fd, motivo });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }
    setError("");
    setStatus("sending");
    const d = parsed.data;
    const { error: err } = await supabase.from("contact_submissions").insert({
      ...d,
      empresa: d.empresa || null,
      telefono: d.telefono || null,
    });
    if (err) {
      setStatus("error");
      return;
    }
    setStatus("ok");
    form.reset();
  }

  return (
    <section className="bg-cream pb-24 pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <p className="font-display text-lg font-bold text-lime">Contacto</p>
          <h1 className="mt-2 text-5xl md:text-6xl">Platiquemos</h1>
          <ul className="mt-8 space-y-4 text-lg">
            <li className="flex items-center gap-3"><User className="h-6 w-6 text-lime" />{CONTACT_NAME}</li>
            <li className="flex items-center gap-3"><MapPin className="h-6 w-6 text-lime" />{LOCATION}</li>
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 font-display text-lg font-bold text-accent-foreground transition-transform hover:scale-105">
            <MessageCircle className="h-6 w-6" /> Escríbenos por WhatsApp
          </a>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={onSubmit} className="space-y-4 rounded-4xl bg-card p-6 shadow-xl md:p-10">
            <div className="flex flex-wrap gap-2">
              {motivos.map((m) => (
                <button type="button" key={m.id} onClick={() => setMotivo(m.id)}
                  className={cn("rounded-full px-4 py-2 font-display font-bold transition-colors", motivo === m.id ? "bg-primary text-primary-foreground" : "bg-secondary hover:bg-primary/40")}>
                  {m.label}
                </button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="nombre" placeholder="Nombre *" maxLength={100} required className={field} />
              <input name="empresa" placeholder="Empresa" maxLength={120} className={field} />
              <input name="correo" type="email" placeholder="Correo electrónico *" maxLength={255} required className={field} />
              <input name="telefono" type="tel" placeholder="Teléfono" maxLength={30} className={field} />
            </div>
            <textarea name="mensaje" placeholder="Mensaje *" rows={5} maxLength={1000} required className={field} />
            {error && <p className="text-destructive">{error}</p>}
            {status === "ok" && <p className="font-semibold text-lime">¡Gracias! Recibimos tu mensaje.</p>}
            {status === "error" && <p className="text-destructive">No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.</p>}
            <button disabled={status === "sending"} className="w-full rounded-full bg-lime px-7 py-4 font-display text-lg font-bold text-lime-foreground transition-transform hover:scale-[1.02] disabled:opacity-60">
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
