import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "../data/cv";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";
import HeroVisual from "./HeroVisual";

const nameParts = profile.name.split(" ");

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.06 },
    },
  };
  const word = {
    hidden: { y: reduced ? 0 : "110%", opacity: reduced ? 1 : 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col pt-24 pb-8 sm:pb-10 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      {/* background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 sm:-right-10 top-16 sm:top-24 w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-ember/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-line"
      />

      <div className="flex-1 flex items-center min-h-0">
        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-ember mb-4 sm:mb-6"
            >
              {profile.role}
            </motion.p>

            <motion.h1
              variants={container}
              initial="hidden"
              animate="show"
              className="font-black leading-[0.92] tracking-tight text-[13vw] sm:text-[10vw] lg:text-[5.6rem] xl:text-[6.4rem] uppercase"
            >
              {nameParts.map((part, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span variants={word} className="inline-block">
                    {part}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-md text-base sm:text-lg text-muted leading-relaxed"
              >
                {profile.experienceLine} in UI/UX Design, Product Design &amp; Visual Design.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-2 text-sm font-medium text-ink/80 shrink-0"
              >
                <MapPin size={16} className="text-ember shrink-0" />
                {profile.location}
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="focus-ring relative z-10 mx-auto mt-8 flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors shrink-0"
        aria-label="Scroll to About section"
      >
        Scroll
        <motion.span
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
