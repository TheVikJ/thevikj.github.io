// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useMemo } from "react";

const PARTICLE_COUNT = 70;

export default function FloatingShapes() {
  // Generate particle config ONCE
  const particles = useMemo(() => {
    const colors = ["#C778DD", "#5B8CFF", "#F7F9FC"]; // purple, blue, white
    const shapes = ["circle", "square", "triangle"];

    return Array.from({ length: PARTICLE_COUNT }).map(() => ({
      type: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      isOutline: Math.random() > 0.6,
      size: Math.floor(Math.random() * 12) + 10, // 10–22px
      top: Math.random() * 100,
      left: Math.random() * 100,
      drift: Math.random() * 20 + 10,
      delay: Math.random() * 4,
      duration: Math.random() * 8 + 6,
      rotate: Math.random() > 0.5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* ================================
          STATIC DARK BLOB BEHIND HERO
          ================================ */}
      <div
        className="
          absolute
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[50rem] h-[50rem]
          rounded-full
          bg-black/100
          z-10
          blur-3xl
        "
      />

      {/* ================================
          STATIC STRIPE BEHIND HERO
          ================================ */}
      <div
        className="
          absolute
    top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2
    w-[200vw] 
    h-[50px]
    bg-stargazer-orange/100
    rotate-135
    z-9
    pointer-events-none
        "
      />

      {/* ================================
          PARTICLE FIELD
          ================================ */}
      {particles.map((p, i) => {
        const baseStyle = {
          position: "absolute",
          top: `${p.top}%`,
          left: `${p.left}%`,
          width: p.size,
          height: p.size,
        };

        let shapeStyle = {};

        // ---- Circle ----
        if (p.type === "circle") {
          shapeStyle = {
            borderRadius: "999px",
            backgroundColor: p.isOutline ? "transparent" : p.color,
            border: p.isOutline ? `2px solid ${p.color}` : "none",
          };
        }

        // ---- Square ----
        if (p.type === "square") {
          shapeStyle = {
            backgroundColor: p.isOutline ? "transparent" : p.color,
            border: p.isOutline ? `2px solid ${p.color}` : "none",
          };
        }

        // ---- Triangle ----
        if (p.type === "triangle") {
          const size = p.size;
          shapeStyle = {
            width: 0,
            height: 0,
            borderLeft: `${size / 2}px solid transparent`,
            borderRight: `${size / 2}px solid transparent`,
            borderBottom: `${size}px solid ${
              p.isOutline ? "transparent" : p.color
            }`,
            position: "absolute",
            borderBottomColor: p.color,
            filter: p.isOutline ? `drop-shadow(0 0 2px ${p.color})` : "none",
            top: `${p.top}%`,
            left: `${p.left}%`,
          };
        }

        const animateProps = p.rotate
          ? { y: [0, -p.drift, 0], rotate: [0, 20, -20, 0] }
          : { y: [0, -p.drift, 0], x: [0, 8, -8, 0] };

        return (
          <motion.div
            key={i}
            style={
              p.type === "triangle"
                ? shapeStyle // triangles use their own absolute position
                : { ...baseStyle, ...shapeStyle }
            }
            animate={animateProps}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            className="z-0"
          />
        );
      })}
    </div>
  );
}