import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookText, Plus, Target, Trophy } from "lucide-react";
import { experience } from "../data/cv";
import Reveal from "./Reveal";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

function ExperienceItem({ item, index, isOpen, onToggle }) {
  const reduced = usePrefersReducedMotion();
  const panelId = `exp-panel-${index}`;
  const buttonId = `exp-button-${index}`;
  const itemRef = useRef(null);

  const handleToggle = () => {
    onToggle(index);
    // Chỉ cuộn khi người dùng click để MỞ nội dung
    if (!isOpen) {
      setTimeout(() => {
        itemRef.current?.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "start",
        });
      }, 150);
    }
  };

  return (
    <div ref={itemRef} className="scroll-mt-24 border-b border-line">
      <Reveal delay={Math.min(index * 0.05, 0.25)}>
        <h3 className="m-0">
          <button
            id={buttonId}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={handleToggle}
            className="focus-ring w-full flex items-start justify-between gap-4 sm:gap-8 py-6 sm:py-8 text-left group cursor-pointer"
          >
            <div className="flex items-start gap-4 sm:gap-8 flex-1 min-w-0">
              <span className="hidden sm:block text-xs sm:text-sm font-mono text-muted w-28 shrink-0 tabular-nums pt-1">
                {item.period}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-ember transition-colors duration-200">
                    {item.company}
                  </span>
                  <span className="text-sm sm:text-base text-muted font-medium">
                    {item.title}
                  </span>
                </div>
                <span className="sm:hidden block mt-1.5 text-xs font-mono text-muted tabular-nums">
                  {item.period}
                </span>
              </div>
            </div>

            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: reduced ? 0 : 0.3 }}
              className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 border border-ink rounded-full group-hover:bg-ink group-hover:text-paper transition-colors duration-200 mt-0.5"
            >
              <Plus size={18} />
            </motion.span>
          </button>
        </h3>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pb-8 sm:pb-10 sm:pl-[9rem] max-w-5xl">
                <ul className="space-y-3">
                  {item.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm sm:text-base leading-relaxed text-ink/80"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <div className="bg-paper-warm border border-line p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={15} className="text-ember" />
                      <span className="text-xs font-bold uppercase tracking-widest text-ink/70">
                        Key project
                      </span>
                    </div>
                    <p className="text-sm text-ink/75 leading-relaxed whitespace-pre-line">
                      {item.keyProject}
                    </p>
                  </div>
                  <div className="bg-paper-warm border border-line p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy size={15} className="text-ember" />
                      <span className="text-xs font-bold uppercase tracking-widest text-ink/70">
                        Key achievement
                      </span>
                    </div>
                    <p className="text-sm text-ink/75 leading-relaxed whitespace-pre-line">
                      {item.keyAchievement}
                    </p>
                  </div>
                </div>

                {item.company === "Ohmyhotel" && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-5 border border-line bg-paper p-5 items-center">
                    <div className="flex items-center gap-2">
                      <BookText size={15} className="text-ember" />
                      <h3 className="text-base font-semibold text-gray-900 tracking-wide">
                        Ohmyhotel — Case Study
                      </h3>
                    </div>
                    <div className="flex sm:justify-end">
                      <a
                        href="/ohmyhotel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors group"
                      >
                        <span>Explore Project</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}

                {(item.company === "FPT Software") && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-5 border border-line bg-paper p-5 items-center">
                    <div className="flex items-center gap-2">
                      <BookText size={15} className="text-ember" />
                      <h3 className="text-base font-semibold text-gray-900 tracking-wide">
                        Utop — UI Showcase
                      </h3>
                    </div>
                    <div className="flex sm:justify-end">
                      <a
                        href="/utop/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors group"
                      >
                        <span>Explore Project</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
                 {(item.company === "Bravesoft") && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-5 border border-line bg-paper p-5 items-center">
                    <div className="flex items-center gap-2">
                      <BookText size={15} className="text-ember" />
                      <h3 className="text-base font-semibold text-gray-900 tracking-wide">
                        LiveTrans - Case Study
                      </h3>
                    </div>
                    <div className="flex sm:justify-end">
                      <a
                        href="/livetrans/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors group"
                      >
                        <span>Explore Project</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </div>
  );
}

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section id="experience" className="px-5 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-line">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex items-end justify-between gap-4 mb-10 sm:mb-14">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Experience
            </h2>
            <span className="hidden sm:block text-sm font-mono text-muted">
              05 roles &middot; 2016&mdash;2026
            </span>
          </div>
        </Reveal>

        <div className="border-t border-line">
          {experience.map((item, i) => (
            <ExperienceItem
              key={item.company}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={toggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}