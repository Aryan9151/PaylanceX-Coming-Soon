import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Shield, FileText, Building2, MapPin, BadgeCheck, Sparkles } from 'lucide-react';

/* ----------------------------- Background ----------------------------- */

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05070d]" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-neon-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-accent-500/5 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(77,166,255,0.06),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'60\' height=\'60\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence baseFrequency=\'0.9\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />
    </div>
  );
}

/* ----------------------------- Particles ----------------------------- */

export function Particles({ count = 30 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 4,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none fixed inset-0 -z-5 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-neon-300/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animation: `floatY ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ----------------------------- Navbar ----------------------------- */

export const LOGO_SRC = '/WhatsApp_Image_2026-05-27_at_12.55.50_AM-removebg-preview.png';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={LOGO_SRC}
        alt="PaylanceX"
        width={32}
        height={32}
        className="h-8 w-8 rounded-lg object-contain"
        draggable={false}
      />
      <span className="font-display text-lg font-bold text-white">PaylanceX</span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/founder', label: 'Founder' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-[#05070d]/80 backdrop-blur-xl' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                location.pathname === link.to
                  ? 'text-neon-300'
                  : 'text-neon-100/60 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="rounded-lg p-2 text-neon-100/60 transition hover:text-white md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/5 bg-[#05070d]/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  location.pathname === link.to
                    ? 'text-neon-300'
                    : 'text-neon-100/60 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------------------- Status Pill ----------------------------- */

export function StatusPill({ label = 'Coming Soon' }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
      </span>
      <span className="text-xs font-medium tracking-wide text-neon-100/70">{label}</span>
    </div>
  );
}

/* ----------------------------- Startup Badge ----------------------------- */

export function StartupBadge() {
  return (
    <div
      className="mt-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 opacity-0 animate-riseIn"
      style={{ animationDelay: '0.2s' }}
    >
      <Sparkles className="h-3.5 w-3.5 text-neon-300" />
      <span className="text-xs font-medium tracking-wide text-neon-100/80">
        A Startup by{' '}
        <span className="font-semibold text-neon-200">Axoryn Technology Pvt. Ltd.</span>
      </span>
    </div>
  );
}

/* ----------------------------- Reveal ----------------------------- */

export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ----------------------------- Section Heading ----------------------------- */

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-300">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

/* ----------------------------- Powered by Axoryn ----------------------------- */

export function PoweredByAxoryn() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-300">
              Parent Company
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient sm:text-4xl md:text-5xl">
              Powered by Axoryn Technology Pvt. Ltd.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-base font-light leading-relaxed text-neon-100/60 sm:text-lg">
            PaylanceX is an innovation developed under Axoryn Technology Pvt. Ltd., an Indian
            technology company focused on building next-generation digital products, secure
            financial technology, AI-powered software, and scalable platforms for the future.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="glass-strong relative mt-10 overflow-hidden rounded-3xl p-8 shadow-glass sm:p-10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                  <Building2 className="h-6 w-6 text-neon-200" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Axoryn Technology Pvt. Ltd.
                  </h3>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 ring-1 ring-accent-400/30">
                    <BadgeCheck className="h-3.5 w-3.5 text-accent-300" />
                    <span className="text-xs font-medium text-accent-300">
                      Registered Indian Private Limited Company
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-neon-100/60">
                  <span className="font-medium text-neon-200/80">CIN</span>
                  <span>U62011UP2026PTC250755</span>
                </div>
                <div className="flex items-start gap-3 text-neon-100/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-neon-300/50" />
                  <span>Sabji Mandi Gali, Madhuban, Mau, Uttar Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3 text-neon-100/60">
                  <Mail className="h-4 w-4 shrink-0 text-neon-300/50" />
                  <a
                    href="mailto:support@paylancex.com"
                    className="transition hover:text-neon-100"
                  >
                    support@paylancex.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- About Axoryn Section ----------------------------- */

export function AboutAxorynSection() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-300">
              Parent Company
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient sm:text-4xl md:text-5xl">
              About Axoryn Technology Pvt. Ltd.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="glass-strong relative mt-10 overflow-hidden rounded-3xl p-8 shadow-glass sm:p-12">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                  <Building2 className="h-5 w-5 text-neon-200" />
                </div>
                <span className="font-display text-sm font-semibold uppercase tracking-wider text-neon-300">
                  Our Parent Company
                </span>
              </div>
              <p className="text-lg font-light leading-relaxed text-neon-100/80">
                Axoryn Technology Pvt. Ltd. is the parent company behind PaylanceX. It is an
                Indian technology company dedicated to building innovative technology products for
                India and global markets.
              </p>
              <p className="text-base font-light leading-relaxed text-neon-100/60">
                With a focus on next-generation digital products, secure financial technology,
                AI-powered software, and scalable platforms, Axoryn Technology is committed to
                creating solutions that are reliable, future-ready, and trusted by millions.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------- Contact Modal ----------------------------- */

export function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="glass-strong relative w-full max-w-md rounded-3xl p-8 shadow-glass"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-neon-100/40 transition hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="font-display text-2xl font-bold text-white">Get in Touch</h3>
        <p className="mt-3 text-sm font-light text-neon-100/60">
          We'd love to hear from you. Reach out and we'll get back to you soon.
        </p>
        <a href="mailto:support@paylancex.com" className="btn-primary mt-6 w-full">
          <Mail className="h-4 w-4" />
          support@paylancex.com
        </a>
      </div>
    </div>
  );
}

/* ----------------------------- Legal Modal ----------------------------- */

export function LegalModal({
  open,
  onClose,
}: {
  open: 'privacy' | 'terms' | null;
  onClose: () => void;
}) {
  if (!open) return null;
  const isPrivacy = open === 'privacy';
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="glass-strong relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 shadow-glass"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-neon-100/40 transition hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-3">
          {isPrivacy ? (
            <Shield className="h-6 w-6 text-neon-300" />
          ) : (
            <FileText className="h-6 w-6 text-neon-300" />
          )}
          <h3 className="font-display text-2xl font-bold text-white">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h3>
        </div>
        <div className="mt-6 space-y-4 text-sm font-light leading-relaxed text-neon-100/60">
          <p>
            PaylanceX is a product of Axoryn Technology Pvt. Ltd. By accessing or using our
            website, you agree to the terms outlined below.
          </p>
          {isPrivacy ? (
            <>
              <p>
                We respect your privacy and are committed to protecting your personal data. We
                collect only the information necessary to provide our services and improve your
                experience.
              </p>
              <p>
                We do not sell or share your personal information with third parties without your
                consent. All data is handled in accordance with applicable Indian data protection
                laws.
              </p>
            </>
          ) : (
            <>
              <p>
                All content on this website is the property of Axoryn Technology Pvt. Ltd. and is
                protected by applicable intellectual property laws.
              </p>
              <p>
                We reserve the right to modify, update, or discontinue any part of our services at
                any time without prior notice.
              </p>
            </>
          )}
          <p className="text-neon-100/40">
            Last updated: August 2026. For questions, contact support@paylancex.com.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Footer ----------------------------- */

export function Footer({ onLegal }: { onLegal?: (w: 'privacy' | 'terms') => void }) {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-12">
      <div className="flex flex-col items-center gap-8 border-t border-white/5 pt-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="/" className="text-sm text-neon-100/50 transition hover:text-neon-100">
            About PaylanceX
          </Link>
          <Link to="/founder" className="text-sm text-neon-100/50 transition hover:text-neon-100">
            Founder
          </Link>
          <Link to="/contact" className="text-sm text-neon-100/50 transition hover:text-neon-100">
            Contact
          </Link>
          {onLegal && (
            <>
              <button
                onClick={() => onLegal('privacy')}
                className="text-sm text-neon-100/50 transition hover:text-neon-100"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onLegal('terms')}
                className="text-sm text-neon-100/50 transition hover:text-neon-100"
              >
                Terms &amp; Conditions
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center gap-2.5">
            <img
              src={LOGO_SRC}
              alt="PaylanceX"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg object-contain"
              draggable={false}
            />
            <span className="text-sm text-neon-100/50">
              © 2026 PaylanceX. All Rights Reserved.
            </span>
          </div>
          <p className="text-xs text-neon-100/40">
            PaylanceX is a product of Axoryn Technology Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
