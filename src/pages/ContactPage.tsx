import { useState, type FormEvent } from 'react';
import {
  Mail,
  ArrowRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  MessageSquare,
  User,
  Loader2,
} from 'lucide-react';
import {
  Background,
  Particles,
  Navbar,
  Footer,
  LegalModal,
  StatusPill,
  useReveal,
  Reveal,
  SectionHeading,
} from '../components/Shared';
import { useSEO, CONTACT_SCHEMA, ORGANIZATION_SCHEMA } from '../hooks/useSEO';

const CONTACT_SEO = {
  title: 'Contact PaylanceX — Get in Touch',
  description:
    "Have a question or want to connect? Reach out to PaylanceX — we'd love to hear from you. Send us a message and we'll get back to you.",
  canonical: 'https://paylancex.com/contact',
  jsonLd: [CONTACT_SCHEMA, ORGANIZATION_SCHEMA],
};

type FormState = 'idle' | 'loading' | 'success' | 'error';
type Errors = { name?: string; email?: string; message?: string };

function ContactPage() {
  useSEO(CONTACT_SEO);
  useReveal();
  const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null);

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<FormState>('idle');

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.message.trim()) {
      e.message = 'Please enter a message';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setState('loading');
    try {
      await new Promise((r) => setTimeout(r, 1400));
      setState('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setState('error');
    }
  };

  const fieldClass = (hasError?: string) =>
    `w-full rounded-2xl glass px-5 py-4 text-sm text-neon-50 placeholder:text-neon-100/30 transition focus:ring-1 focus:ring-neon-300/40 ${
      hasError ? 'ring-1 ring-red-400/50' : ''
    }`;

  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />
      <Particles count={16} />
      <Navbar />

      <main className="relative z-10 flex flex-1 flex-col">
        <section className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 pt-20 text-center">
          <div className="mx-auto w-full max-w-3xl">
            <div className="opacity-0 animate-riseIn" style={{ animationDelay: '0.1s' }}>
              <StatusPill label="Let's Talk" />
            </div>
            <h1
              className="mt-8 font-display text-4xl font-bold leading-[1.05] tracking-tight text-gradient opacity-0 animate-riseIn sm:text-6xl md:text-7xl"
              style={{ animationDelay: '0.25s' }}
            >
              Get in Touch.
            </h1>
            <p
              className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-neon-100/60 opacity-0 animate-riseIn sm:text-xl"
              style={{ animationDelay: '0.4s' }}
            >
              Have a question, an idea, or just want to say hello? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="relative px-6 py-16">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-glass sm:p-10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-300/80 to-transparent" />
                {state === 'success' ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-accent-500/20 ring-1 ring-accent-400/40">
                      <CheckCircle2 className="h-8 w-8 text-accent-300" />
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-bold text-white">Message Sent!</h2>
                    <p className="mt-3 max-w-sm text-sm font-light text-neon-100/60">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <button onClick={() => setState('idle')} className="mt-8 btn-ghost">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-neon-100/70">Name</label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neon-300/50" />
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className={fieldClass(errors.name) + ' pl-12'}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                      </div>
                      {errors.name && (
                        <p id="name-error" className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-neon-100/70">Email</label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neon-300/50" />
                        <input
                          id="email"
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="you@example.com"
                          className={fieldClass(errors.email) + ' pl-12'}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                      </div>
                      {errors.email && (
                        <p id="email-error" className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-neon-100/70">
                        Company <span className="text-neon-100/30">(optional)</span>
                      </label>
                      <div className="relative">
                        <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neon-300/50" />
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Your company"
                          className={fieldClass() + ' pl-12'}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-neon-100/70">Message</label>
                      <div className="relative">
                        <MessageSquare className="pointer-events-none absolute left-4 top-5 h-4 w-4 text-neon-300/50" />
                        <textarea
                          id="message"
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us what's on your mind..."
                          className={fieldClass(errors.message) + ' pl-12 resize-none'}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                      </div>
                      {errors.message && (
                        <p id="message-error" className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
                          <AlertCircle className="h-3.5 w-3.5" />
                          {errors.message}
                        </p>
                      )}
                    </div>
                    {state === 'error' && (
                      <div className="flex items-center gap-2 rounded-2xl bg-red-500/10 px-4 py-3 text-sm text-red-400 ring-1 ring-red-400/20">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        Something went wrong. Please try again or email us directly.
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={state === 'loading'}
                      className="btn-primary group w-full disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {state === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <Reveal><SectionHeading eyebrow="Other Ways to Reach Us" title="Business Inquiries" /></Reveal>
            <Reveal delay={100}>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <a
                  href="mailto:support@paylancex.com"
                  className="group glass relative overflow-hidden rounded-3xl p-8 transition hover:ring-1 hover:ring-neon-300/30"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-neon-300/30 to-neon-600/20 ring-1 ring-white/10 transition group-hover:scale-110">
                      <Mail className="h-6 w-6 text-neon-200" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">Email Us</h3>
                    <p className="mt-2 text-sm font-light text-neon-100/60">
                      For general questions, partnerships, or support — reach us anytime.
                    </p>
                    <p className="mt-4 text-sm font-medium text-neon-300">support@paylancex.com</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/aryan-gupta-823b74252"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass relative overflow-hidden rounded-3xl p-8 transition hover:ring-1 hover:ring-neon-300/30"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-300/30 to-accent-600/20 ring-1 ring-white/10 transition group-hover:scale-110">
                      <MessageSquare className="h-6 w-6 text-accent-300" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-white">Connect on LinkedIn</h3>
                    <p className="mt-2 text-sm font-light text-neon-100/60">
                      For business inquiries, collaborations, or professional connections.
                    </p>
                    <p className="mt-4 text-sm font-medium text-neon-300">Aryan Gupta — Founder &amp; CEO</p>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer onLegal={(w) => setLegalOpen(w)} />
      <LegalModal open={legalOpen} onClose={() => setLegalOpen(null)} />
    </div>
  );
}

export default ContactPage;
