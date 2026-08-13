import { GraduationCap, BadgeCheck } from "lucide-react";
import { education, certifications } from "../data/cv";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-line">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <Reveal>
            <div className="flex items-center gap-2 mb-8 sm:mb-10">
              <GraduationCap size={20} className="text-ember" />
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Education
              </h2>
            </div>
          </Reveal>
          <ul className="space-y-8">
            {education.map((e, i) => (
              <Reveal as="li" key={e.degree} delay={i * 0.08} className="border-l-2 border-line pl-5 sm:pl-6 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-ember" aria-hidden />
                <p className="text-lg sm:text-xl font-bold leading-snug">{e.degree}</p>
                <p className="text-sm sm:text-base text-muted mt-1">{e.school}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-2 mb-8 sm:mb-10">
              <BadgeCheck size={20} className="text-ember" />
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Certification
              </h2>
            </div>
          </Reveal>
          <ul className="space-y-4">
            {certifications.map((c, i) => (
              <Reveal
                as="li"
                key={c}
                delay={i * 0.08}
                className="flex items-center gap-3 border border-line bg-paper-warm px-5 py-4"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" aria-hidden />
                <span className="text-base sm:text-lg font-medium">{c}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
