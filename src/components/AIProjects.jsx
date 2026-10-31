import { useState, useEffect, useRef } from "react";
import "../styles/ai-projects.css";
import { Mic, Sparkles, FileText, Sun, Target, Code2, Smartphone, Download, ArrowLeftRight, Volume2, History, CircleAlert } from "lucide-react";
import Reveal from "./Reveal";

const pills = [
  { icon: Mic, label: "Auto language detection" },
  { icon: Sparkles, label: "AI summaries in EN · VI · KO · ZH" },
  { icon: FileText, label: "Export to Markdown & PDF" },
  { icon: Sun, label: "Light & Dark mode" },
];

const screens = [
  { img: "library", title: "Library", text: "Every recording in one searchable place." },
  { img: "record-ready", title: "Ready to record", text: "Auto-detects the spoken language. Choose your summary language." },
  { img: "recording", title: "Recording", text: "Live waveform and timer. Pause or cancel anytime." },
  { img: "summary", title: "AI Summary", text: "Overview, key takeaways and action items, ready to edit." },
  { img: "transcript", title: "Transcript", text: "Full transcript synced with audio playback." },
  { img: "account", title: "Account", text: "Usage minutes, support and appearance settings." },
];

/* ---------- AI Live Translate (blue) ---------- */
const livePills = [
  { icon: Mic, label: "Two-way voice translation" },
  { icon: ArrowLeftRight, label: "Instant language swap" },
  { icon: Volume2, label: "Listen to any translation" },
  { icon: History, label: "Conversation history" },
  { icon: Sun, label: "Light & Dark mode" },
];

const liveScreens = [
  { img: "live", title: "Live", text: "Pick a language pair, then tap Partner or Me to start talking." },
  { img: "convo", title: "Conversation", text: "Original and translation side by side, with one-tap playback." },
  { img: "history", title: "History", text: "Every conversation saved with its date and message count." },
  { img: "detail", title: "Replay", text: "Reopen any chat and play the translation again." },
  { img: "settings", title: "Settings", text: "Time balance, redeem code, speech speed and appearance." },
];

const tabs = [
  {
    id: "record",
    label: "AI Record",
    icon: <img src="/images/site/airecord/app-icon.png" width={28} height={28} alt="" className="aitab__ic" />,
  },
  {
    id: "live",
    label: "AI Live Translate",
    icon: 
     <img src="/images/site/ailivetrans/app-icon.png" width={28} height={28} alt="" className="aitab__ic aitab__ic--live" />,
  },
];

/** iPhone 17 (black) mockup — shared by the hero and the screens strip. */
function Phone({ src, alt, className = "" }) {
  return (
    <figure className={`airec__ph ${className}`}>
      <span className="airec__btn airec__btn--a" aria-hidden />
      <span className="airec__btn airec__btn--v1" aria-hidden />
      <span className="airec__btn airec__btn--v2" aria-hidden />
      <span className="airec__btn airec__btn--p" aria-hidden />
      <div className="airec__scr">
        <img src={src} width={720} height={1558} loading="lazy" decoding="async" alt={alt} />
        <i className="airec__island" aria-hidden />
      </div>
    </figure>
  );
}

