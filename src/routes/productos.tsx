import { createFileRoute, Link } from "@tanstack/react-router";
import presentaciones from "@/assets/limonson-presentaciones.jpg";
import { Reveal } from "@/components/site/Reveal";

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
  { cap: "500 ml", desc: "Presentación compacta para el uso diario en casa." },
  { cap: "1 litro", desc: "Para familias y cocinas que usan limón con frecuencia." },
  { cap: "Galón", desc: "Para restaurantes, bares y negocios con mayor consumo." },
];

function Productos() {
  return (
    <>
      <section className="bg-cream pb-12 pt-28 md:pb-16 md:pt-36">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-display text-lg font-bold text-lime">Productos</p>
          <h1 className="mt-2 max-w-3xl text-4xl sm:text-5xl md:text-6xl">Jugo de limón 100% natural, exprimido y congelado</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Elaborado con limón italiano Eureka de Navojoa, Sonora, sin ingredientes añadidos.
          </p>
        </div>
      </section>

      <section className="lemon-texture mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-16 md:py-24">
        <img
          src={presentaciones}
          alt="Botellas Limonson de 500 ml y 1 litro junto al envase de un galón"
          width={1080}
          height={1080}
          className="w-full rounded-4xl shadow-xl"
        />
        <div>
          <h2 className="text-4xl md:text-5xl">Elige tu presentación</h2>
          <ul className="mt-5 divide-y divide-border">
            {productos.map((producto) => (
              <li key={producto.cap} className="py-4">
                <h3 className="text-2xl">{producto.cap}</h3>
                <p className="mt-1 text-lg text-muted-foreground">{producto.desc}</p>
              </li>
            ))}
          </ul>
        </div>
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
