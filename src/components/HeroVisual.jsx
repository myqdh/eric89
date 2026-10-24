import { useRef } from "react";
import { useTilt } from "../hooks/useTilt";
import "../styles/hero-visual.css";

/** Animated glassmorphism hero visual. Styles live in HeroVisual.css (prefix `hs-`). */
export default function HeroStage() {
  const stageRef = useRef(null);
  const rigRef = useRef(null);
  useTilt(stageRef, 8, rigRef);

  return (
    <div className="hs-stage" ref={stageRef}>
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
