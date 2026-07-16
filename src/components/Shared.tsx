import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ArrowRight, Shield, FileText } from 'lucide-react';

/* ----------------------------- Background ----------------------------- */

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-950" aria-hidden>
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="absolute inset-0 bg-grid mask-fade-edges opacity-50" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neon-500/15 blur-[140px] animate-pulseGlow" />
      <div
        className="absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full bg-accent-500/8 blur-[120px] animate-pulseGlow"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute bottom-0 -right-32 h-[450px] w-[450px] rounded-full bg-neon-400/10 blur-[130px] animate-pulseGlow"
        style={{ animationDelay: '4s' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#03060f_100%)]" />
    </div>
  );
}

/* ----------------------------- Particles ----------------------------- */

type Particle = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

export function Particles({ count = 24 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 18 + 16,
      delay: Math.random() * 20,
      drift: (Math.random() - 0.5) * 60,
      opacity: Math.random() * 0.4 + 0.15,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-5 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 rounded-full bg-neon-300 animate-floatUp"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: '0 0 8px rgba(77,166,255,0.6)',
            ['--tw-translate-x' as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

/* ----------------------------- Navbar ----------------------------- */

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/founder', label: 'Founder' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5" aria-label="PaylanceX home">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-400 to-neon-600 shadow-neon-sm">
            <span className="font-display text-sm font-bold text-white">P</span>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-gradient">
            PaylanceX
          </span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? 'text-white ring-1 ring-neon-300/30'
                    : 'text-neon-100/60 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full text-neon-100/70 transition hover:bg-white/5 hover:text-white sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-ink-950/95 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'bg-white/5 text-white'
                      : 'text-neon-100/60 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

/* ----------------------------- Status Pill ----------------------------- */

export function StatusPill({ label = 'Launching Soon' }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-300 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-300 shadow-neon-sm" />
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-neon-100">
        {label}
      </span>
    </div>
  );
}

/* ----------------------------- Reveal ----------------------------- */

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
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
    <div data-reveal className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ----------------------------- Section Heading ----------------------------- */

export function SectionHeading({
  eyebrow,
  title,
  className = '',
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-300">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

/* ----------------------------- Footer ----------------------------- */

export function Footer({ onLegal }: { onLegal?: (w: 'privacy' | 'terms') => void }) {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-10 pt-12">
      <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-neon-400 to-neon-600">
            <span className="font-display text-xs font-bold text-white">P</span>
          </div>
          <span className="text-sm text-neon-100/50">
            © 2026 PaylanceX. All Rights Reserved.
          </span>
        </div>

        <nav className="flex items-center gap-2">
          {onLegal && (
            <>
              <button
                onClick={() => onLegal('privacy')}
                className="rounded-lg px-3 py-2 text-sm text-neon-100/50 transition hover:text-neon-100"
              >
                Privacy Policy
              </button>
              <span className="text-neon-100/20">·</span>
              <button
                onClick={() => onLegal('terms')}
                className="rounded-lg px-3 py-2 text-sm text-neon-100/50 transition hover:text-neon-100"
              >
                Terms of Service
              </button>
            </>
          )}
        </nav>
      </div>
    </footer>
  );
}

/* ----------------------------- Legal Modal ----------------------------- */

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    icon: Shield,
    body: [
      'This Privacy Policy describes how PaylanceX ("we", "us") collects, uses, and shares information when you interact with our website and services.',
      'We may collect information you provide directly — such as your email address when you contact us — as well as technical data collected automatically, including device type, browser, and usage patterns.',
      'We use this information to operate, maintain, and improve our services, to respond to your inquiries, and to ensure the security of our platform.',
      'We do not sell your personal information. We may share data with trusted service providers who act on our behalf under appropriate confidentiality agreements.',
      'You may request access to, correction of, or deletion of your personal data at any time by contacting support@paylancex.com.',
    ],
  },
  terms: {
    title: 'Terms of Service',
    icon: FileText,
    body: [
      'These Terms of Service govern your access to and use of the PaylanceX website and any related services.',
      'By accessing our site, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of, any other party.',
      'All content, branding, and intellectual property displayed on this site are owned by PaylanceX and may not be reproduced without prior written consent.',
      'We reserve the right to modify or discontinue any aspect of our services at any time without prior notice.',
      'Our services are provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any indirect or consequential damages.',
    ],
  },
} as const;

export function LegalModal({
  open,
  onClose,
}: {
  open: 'privacy' | 'terms' | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;
  const content = LEGAL_CONTENT[open];
  const Icon = content.icon;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-md" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-title"
        className="relative w-full max-w-lg animate-fadeScale"
      >
        <div className="glass-strong relative max-h-[80vh] overflow-hidden rounded-3xl shadow-glass">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
          <div className="flex items-center justify-between border-b border-white/5 px-7 py-5">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
                <Icon className="h-4 w-4 text-neon-200" />
              </div>
              <h2 id="legal-title" className="font-display text-lg font-semibold text-white">
                {content.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 place-items-center rounded-full text-neon-100/60 transition hover:bg-white/5 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="max-h-[60vh] overflow-y-auto px-7 py-6">
            <div className="space-y-4">
              {content.body.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-neon-100/70">
                  {para}
                </p>
              ))}
            </div>
            <p className="mt-6 text-xs text-neon-100/30">Last updated: January 2026</p>
          </div>
        </div>
      </div>
    </div>
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const email = 'support@paylancex.com';

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-md" onClick={onClose} aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="relative w-full max-w-md animate-fadeScale"
      >
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glass">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-neon-100/60 transition hover:bg-white/5 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10">
              <Mail className="h-5 w-5 text-neon-200" />
            </div>
            <div>
              <h2 id="contact-title" className="font-display text-lg font-semibold text-white">
                Get in touch
              </h2>
              <p className="text-sm text-neon-100/50">We'd love to hear from you.</p>
            </div>
          </div>
          <div className="space-y-4">
            <button
              onClick={copyEmail}
              className="group flex w-full items-center justify-between gap-3 rounded-2xl glass px-5 py-4 text-left transition hover:ring-1 hover:ring-neon-300/40"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-neon-300" />
                <span className="text-sm font-medium text-neon-50">{email}</span>
              </div>
              <span
                className={`text-xs font-semibold uppercase tracking-wider transition ${
                  copied ? 'text-accent-400' : 'text-neon-200/60 group-hover:text-neon-100'
                }`}
              >
                {copied ? 'Copied' : 'Copy'}
              </span>
            </button>
            <a
              href={`mailto:${email}`}
              className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-neon-400 to-neon-600 px-5 py-4 text-sm font-semibold text-white shadow-neon transition hover:shadow-neon-lg"
            >
              Send an email
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-6 text-center text-xs text-neon-100/40">Press ESC to close</p>
        </div>
      </div>
    </div>
  );
}
