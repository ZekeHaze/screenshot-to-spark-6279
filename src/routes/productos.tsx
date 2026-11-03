import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import canasta from "@/assets/limones-canasta.jpg";
import jugo from "@/assets/limon-jugo.jpg";
import campo from "@/assets/campo-limoneros.jpg";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Limonson 500 ml, 1 litro y galón" },
      { name: "description", content: "Jugo de limón italiano Eureka 100% natural, exprimido y congelado, en 500 ml, 1 litro y galón." },
      { property: "og:title", content: "Productos — Limonson" },
      { property: "og:description", content: "Tres presentaciones de jugo de limón 100% natural." },
    ],
  }),
  component: Productos,
});

const productos = [
  { cap: "500 ml", img: jugo, desc: "Presentación compacta, ideal para el hogar y el uso diario." },
  { cap: "1 litro", img: canasta, desc: "Para familias y cocinas que usan limón con frecuencia." },
  { cap: "Galón", img: campo, desc: "Pensado para negocios, restaurantes y uso comercial." },
];
const caracteristicas = ["100% natural", "Exprimido", "Congelado", "Limón italiano Eureka"];

function Productos() {
  return (
    <>
      <section className="bg-cream pb-16 pt-36">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-display text-lg font-bold text-lime">Productos</p>
          <h1 className="mt-2 max-w-3xl text-5xl md:text-6xl">Jugo de limón 100% natural, exprimido y congelado</h1>
          <div className="mt-8 flex flex-wrap gap-2">
            {caracteristicas.map((c) => (
              <span key={c} className="rounded-full bg-primary px-4 py-2 font-display font-bold text-primary-foreground">{c}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-5 py-24">
        {productos.map((p, i) => (
          <div key={p.cap} className={cn("grid items-center gap-10 md:grid-cols-2", i % 2 === 1 && "md:[&>*:first-child]:order-2")}>
            <Reveal>
              <div className="photo-zoom relative aspect-[4/3] rounded-4xl shadow-2xl">
                <img src={p.img} alt={`Limonson ${p.cap}`} loading="lazy" className="h-full w-full object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-primary px-5 py-2 font-display text-2xl font-extrabold text-primary-foreground shadow-lg">{p.cap}</span>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-display text-lg font-bold text-lime">Capacidad: {p.cap}</p>
              <h2 className="mt-2 text-4xl md:text-5xl">Limonson {p.cap}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{p.desc}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3">
                {caracteristicas.map((c) => (
                  <li key={c} className="flex items-center gap-2 font-semibold"><Check className="h-5 w-5 text-lime" />{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </section>

      <section className="bg-earth py-20 text-center">
        <Reveal className="mx-auto max-w-2xl px-5">
          <h2 className="text-4xl text-earth-foreground">¿Te interesa alguna presentación?</h2>
          <Link to="/contacto" className="mt-8 inline-block rounded-full bg-primary px-7 py-4 font-display text-lg font-bold text-primary-foreground transition-transform hover:scale-105">Contáctanos</Link>
        </Reveal>
      </section>
    </>
  );
}
