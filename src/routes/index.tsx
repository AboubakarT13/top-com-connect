import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Shirt,
  Gift,
  Printer,
  Scissors,
  Signpost,
  Flag,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";
import atelier from "@/assets/atelier.jpg";
import { WhatsAppFloat, buildWhatsAppUrl } from "@/components/WhatsAppFloat";
import {
  PHONE_WHATSAPP,
  PHONE_FIXE,
  ADRESSE,
  EMAIL,
  ANNEES_EXPERIENCE,
} from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOP COM - Imprimerie & Personnalisation Abidjan" },
      {
        name: "description",
        content:
          "TOP COMMUNICATION : tenues personnalisées, gadgets pub, impression numérique à Abidjan. Devis rapide WhatsApp.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const services = [
  {
    icon: Shirt,
    title: "Textile Personnalisé",
    desc: "T-shirts, polos, casquettes, tenues de travail.",
  },
  {
    icon: Gift,
    title: "Gadgets Publicitaires",
    desc: "Mugs, stylos, clés USB, sacs, porte-clés.",
  },
  {
    icon: Printer,
    title: "Impression Numérique",
    desc: "Flyers, cartes visite, affiches, bâches.",
  },
  {
    icon: Scissors,
    title: "Sérigraphie & Broderie",
    desc: "Haute qualité, finition professionnelle.",
  },
  {
    icon: Signpost,
    title: "Signalétique",
    desc: "Enseignes, panneaux, covering véhicule.",
  },
  {
    icon: Flag,
    title: "Événementiel",
    desc: "Banderoles, roll-up, stands.",
  },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#services", label: "Nos Services" },
    { href: "#apropos", label: "À Propos" },
    { href: "#contact", label: "Contact" },
  ];

  const waUrl = buildWhatsAppUrl("Bonjour TOP COM! Je souhaite un devis.");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#accueil" className="flex items-baseline gap-1">
          <span className="font-display text-2xl font-bold text-primary">TOP</span>
          <span className="font-display text-2xl font-bold text-anthracite">COM</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-anthracite transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Devis WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-12 w-12 items-center justify-center rounded-lg text-anthracite md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-anthracite hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Devis WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const waUrl = buildWhatsAppUrl(
    "Bonjour TOP COM! 👋 Je souhaite demander un devis.",
  );
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* forme géométrique verte abstraite */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[600px] w-[600px] rounded-full bg-primary opacity-[0.05] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rotate-45 bg-primary opacity-[0.05]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
        <motion.div {...fadeUp}>
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Imprimerie · Abidjan
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-anthracite sm:text-5xl lg:text-6xl">
            TOP <span className="text-primary">COMMUNICATION</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-anthracite/80">
            Imprimerie & Personnalisation Textile à Abidjan
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Tenues personnalisées, gadgets publicitaires, impression grand
            format. Votre image, notre expertise.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              Voir nos services
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-anthracite/20 bg-white px-6 py-3 text-sm font-semibold text-anthracite transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
            >
              <MessageCircle className="h-4 w-4" />
              Demander un devis
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-[var(--color-gold)]/20 blur-2xl" />
          <img
            src={heroProducts}
            alt="T-shirt, mug et casquette personnalisés TOP COM"
            width={1024}
            height={1024}
            className="relative w-full rounded-2xl border border-border bg-white shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 text-center">
      <motion.h2
        {...fadeUp}
        className="font-display text-3xl font-bold text-anthracite sm:text-4xl"
      >
        {children}
      </motion.h2>
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary"
      />
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle>Nos Services</SectionTitle>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const waUrl = buildWhatsAppUrl(
              `Bonjour TOP COM! 👋\nJe visite votre site et je souhaite un devis pour : ${s.title}`,
            );
            return (
              <motion.a
                key={s.title}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-anthracite">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: "500+", label: "Clients Satisfaits" },
    { value: "24h", label: "Délai Express" },
    { value: "100%", label: "Qualité Contrôlée" },
  ];
  return (
    <section id="apropos" className="bg-secondary/40 py-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-primary/10" />
          <img
            src={atelier}
            alt="Atelier d'impression TOP COM à Abidjan"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full rounded-2xl object-cover shadow-md"
          />
        </motion.div>
        <motion.div {...fadeUp}>
          <h2 className="font-display text-3xl font-bold text-anthracite sm:text-4xl">
            À Propos de <span className="text-primary">TOP COM</span>
          </h2>
          <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            TOP COMMUNICATION est votre partenaire 360° en communication
            visuelle à Abidjan. Spécialistes de l'impression et de la
            personnalisation depuis {ANNEES_EXPERIENCE} ans, nous donnons vie à
            vos idées sur textile et objets. Qualité, réactivité et prix justes
            : notre engagement.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-white p-4 text-center shadow-sm"
              >
                <div className="font-display text-2xl font-bold text-primary">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ nom: "", tel: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Bonjour TOP COM, je suis ${form.nom || "[Nom]"}${form.tel ? ` (Tel: ${form.tel})` : ""}. Je veux un devis pour : ${form.message || "[Message]"}`;
    window.open(buildWhatsAppUrl(text), "_blank");
  };

  return (
    <section id="contact" className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle>Contactez-Nous</SectionTitle>
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            {...fadeUp}
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-anthracite">
                  Nom
                </label>
                <input
                  required
                  value={form.nom}
                  onChange={(e) => setForm({ ...form, nom: e.target.value })}
                  className="block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-anthracite">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className="block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-anthracite">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <MessageCircle className="h-4 w-4" />
                Envoyer via WhatsApp
              </button>
            </div>
          </motion.form>

          <motion.div {...fadeUp} className="space-y-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-anthracite">{ADRESSE}</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-anthracite">
                  WhatsApp : {PHONE_WHATSAPP}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-anthracite">
                  Appel : {PHONE_FIXE}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-anthracite hover:text-primary"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Carte Abidjan"
                src="https://www.google.com/maps?q=Abidjan,Cote+d'Ivoire&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-anthracite text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row lg:px-8">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="font-display text-xl font-bold text-primary">
              TOP
            </span>
            <span className="font-display text-xl font-bold text-white">
              COM
            </span>
          </div>
          <p className="mt-1 text-sm text-white/70">
            Imprimerie & Personnalisation
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href={buildWhatsAppUrl("Bonjour TOP COM!")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[var(--color-whatsapp)]"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-white/60">
          © 2026 TOP COMMUNICATION. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
