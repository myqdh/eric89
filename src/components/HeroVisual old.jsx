import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

export default function HeroVisual({ className = "" }) {
  const reduced = usePrefersReducedMotion();

  const floatA = reduced
    ? {}
    : { animate: { y: [0, -10, 0] }, transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } };
  const floatB = reduced
    ? {}
    : { animate: { y: [0, 9, 0] }, transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } };
  const floatC = reduced
    ? {}
    : { animate: { y: [0, -7, 0] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } };
  const spin = reduced
    ? {}
    : { animate: { rotate: 360 }, transition: { duration: 34, repeat: Infinity, ease: "linear" } };
  const spinReverse = reduced
    ? {}
    : { animate: { rotate: -360 }, transition: { duration: 46, repeat: Infinity, ease: "linear" } };
  const pulse = reduced
    ? {}
    : { animate: { scale: [1, 1.4, 1], opacity: [0.55, 0, 0.55] }, transition: { duration: 2.6, repeat: Infinity, ease: "easeOut" } };
  const twinkle = (delay) =>
    reduced
      ? {}
      : { animate: { opacity: [0.3, 1, 0.3], scale: [0.85, 1, 0.85] }, transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut", delay } };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className={`relative w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] mx-auto ${className}`}
    >
      <svg
        viewBox="0 0 440 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="Abstract illustration of a UI/UX product design workspace with a dashboard card, cursor, layers and color palette"
      >
        <defs>
          <linearGradient id="heroBanner" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--color-ember)" />
            <stop offset="1" stopColor="var(--color-ember-dark)" />
          </linearGradient>
          <filter id="heroCardShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor="#0a0a0a" floodOpacity="0.14" />
          </filter>
          <filter id="chipShadow" x="-60%" y="-60%" width="220%" height="220%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0a0a0a" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* slow-spinning dotted orbit rings behind everything */}
        <motion.circle
          {...spin}
          style={{ transformOrigin: "220px 270px" }}
          cx="220"
          cy="270"
          r="196"
          stroke="var(--color-ember)"
          strokeOpacity="0.18"
          strokeWidth="1.2"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
        <motion.circle
          {...spinReverse}
          style={{ transformOrigin: "220px 270px" }}
          cx="220"
          cy="270"
          r="168"
          stroke="var(--color-ink)"
          strokeOpacity="0.08"
          strokeWidth="1"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />

        {/* alignment guides */}
        <line x1="0" y1="130" x2="440" y2="130" stroke="var(--color-ember)" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 6" />
        <line x1="60" y1="0" x2="60" y2="500" stroke="var(--color-ember)" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 6" />

        {/* ===== main dashboard card (slightly rotated for dynamism) ===== */}
        <g transform="rotate(-3 220 270)" filter="url(#heroCardShadow)">
          <rect x="70" y="100" width="290" height="345" rx="20" fill="var(--color-paper)" stroke="var(--color-ink)" strokeOpacity="0.85" strokeWidth="1.5" />

          {/* top nav */}
          <circle cx="96" cy="130" r="6" fill="var(--color-ember)" />
          <rect x="118" y="126" width="64" height="8" rx="4" fill="var(--color-ink)" fillOpacity="0.12" />
          <circle cx="334" cy="130" r="12" fill="var(--color-paper-warm)" stroke="var(--color-ink)" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="70" y1="152" x2="360" y2="152" stroke="var(--color-ink)" strokeOpacity="0.1" strokeWidth="1" />

          {/* gradient hero banner with play glyph */}
          <rect x="90" y="168" width="250" height="112" rx="14" fill="url(#heroBanner)" />
          <circle cx="215" cy="224" r="22" fill="var(--color-paper)" fillOpacity="0.92" />
          <path d="M209 214 L227 224 L209 234 Z" fill="var(--color-ember-dark)" />
          <rect x="106" y="252" width="90" height="8" rx="4" fill="var(--color-paper)" fillOpacity="0.55" />

          {/* two stat cards */}
          <g>
            <rect x="90" y="298" width="118" height="78" rx="12" fill="var(--color-paper-warm)" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="1.2" />
            <rect x="106" y="340" width="10" height="20" rx="2" fill="var(--color-ember)" fillOpacity="0.55" />
            <rect x="122" y="330" width="10" height="30" rx="2" fill="var(--color-ember)" fillOpacity="0.75" />
            <rect x="138" y="318" width="10" height="42" rx="2" fill="var(--color-ember)" />
            <rect x="158" y="312" width="32" height="9" rx="4" fill="var(--color-ink)" fill0pacity="0.7" />          </g>
          <g>
            <rect x="222" y="298" width="118" height="78" rx="12" fill="var(--color-paper-warm)" stroke="var(--color-ink)" strokeOpacity="0.25" strokeWidth="1.2" />
            <circle cx="253" cy="341" r="20" fill="none" stroke="var(--color-ink)" strokeOpacity="0.15" strokeWidth="6" />
            <circle
              cx="253"
              cy="341"
              r="20"
              fill="none"
              stroke="var(--color-ember)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="98 126"
              transform="rotate(-90 253 341)"
            />
            <text x="253" y="346" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="var(--color-ink)">78%</text>
            <rect x="286" y="330" width="42" height="8" rx="4" fill="var(--color-ink)" fillOpacity="0.5" />
            <rect x="286" y="344" width="30" height="7" rx="3.5" fill="var(--color-ink)" fillOpacity="0.2" />
          </g>

          {/* text skeleton + CTA row */}
          <rect x="90" y="392" width="160" height="9" rx="4.5" fill="var(--color-ink)" fillOpacity="0.6" />
          <rect x="90" y="408" width="110" height="7" rx="3.5" fill="var(--color-ink)" fillOpacity="0.18" />

          <rect x="210" y="426" width="122" height="34" rx="9" fill="var(--color-ink)" />
        </g>

        {/* ===== floating elements ===== */}

        {/* pen tool badge, top-left */}
        <motion.g {...floatA} filter="url(#chipShadow)">
          <g transform="translate(0 46) rotate(-8 32 32)">
            <rect
              x="0"
              y="0"
              width="64"
              height="64"
              rx="16"
              fill="var(--color-paper)"
              stroke="var(--color-ink)"
              strokeOpacity="0.8"
              strokeWidth="1.4"
            />

            {/* Đưa toàn bộ hình bút lên 8 đơn vị */}
            <g transform="translate(0 -8)">
              <path
                d="M22 44 L40 26 L46 32 L28 50 L20 52 Z"
                fill="none"
                stroke="var(--color-ink)"
                strokeWidth="1.6"
                strokeLinejoin="round"
                strokeLinecap="round"
              />

              <path
                d="M40 26 L46 32"
                stroke="var(--color-ember)"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              <circle
                cx="20"
                cy="52"
                r="2.4"
                fill="var(--color-ember)"
              />
            </g>
          </g>
        </motion.g>

        {/* "UI Kit" pill, top-right */}
        <motion.g {...floatB} filter="url(#chipShadow)">
          <g transform="translate(300 6)">
            <rect x="0" y="0" width="112" height="40" rx="20" fill="var(--color-ink)" />
            <circle cx="20" cy="20" r="6" fill="var(--color-ember)" />
            <text x="36" y="24" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="var(--color-paper)">UI Kit</text>
          </g>
        </motion.g>

        {/* cursor + click ripple, right edge */}
        <motion.g {...floatC}>
          <g transform="translate(366 214)">
            <motion.circle cx="20" cy="20" r="20" fill="var(--color-ember)" {...pulse} />
            <path
              d="M7 2 L38 18 L23 23 L19 38 Z"
              fill="var(--color-ink)"
              stroke="var(--color-paper)"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </g>
        </motion.g>

        {/* color palette pill, bottom-left */}
        <motion.g {...floatA} filter="url(#chipShadow)">
          <g transform="translate(0 420)">
            <rect x="0" y="0" width="132" height="52" rx="14" fill="var(--color-paper)" stroke="var(--color-ink)" strokeOpacity="0.7" strokeWidth="1.3" />
            <circle cx="26" cy="26" r="11" fill="var(--color-ember)" />
            <circle cx="58" cy="26" r="11" fill="var(--color-ink)" />
            <circle cx="90" cy="26" r="11" fill="var(--color-paper-warm)" stroke="var(--color-ink)" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx="114" cy="26" r="6" fill="var(--color-ink)" fillOpacity="0.18" />
          </g>
        </motion.g>

        {/* sparkle accents */}
        <motion.path
          {...twinkle(0)}
          d="M46 250 l4 11 l11 4 l-11 4 l-4 11 l-4 -11 l-11 -4 l11 -4 Z"
          fill="var(--color-ember)"
        />
        <motion.path
          {...twinkle(0.7)}
          d="M382 380 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z"
          fill="var(--color-ink)"
          fillOpacity="0.5"
        />
        <motion.circle {...twinkle(1.3)} cx="18" cy="160" r="4" fill="var(--color-ember)" />
      </svg>
    </motion.div>
  );
}
