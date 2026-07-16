import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import {
  Background,
  Particles,
  Navbar,
  Footer,
  ContactModal,
  LegalModal,
  StatusPill,
  useReveal,
  Reveal,
} from '../components/Shared';
import { useSEO, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../hooks/useSEO';

function LandingPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null);

  useSEO({
    title: 'PaylanceX — Something Extraordinary Is Coming',
    description:
      'PaylanceX is building thoughtful, reliable, and future-ready technology. Something extraordinary is coming — the future of digital experiences, launching soon.',
    canonical: 'https://paylancex.com/',
    ogImage: 'https://paylancex.com/logo.png',
    jsonLd: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
  });
  useReveal();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />
      <Particles />
      <Navbar />

      <main className="relative z-10 flex flex-1 flex-col">
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="mx-auto w-full max-w-3xl">
            <div className="opacity-0 animate-riseIn" style={{ animationDelay: '0.1s' }}>
              <StatusPill />
            </div>
            <h1
              className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient opacity-0 animate-riseIn sm:text-6xl md:text-7xl"
              style={{ animationDelay: '0.25s' }}
            >
              Something Extraordinary
              <br />
              Is Coming.
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-neon-100/60 opacity-0 animate-riseIn sm:text-xl"
              style={{ animationDelay: '0.4s' }}
            >
              We're building the future — thoughtful, reliable, and future-ready technology
              designed to earn your trust.
            </p>
            <div
              className="mt-12 flex flex-col items-center justify-center gap-4 opacity-0 animate-riseIn sm:flex-row"
              style={{ animationDelay: '0.55s' }}
            >
              <button onClick={() => setContactOpen(true)} className="btn-primary group">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Mail className="h-4 w-4" />
                Contact Us
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
              <Link to="/about" className="btn-ghost group">
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-[1] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-30 sm:h-[640px] sm:w-[640px]"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-full border border-neon-300/20" />
            <div className="absolute inset-8 rounded-full border border-neon-300/10" />
            <div className="absolute inset-20 rounded-full border border-neon-300/5" />
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center shadow-glass sm:p-14">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                  <Sparkles className="h-6 w-6 text-neon-200" />
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
                  Built on Trust. Designed for Tomorrow.
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base font-light leading-relaxed text-neon-100/60 sm:text-lg">
                  PaylanceX is more than a product — it's a commitment to creating technology
                  that genuinely makes everyday experiences better. We're building something we
                  hope you'll love.
                </p>
                <div className="mt-8">
                  <Link to="/founder" className="btn-ghost group">
                    Meet the Founder
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer onLegal={(w) => setLegalOpen(w)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <LegalModal open={legalOpen} onClose={() => setLegalOpen(null)} />
    </div>
  );
}

export default LandingPage;
