"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative flex h-screen min-h-[680px] w-full items-center justify-center overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mb-8 rounded-full bg-white/95 p-4 shadow-2xl"
        >
          <Image
            src="/logo-transparent.png"
            alt="CACS Africa logo"
            width={92}
            height={92}
            className="h-20 w-20 md:h-24 md:w-24 object-contain"
            priority
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="eyebrow mb-5 text-gold-400"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-4xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl"
        >
          {t("titleLine1")}
          <span className="block bg-gradient-to-r from-gold-400 via-gold to-gold-600 bg-clip-text text-transparent">
            {t("titleLine2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/join-us"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink shadow-2xl transition-all hover:-translate-y-0.5 hover:bg-gold-400"
          >
            {t("ctaJoin")}
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
          >
            {t("ctaServices")}
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        aria-label="Scroll to explore"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 hover:text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={30} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
