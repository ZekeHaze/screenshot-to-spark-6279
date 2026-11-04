import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Mail, Phone, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, CONTACT_PHONE, LOCATION, SLOGAN, SOCIAL_HANDLE } from "@/lib/site";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const solidHeader = scrolled || open || (pathname !== "/" && pathname !== "/nosotros");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > last && y > 120);
      setScrolled(y > 20);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        hidden && !open ? "-translate-y-full focus-within:translate-y-0" : "translate-y-0",
        solidHeader ? "bg-background/95 shadow-sm backdrop-blur" : "bg-gradient-to-b from-overlay/75 to-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/favicon.png" alt="Limonson" width={56} height={56} className="h-14 w-14 rounded-2xl object-cover shadow" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className={cn(
                "rounded-full px-5 py-2 font-display text-lg font-bold transition-colors",
                solidHeader ? "text-foreground hover:bg-secondary" : "text-earth-foreground hover:bg-primary/20",
              )}
              activeProps={{ className: "!bg-primary !text-primary-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={cn("rounded-full p-3 md:hidden", solidHeader ? "text-foreground" : "text-earth-foreground")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className={cn("flex-col gap-1 px-5 pb-5 md:hidden", open ? "flex" : "hidden")}
      >
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            onClick={() => setOpen(false)}
            activeOptions={{ exact: true }}
            className="rounded-full px-5 py-3 font-display text-xl font-bold hover:bg-secondary"
            activeProps={{ className: "bg-primary" }}
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <img src="/favicon.png" alt="Limonson" loading="lazy" width={64} height={64} className="h-16 w-16 rounded-2xl object-cover" />
          <p className="font-display text-2xl font-extrabold">{SLOGAN}</p>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />{LOCATION}</li>
          <li className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <a href={`tel:${CONTACT_PHONE.replaceAll(" ", "")}`} className="underline-offset-4 hover:underline">{CONTACT_PHONE}</a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all underline-offset-4 hover:underline">{CONTACT_EMAIL}</a>
          </li>
        </ul>
        <div className="flex items-start gap-3 md:justify-end">
          <a href={`https://www.instagram.com/${SOCIAL_HANDLE}/`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 font-bold text-primary-foreground">
            <Instagram className="h-5 w-5" aria-hidden="true" /> @{SOCIAL_HANDLE}
          </a>
        </div>
      </div>
      <p className="border-t border-earth-foreground/15 py-5 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Limonson · Jugo de limón italiano Eureka de Navojoa, Sonora
      </p>
    </footer>
  );
}
