import { useRef } from "react";
import { profile, summary } from "../data/cv";
import { contactLinks, isExternal } from "../data/contacts";
import { useTilt } from "../hooks/useTilt";
import Reveal from "./Reveal";

// Split "5 Years of Experience" -> number "5" + label "Years of Experience"
// so the badge can show the number in its own accent circle. Falls back
// gracefully to the full string if no digit is present.
const expNumberMatch = profile.experienceLine.match(/\d+/);
const expNumber = expNumberMatch?.[0];
const expLabel = expNumber
  ? profile.experienceLine.replace(expNumber, "").trim()
  : profile.experienceLine;

export default function About() {
  const frameRef = useRef(null);
  useTilt(frameRef, 6);

  return (
    <section
      id="about"
      className="py-20 sm:py-28 border-t border-line"
    >

      <div className="container-page grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-4" as="div">
          <div
            className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0"
            style={{ perspective: "1200px" }}
          >
            {/* ambient glow behind the frame */}
            <div
              className="absolute -inset-6 -z-10 blur-3xl opacity-70 animate-[ab-drift_14s_ease-in-out_infinite]"
              style={{
                background:
                  "radial-gradient(50% 50% at 25% 20%, rgba(239,90,42,0.16), transparent 65%), radial-gradient(45% 45% at 85% 85%, rgba(255,138,80,0.14), transparent 65%)",
              }}
              aria-hidden
            />

            {/* animated gradient border + subtle cursor tilt */}
            <div
              ref={frameRef}
              className="relative  rounded-3xl  p-[2px] transition-transform duration-300 ease-out animate-[ab-borderShift_7s_ease-in-out_infinite]"
              style={{
                background:
                  "linear-gradient(155deg, rgba(239,90,42,0.55), rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(239,90,42,0.35))",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src="/images/site/portrait.png"
                  alt={`Portrait of ${profile.name}`}
                  width={520}
                  height={520}
                  loading="lazy"
                  className="w-full rounded-3xl aspect-square object-cover"
                />


                {/* corner scan brackets — AI recognition motif */}
                <span
                  className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-ember  animate-[ab-bracketPulse_3.2s_ease-in-out_infinite]"
                  aria-hidden
                />
                <span
                  className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-ember  animate-[ab-bracketPulse_3.2s_ease-in-out_infinite] [animation-delay:.3s]"
                  aria-hidden
                />
                <span
                  className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-ember animate-[ab-bracketPulse_3.2s_ease-in-out_infinite] [animation-delay:.6s]"
                  aria-hidden
                />
                <span
                  className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-ember  animate-[ab-bracketPulse_3.2s_ease-in-out_infinite] [animation-delay:.9s]"
                  aria-hidden
                />

                {/* experience badge — replaces the flat black tag */}
                <div className="absolute rounded-xl left-8 bottom-8 flex items-center gap-2.5  bg-black/70 backdrop-blur-md  pl-2.5 pr-4 py-2 animate-[ab-float_5.5s_ease-in-out_infinite]">
                  {expNumber && (
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg  bg-ember from-ember to-ember/60 text-[12px] font-extrabold text-paper">
                      {expNumber}
                    </span>
                  )}
                  <span className="text-white text-[11px] font-bold uppercase tracking-wider leading-tight">
                    {expLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* status orb — rotating ring + pulsing core */}
            <div className="absolute -top-4 -right-4 w-11 h-11 rounded-full bg-paper/80 backdrop-blur-md border border-paper flex items-center justify-center shadow-lg">
              <span
                className="absolute inset-0 rounded-full border border-dashed border-ember/50 animate-[ab-spin_7s_linear_infinite]"
                aria-hidden
              />
              <span
                className="w-2.5 h-2.5 rounded-full bg-ember animate-[ab-ripple_1.8s_ease-out_infinite]"
                aria-hidden
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-8 flex flex-col justify-center">
          <Reveal delay={0.05}>
            <span className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-xs font-semibold text-ember">
              <span
                className="w-1.5 h-1.5 rounded-full bg-ember animate-[ab-ripple_1.8s_ease-out_infinite]"
                aria-hidden
              />
              About
            </span>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-2xl sm:text-3xl lg:text-3xl font-medium leading-snug tracking-tight max-w-3xl">
              {summary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={isExternal(href) ? "_blank" : undefined}
                    rel={isExternal(href) ? "noopener noreferrer" : undefined}
                    className="focus-ring group inline-flex items-center gap-2  rounded-full border border-line bg-paper/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-ink/75 hover:text-ember hover:border-ember/50 transition-colors duration-200"
                  >
                    <Icon size={16} strokeWidth={1.8} className="text-ember shrink-0" />
                    <span>{label}</span>
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
