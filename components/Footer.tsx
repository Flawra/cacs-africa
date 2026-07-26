"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { QUICK_LINKS } from "@/data/nav";

const SOCIALS = [
  { icon: Facebook, href: "https://www.facebook.com/CACS.Africa/" },
  { icon: Twitter, href: "https://x.com/Cacs_Africa" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/cacsafrica/" },
  { icon: Instagram, href: "https://www.instagram.com/cacs.africa/" },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-ink-900 pt-20 text-white/70">
      <div className="container-cacs grid grid-cols-1 gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo-transparent.png"
              alt="CACS Africa"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-sm font-semibold text-white">
              CACS AFRICA
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
            {t("tagline")}
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-forest hover:text-white"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {t("quickLinks")}
          </h4>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-gold"
                >
                  {tNav(link.key as any)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {t("contact")}
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/50">
            <li className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
              Av Mohamed Fadel Semlali, Hay Rahma, Dakhla — Maroc
            </li>
            <li className="flex items-center gap-3">
              <Phone size={17} className="shrink-0 text-gold" />
              +212 663-632455
            </li>
            <li className="flex items-center gap-3">
              <Mail size={17} className="shrink-0 text-gold" />
              cacsafrica.dakhla@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            {t("newsletter")}
          </h4>
          <p className="mt-5 text-sm text-white/50">{t("newsletterDesc")}</p>
          <form className="mt-4 flex items-center gap-2">
            <input
              type="email"
              required
              placeholder={t("emailPlaceholder")}
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-ink transition-colors hover:bg-gold-400"
            >
              <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container-cacs flex flex-col items-center justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} CACS Africa. {t("rights")}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white/70">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
