import {
  Share2,
  Target,
  MessageSquare,
  PhoneCall,
  ArrowRight,
  Check,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const SERVICES = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Build a consistent, professional brand presence across the platforms your customers already use.',
    features: [
      'Professional promotional posts',
      'Engaging social media content',
      'Brand awareness campaigns',
      'Consistent online presence',
    ],
  },
  {
    icon: Target,
    title: 'Paid Advertising',
    description:
      'Reach the right homeowners with targeted ad campaigns designed to generate quality leads.',
    features: [
      'Facebook and Instagram advertising',
      'Targeted advertising campaigns',
      'Lead generation campaigns',
      'Campaign performance monitoring',
    ],
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description:
      'Automated chat assistants that engage enquiries instantly, qualify leads, and book appointments.',
    features: [
      'Automated customer conversations',
      'Instant responses to enquiries',
      'Lead qualification',
      'Appointment booking assistance',
    ],
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Agents',
    description:
      'Never miss a call. AI-powered voice agents answer, handle enquiries, and schedule appointments 24/7.',
    features: [
      'Automated call answering',
      'Customer enquiry handling',
      'Appointment scheduling',
      '24/7 virtual receptionist capabilities',
    ],
  },
];

const handleNav = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-28"
      aria-labelledby="services-heading"
    >
      {/* subtle top divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title={<span id="services-heading">Services Built to Grow Your Business</span>}
          description="From social media to AI-powered automation, we cover every part of your digital marketing — so your business stays visible, responsive, and ahead of the competition."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <article
              key={service.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/50 p-7 transition-all duration-300 hover:border-accent-500/40 hover:bg-navy-800/80 sm:p-8"
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="flex items-start gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 transition-colors group-hover:bg-accent-500/25">
                  <service.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300/85">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('#contact');
                }}
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-300 transition-colors hover:text-accent-200"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
