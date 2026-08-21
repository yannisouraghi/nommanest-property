"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/conciergerie", label: "Conciergerie" },
  { href: "/investissement", label: "Achat & Vente" },
  { href: "/a-propos", label: "À propos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-foret-nuit/95 backdrop-blur-sm shadow-lg shadow-black/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="Nommanest Property — accueil" className="flex items-center gap-3">
          <Image
            src="/logo-beige.png"
            alt=""
            width={46}
            height={34}
            className="h-9 w-auto object-contain"
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-lg tracking-[0.18em] text-creme">
              NOMMANEST
            </span>
            <span className="eyebrow mt-1 text-[0.55rem] text-sable">
              Property
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigation principale">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[0.82rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                pathname === l.href ? "text-sable" : "text-creme/85 hover:text-sable"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact#formulaire" className="btn btn-sable !px-5 !py-2.5 text-[0.75rem]">
            Échange découverte
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="text-creme md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav
          aria-label="Navigation mobile"
          className="border-t border-creme/10 bg-foret-nuit px-5 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-3 text-sm font-medium uppercase tracking-[0.16em] text-creme/90"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link href="/contact#formulaire" className="btn btn-sable w-full">
                Échange découverte
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
