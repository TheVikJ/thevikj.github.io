// NavBar.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function NavBar({
  isLight,
  onFreq,
  onFiveHub,
  onThorGPT,
  onResume,
}) {
  // dynamic colors
  const textColor = isLight ? "text-black" : "text-white";
  const fadedColor = isLight
    ? "text-black/70 hover:text-black"
    : "text-white/80 hover:text-white";
  const borderColor = isLight
    ? "border-black/10 bg-white/60"
    : "border-white/20 bg-white/10";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-4 left-1/2 -translate-x-1/2
        backdrop-blur-xl ${borderColor}
        px-8 py-3 rounded-2xl shadow-lg
        flex items-center gap-10 z-[200]
        transition-colors duration-300
      `}
    >
      {/* Name */}
      <span className={`${textColor} font-semibold tracking-wide text-lg`}>
        Vik
      </span>

      {/* Navigation buttons */}
      <button onClick={onResume} className={`${fadedColor} transition`}>
        Resume
      </button>
      <button onClick={onFreq} className={`${fadedColor} transition`}>
        Freq
      </button>
      <button onClick={onFiveHub} className={`${fadedColor} transition`}>
        5Hub
      </button>
      <button onClick={onThorGPT} className={`${fadedColor} transition`}>
        ThorGPT
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Social Icons */}
      <div className={`flex items-center gap-4 ${fadedColor}`}>
        <a href="https://github.com/TheVikJ" target="_blank">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/thevikj/" target="_blank">
          <Linkedin size={20} />
        </a>
        <a href="https://devpost.com/vikram-jaisingh123" target="_blank">
          <Globe size={20} />
        </a>
        <a href="mailto:vikram.jaisingh123@gmail.com">
          <Mail size={20} />
        </a>
      </div>
    </motion.nav>
  );
}
