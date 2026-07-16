import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Telescope,
  Linkedin,
  Mail,
  Quote,
  Rocket,
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
import { useSEO, PERSON_SCHEMA, ORGANIZATION_SCHEMA } from '../hooks/useSEO';

const FOUNDER_SEO = {
  title: 'Aryan Gupta | Founder & CEO of PaylanceX',
  description:
    'Learn about Aryan Gupta, Founder & CEO of PaylanceX, his vision, journey and mission to build trusted technology.',
  canonical: 'https://paylancex.com/founder',
  ogType: 'profile',
  ogImage: 'https://paylancex.com/aryan-gupta.jpg',
  jsonLd: [PERSON_SCHEMA, ORGANIZATION_SCHEMA],
};

const CORE_VALUES = [
  { icon: Lightbulb, title: 'Innovation', description: 'Pushing boundaries to create technology that feels ahead of its time — not for novelty, but to solve real problems.' },
  { icon: ShieldCheck, title: 'Trust', description: 'Earning confidence through transparency, reliability, and integrity in everything we build.' },
  { icon: Sparkles, title: 'Simplicity', description: 'Removing complexity so people can focus on what matters. Great technology should feel effortless.' },
  { icon: Telescope, title: 'Long-term Thinking', description: 'Building with the next decade in mind. Sustainable, durable solutions over short-term wins.' },
];

const JOURNEY_STEPS = [
  { icon: Lightbulb, title: 'The Spark', description: 'Observing everyday challenges in how people interact with digital services — and deciding that "normal" was not good enough.' },
  { icon: Rocket, title: 'The Decision', description: 'Choosing to build rather than wait. Moving from observation to action, with a commitment to creating better experiences.' },
  { icon: ShieldCheck, title: 'The Foundation', description: 'Establishing PaylanceX on principles of trust, simplicity, and long-term thinking — the foundation for everything that follows.' },
  { icon: Telescope, title: 'The Road Ahead', description: 'Building toward a future where PaylanceX creates technology used and trusted by millions across India and beyond.' },
];

