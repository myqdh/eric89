import { useEffect, useRef } from "react";

/**
 * HeroStage
 * Standalone AI-era animated hero visual (glassmorphism, light mode).
 * Drop this component anywhere — it carries its own scoped styles
 * (prefixed "hs-") and does not depend on any external CSS file.
 *
 * Usage:
 *   import HeroStage from "./HeroStage";
 *   <HeroStage />
 */
export default function HeroStage() {
  const stageRef = useRef(null);
  const rigRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const rig = rigRef.current;
    if (!stage || !rig) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const handleMouseMove = (e) => {
      const r = stage.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      rig.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    };
    const handleMouseLeave = () => {
      rig.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    stage.addEventListener("mousemove", handleMouseMove);
    stage.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      stage.removeEventListener("mousemove", handleMouseMove);
      stage.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="hs-stage" id="stage" ref={stageRef}>
      <style>{`
        .hs-stage {
          --hs-ink: #141210;
          --hs-accent: #EF5A2A;
          --hs-accent-2: #FF8A50;
          --hs-accent-soft: #FDE3D3;
          --hs-glass: rgba(255,255,255,0.55);
          --hs-glass-strong: rgba(255,255,255,0.78);
          --hs-border: rgba(20,18,16,0.08);

          position: relative;
          width: 100%;
          height: 640px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1400px;
          box-sizing: border-box;
        }
        .hs-stage *, .hs-stage *::before, .hs-stage *::after {
          box-sizing: border-box;
        }

        .hs-mesh {
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(38% 42% at 70% 25%, rgba(239,90,42,0.16), transparent 65%),
            radial-gradient(30% 34% at 20% 70%, rgba(255,138,80,0.14), transparent 65%),
            radial-gradient(26% 30% at 85% 80%, rgba(20,18,16,0.05), transparent 70%);
          filter: blur(30px);
          animation: hs-drift 16s ease-in-out infinite;
        }
        @keyframes hs-drift {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-2%, 2%) scale(1.04); }
        }

        .hs-constellation {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: .55;
        }
        .hs-node { animation: hs-pulse 3.6s ease-in-out infinite; transform-origin: center; }
        .hs-node.n2 { animation-delay: .6s; }
        .hs-node.n3 { animation-delay: 1.2s; }
        .hs-node.n4 { animation-delay: 1.8s; }
        .hs-node.n5 { animation-delay: 2.4s; }
        @keyframes hs-pulse {
          0%, 100% { opacity: .35; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .hs-link { stroke-dasharray: 4 6; animation: hs-dash 8s linear infinite; }
        @keyframes hs-dash { to { stroke-dashoffset: -200; } }

        .hs-halo {
          position: absolute;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          background: conic-gradient(from 0deg,
            rgba(239,90,42,0) 0deg,
            rgba(239,90,42,0.35) 60deg,
            rgba(255,138,80,0.0) 140deg,
            rgba(239,90,42,0.25) 260deg,
            rgba(239,90,42,0) 360deg);
          filter: blur(18px);
          animation: hs-spin 9s linear infinite;
        }
        @keyframes hs-spin { to { transform: rotate(360deg); } }

        .hs-rig {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          transition: transform .25s ease-out;
        }

        .hs-panel {
          position: relative;
          width: 360px;
          padding: 22px;
          border-radius: 28px;
          background: var(--hs-glass);
          backdrop-filter: blur(22px) saturate(160%);
          -webkit-backdrop-filter: blur(22px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.7);
          box-shadow:
            0 30px 60px -20px rgba(20,18,16,0.28),
            0 2px 0 rgba(255,255,255,0.6) inset;
          animation: hs-float 6s ease-in-out infinite;
        }
        @keyframes hs-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        .hs-panel-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .hs-dot-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: var(--hs-ink);
        }
        .hs-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--hs-accent);
          animation: hs-ripple 1.8s ease-out infinite;
        }
        @keyframes hs-ripple {
          0% { box-shadow: 0 0 0 0 rgba(239,90,42,.45); }
          70% { box-shadow: 0 0 0 10px rgba(239,90,42,0); }
          100% { box-shadow: 0 0 0 0 rgba(239,90,42,0); }
        }
        .hs-avatar-ring {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1.5px dashed rgba(20,18,16,0.25);
          animation: hs-spin 6s linear infinite;
        }

        .hs-canvas-block {
          position: relative;
          height: 180px;
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(135deg, var(--hs-accent) 0%, var(--hs-accent-2) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
        }
        .hs-canvas-block::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.35) 45%, transparent 60%);
          background-size: 200% 100%;
          animation: hs-shimmer 3.2s ease-in-out infinite;
        }
        .hs-play {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255,255,255,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.18);
          position: relative;
          z-index: 2;
        }
        .hs-play svg { margin-left: 3px; }
        @keyframes hs-shimmer {
          0% { background-position: -40% 0; }
          100% { background-position: 140% 0; }
        }
        .hs-gen-label {
          position: absolute;
          left: 14px;
          bottom: 12px;
          z-index: 2;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          background: rgba(20,18,16,0.28);
          padding: 5px 10px;
          border-radius: 100px;
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .hs-caret { animation: hs-blink 1s step-end infinite; }
        @keyframes hs-blink { 50% { opacity: 0; } }

        .hs-row { display: flex; gap: 12px; }
        .hs-card-sm {
          flex: 1;
          background: var(--hs-glass-strong);
          border: 1px solid var(--hs-border);
          border-radius: 16px;
          padding: 14px;
        }
        .hs-bars {
          display: flex;
          align-items: flex-end;
          gap: 5px;
          height: 44px;
          margin-bottom: 8px;
        }
        .hs-bars i {
          display: block;
          width: 7px;
          border-radius: 3px;
          background: linear-gradient(180deg, var(--hs-accent-2), var(--hs-accent));
          animation: hs-grow 2.4s ease-in-out infinite;
        }
        .hs-bars i:nth-child(1) { height: 40%; animation-delay: .1s; }
        .hs-bars i:nth-child(2) { height: 65%; animation-delay: .3s; }
        .hs-bars i:nth-child(3) { height: 50%; animation-delay: .5s; }
        .hs-bars i:nth-child(4) { height: 90%; animation-delay: .7s; }
        @keyframes hs-grow {
          0%, 100% { transform: scaleY(0.85); }
          50% { transform: scaleY(1); }
        }
        .hs-line { height: 6px; border-radius: 4px; background: rgba(20,18,16,0.10); }
        .hs-line.short { width: 60%; margin-top: 6px; }

        .hs-ring-wrap { position: relative; width: 54px; height: 54px; margin: 0 auto 8px; }
        .hs-ring-wrap svg { transform: rotate(-90deg); }
        .hs-ring-track { stroke: rgba(20,18,16,0.08); }
        .hs-ring-fill {
          stroke: var(--hs-accent);
          stroke-linecap: round;
          stroke-dasharray: 138;
          stroke-dashoffset: 138;
          animation: hs-fillring 2.2s ease-out forwards .4s;
        }
        @keyframes hs-fillring { to { stroke-dashoffset: 30; } }
        .hs-ring-num {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
        }

        .hs-panel-bottom { margin-top: 14px; }

        .hs-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--hs-glass-strong);
          border: 1px solid rgba(255,255,255,0.75);
          backdrop-filter: blur(14px);
          border-radius: 16px;
          padding: 10px 12px;
          box-shadow: 0 16px 30px -12px rgba(20,18,16,0.22);
          font-size: 12px;
          font-weight: 600;
        }
        .hs-badge-icon {
          width: 26px;
          height: 26px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .hs-b-tool { top: 2%; left: -6%; animation: hs-float-slow 5s ease-in-out infinite; }
        .hs-b-tool .hs-badge-icon { background: var(--hs-ink); }
        .hs-b-kit { top: 6%; right: -4%; animation: hs-float-slow 5.6s ease-in-out infinite .4s; }
        .hs-b-kit .hs-badge-icon { background: linear-gradient(135deg, var(--hs-accent), var(--hs-accent-2)); }
        .hs-b-cursor {
          bottom: 16%;
          right: 0%;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          justify-content: center;
          padding: 0;
          background: var(--hs-accent-soft);
          animation: hs-float-slow 4.6s ease-in-out infinite .8s;
        }
        @keyframes hs-float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-2deg); }
        }

        .hs-swatch-bar {
          position: absolute;
          bottom: 48%;
          left: -13%;
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--hs-glass-strong);
          border: 1px solid rgba(255,255,255,0.75);
          backdrop-filter: blur(14px);
          padding: 10px 14px;
          border-radius: 16px;
          box-shadow: 0 16px 30px -12px rgba(20,18,16,0.22);
          animation: hs-float-slow 6s ease-in-out infinite 1.1s;
        }
        .hs-sw { width: 16px; height: 16px; border-radius: 50%; }

        @media (max-width: 980px) {
          .hs-stage { height: 460px; }
          .hs-panel { width: 300px; }
        }
      `}</style>

      <div className="hs-mesh" />

      <svg className="hs-constellation" viewBox="0 0 600 640">
        <g stroke="#EF5A2A" strokeWidth="1" opacity="0.5">
          <line className="hs-link" x1="90" y1="120" x2="230" y2="80" />
          <line className="hs-link" x1="230" y1="80" x2="470" y2="150" />
          <line className="hs-link" x1="470" y1="150" x2="520" y2="330" />
          <line className="hs-link" x1="70" y1="420" x2="150" y2="540" />
          <line className="hs-link" x1="150" y1="540" x2="330" y2="590" />
          <line className="hs-link" x1="330" y1="590" x2="480" y2="500" />
        </g>
        <circle className="hs-node n1" cx="90" cy="120" r="4" fill="#EF5A2A" />
        <circle className="hs-node n2" cx="230" cy="80" r="3" fill="#141210" />
        <circle className="hs-node n3" cx="470" cy="150" r="4" fill="#EF5A2A" />
        <circle className="hs-node n4" cx="520" cy="330" r="3" fill="#141210" />
        <circle className="hs-node n5" cx="70" cy="420" r="3" fill="#EF5A2A" />
        <circle className="hs-node n1" cx="150" cy="540" r="4" fill="#141210" />
        <circle className="hs-node n2" cx="330" cy="590" r="3" fill="#EF5A2A" />
        <circle className="hs-node n3" cx="480" cy="500" r="4" fill="#141210" />
      </svg>

      <div className="hs-halo" />

      <div className="hs-rig" ref={rigRef}>
        <div className="hs-panel">
          <div className="hs-panel-top">
            <div className="hs-dot-status">
              <span className="hs-pulse-dot" /> Live preview
            </div>
            <div className="hs-avatar-ring" />
          </div>

          <div className="hs-canvas-block">
            <div className="hs-play">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path d="M1 1.5v15l14-7.5-14-7.5Z" fill="#EF5A2A" />
              </svg>
            </div>
            <span className="hs-gen-label">
              Generating layout<span className="hs-caret">▍</span>
            </span>
          </div>

          <div className="hs-row">
            <div className="hs-card-sm">
              <div className="hs-bars">
                <i></i><i></i><i></i><i></i>
              </div>
              <div className="hs-line" />
              <div className="hs-line short" />
            </div>
            <div className="hs-card-sm" style={{ textAlign: "center" }}>
              <div className="hs-ring-wrap">
                <svg width="54" height="54" viewBox="0 0 54 54">
                  <circle className="hs-ring-track" cx="27" cy="27" r="22" fill="none" strokeWidth="5" />
                  <circle className="hs-ring-fill" cx="27" cy="27" r="22" fill="none" strokeWidth="5" />
                </svg>
                <div className="hs-ring-num">78%</div>
              </div>
              <div className="hs-line short" style={{ margin: "0 auto" }} />
            </div>
          </div>

          <div className="hs-panel-bottom">
            <div className="hs-line" style={{ marginBottom: 8 }} />
            <div className="hs-line" style={{ width: "75%" }} />
          </div>
        </div>

        <div className="hs-badge hs-b-tool !hidden sm:!flex">
          <span className="hs-badge-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 21l3.4-.8L20 6.6a2 2 0 0 0 0-2.8l-.8-.8a2 2 0 0 0-2.8 0L3.8 16.6 3 21Z"
                stroke="#fff"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          Edit mode
        </div>

        <div className="hs-badge hs-b-kit !hidden sm:!flex">
          <span className="hs-badge-icon">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2l2.4 5.6L20 9l-4.4 3.8L16.8 19 12 15.8 7.2 19l1.2-6.2L4 9l5.6-1.4L12 2Z"
                fill="#fff"
              />
            </svg>
          </span>
          AI UI Kit
        </div>

        <div className="hs-badge hs-b-cursor !hidden sm:!flex">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M4 3l7 17 2.2-6.8L20 11 4 3Z" fill="#EF5A2A" />
          </svg>
        </div>

        <div className="hs-swatch-bar !hidden sm:!flex">
          <span className="hs-sw" style={{ background: "#EF5A2A" }} />
          <span className="hs-sw" style={{ background: "#141210" }} />
          <span
            className="hs-sw"
            style={{ background: "#fff", border: "1px solid rgba(20,18,16,.15)" }}
          />
          <span className="hs-sw" style={{ background: "#D8D5CF" }} />
        </div>
      </div>
    </div>
  );
}
