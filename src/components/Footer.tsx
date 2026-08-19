import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { NestWatermark } from "./NestMotif";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-foret-nuit text-creme">
      <NestWatermark
        className="pointer-events-none absolute -right-16 -top-8 w-[880px] max-w-none text-foret-clair opacity-25"
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-beige.png"
              alt="Nommanest Property"
              width={150}
              height={110}
              className="h-24 w-auto object-contain"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-creme/70">
              Conciergerie de location courte durée et accompagnement
              immobilier à Nantes et son agglomération. Deux métiers, une même
              promesse&nbsp;: prendre soin de votre bien comme d&apos;un nid.
            </p>
          </div>

          <nav aria-label="Plan du site">
            <h2 className="eyebrow text-sable">Nos services</h2>
            <ul className="mt-5 space-y-3 text-sm text-creme/80">
              <li>
                <Link href="/conciergerie" className="hover:text-sable">
                  Conciergerie courte durée
                </Link>
              </li>
              <li>
                <Link href="/investissement" className="hover:text-sable">
                  Accompagnement à l&apos;achat
                </Link>
              </li>
              <li>
                <Link href="/investissement#vente" className="hover:text-sable">
                  Accompagnement à la vente
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sable">
                  Échange découverte
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-sable">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-creme/80">
              <li>
                <a href="tel:+33751263490" className="flex items-center gap-3 hover:text-sable">
                  <Phone size={15} aria-hidden />
                  07 51 26 34 90
                </a>
              </li>
              <li>
                <a href="mailto:nommanest@gmail.com" className="flex items-center gap-3 hover:text-sable">
                  <Mail size={15} aria-hidden />
                  nommanest@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={15} aria-hidden />
                Nantes &amp; agglomération
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-creme/15 pt-6 text-xs text-creme/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Nommanest Property. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-sable">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-sable">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
