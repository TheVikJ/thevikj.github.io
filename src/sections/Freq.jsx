// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

import Freq4 from "../assets/freqthumbnails/FreqSquares1.png";
import Freq3 from "../assets/freqthumbnails/FreqSquares2.png";
import Freq2 from "../assets/freqthumbnails/FreqSquares3.png";
import Freq1 from "../assets/freqthumbnails/FreqSquares4.png";

export default function FreqSection() {
  const images = [Freq1, Freq2, Freq3, Freq4];
  const captions = [
    "Iterations of prototypes for items in collections.",
    "Figma prototype for new view of collections.",
    "Figma prototype for new 'notes' feature.",
    "Current view of Freq Home Feed.",
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="w-full min-h-screen bg-black text-white relative flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* ======================================================
          BACKGROUND GLOW
      ======================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[#8E27FC] opacity-[0.08] blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#3C96FF] opacity-[0.07] blur-[160px]" />
      </div>

      {/* ======================================================
          CONTENT WRAPPER
      ======================================================= */}
      <div className="relative z-20 w-full max-w-6xl flex flex-col md:flex-row md:items-center md:justify-center gap-10 md:gap-20">
        {/* ======================================================
            DESKTOP-ONLY: CAROUSEL + PLAYER
        ======================================================= */}
        <div className="hidden md:flex flex-col items-center">
          {/* Album Cover */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              relative
              w-[420px] h-[420px]
              rounded-2xl overflow-hidden
              shadow-[0_0_40px_rgba(0,0,0,0.7)]
              bg-[#2B2A33]
              flex items-center justify-center
            "
          >
            {/* Glow outline */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#8E27FC] shadow-[0_0_30px_#8E27FC]" />
            <img
              src={images[index]}
              alt="Freq Project"
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* Caption */}
          <p className="text-[#9EACC8] text-sm font-roboto text-center mt-4 opacity-90 w-[420px]">
            {captions[index]}
          </p>

          {/* Seek bar */}
          <div className="mt-6 w-[420px]">
            <div className="w-full h-2 bg-[#2B2A33] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#8E27FC]"
                initial={{ width: "0%" }}
                animate={{ width: "70%" }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>

            <div className="font-krona flex justify-between text-xs text-[#454C6C] mt-1">
              <span>1:14</span>
              <span>3:26</span>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-8 mt-4">
              <button
                onClick={prev}
                className="text-[#9EACC8] hover:text-white transition text-3xl"
              >
                ⏮
              </button>

              <a
                href="#/freq"
                className="text-[#8E27FC] hover:text-[#b164ff] transition text-4xl"
                title="Go to project page"
              >
                ▶
              </a>

              <button
                onClick={next}
                className="text-[#9EACC8] hover:text-white transition text-3xl"
              >
                ⏭
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================
            TEXT — ALWAYS SHOWN (MOBILE + DESKTOP)
        ======================================================= */}
        <div className="flex flex-col max-w-xl mx-auto md:mx-0">
          {/* Now Playing */}
          <p className="font-krona text-[#9EACC8] text-sm uppercase tracking-widest flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#3C96FF] animate-pulse" />
            Now Playing
          </p>

          {/* Title */}
          <h2 className="font-krona text-4xl md:text-5xl mb-6 leading-tight text-center md:text-left">
            What is <span className="text-[#8E27FC]">FREQ</span>?
          </h2>

          {/* Description */}
          <p className="font-roboto text-base md:text-lg text-[#9EACC8] leading-relaxed mb-6 text-center md:text-left">
            Freq is a social platform for discovering music through real
            communities. Friends, DJs, local scenes, college radio.
            <br />
            <br />
            It helps listeners share collections, build playlists, and find new
            music naturally through small, vibrant communities.
          </p>

          {/* View project */}
          <div className="text-center md:text-left">
            <Link
              to="/freq"
              className="font-krona text-[#8E27FC] text-lg underline underline-offset-4 hover:text-[#b164ff] transition"
            >
              View Project →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
