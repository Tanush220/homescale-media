import { Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Logo } from '@/components/Logo';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

const SERVICE_LINKS = [
  'Social Media Marketing',
  'Paid Advertising',
  'AI Chatbots',
  'AI Voice Agents',
];

const SOCIAL_LINKS = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

const handleNav = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      {/* top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 font-display text-sm font-bold tracking-tight text-accent-300">
              We scale. You create.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              A digital marketing agency helping home improvement businesses
              attract more customers, generate quality leads, and grow
              sustainably.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav('#services');
                    }}
                    className="text-sm text-slate-400 transition-colors hover:text-accent-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Mail className="h-4 w-4 text-accent-300" />
                homescale.media@gmail.com
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <Phone className="h-4 w-4 text-accent-300" />
                +91 72595 99744
              </li>
              <li className="flex items-center gap-2.5 text-sm text-slate-400">
                <MapPin className="h-4 w-4 text-accent-300" />
                Bengaluru, India
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-accent-500/40 hover:text-accent-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://wa.me/917259599744"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-all hover:border-green-500/40 hover:text-green-400"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} HomeScale Media. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Bengaluru, India &middot; We scale. You create.
          </p>
        </div>
      </div>
    </footer>
  );
}
