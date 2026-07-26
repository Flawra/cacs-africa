# CACS Africa — Website (Home Page)

A premium, modern Next.js + Tailwind CSS rebuild of the CACS Africa website. This first delivery covers the **Home Page** in full; other pages (About, Services, Events, News, Members, Contact) will follow the same architecture.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom brand tokens: forest green, gold, crimson, ink, ivory)
- Framer Motion (scroll reveals, counters, hero entrance)
- lucide-react (icons)
- Poppins (display) + Inter (body)

## Brand colors (sampled directly from the CACS logo)
- Deep Green `#045C2F`
- Gold `#D3A802`
- Crimson `#AE0A21`
- Ink `#141412`
- Ivory `#FAF8F3`

## Getting started
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Project structure
```
app/
  layout.tsx        # fonts, metadata
  globals.css        # base styles, brand utilities
  page.tsx            # homepage assembly
components/
  Navbar.tsx
  Hero.tsx            # video background hero
  Stats.tsx           # animated counters
  About.tsx
  Services.tsx
  AfricaMap.tsx        # interactive map placeholder
  Events.tsx
  Testimonials.tsx    # slider
  Partners.tsx        # logo marquee
  CTA.tsx
  Footer.tsx
  Reveal.tsx          # shared scroll-in-view animation wrapper
  Counter.tsx         # shared animated number component
public/
  logo.png            # official CACS logo, untouched
  hero-video.mp4       # homepage hero background video
```

## Notes
- The homepage links to `/about`, `/services`, `/events`, `/news`, `/members`, `/contact`, `/membership` — these routes will be built next; for now they'll 404 until added.
- The Africa map section is an intentional placeholder, ready to be swapped for an interactive SVG/choropleth map component.
- Replace the placeholder partner names and testimonials in `components/Partners.tsx` and `components/Testimonials.tsx` with real content when available.
