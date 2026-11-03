import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MapPin, Mail, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/limonson-logo.png.asset.json";
import { cn } from "@/lib/utils";
import { CONTACT_NAME, LOCATION, SLOGAN, whatsappLink } from "@/lib/site";

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
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        scrolled || open ? "bg-background/95 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Limonson" className="h-14 w-14 rounded-2xl object-cover shadow" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className={cn(
                "rounded-full px-5 py-2 font-display text-lg font-bold transition-colors",
                scrolled ? "text-foreground hover:bg-secondary" : "text-earth-foreground hover:bg-primary/20",
              )}
              activeProps={{ className: "!bg-primary !text-primary-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Abrir menú"
          className={cn("rounded-full p-2 md:hidden", scrolled || open ? "text-foreground" : "text-earth-foreground")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-5 pb-5 md:hidden">
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
      )}
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-accent-foreground shadow-xl transition-transform hover:scale-110"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-earth text-earth-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <img src={logo.url} alt="Limonson" loading="lazy" className="h-24 w-24 rounded-3xl object-cover" />
          <p className="font-display text-2xl font-extrabold">{SLOGAN}</p>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />{LOCATION}</li>
          <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" />{CONTACT_NAME}</li>
          <li className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <Link to="/contacto" className="underline-offset-4 hover:underline">Escríbenos</Link>
          </li>
        </ul>
        <div className="flex items-start gap-3 md:justify-end">
          <a href="#" aria-label="Facebook" className="rounded-full bg-primary p-3 text-primary-foreground transition-transform hover:scale-110"><Facebook className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="rounded-full bg-primary p-3 text-primary-foreground transition-transform hover:scale-110"><Instagram className="h-5 w-5" /></a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-primary p-3 text-primary-foreground transition-transform hover:scale-110"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
      <p className="border-t border-earth-foreground/15 py-5 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Limonson · Jugo de limón italiano Eureka de Navojoa, Sonora
      </p>
    </footer>
  );
}
