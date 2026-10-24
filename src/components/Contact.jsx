import { useState, useEffect } from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import { profile } from "../data/cv";
import { contactLinks, isExternal } from "../data/contacts";
import Reveal from "./Reveal";

const VIEWS_KEY = "portfolio_views_count";
const COUNTED_KEY = "view_counted";

// Local-only visit counter (no network): +1 per browser session.
function useViewCount() {
  const [views, setViews] = useState(2);
  useEffect(() => {
    let count = parseInt(localStorage.getItem(VIEWS_KEY) ?? "2", 10);
    if (!sessionStorage.getItem(COUNTED_KEY)) {
      count += 1;
      localStorage.setItem(VIEWS_KEY, String(count));
      sessionStorage.setItem(COUNTED_KEY, "true");
    }
    setViews(count);
  }, []);
  return views;
}

export default function Contact() {
  const views = useViewCount();

  return (
    <section id="contact" className="py-24 sm:py-32 border-t border-line bg-ink text-paper">
      <div className="container-page">
        <Reveal>
          <span className="uppercase tracking-[0.25em] text-xs font-semibold text-ember">Contact</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-[11vw] sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
            Let&rsquo;s work
            <br />
            together.
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring group mt-10 sm:mt-14 inline-flex items-center gap-3 text-lg sm:text-2xl font-medium border-b-2 border-ember pb-1"
          >
            {profile.email}
            <ArrowUpRight size={24} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>

        <Reveal delay={0.22}>
          <ul className="mt-14 sm:mt-16 flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-paper/15">
            {contactLinks.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={isExternal(href) ? "_blank" : undefined}
                  rel={isExternal(href) ? "noopener noreferrer" : undefined}
                  className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-paper/70 hover:text-ember transition-colors duration-200"
                >
                  <Icon size={16} strokeWidth={1.8} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-paper/50">
            <p>
              &copy; {new Date().getFullYear()} {profile.name}. {profile.location}.
            </p>
            <span className="inline-flex items-center gap-1.5 text-paper/70">
              <Eye size={14} className="text-ember" />
              {views.toLocaleString()} views
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
