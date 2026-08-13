import { Phone, Mail, Globe, Link2, Palette } from "lucide-react";
import { profile, summary } from "../data/cv";
import Reveal from "./Reveal";

const contactLinks = [
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Globe, label: profile.website, href: profile.websiteUrl },
  { icon: Link2, label: profile.linkedin, href: profile.linkedinUrl },
  { icon: Palette, label: profile.behance, href: profile.behanceUrl },
];

export default function About() {
  return (
    <section id="about" className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-line">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-4" as="div">
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
            <div className="absolute -inset-3 border border-line -z-10" aria-hidden />
            <img
              src="/assets/portrait.jpg"
              alt={`Portrait of ${profile.name}`}
              width={520}
              height={520}
              loading="lazy"
              className="w-full aspect-square object-cover grayscale-0 border border-line"
            />
            <div className="absolute -bottom-4 -right-4 bg-ink text-paper px-3 py-2 text-xs font-semibold uppercase tracking-widest">
              {profile.experienceLine}
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-8 flex flex-col justify-center">
          <Reveal delay={0.05}>
            <span className="uppercase tracking-[0.25em] text-xs font-semibold text-ember">
              About
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-medium leading-snug tracking-tight max-w-3xl">
              {summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="focus-ring group inline-flex items-center gap-2 text-sm font-medium text-ink/75 hover:text-ember transition-colors duration-200"
                  >
                    <Icon size={17} strokeWidth={1.8} className="text-ember shrink-0" />
                    <span className="border-b border-transparent group-hover:border-ember transition-colors duration-200">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
