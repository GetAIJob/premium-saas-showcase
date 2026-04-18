import { motion } from "framer-motion";

/**
 * Animated mesh background — three radial gradients drifting independently.
 * Used behind the hero. GPU-accelerated transforms only.
 */
export default function MeshBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Indigo bloom — top-left */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.55), rgba(99,102,241,0) 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cyan bloom — right */}
      <motion.div
        aria-hidden
        className="absolute top-20 -right-40 w-[720px] h-[720px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,211,238,0.45), rgba(34,211,238,0) 70%)",
          filter: "blur(24px)",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.96, 1.06, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Violet underglow — bottom */}
      <motion.div
        aria-hidden
        className="absolute -bottom-40 left-1/3 w-[760px] h-[760px] rounded-full opacity-45"
        style={{
          background:
            "radial-gradient(closest-side, rgba(167,139,250,0.40), rgba(167,139,250,0) 70%)",
          filter: "blur(28px)",
        }}
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.04, 0.98, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid noise overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 30%, transparent 70%)",
        }}
      />
    </div>
  );
}
