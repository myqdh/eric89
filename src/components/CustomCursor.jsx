import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/useReducedMotion";

export default function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const ringX = useSpring(mx, { damping: 28, stiffness: 320, mass: 0.5 });
  const ringY = useSpring(my, { damping: 28, stiffness: 320, mass: 0.5 });

  // Only enable on devices with a real mouse (skip touch) and when motion is allowed
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(mq.matches && !reduced);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-active");
      return;
    }
    document.documentElement.classList.add("custom-cursor-active");

    const handleMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const handleOver = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const handleOut = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHovering(false);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseleave", handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden style={{ opacity: visible ? 1 : 0, transition: "opacity 0.2s ease" }}>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[999] w-1.5 h-1.5 rounded-full bg-ember"
        style={{ x: mx, y: my, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[998] rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovering ? "var(--color-ember)" : "rgba(10,10,10,0.35)",
          backgroundColor: hovering ? "rgba(255,77,28,0.08)" : "transparent",
        }}
        animate={{
          width: hovering ? 52 : 30,
          height: hovering ? 52 : 30,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
