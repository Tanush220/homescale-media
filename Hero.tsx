import { ArrowRight, PhoneCall, TrendingUp, Users, BarChart3, Target } from 'lucide-react';

const handleNav = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[72px]"
      aria-labelledby="hero-heading"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent-600/12 blur-[140px]" />
        <div className="absolute right-[-8%] top-[30%] h-[380px] w-[380px] rounded-full bg-accent-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:py-28">
        {/* Left: copy */}
        <div className="max-w-xl">
          <div className="reveal mb-7 flex items-center gap-4" style={{ transitionDelay: '20ms' }}>
            <span className="h-14 w-1 rounded-full bg-gradient-to-b from-accent-300 via-accent-500 to-transparent" />
            <div>
              <p className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                HomeScale <span className="text-accent-300">Media</span>
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                We Scale <span className="mx-1 text-accent-400">·</span> You Create
              </p>
            </div>
            <span className="hidden h-px w-16 bg-gradient-to-r from-accent-500/60 to-transparent sm:block" />
          </div>

          <span className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse-soft" />
            Home Improvement Marketing Agency
          </span>

          <h1
            id="hero-heading"
            className="reveal mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.4rem]"
            style={{ transitionDelay: '60ms' }}
          >
            Your Business Builds.
            <span className="block bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              We Make It Grow.
            </span>
          </h1>

          <p
            className="reveal mt-6 text-base leading-relaxed text-slate-300/90 sm:text-lg"
            style={{ transitionDelay: '120ms' }}
          >
            We help home improvement businesses attract more customers, generate
            quality leads, and build a stronger online presence through strategic
            digital marketing.
          </p>

          <div
            className="reveal mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ transitionDelay: '220ms' }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#contact');
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-400 hover:shadow-accent-500/40"
            >
              <PhoneCall className="h-4 w-4" />
              Get a Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNav('#services');
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10"
            >
              Explore Our Services
            </a>
          </div>

          <p
            className="reveal mt-6 text-xs text-slate-400"
            style={{ transitionDelay: '280ms' }}
          >
            Serving home service businesses in Bengaluru &amp; beyond.
          </p>
        </div>

        {/* Right: dashboard mockup */}
        <div className="reveal" style={{ transitionDelay: '200ms' }}>
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Glow */}
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-600/10 blur-3xl" />

      {/* Main panel */}
      <div className="rounded-2xl border border-white/10 bg-navy-800/80 p-4 shadow-2xl shadow-navy-950/60 backdrop-blur-xl sm:p-5">
        {/* Window header */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </div>
          <span className="text-[11px] font-medium text-slate-400">
            Campaign Overview · Sample
          </span>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-3 gap-3">
          <Kpi
            icon={<TrendingUp className="h-3.5 w-3.5" />}
            label="Leads"
            value="128"
            delta="+34%"
          />
          <Kpi
            icon={<Users className="h-3.5 w-3.5" />}
            label="Reach"
            value="42K"
            delta="+18%"
          />
          <Kpi
            icon={<Target className="h-3.5 w-3.5" />}
            label="Conv."
            value="9.2%"
            delta="+5.1%"
          />
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl border border-white/10 bg-navy-900/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200">Lead Growth</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-accent-300">
              <BarChart3 className="h-3 w-3" /> Weekly
            </span>
          </div>
          <div className="flex h-28 items-end justify-between gap-2">
            {[
              { h: 38, v: '32' },
              { h: 52, v: '44' },
              { h: 46, v: '39' },
              { h: 64, v: '58' },
              { h: 72, v: '67' },
              { h: 86, v: '81' },
              { h: 96, v: '94' },
            ].map((bar, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className="w-full origin-bottom rounded-t-md bg-gradient-to-t from-accent-600 to-accent-400 animate-bar-grow"
                  style={{ height: `${bar.h}%`, transitionDelay: `${i * 90}ms` }}
                />
                <span className="text-[9px] text-slate-500">{bar.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Incoming leads list */}
        <div className="mt-3 rounded-xl border border-white/10 bg-navy-900/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-200">
              Incoming Leads
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-400">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse-soft" />
              Live
            </span>
          </div>
          <div className="space-y-2.5">
            {[
              { n: 'Roofer · Bengaluru', t: '2m ago' },
              { n: 'Interior Designer · BLR', t: '11m ago' },
              { n: 'Renovation · Whitefield', t: '26m ago' },
            ].map((lead, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500/20 text-accent-300">
                    <Users className="h-3 w-3" />
                  </span>
                  <span className="text-[11px] font-medium text-slate-200">
                    {lead.n}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500">{lead.t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating accent card */}
      <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-white/10 bg-navy-700/90 px-4 py-3 shadow-xl shadow-navy-950/50 backdrop-blur-md animate-float-slow sm:block">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/20 text-accent-300">
            <TrendingUp className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Business Growth
            </p>
            <p className="text-sm font-bold text-white">
              +27% <span className="text-slate-400">this quarter</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({
  icon,
  label,
  value,
  delta,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-navy-900/60 p-3">
      <div className="flex items-center gap-1.5 text-slate-400">
        {icon}
        <span className="text-[10px] uppercase tracking-wide">{label}</span>
      </div>
      <p className="mt-1.5 text-lg font-bold text-white">{value}</p>
      <p className="text-[10px] font-semibold text-green-400">{delta}</p>
    </div>
  );
}
