import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Telescope,
  ArrowRight,
  Target,
  Eye,
  Rocket,
  Users,
} from 'lucide-react';
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
  SectionHeading,
} from '../components/Shared';
import { useSEO, ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from '../hooks/useSEO';

const ABOUT_SEO = {
  title: 'About PaylanceX — Our Mission, Vision & Values',
  description:
    'Discover PaylanceX — a technology company building thoughtful, reliable, and future-ready products. Learn about our mission, vision, and the values that guide us.',
  canonical: 'https://paylancex.com/about',
  jsonLd: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
};

const VALUES = [
  { icon: Lightbulb, title: 'Innovation', description: 'We push boundaries to create technology that feels ahead of its time — solving real problems, not chasing novelty.' },
  { icon: ShieldCheck, title: 'Trust', description: 'We earn confidence through transparency, reliability, and integrity. Trust is the foundation of everything we build.' },
  { icon: Sparkles, title: 'Simplicity', description: 'We remove complexity so people can focus on what matters. Great technology should feel effortless.' },
  { icon: Telescope, title: 'Long-term Thinking', description: 'We build with the next decade in mind. Sustainable, durable solutions over short-term wins.' },
];

function AboutPage() {
  useSEO(ABOUT_SEO);
  useReveal();
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />
      <Particles count={20} />
      <Navbar />

      <main className="relative z-10 flex flex-1 flex-col">
        <section className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="mx-auto w-full max-w-3xl">
            <div className="opacity-0 animate-riseIn" style={{ animationDelay: '0.1s' }}>
              <StatusPill label="Our Story" />
            </div>
            <h1
              className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient opacity-0 animate-riseIn sm:text-6xl md:text-7xl"
              style={{ animationDelay: '0.25s' }}
            >
              Building Technology
              <br />
              You Can Trust.
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-neon-100/60 opacity-0 animate-riseIn sm:text-xl"
              style={{ animationDelay: '0.4s' }}
            >
              PaylanceX is a technology company on a mission to create thoughtful, reliable, and
              future-ready products that millions of people use and trust.
            </p>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <Reveal>
                <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-8 shadow-glass sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                    <Target className="h-6 w-6 text-neon-200" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-white">Our Mission</h2>
                  <p className="mt-4 text-base font-light leading-relaxed text-neon-100/60">
                    To build solutions that people genuinely trust — not just launching products,
                    but crafting technology that removes complexity and makes everyday experiences
                    better.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-8 shadow-glass sm:p-10">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                    <Eye className="h-6 w-6 text-neon-200" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold text-white">Our Vision</h2>
                  <p className="mt-4 text-base font-light leading-relaxed text-neon-100/60">
                    To build one of India's most trusted technology companies that creates products
                    used by millions — a long-term commitment to trust, quality, and impact at scale.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal><SectionHeading eyebrow="What Guides Us" title="Our Values" /></Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {VALUES.map((value, i) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={i * 100}>
                    <div className="group glass relative h-full overflow-hidden rounded-3xl p-8 transition hover:ring-1 hover:ring-neon-300/30">
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                      <div className="relative">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10 transition group-hover:scale-110">
                          <Icon className="h-6 w-6 text-neon-200" />
                        </div>
                        <h3 className="mt-5 font-display text-xl font-bold text-white">{value.title}</h3>
                        <p className="mt-3 text-sm font-light leading-relaxed text-neon-100/60">{value.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal><SectionHeading eyebrow="Leadership" title="Meet Our Founder" /></Reveal>
            <Reveal delay={100}>
              <div className="mt-12 glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glass sm:p-12">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 scale-110 rounded-full bg-neon-400/30 blur-xl animate-pulseGlow" />
                    <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-neon-300/40 shadow-[0_0_24px_rgba(77,166,255,0.3)]">
                      <img
                        src="/aryan-gupta.jpg"
                        alt="Aryan Gupta - Founder & CEO of PaylanceX"
                        width={112}
                        height={112}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top"
                        draggable={false}
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-display text-2xl font-bold text-white">Aryan Gupta</h3>
                    <p className="mt-1 text-sm font-medium text-neon-300">Founder &amp; CEO</p>
                    <p className="mt-4 text-base font-light leading-relaxed text-neon-100/60">
                      Aryan founded PaylanceX with a belief that technology should remove
                      complexity, not create it. His vision is to build one of India's most trusted
                      technology companies — creating products that millions of people use and
                      genuinely trust.
                    </p>
                    <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
                      <Link to="/founder" className="btn-ghost group">
                        Read His Story
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </Link>
                      <Link to="/contact" className="btn-ghost">
                        <Users className="h-4 w-4 text-neon-300" />
                        Get in Touch
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center shadow-glass sm:p-14">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                  <Rocket className="h-6 w-6 text-neon-200" />
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
                  Join Us on This Journey
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-neon-100/60">
                  We're building something we hope you'll love. Stay connected and be part of the
                  future we're creating.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link to="/contact" className="btn-primary group">
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                  <Link to="/founder" className="btn-ghost">Meet the Founder</Link>
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

export default AboutPage;
