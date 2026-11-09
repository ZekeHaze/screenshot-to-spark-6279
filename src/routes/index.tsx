import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Home, Leaf, Droplets, ArrowRight } from "lucide-react";
import campo from "@/assets/campo-limoneros.jpg";
import botellas from "@/assets/limonson-botellas.jpg";
import cocina from "@/assets/limonson-en-cocina.jpg";
import { ProductQualities } from "@/components/site/ProductQualities";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Limonson — El sabor del campo sonorense en cada gota" },
      { name: "description", content: "Jugo de limón italiano Eureka 100% natural, exprimido y congelado, desde Navojoa, Sonora." },
      { property: "og:title", content: "Limonson — El sabor del campo sonorense en cada gota" },
      { property: "og:description", content: "Jugo de limón italiano Eureka 100% natural, exprimido y congelado." },
    ],
  }),
  component: Index,
});

const ventajas = [
  { icon: Clock, title: "Ahorro de tiempo", text: "Olvídate de exprimir limón cada vez." },
  { icon: Home, title: "Práctico", text: "Ideal para hogares y negocios." },
  { icon: Leaf, title: "Sabor natural", text: "Todo el sabor del limón italiano Eureka." },
  { icon: Droplets, title: "Aprovechamiento", text: "Usa solo lo que necesitas." },
];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={campo} alt="" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-28 sm:pb-0 sm:pt-24">
          <p className="mb-4 inline-block rounded-full bg-primary px-4 py-1 font-display font-bold text-primary-foreground">Navojoa, Sonora</p>
          <h1 className="max-w-3xl text-4xl text-earth-foreground sm:text-6xl md:text-7xl">
            El sabor del campo sonorense en cada gota
          </h1>
          <p className="mt-6 max-w-xl text-lg text-earth-foreground/90">
            Jugo de limón italiano Eureka, exprimido y congelado, sin ingredientes añadidos.
          </p>
          <ProductQualities />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/productos" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105">
              Ver productos <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/nosotros" className="rounded-full border-2 border-earth-foreground/70 px-7 py-4 font-display text-lg font-bold text-earth-foreground transition-colors hover:bg-earth-foreground/10">
              Nuestra historia
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <Reveal className="lemon-leaf drop-shadow-xl">
          <div className="photo-zoom lemon-photo lemon-diagonal aspect-square">
            <img src={botellas} alt="Dos botellas de jugo Limonson sostenidas en el huerto" loading="lazy" width={1080} height={1350} className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="font-display text-lg font-bold text-lime">Conoce Limonson</p>
          <h2 className="mt-2 text-4xl md:text-5xl">Limón de nuestra tierra, listo cuando lo necesitas</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Somos una familia de Navojoa que cultiva limón italiano Eureka. Lo exprimimos y congelamos para que disfrutes su sabor sin tener que exprimirlo cada vez.
          </p>
          <Link to="/productos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime px-7 py-4 font-display text-lg font-bold text-lime-foreground transition-transform hover:scale-105">
            Conoce las presentaciones <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal>
            <h2 className="text-center text-4xl md:text-5xl">¿Por qué Limonson?</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {ventajas.map((v, i) => (
              <Reveal key={v.title} delay={i * 120} className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center organic-blob bg-primary text-primary-foreground transition-transform hover:rotate-6">
                  <v.icon className="h-10 w-10" />
                </div>
                <h3 className="mt-5 text-2xl">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="lemon-texture mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <Reveal>
          <p className="font-display text-lg font-bold text-lime">Ideas de uso</p>
          <h2 className="mt-2 text-4xl md:text-5xl">Para la cocina y la barra</h2>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Úsalo en aderezos, marinados, limonadas y cocteles. En casa o en tu negocio, puedes
            medir el jugo que pide cada receta y ahorrar tiempo de preparación.
          </p>
        </Reveal>
        <Reveal delay={150} className="md:mx-auto md:w-full md:max-w-md">
          <div className="photo-zoom aspect-[4/5] rounded-4xl shadow-xl">
            <img src={cocina} alt="Jugo Limonson vertido sobre un tazón de fruta" loading="lazy" width={1080} height={1350} className="h-full w-full object-cover" />
          </div>
        </Reveal>
      </section>

      <section className="bg-earth">
        <Reveal className="mx-auto max-w-3xl px-5 py-20 text-center md:py-24">
          <h2 className="text-4xl text-earth-foreground md:text-5xl">¿Tienes un negocio o quieres distribuir Limonson?</h2>
          <p className="mt-5 text-lg text-earth-foreground/85">Platiquemos. Te atendemos directamente.</p>
          <Link to="/contacto" className="mt-8 inline-block rounded-full bg-primary px-7 py-4 font-display text-lg font-bold text-primary-foreground transition-transform hover:scale-105">Solicitar información</Link>
        </Reveal>
      </section>
    </>
  );
}
