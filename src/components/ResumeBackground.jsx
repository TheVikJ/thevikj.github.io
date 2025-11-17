// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ResumeBackground() {
  const colors = [
    "#B43434", // red
    "#D08247", // orange
    "#E0A458", // yellow
    "#619957", // green
    "#6B8AD3", // blue
  ];

  // Large stack for seamless scrolling
  const baseList = Array.from({ length: 40 }).map((_, i) => ({
    text: "Resume",
    color: colors[i % colors.length],
  }));

  const fullList = [...baseList, ...baseList];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* VERTICAL LOOP */}
      <motion.div
        className="absolute left-0 w-full"
        style={{ top: "3%" }}
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {fullList.map((item, i) => {
          const phase = i * 2; // offset for the horizontal wave
          const amplitude = 15; // pixels rightward only

          return (
            <motion.div
              key={i}
              className="font-bold whitespace-nowrap"
              style={{
                fontSize: "5rem",
                lineHeight: "4.2rem",
                color: item.color,
                marginBottom: "-0.3rem",
              }}
              animate={{
                // right-only sine wave
                x: [
                  (Math.sin(phase) + 1) * amplitude,
                  (Math.sin(phase + Math.PI / 2) + 1) * amplitude,
                  (Math.sin(phase + Math.PI) + 1) * amplitude,
                  (Math.sin(phase + (3 * Math.PI) / 2) + 1) * amplitude,
                  (Math.sin(phase + 2 * Math.PI) + 1) * amplitude,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.text}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
