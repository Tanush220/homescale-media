import { useState } from 'react';
import type { FormEvent } from 'react';
import { Send, MessageCircle, Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { supabase } from '@/lib/supabase';

const SERVICE_OPTIONS = [
  'Social Media Marketing',
  'Paid Advertising',
  'AI Chatbots',
  'AI Voice Agents',
];

const BUSINESS_TYPES = [
  'Roofing',
  'Construction',
  'Renovation / Remodelling',
  'Interior Design',
  'Home Improvement',
  'Other Home Service',
];

// Replace this with your real WhatsApp number (international format, no +)
const WHATSAPP_NUMBER = '917259599744';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      full_name: String(formData.get('full_name') || '').trim(),
      business_name: String(formData.get('business_name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      business_type: String(formData.get('business_type') || '').trim(),
      services_interested: selectedServices,
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert(payload);

      if (error) throw error;

      setStatus('success');
      form.reset();
      setSelectedServices([]);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.',
      );
    }
  };

  const whatsappText = encodeURIComponent(
    "Hi HomeScale Media! I'd like to discuss marketing for my home service business.",
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-28"
      aria-labelledby="contact-heading"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-accent-600/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title={<span id="contact-heading">Ready to Grow Your Business?</span>}
          description="Let's discuss how HomeScale Media can help your business reach more potential customers."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: contact info + WhatsApp */}
          <div className="reveal space-y-6">
            <div className="rounded-2xl border border-white/10 bg-navy-800/50 p-7">
              <h3 className="font-display text-lg font-bold text-white">
                Talk to us directly
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300/85">
                Prefer to message us? We typically respond within one business day.
              </p>

              <ul className="mt-6 space-y-4">
                <ContactInfoRow
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value="homescale.media@gmail.com"
                />
                <ContactInfoRow
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone"
                  value="+91 72595 99744"
                />
                <ContactInfoRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Location"
                  value="Bengaluru, India"
                />
              </ul>
            </div>

            {/* WhatsApp card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 transition-all hover:border-green-500/50 hover:bg-green-500/15"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500/20 text-green-400 transition-colors group-hover:bg-green-500/30">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <h4 className="font-display text-base font-bold text-white">
                  Chat on WhatsApp
                </h4>
                <p className="mt-0.5 text-sm text-slate-300/85">
                  Quick questions? Send us a message anytime.
                </p>
              </div>
            </a>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit}
            className="reveal rounded-2xl border border-white/10 bg-navy-800/50 p-7 sm:p-8"
            style={{ transitionDelay: '80ms' }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15 text-green-400">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  Thank you — message received!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-300/85">
                  We'll review your details and get back to you within one
                  business day. Keep an eye on your inbox.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="full_name" required
                    placeholder="John Doe" />
                  <Field label="Business Name" name="business_name"
                    placeholder="Doe Roofing Co." />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Email Address" name="email" type="email" required
                    placeholder="john@doeroofing.com" />
                  <Field label="Phone Number" name="phone" type="tel"
                    placeholder="+91 72595 99744" />
                </div>

                <div>
                  <label
                    htmlFor="business_type"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Type of Business
                  </label>
                  <select
                    id="business_type"
                    name="business_type"
                    defaultValue=""
                    className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20"
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Services multi-select */}
                <div>
                  <span className="mb-2 block text-sm font-medium text-slate-200">
                    What services are you interested in?
                  </span>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {SERVICE_OPTIONS.map((service) => {
                      const active = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                            active
                              ? 'border-accent-500/60 bg-accent-500/15 text-white'
                              : 'border-white/10 bg-navy-900/40 text-slate-300 hover:border-white/20'
                          }`}
                          aria-pressed={active}
                        >
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border transition-colors ${
                              active
                                ? 'border-accent-400 bg-accent-500 text-white'
                                : 'border-white/25 bg-transparent'
                            }`}
                          >
                            {active && <CheckCircle2 className="h-3 w-3" strokeWidth={3} />}
                          </span>
                          {service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-slate-200"
                  >
                    Additional Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your business goals and what you're looking for..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20"
                  />
                </div>

                {status === 'error' && (
                  <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-500/25 transition-all hover:bg-accent-400 hover:shadow-accent-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Let's Talk
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-500">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center gap-3.5">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300">
        {icon}
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-slate-400">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </li>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-medium text-slate-200"
      >
        {label}
        {required && <span className="ml-0.5 text-accent-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-accent-500/60 focus:ring-2 focus:ring-accent-500/20"
      />
    </div>
  );
}
