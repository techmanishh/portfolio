import { useState } from 'react';
import { motion } from 'framer-motion';
import { site, contactForm } from '@/data/portfolio';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { sendContactEmail, isEmailJsConfigured } from '@/lib/sendContactEmail';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');

  return (
    <section className="py-20 md:py-24 bg-green text-white" id="contact" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <ScrollReveal className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="w-4 h-0.5 bg-yellow" aria-hidden />
              <p className="font-headline font-bold text-[15px] tracking-wide text-white">Contact Me</p>
            </div>
            <h2
              id="contact-heading"
              className="font-headline font-extrabold text-3xl md:text-5xl text-white leading-[1.1] tracking-tight mb-8"
            >
              Let&apos;s Talk for{' '}
              <span className="text-yellow italic font-normal">
                Your
                <br />
                Next Projects
              </span>
            </h2>
            <p className="text-white/75 text-lg leading-relaxed font-body mb-10 max-w-lg">
              {site.contact.intro}
            </p>

            <ul className="space-y-6" aria-label="Contact details">
              <li className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green text-[22px]">phone_in_talk</span>
                </div>
                <a
                  className="text-white text-lg font-body hover:text-yellow transition-colors"
                  href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green text-[22px]">mail</span>
                </div>
                <a
                  className="text-white text-lg font-body hover:text-yellow transition-colors"
                  href={`mailto:${site.contact.email}`}
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0 text-green">
                  <svg className="w-[22px] h-[22px] fill-current" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </div>
                {site.social?.github ? (
                  <a
                    className="text-white text-lg font-body hover:text-yellow transition-colors"
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.contact.socialHandle}
                  </a>
                ) : (
                  <span className="text-white text-lg font-body">{site.contact.socialHandle}</span>
                )}
              </li>
              <li className="flex items-start gap-5 pt-1">
                <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined text-green text-[22px]">location_on</span>
                </div>
                <span className="text-white text-lg font-body leading-relaxed max-w-[280px] mt-2">
                  {site.contact.address}
                </span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            {status === 'success' ? (
              <div
                className="rounded-[1.5rem] border border-white/15 bg-white/5 p-8 md:p-10 mt-2 lg:mt-0"
                role="status"
              >
                <p className="font-headline font-bold text-xl text-yellow mb-2">{contactForm.successTitle}</p>
                <p className="font-body text-white/85 leading-relaxed mb-6">{contactForm.successBody}</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm font-headline font-bold text-yellow hover:text-white underline underline-offset-2 focus-visible:outline rounded"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5 mt-2 lg:mt-0"
                onSubmit={async (e) => {
                  e.preventDefault();
                  // Capture before any await — React clears synthetic event targets after await.
                  const formEl = e.currentTarget;
                  const fd = new FormData(formEl);
                  const name = String(fd.get('name') ?? '').trim();
                  const email = String(fd.get('email') ?? '').trim();
                  const phone = String(fd.get('phone') ?? '').trim();
                  const message = String(fd.get('message') ?? '').trim();
                  const toEmail =
                    (import.meta.env.VITE_CONTACT_TO_EMAIL as string | undefined)?.trim() || site.contact.email;

                  setStatus('sending');
                  try {
                    if (!isEmailJsConfigured()) {
                      throw new Error('EmailJS not configured');
                    }
                    await sendContactEmail({ name, email, phone, message, toEmail });
                    formEl.reset();
                    setStatus('success');
                  } catch (err) {
                    if (import.meta.env.DEV) {
                      console.error('[contact]', err);
                    }
                    setStatus('error');
                  }
                }}
              >
                {status === 'error' && (
                  <div
                    className="rounded-xl border border-red-300/40 bg-red-500/10 px-4 py-3 text-sm font-body"
                    role="alert"
                  >
                    <p className="font-headline font-bold text-yellow mb-1">{contactForm.errorTitle}</p>
                    <p className="text-white/90">{contactForm.errorBody}</p>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-name">
                    {contactForm.nameLabel} *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={contactForm.namePlaceholder}
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-4 py-3 md:px-5 md:py-3.5 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-email">
                    {contactForm.emailLabel} *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={contactForm.emailPlaceholder}
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-4 py-3 md:px-5 md:py-3.5 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-phone">
                    {contactForm.phoneLabel}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={contactForm.phonePlaceholder}
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-4 py-3 md:px-5 md:py-3.5 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-headline font-bold text-white text-[15px]" htmlFor="contact-message">
                    {contactForm.messageLabel} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder={contactForm.messagePlaceholder}
                    className="w-full bg-white/5 border border-white/10 rounded-[1.25rem] px-4 py-3 md:px-5 md:py-3.5 text-white font-body outline-none focus:ring-0 focus:border-yellow transition-colors placeholder:text-white/35 resize-none min-h-[120px]"
                  />
                </div>

                <div className="mt-2 flex justify-center lg:justify-start">
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                    className="inline-flex items-center bg-yellow p-[2px] rounded-full shadow-sm transition-colors duration-300 w-fit group border-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-60"
                  >
                    <span className="bg-green text-white px-8 py-3.5 rounded-full font-bold font-headline text-sm tracking-wide mr-2">
                      {status === 'sending' ? contactForm.sendingLabel : contactForm.submitLabel}
                    </span>
                    <span className="bg-white text-green w-10 h-10 rounded-full flex items-center justify-center shadow-sm mr-1 group-hover:translate-x-1 transition-transform relative z-10">
                      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5" aria-hidden>
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
