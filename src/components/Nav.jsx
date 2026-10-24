import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { CV_URL } from "../data/contacts";
import Logo from "./Logo";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#airecord", label: "AI Record" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function CvButton({ className }) {
  return (
    <a
      href={CV_URL}
      download
      className={`focus-ring items-center gap-1.5 text-sm font-semibold border border-ink hover:bg-ink hover:text-paper transition-colors duration-200 ${className}`}
    >
      Download CV
      <ArrowUpRight size={15} strokeWidth={2.2} />
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || open ? "bg-paper/90 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="container-page flex items-center justify-between h-16 sm:h-20">
          <a href="#top" onClick={(e) => goTo(e, "#top")} className="focus-ring" aria-label="Hoang My - Back to top">
            <Logo />
          </a>

          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => goTo(e, href)}
                  className="focus-ring relative group text-sm font-medium tracking-wide text-ink/70 hover:text-ink transition-colors duration-200"
                >
                  {label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-ember transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <CvButton className="hidden md:inline-flex rounded-full px-4 py-2" />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="focus-ring md:hidden p-2 -mr-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-paper border-t border-line overflow-y-auto"
          >
            <ul className="container-page flex flex-col py-6">
              {LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.04 * i }}
                >
                  <a
                    href={href}
                    onClick={(e) => goTo(e, href)}
                    className="focus-ring block py-4 text-2xl font-bold tracking-tight border-b border-line/70 last:border-none"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.04 * LINKS.length }}
                className="pt-6"
              >
                <CvButton className="inline-flex px-4 py-2.5" />
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
