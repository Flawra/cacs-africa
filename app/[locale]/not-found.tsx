import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] [background-size:26px_26px]" />
      <div className="crescent-glow pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-25 animate-pulse-slow" />

      <div className="relative">
        <Image
          src="/logo-transparent.png"
          alt="CACS Africa"
          width={80}
          height={80}
          className="mx-auto h-16 w-16 object-contain opacity-80"
        />
        <p className="mt-8 font-display text-8xl font-bold text-white/10 md:text-9xl">
          404
        </p>
        <h1 className="-mt-6 font-display text-2xl font-bold text-white md:text-3xl">
          This Page Went Off the Map
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50 md:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s
          get you back on track.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <Button variant="gold" size="lg">
              <Home size={17} /> Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outlineLight" size="lg">
              <ArrowLeft size={17} /> Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
