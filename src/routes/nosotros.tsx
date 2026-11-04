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

const historia = [
  {
    t: "El terreno del abuelo",
    d: "Nuestro abuelo trabajó las cinco hectáreas de terreno ejidal en Navojoa con esfuerzo y paciencia, convirtiéndolas en el hogar de lo que hoy es nuestro limonar.",
  },
  {
    t: "La herencia",
    d: "El terreno pasó a manos de la familia junto con sus lecciones: cuidar la tierra, cosechar con honestidad y no rendirse nunca.",
  },
  {
    t: "Llega el limón italiano Eureka",
    d: "Elegimos el limón italiano Eureka por su jugo y su sabor: la variedad ideal para mostrar lo mejor del campo sonorense.",
  },
  {
    t: "Nace Limonson",
    d: "La familia joven se une alrededor del proyecto y le pone nombre, orgullo y futuro a la herencia del abuelo.",
  },
  {
    t: "Hoy",
    d: "Cosechamos y compartimos nuestro limón con más personas, siempre con el mismo cuidado de siempre y la ilusión de crecer.",
  },
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
          <p className="font-display text-lg font-bold text-primary">Nuestro origen</p>
          <h2 className="mt-2 text-4xl md:text-5xl">Lo que nos dejó el abuelo</h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground">
            <p>
              Esta historia no empieza con nosotros: empieza con un terreno ejidal en Navojoa,
              Sonora, que nuestro abuelo trabajó con sus propias manos durante años.
            </p>
            <p>
              Aprendimos de él que la tierra no se cuida con prisa. Que un árbol bien atendido
              responde con fruto, y que una cosecha honrada abre puertas. Esas lecciones quedaron
              grabadas en la familia tanto como las cinco hectáreas que nos dejó.
            </p>
            <p>
              Hoy esas hectáreas siguen dando fruto, y cada vez que caminamos entre los surcos
              sentimos que no solo heredamos un terreno: heredamos un compromiso.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="photo-zoom organic-blob aspect-[4/5] shadow-2xl">
            <img src={canasta} alt="Cosecha de limón Eureka" loading="lazy" width={1200} height={1408} className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal className="order-2 md:order-1">
            <div className="photo-zoom organic-blob aspect-[4/5] shadow-2xl">
              <img src={campo} alt="Surcos del limonar familiar" loading="lazy" width={1920} height={1088} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150} className="order-1 md:order-2">
            <p className="font-display text-lg font-bold text-primary">La nueva generación</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Una familia joven, el mismo compromiso</h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <p>
                Somos una familia joven de Navojoa que decidió quedarse en el campo. Tomamos el
                relevo del abuelo con la misma tierra, pero con nuevas ideas: mejores prácticas de
                cultivo, más cuidado en cada cosecha y la ilusión de llevar el limón sonorense
                más lejos.
              </p>
              <p>
                Entre reuniones de familia, madrugadas en el huerto y cosechas compartidas,
                Limonson se volvió nuestro proyecto de vida. No es solo un negocio: es la manera
                de honrar lo que nos dejaron y de construir algo propio para los que vienen después.
              </p>
              <p>
                Cuando compras un limón Limonson, te llevas un poco de esta historia: sudor,
                herencia y orgullo por el campo de Sonora.
              </p>
            </div>
          </Reveal>
        </div>
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

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal className="text-center">
            <h2 className="text-4xl md:text-5xl">Nuestra historia, paso a paso</h2>
          </Reveal>
          <ol className="mt-14 space-y-10 border-l-2 border-primary/30 pl-8">
            {historia.map((h) => (
              <li key={h.t} className="relative">
                <Reveal>
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-primary ring-4 ring-background" />
                  <p className="font-display text-xl font-bold">{h.t}</p>
                  <p className="mt-2 text-muted-foreground">{h.d}</p>
                </Reveal>
              </li>
            ))}
          </ol>
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
