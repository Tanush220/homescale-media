import { Building2, UserPlus, TrendingUp } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';

const SHOWCASE_IMAGES = [
  {
    src: 'https://images.pexels.com/photos/8584040/pexels-photo-8584040.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Spacious modern kitchen with wooden cabinets and stainless steel appliances.',
    label: 'Kitchen remodelling',
  },
  {
    src: 'https://images.pexels.com/photos/15668081/pexels-photo-15668081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Modern kitchen interior with granite countertops and warm wooden cabinetry.',
    label: 'Designed to impress',
  },
  {
    src: 'https://images.pexels.com/photos/16249143/pexels-photo-16249143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Elegant kitchen interior with modern fixtures and stainless steel appliances.',
    label: 'Spaces that sell',
  },
];

const VALUES = [
  {
    icon: Building2,
    title: 'Industry-focused marketing',
    description:
      'Marketing built specifically for home improvement, roofing, and construction businesses — not generic campaigns.',
  },
  {
    icon: UserPlus,
    title: 'Lead generation strategies',
    description:
      'Targeted systems designed to attract enquiries from homeowners actively looking for your services.',
  },
  {
    icon: TrendingUp,
    title: 'Growth-driven solutions',
    description:
      'Data-informed campaigns that improve over time, working towards sustainable, long-term business growth.',
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="About HomeScale Media"
          title={
            <span id="about-heading">
              Marketing That Works While You Focus on Building.
            </span>
          }
          description="At HomeScale Media, we understand that running a home improvement business takes time, effort, and expertise. That's why we help businesses strengthen their digital presence, reach potential customers, and turn attention into opportunities. Our goal is simple: handle the marketing so you can focus on what you do best."
        />

        <div className="reveal mt-16 grid gap-4 md:grid-cols-2">
          {SHOWCASE_IMAGES.map((image, i) => (
            <figure
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-800/50 ${
                i === 0 ? 'md:row-span-2 md:min-h-[390px]' : 'min-h-[185px]'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 font-display text-sm font-bold text-white">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <article
              key={value.title}
              className="reveal group rounded-2xl border border-white/10 bg-navy-800/50 p-7 transition-all duration-300 hover:border-accent-500/40 hover:bg-navy-800/80"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 transition-colors group-hover:bg-accent-500/25">
                <value.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">
                {value.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300/85">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
