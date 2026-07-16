import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import {
  Background,
  Particles,
  Logo,
  Navbar,
  StatusPill,
  ContactModal,
  LegalModal,
  Footer,
} from './components/Shared';
import { useSEO, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from './hooks/useSEO';

/* ----------------------------- Landing Page ----------------------------- */

function LandingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null);

  useSEO({
    title: 'PaylanceX — Something Extraordinary Is Coming',
    description:
      'PaylanceX is building thoughtful, reliable, and future-ready technology. Something extraordinary is coming — the future of digital experiences, launching soon.',
    canonical: 'https://paylancex.com/',
    ogImage: 'https://paylancex.com/WhatsApp_Image_2026-05-27_at_12.55.50_AM-removebg-preview.png',
    jsonLd: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
  });

  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />
      <Particles />
      <Navbar />

      {/* Main hero */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-3xl">
          <Logo />

          <div className="mt-10 opacity-0 animate-riseIn" style={{ animationDelay: '0.25s' }}>
            <StatusPill />
          </div>

          <h1
            className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient opacity-0 animate-riseIn sm:text-6xl md:text-7xl"
            style={{ animationDelay: '0.4s' }}
          >
            Something Extraordinary
            <br />
            Is Coming.
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-neon-100/60 opacity-0 animate-riseIn sm:text-xl"
            style={{ animationDelay: '0.55s' }}
          >
            We're building the future.
          </p>

          {/* CTA */}
          <div
            className="mt-12 flex flex-col items-center justify-center gap-4 opacity-0 animate-riseIn sm:flex-row"
            style={{ animationDelay: '0.7s' }}
          >
            <button
              onClick={() => setContactOpen(true)}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-400 to-neon-600 px-8 py-4 text-sm font-semibold text-white shadow-neon transition-all duration-300 hover:shadow-neon-lg hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Mail className="h-4 w-4" />
              Contact Us
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>

            <a
              href="mailto:support@paylancex.com"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-medium text-neon-100/80 transition hover:text-white hover:ring-1 hover:ring-neon-300/40"
            >
              support@paylancex.com
            </a>
          </div>

          {/* Decorative orbiting ring */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:h-[640px] sm:w-[640px]"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full border border-neon-300/20" />
            <div className="absolute inset-8 rounded-full border border-neon-300/10" />
            <div className="absolute inset-20 rounded-full border border-neon-300/5" />
          </div>
        </div>
      </main>

      <Footer onLegal={(w) => setLegalOpen(w)} />

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <LegalModal open={legalOpen} onClose={() => setLegalOpen(null)} />
    </div>
  );
}

/* ----------------------------- App ----------------------------- */

export default function App() {
  return <LandingPage />;
}