function FounderPage() {
  useSEO(FOUNDER_SEO);
  useReveal();
  const [contactOpen, setContactOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />
      <Particles count={20} />
      <Navbar />

      <main className="relative z-10 flex flex-1 flex-col">
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="mx-auto w-full max-w-3xl">
            <div className="opacity-0 animate-riseIn" style={{ animationDelay: '0.15s' }}>
              <StatusPill label="Meet the Founder" />
            </div>
            <div className="mx-auto mt-10 opacity-0 animate-riseIn" style={{ animationDelay: '0.3s' }}>
              <div className="relative mx-auto h-36 w-36">
                <div className="absolute inset-0 scale-105 rounded-full bg-neon-400/40 blur-2xl animate-pulseGlow" />
                <div className="relative h-36 w-36 overflow-hidden rounded-full ring-2 ring-neon-300/50 shadow-[0_0_32px_rgba(77,166,255,0.35)]">
                  <img
                    src="/aryan-gupta.jpg"
                    alt="Aryan Gupta - Founder & CEO of PaylanceX"
                    width={144}
                    height={144}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <h1
              className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient opacity-0 animate-riseIn sm:text-6xl md:text-7xl"
              style={{ animationDelay: '0.4s' }}
            >
              Aryan Gupta
            </h1>
            <p
              className="mt-4 text-lg font-medium text-neon-100/80 opacity-0 animate-riseIn sm:text-xl"
              style={{ animationDelay: '0.55s' }}
            >
              Founder &amp; CEO, PaylanceX
            </p>
            <p
              className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-neon-100/50 opacity-0 animate-riseIn sm:text-lg"
              style={{ animationDelay: '0.7s' }}
            >
              Building thoughtful, reliable, and future-ready technology — with a mission to
              create products that people genuinely trust.
            </p>
            <div
              className="mt-10 flex flex-col items-center justify-center gap-4 opacity-0 animate-riseIn sm:flex-row"
              style={{ animationDelay: '0.85s' }}
            >
              <a
                href="https://www.linkedin.com/in/aryan-gupta-823b74252"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
              <Link to="/" className="btn-ghost">Back to Home</Link>
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
            <Reveal><SectionHeading eyebrow="About" title="About Aryan Gupta" /></Reveal>
            <Reveal delay={100}>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glass">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                    <div className="flex flex-col items-center text-center">
                      <div className="relative">
                        <div className="absolute inset-0 scale-110 rounded-full bg-neon-400/30 blur-xl animate-pulseGlow" />
                        <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-neon-300/40 shadow-[0_0_24px_rgba(77,166,255,0.3)]">
                          <img
                            src="/aryan-gupta.jpg"
                            alt="Aryan Gupta - Founder & CEO of PaylanceX"
                            width={96}
                            height={96}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover object-top"
                            draggable={false}
                          />
                        </div>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-white">Aryan Gupta</h3>
                      <p className="mt-1 text-sm text-neon-300">Founder &amp; CEO</p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                        <span className="text-xs font-medium text-neon-100/70">PaylanceX</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="glass rounded-3xl p-8 sm:p-10">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 shrink-0 text-neon-300/40" />
                      <div className="space-y-4">
                        <p className="text-lg font-light leading-relaxed text-neon-100/80 sm:text-xl">
                          I'm Aryan Gupta, the founder of PaylanceX. I believe technology should
                          remove complexity, not create it — and that the best products are the
                          ones people trust without thinking about it.
                        </p>
                        <p className="text-base font-light leading-relaxed text-neon-100/60">
                          My focus is on building a company that creates thoughtful, reliable, and
                          future-ready technology. Not just launching products, but crafting
                          solutions that genuinely make everyday experiences better.
                        </p>
                        <p className="text-base font-light leading-relaxed text-neon-100/60">
                          I'm driven by a simple principle: build things that last, and build them
                          with integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal><SectionHeading eyebrow="Origin Story" title="Why I Started PaylanceX" /></Reveal>
            <Reveal delay={100}>
              <div className="mt-12 glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glass sm:p-12">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                      <Lightbulb className="h-5 w-5 text-neon-200" />
                    </div>
                    <span className="font-display text-sm font-semibold uppercase tracking-wider text-neon-300">The Beginning</span>
                  </div>
                  <p className="text-lg font-light leading-relaxed text-neon-100/80">
                    I have always believed that technology should remove complexity, not create it.
                    While observing how people interact with digital services, I realized there are
                    still everyday challenges that deserve better experiences.
                  </p>
                  <p className="text-lg font-light leading-relaxed text-neon-100/80">
                    Instead of accepting them as normal, I decided to start building. PaylanceX is
                    the beginning of that journey — a company focused on creating thoughtful,
                    reliable, and future-ready technology.
                  </p>
                  <p className="text-lg font-light leading-relaxed text-neon-100/80">
                    The mission is not just to launch products, but to build solutions that people
                    genuinely trust.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal><SectionHeading eyebrow="Looking Ahead" title="Vision" /></Reveal>
            <Reveal delay={100}>
              <div className="mt-12 glass-strong relative overflow-hidden rounded-3xl p-10 text-center shadow-glass sm:p-16">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                <div className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                  <Telescope className="h-7 w-7 text-neon-200" />
                </div>
                <p className="mx-auto max-w-2xl font-display text-2xl font-medium leading-snug text-gradient sm:text-3xl md:text-4xl">
                  To build one of India's most trusted technology companies that creates products
                  used by millions.
                </p>
                <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-neon-300/60 to-transparent" />
                <p className="mt-8 text-sm font-light text-neon-100/50">
                  A long-term commitment to trust, quality, and impact at scale.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal><SectionHeading eyebrow="What Guides Us" title="Core Values" /></Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {CORE_VALUES.map((value, i) => {
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
            <Reveal><SectionHeading eyebrow="The Path" title="Journey" /></Reveal>
            <div className="mt-14 space-y-6">
              {JOURNEY_STEPS.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === JOURNEY_STEPS.length - 1;
                return (
                  <Reveal key={step.title} delay={i * 100}>
                    <div className="relative flex gap-6">
                      {!isLast && (
                        <div className="absolute left-6 top-16 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-neon-300/40 to-transparent" />
                      )}
                      <div className="relative z-10 shrink-0">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                          <Icon className="h-6 w-6 text-neon-200" />
                        </div>
                      </div>
                      <div className="glass flex-1 rounded-3xl p-6 sm:p-8">
                        <span className="text-xs font-semibold uppercase tracking-wider text-neon-300">Step {i + 1}</span>
                        <h3 className="mt-2 font-display text-lg font-bold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm font-light leading-relaxed text-neon-100/60">{step.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal><SectionHeading eyebrow="Get in Touch" title="Connect with Me" /></Reveal>
            <Reveal delay={100}>
              <div className="mt-12 glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glass sm:p-12">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                <p className="text-center text-base font-light leading-relaxed text-neon-100/60">
                  I'm always open to conversations about technology, building, and the future.
                  Whether it's a question, an idea, or just a hello — feel free to reach out.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://www.linkedin.com/in/aryan-gupta-823b74252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group w-full sm:w-auto"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <a href="mailto:support@paylancex.com" className="btn-ghost w-full sm:w-auto">
                    <Mail className="h-4 w-4 text-neon-300" />
                    Email Me
                  </a>
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

export default FounderPage;
