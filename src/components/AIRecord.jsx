import { useEffect, useRef } from "react";
import "../styles/ai-record.css";
import { Mic, Sparkles, FileText, Sun, Target, Code2, Smartphone } from "lucide-react";
import Reveal from "./Reveal";

/** AI Record — side-project showcase. Illustration styles live in AIRecord.css (prefix `airec`). */

const pills = [
  { icon: Mic, label: "Auto language detection" },
  { icon: Sparkles, label: "AI summaries in EN · VI · KO · ZH" },
  { icon: FileText, label: "Export to Markdown & PDF" },
  { icon: Sun, label: "Light & Dark mode" },
];

export default function AIRecord() {
  const stageRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const cleanups = [];

    // Cursor parallax (desktop pointers only)
    const stage = stageRef.current;
    if (stage && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      const move = (e) => {
        const r = stage.getBoundingClientRect();
        stage.style.setProperty("--mx", (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
        stage.style.setProperty("--my", (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      };
      const leave = () => {
        stage.style.setProperty("--mx", 0);
        stage.style.setProperty("--my", 0);
      };
      stage.addEventListener("pointermove", move);
      stage.addEventListener("pointerleave", leave);
      cleanups.push(() => {
        stage.removeEventListener("pointermove", move);
        stage.removeEventListener("pointerleave", leave);
      });
    }

    // Ticking REC timer (decorative)
    const el = timerRef.current;
    if (el) {
      let sec = 24 * 60 + 10;
      const id = setInterval(() => {
        sec += 1;
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        el.textContent = [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
      }, 1000);
      cleanups.push(() => clearInterval(id));
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section
      id="airecord"
      className="airec py-20 sm:py-28 border-t border-line"
    >

      <div className="container-page">
        {/* Header — same rhythm as the "Experience" heading */}
       

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <span className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-xs font-semibold text-ember">
                <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden />
                Side Project
              </span>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 text-2xl sm:text-3xl font-normal leading-snug tracking-tight max-w-2xl">
                <span className="font-bold">AI Record</span> - A voice recorder that listens to your meetings and writes the summary for you. Speak
                in any language, then get clear key takeaways and action items in English,
                Vietnamese, Korean or Chinese.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {pills.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-ink/75"
                  >
                    <Icon size={16} strokeWidth={1.8} className="text-ember shrink-0" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#f3f2ee] p-5">
                  <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/70">
                    <Target size={15} strokeWidth={1.8} className="text-ember" />
                    What it does
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                    Records meetings and lectures, detects the spoken language, and turns them into
                    editable AI summaries you can copy or share.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f3f2ee] p-5">
                  <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/70">
                    <Code2 size={15} strokeWidth={1.8} className="text-ember" />
                    Design &amp; build
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                    Designed and vibe-coded end to end by me. Native SwiftUI for iOS 17+, with a
                    clean, focused recording flow.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-5 py-4">
                <b className="inline-flex items-center gap-2.5 text-[15px] font-semibold">
                  <Smartphone size={16} strokeWidth={1.8} className="text-ember shrink-0" />
                  AI Record - Coming soon on the App Store
                </b>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className="airec__dot" aria-hidden />
                  Coming soon
                </span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — illustration */}
          <Reveal className="lg:col-span-5" delay={0.15}>
            <div ref={stageRef} className="airec__stage">
              <div className="airec__mesh" aria-hidden />
              <div className="airec__dots" aria-hidden />
              <span className="airec__ring" aria-hidden />
              <span className="airec__ring" aria-hidden />
              <span className="airec__ring" aria-hidden />

              {/* Phone */}
              <div className="airec__layer airec__layer--phone">
                <div className="airec__float">
                  <div className="airec__phone">
                    <img
                      src="/images/site/airecord/screen-record.webp"
                      srcSet="/images/site/airecord/screen-record-sm.webp 360w, /images/site/airecord/screen-record.webp 720w"
                      sizes="(max-width: 1024px) 60vw, 300px"
                      width={720}
                      height={1565}
                      loading="lazy"
                      decoding="async"
                      alt="AI Record recording screen with a timer, live red waveform and a “Finish & AI Summary” button"
                    />
                  </div>
                </div>
              </div>

              {/* Language card */}
              <div className="airec__layer airec__layer--lang" aria-hidden>
                <div className="airec__float" style={{ "--delay": "-1.5s" }}>
                  <div className="airec__glass airec__lang">
                    <small>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v0M8 8v8M12 4v16M16 8v8M20 12v0" /></svg>
                      Auto-detect
                    </small>
                    <div className="airec__langs">
                      <span>VI</span><span>KO</span><span>ZH</span><i>→</i><span className="on">EN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary card */}
              <div className="airec__layer airec__layer--sum" aria-hidden>
                <div className="airec__float" style={{ "--delay": "-3s" }}>
                  <div className="airec__sum">
                    <header>
                      <span className="airec__sq">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.2 6.3L21 10l-6.8 1.7L12 18l-2.2-6.3L3 10l6.8-1.7z" /></svg>
                      </span>
                      AI Summary<em>EN</em>
                    </header>
                    <h4>Key takeaways</h4>
                    <div className="airec__row"><span className="airec__sk" style={{ width: "92%" }} /></div>
                    <div className="airec__row"><span className="airec__sk" style={{ width: "78%" }} /></div>
                    <div className="airec__row"><span className="airec__sk" style={{ width: "60%" }} /></div>
                    <h4>Action items</h4>
                    <div className="airec__row chk done"><span className="airec__sk" style={{ width: "70%" }} /></div>
                    <div className="airec__row chk"><span className="airec__sk" style={{ width: "82%" }} /></div>
                  </div>
                </div>
              </div>

              {/* Export chip */}
              <div className="airec__layer airec__layer--exp" aria-hidden>
                <div className="airec__float" style={{ "--delay": "-4.5s" }}>
                  <div className="airec__glass airec__exp">Export <b>PDF</b><b>MD</b></div>
                </div>
              </div>

              {/* REC chip */}
              <div className="airec__layer airec__layer--rec" aria-hidden>
                <div className="airec__float" style={{ "--delay": "-2.2s" }}>
                  <div className="airec__glass airec__rec">
                    <span className="airec__recdot" />
                    <span className="airec__bars"><span /><span /><span /><span /><span /></span>
                    <time ref={timerRef}>00:24:10</time>
                  </div>
                </div>
              </div>

              {/* App icon */}
              <div className="airec__layer airec__layer--icon">
                <div className="airec__float" style={{ "--delay": "-5s" }}>
                  <div className="airec__appicon">
                    <img src="/images/site/airecord/app-icon.png" width={512} height={512} alt="" aria-hidden loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
