import { useEffect } from "react";

/** Subtle 3D tilt that follows the cursor over `ref`. Skipped when reduced motion is on. */
export function useTilt(ref, maxDeg = 6, targetRef = ref) {
  useEffect(() => {
    const el = ref.current;
    const target = targetRef.current;
    if (!el || !target || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      target.style.transform = `rotateY(${x * maxDeg}deg) rotateX(${-y * maxDeg}deg)`;
    };
    const leave = () => {
      target.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, [ref, targetRef, maxDeg]);
}
