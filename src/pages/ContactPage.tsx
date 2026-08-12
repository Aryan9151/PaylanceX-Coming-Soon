import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Building2, BadgeCheck } from 'lucide-react';
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

const CONTACT_SEO = {
  title: 'Contact PaylanceX | Axoryn Technology Pvt. Ltd.',
  description:
    'Get in touch with PaylanceX, a startup by Axoryn Technology Pvt. Ltd. Email us at support@paylancex.com for any questions or inquiries.',
  canonical: 'https://paylancex.com/contact',
  jsonLd: [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA],
};

function ContactPage() {
  useSEO(CONTACT_SEO);
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
              <StatusPill label="Get in Touch" />
            </div>
            <h1
              className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient opacity-0 animate-riseIn sm:text-6xl md:text-7xl"
              style={{ animationDelay: '0.25s' }}
            >
              Let's Connect.
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-neon-100/60 opacity-0 animate-riseIn sm:text-xl"
              style={{ animationDelay: '0.4s' }}
            >
              Have a question, an idea, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal><SectionHeading eyebrow="Contact" title="Reach Out to Us" /></Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <Reveal>
                <a href="mailto:support@paylancex.com" className="group glass-strong relative block h-full overflow-hidden rounded-3xl p-8 transition hover:ring-1 hover:ring-neon-300/30">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10 transition group-hover:scale-110">
                    <Mail className="h-6 w-6 text-neon-200" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">Email</h3>
                  <p className="mt-2 text-sm font-light text-neon-100/60">support@paylancex.com</p>
                  <p className="mt-4 text-xs text-neon-100/40">We typically respond within 48 hours.</p>
                </a>
              </Reveal>
              <Reveal delay={100}>
                <div className="glass-strong relative h-full overflow-hidden rounded-3xl p-8">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                    <Building2 className="h-6 w-6 text-neon-200" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">Company</h3>
                  <p className="mt-2 text-sm font-light text-neon-100/60">Axoryn Technology Pvt. Ltd.</p>
                  <div className="mt-3 flex items-start gap-2 text-xs text-neon-100/40">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neon-300/50" />
                    <span>Sabji Mandi Gali, Madhuban, Mau, Uttar Pradesh, India</span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 ring-1 ring-accent-400/30">
                    <BadgeCheck className="h-3.5 w-3.5 text-accent-300" />
                    <span className="text-xs font-medium text-accent-300">
                      Registered Indian Private Limited Company
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 text-center shadow-glass sm:p-14">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                <h2 className="font-display text-2xl font-bold tracking-tight text-gradient sm:text-3xl">
                  Start a Conversation
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base font-light leading-relaxed text-neon-100/60">
                  Whether you have a question about our work, a partnership idea, or just want to
                  learn more — we're here and happy to help.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a href="mailto:support@paylancex.com" className="btn-primary group">
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <Mail className="h-4 w-4" />
                    Email Us
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                  <Link to="/about" className="btn-ghost">About PaylanceX</Link>
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

export default ContactPage;
