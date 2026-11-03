import { createFileRoute, Link } from "@tanstack/react-router";
import campo from "@/assets/campo-limoneros.jpg";
import canasta from "@/assets/limones-canasta.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Limonson, familia de Navojoa, Sonora" },
      { name: "description", content: "Una familia joven que cultiva limón italiano Eureka en cinco hectáreas heredadas del abuelo en Navojoa, Sonora." },
      { property: "og:title", content: "Nosotros — Limonson" },
      { property: "og:description", content: "Tradición familiar y orgullo por el campo sonorense." },
    ],
  }),
  component: Nosotros,
});

const datos = [
  { n: "5", t: "hectáreas de terreno ejidal" },
  { n: "Eureka", t: "limón italiano" },
  { n: "Navojoa", t: "Sonora, México" },
];

function Nosotros() {
  return (
    <>
      <section className="relative flex min-h-[70svh] items-end overflow-hidden">
        <img src={campo} alt="Limoneros de la familia" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
          <p className="font-display text-lg font-bold text-primary">Nosotros</p>
          <h1 className="mt-2 max-w-3xl text-5xl text-earth-foreground md:text-6xl">Una familia, una tierra, un limón</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-[1.1fr_1fr] md:items-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl">Lo que nos dejó el abuelo</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>Limonson nace del emprendimiento de una familia joven de Navojoa, Sonora.</p>
            <p>Trabajamos cinco hectáreas de terreno ejidal heredadas de nuestro abuelo, donde producimos limón italiano Eureka.</p>
            <p>Cada cosecha lleva el esfuerzo de la familia y el orgullo por el campo sonorense.</p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="photo-zoom organic-blob aspect-[4/5] shadow-2xl">
            <img src={canasta} alt="Cosecha de limón Eureka" loading="lazy" width={1200} height={1408} className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="bg-primary py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 text-center sm:grid-cols-3">
          {datos.map((d, i) => (
            <Reveal key={d.t} delay={i * 120}>
              <p className="font-display text-6xl font-extrabold text-earth">{d.n}</p>
              <p className="mt-2 text-lg font-semibold text-earth">{d.t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 text-center">
        <Reveal className="mx-auto max-w-2xl px-5">
          <h2 className="text-4xl">Prueba el sabor de nuestra tierra</h2>
          <Link to="/productos" className="mt-8 inline-block rounded-full bg-lime px-7 py-4 font-display text-lg font-bold text-lime-foreground transition-transform hover:scale-105">Ver productos</Link>
        </Reveal>
      </section>
    </>
  );
}
