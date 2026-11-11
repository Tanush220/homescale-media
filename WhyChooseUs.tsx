import {
  Sparkles,
  Home,
  Bot,
  MessagesSquare,
  Rocket,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const REASONS = [
  {
    icon: Sparkles,
    title: 'Tailored marketing strategies',
    description:
      'No copy-paste campaigns. Every strategy is built around your services, area, and goals.',
  },
  {
    icon: Home,
    title: 'Focus on home improvement businesses',
    description:
      'We specialise in your industry — roofing, construction, renovation, interior design, and more.',
  },
  {
    icon: Bot,
    title: 'Modern AI-powered solutions',
    description:
      'AI chatbots and voice agents that capture every lead, even after hours.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear communication',
    description:
      "You always know what's happening, what's working, and what's next.",
  },
  {
    icon: Rocket,
    title: 'Growth-focused campaigns',
    description:
      'Every action ties back to one outcome: helping your business grow sustainably.',
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-28"
      aria-labelledby="why-heading"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-600/8 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why HomeScale Media"
          title={
            <span id="why-heading">
              You Handle the Projects. We Handle the Marketing.
            </span>
          }
          description="We combine industry focus with modern technology to give your business a marketing partner that actually understands what you do."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason, i) => (
            <article
              key={reason.title}
              className="reveal group flex items-start gap-4 rounded-2xl border border-white/10 bg-navy-800/50 p-6 transition-all duration-300 hover:border-accent-500/40 hover:bg-navy-800/80"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 transition-colors group-hover:bg-accent-500/25">
                <reason.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-white">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-300/85">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}

          {/* Stat tile to balance the 3-col grid (5 reasons + 1 highlight) */}
          <div className="reveal flex flex-col justify-center rounded-2xl border border-accent-500/30 bg-gradient-to-br from-accent-600/15 to-accent-500/5 p-6">
            <p className="font-display text-4xl font-extrabold text-white">1 goal</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-200">
              Help your home service business reach more customers and grow —
              while you focus on the work you do best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
