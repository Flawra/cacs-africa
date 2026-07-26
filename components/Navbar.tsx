"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/data/nav";
import { ServicesMegaMenu } from "@/components/layout/mega-menu";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMegaDelayed = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft py-3"
          : "bg-gradient-to-b from-ink/70 via-ink/40 to-transparent backdrop-blur-[2px] py-6"
      }`}
    >
      <nav
        className="container-cacs flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-transparent.png"
            alt="CACS Africa"
            width={44}
            height={44}
            className="h-10 w-10 md:h-11 md:w-11 object-contain drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]"
            priority
          />
          <span
            className={`hidden sm:block font-display font-semibold leading-tight text-sm tracking-wide transition-colors ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            CACS AFRICA
            <span
              className={`block text-[10px] font-body font-normal tracking-wider ${
                scrolled ? "text-ink/60" : "text-white/70"
              }`}
            >
              Chambre Africaine de Commerce et de Services
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) =>
            "megaMenu" in link && link.megaMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={closeMegaDelayed}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                    scrolled ? "text-ink/80" : "text-white/90"
                  }`}
                >
                  {t(link.key)}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${megaOpen ? "rotate-180" : ""}`}
                  />
                </Link>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-4"
                    >
                      <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-ink/5">
                        <ServicesMegaMenu />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                  scrolled ? "text-ink/80" : "text-white/90"
                }`}
              >
                {t(link.key)}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <LanguageSwitcher dark={!scrolled} />
          <Link href="/join-us">
            <Button variant="primary">{t("joinUs")}</Button>
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher dark={!scrolled} />
          <button
            onClick={() => setOpen(!open)}
            className={`p-2 rounded-lg ${scrolled ? "text-ink" : "text-white"}`}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden mt-4 max-h-[75vh] overflow-y-auto border-t border-black/5 bg-white px-6 py-6 shadow-soft">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-ink/80 hover:text-forest"
                onClick={() => setOpen(false)}
              >
                {t(link.key)}
              </Link>
            ))}
            <Link href="/join-us" onClick={() => setOpen(false)}>
              <Button variant="primary" className="w-full">
                {t("joinUs")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