function LiveTranslate() {
  return (
    <section
      id="ailivetrans"
      className="airec"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* LEFT — copy */}
        <div className="lg:col-span-7">
          <Reveal delay={0.12}>
            <p className="mt-5 text-2xl sm:text-3xl font-normal leading-snug tracking-tight max-w-2xl">
              <span className="font-bold">AI Live Translate</span> - An application interpreter for two-way conversations. Tap a mic, speak your language, and your partner reads and hears the translation instantly. Then it flows back the other way.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {livePills.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/60 backdrop-blur-sm px-4 py-2 text-sm font-medium text-ink/75"
                >
                  <Icon size={16} strokeWidth={1.8} className="text-[var(--ar-accent)] shrink-0" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#f3f2ee] p-5">
                <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/70">
                  <CircleAlert size={15} strokeWidth={1.8} className="text-[var(--ar-accent)]" />
                  Pain point
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                  Language barriers ruin the flow of a conversation. Typing into a translation app, passing your phone back and forth, and waiting on replies just makes everything feel slow and awkward.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f3f2ee] p-5">
                <h3 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/70">
                  <Target size={15} strokeWidth={1.8} className="text-[var(--ar-accent)]" />
                  What it does
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75">
                  Gives each person their own mic. Speak, and the original and its translation appear
                  together, ready to read or play aloud. Every chat is saved in History.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-5 py-4">
              <b className="inline-flex items-center gap-2.5 text-[15px] font-semibold">
                <Smartphone size={16} strokeWidth={1.8} className="text-[var(--ar-accent)] shrink-0" />
                AI Live Translate - Coming soon on the App Store
              </b>
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <span className="airec__dot" aria-hidden />
                Coming soon
              </span>
            </div>

                           <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-5 py-4">
                <b className="inline-flex items-center gap-2.5 text-[15px] font-semibold">
                  <Download size={16} strokeWidth={1.8} className="text-ember shrink-0" />
                 AI Live Translate.ipa
                </b>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                 <a href="mailto: myqdh.cm@gmail.com"  target="_blank" className="text-ember">Contact me</a>
                </span>
              </div>
          </Reveal>
        </div>

        {/* RIGHT — illustration */}
        <Reveal className="lg:col-span-5" delay={0.15}>
          <div className="ailt__stage">
            <span className="ailt__ring" aria-hidden />
            <span className="ailt__ring" aria-hidden />
            <span className="ailt__ring" aria-hidden />

            <div className="ailt__layer ailt__layer--phone">
              <div className="ailt__float">
                <Phone
                  src="/images/site/ailivetrans/convo.jpeg"
                  alt="AI Live Translate conversation screen with a Chinese message translated into Vietnamese"
                  className="ailt__hero-ph"
                  srcSet="/images/site/ailivetrans/convo.jpeg 360w, /images/site/ailivetrans/convo.jpeg 720w"
                      sizes="(max-width: 1024px) 60vw, 300px"
                      width={720}
                      height={1565}
                      loading="lazy"
                      decoding="async"
                />
              </div>
            </div>

            <div className="ailt__layer ailt__layer--lang ailt__float ailt__glass" style={{ "--delay": "-1.5s" }} aria-hidden>
              <div><small>Partner</small><strong>中文</strong></div>
              <em><ArrowLeftRight strokeWidth={2} /></em>
              <div><small>Me</small><strong>Tiếng Việt</strong></div>
            </div>

            <div className="ailt__layer ailt__layer--msg ailt__float" style={{ "--delay": "-3s" }} aria-hidden>
              <small>Chào bạn tôi khỏe</small>
              <b>你好，朋友，我很好。</b>
            </div>

            <div className="ailt__layer ailt__layer--vol ailt__float ailt__glass" style={{ "--delay": "-4.5s" }} aria-hidden>
              <Volume2 strokeWidth={1.8} />
              Play translation
            </div>
              <div className="ailt__layer ailt__layer--icon">
                <div className="ailt__float" style={{ "--delay": "-5s" }}>
                  <div className="ailt__appicon">
                    <img src="/images/site/ailivetrans/app-icon.png" width={512} height={512} alt="" aria-hidden loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>

          </div>
        </Reveal>
      </div>

      {/* SCREENS — continuation of the project, same section */}
      <div className="mt-16 lg:mt-20">
        <Reveal>
          <h3 className="text-xl sm:text-2xl leading-snug tracking-tight">
            <span className="font-bold">From tap to translation</span> in five screens.
          </h3>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/70">
            Two big mics, one clear conversation: choose your languages, speak, read and hear the
            translation, then find it again in History.
          </p>
        </Reveal>

        <div className="airec__shots mt-6">
          <ol className="airec__flow ailt__flow">
            {liveScreens.map(({ img, title, text }, i) => (
              <Reveal as="li" key={img} delay={i * 0.07} className="airec__step">
                <Phone src={`/images/site/ailivetrans/${img}.jpeg`} alt={`AI Live Translate ${title} screen`} />
                <div className="airec__cap">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function AIRecord() {
  const stageRef = useRef(null);
  const timerRef = useRef(null);
  const [tab, setTab] = useState(() =>
    typeof window !== "undefined" && window.location.hash === "#livetranslate" ? "live" : "record"
  );

  const selectTab = (id, focus = false) => {
    setTab(id);
    try {
      window.history.replaceState(null, "", id === "live" ? "#livetranslate" : "#airecord");
    } catch {
      /* ignore */
    }
    if (focus) requestAnimationFrame(() => document.getElementById(`tab-${id}`)?.focus());
  };

  const onTabKey = (e, i) => {
    const next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    selectTab(tabs[(next + tabs.length) % tabs.length].id, true);
  };

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
      id="aiprojects"
      className="airec py-20 sm:py-28 border-t border-line"
    >

      <div className="container-page">
        {/* Project tabs */}
        <div role="tablist" aria-label="Side projects" className="aitab" data-active={tab}>
          <span className="aitab__thumb" aria-hidden />
          {tabs.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={tab === t.id}
              aria-controls={`panel-${t.id}`}
              tabIndex={tab === t.id ? 0 : -1}
              onClick={() => selectTab(t.id)}
              onKeyDown={(e) => onTabKey(e, i)}
              className="aitab__btn"
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* PANEL 1 — AI Record */}
        <div role="tabpanel" id="panel-record" aria-labelledby="tab-record" hidden={tab !== "record"} className="aitab__panel">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT — copy */}
          <div className="lg:col-span-7">
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
               <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-5 py-4">
                <b className="inline-flex items-center gap-2.5 text-[15px] font-semibold">
                  <Download size={16} strokeWidth={1.8} className="text-ember shrink-0" />
                 AI Record.ipa
                </b>
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                 <a href="mailto: myqdh.cm@gmail.com"  target="_blank" className="text-ember">Contact me</a>
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

        {/* SCREENS — continuation of the project, same section */}
        <div className="mt-16 lg:mt-20">
          <Reveal>
            <h3 className="text-xl sm:text-2xl leading-snug tracking-tight">
              <span className="font-bold">From voice to summary</span> in six screens.
            </h3>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink/70">
              End-to-end user flow: record in any language with a live waveform, then read the AI
              summary and full transcript, all in one native SwiftUI app.
            </p>
          </Reveal>

          <div className="airec__shots mt-6">
            <ol className="airec__flow">
              {screens.map(({ img, title, text }, i) => (
                <Reveal as="li" key={img} delay={i * 0.07} className="airec__step">
                  <figure className="airec__ph">
                    <span className="airec__btn airec__btn--a" aria-hidden />
                    <span className="airec__btn airec__btn--v1" aria-hidden />
                    <span className="airec__btn airec__btn--v2" aria-hidden />
                    <span className="airec__btn airec__btn--p" aria-hidden />
                    <div className="airec__scr">
                      <img
                        src={`/images/site/airecord/${img}.png`}
                        width={540}
                        height={1174}
                        loading="lazy"
                        decoding="async"
                        alt={`AI Record ${title} screen`}
                      />
                      <i className="airec__island" aria-hidden />
                    </div>
                  </figure>
                  <div className="airec__cap">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
        </div>

        {/* PANEL 2 — AI Live Translate */}
        <div role="tabpanel" id="panel-live" aria-labelledby="tab-live" hidden={tab !== "live"} className="aitab__panel ailt">
          <LiveTranslate />
        </div>
      </div>
    </section>
    
  );
}
