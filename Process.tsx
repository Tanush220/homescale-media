import { Search, PenTool, Rocket, LineChart } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description:
      'We understand your business, services, target audience, and goals.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Strategize',
    description: 'We develop a marketing strategy tailored to your business.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Execute',
    description:
      'We create campaigns, promotional content, and lead generation systems.',
  },
  {
    icon: LineChart,
    number: '04',
    title: 'Scale',
    description:
      'We analyse performance, improve campaigns, and work towards sustainable growth.',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative py-24 sm:py-28"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <span id="process-heading">
              A Simple Process. A Smarter Way to Grow.
            </span>
          }
          description="No guesswork. Just a clear, proven path from understanding your business to scaling it sustainably."
        />

        <div className="relative mt-16">
          {/* Connector line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-accent-500/30 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.number}
                className="reveal relative"
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                {/* Node dot on the line */}
                <span className="absolute left-1/2 top-[34px] hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent-400 bg-navy-950 lg:block" />

                <article className="group h-full rounded-2xl border border-white/10 bg-navy-800/50 p-7 text-center transition-all duration-300 hover:border-accent-500/40 hover:bg-navy-800/80">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-300 transition-colors group-hover:bg-accent-500/25">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-display text-3xl font-extrabold text-white/15 transition-colors group-hover:text-accent-500/40">
                    {step.number}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300/85">
                    {step.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
