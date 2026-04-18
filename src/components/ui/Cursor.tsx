import { useEffect, useRef, useState } from "react";

/**
 * Smooth lerp-follower cursor — desktop only.
 * - Hidden on touch devices via media-query in global.css
 * - Scales up over interactive targets
 * - Respects prefers-reduced-motion (renders nothing)
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const [mounted, setMounted] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    setMounted(true);
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a, button, input, textarea, [role='button']");
      setHovered(interactive);
    };

    let raf = 0;
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot && ring) {
        dot.style.transform = `translate(${target.current.x}px, ${target.current.y}px) translate(-50%, -50%)`;
        ring.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%) scale(${hovered ? 1.6 : 1})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.body.style.cursor = "";
    };
  }, [hovered]);

  if (!mounted) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[200] w-1.5 h-1.5 rounded-full bg-cyan-300 mix-blend-screen"
      />
      <div
        ref={ringRef}
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[199] w-9 h-9 rounded-full border border-cyan-300/50 transition-[transform] duration-200 ease-out mix-blend-screen"
      />
    </>
  );
}
