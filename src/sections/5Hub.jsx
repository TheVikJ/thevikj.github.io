// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import iPhoneMockup from "../assets/5hub-iphone-mockup.png";

export default function FiveHubSection() {
  return (
    <section
      id="5hub"
      className="
        w-full py-32 px-6 
        bg-white 
        text-[#000000]
        flex flex-col items-center
        font-[Inter]
        font-bold
      "
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold text-center"
      >
        5Hub
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg max-w-2xl text-center leading-relaxed mt-4 font-light"
      >
        One place for every Five College event.
        <br />
        Search. Filter. Share. RSVP.
        <br />
        Built for students who want to stay connected.
      </motion.p>

      {/* iPHONE MOCKUP */}
      <motion.img
        src={iPhoneMockup}
        alt="5Hub iPhone Mockup"
        className="
          w-full max-w-xl mt-12 mb-12
          drop-shadow-[0_0_40px_rgba(0,0,0,0.25)]
          rounded-xl
        "
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-lg max-w-2xl text-center leading-relaxed mb-10 font-light"
      >
        Designed for CS325: Human-Computer Interaction.
        <br />
        I led research, lo-fi prototyping, and the full high-fidelity mobile UI.
        <br />
        Built using the Figma Simple Design System.
      </motion.p>

      {/* BUTTON */}
      <Link
        to="/5hub"
        className="
          px-10 py-4
          bg-[#2c2c2c] text-white
          rounded-full
          font-light
          text-lg
          hover:bg-black
          transition
        "
      >
        View Full Project
      </Link>
    </section>
  );
}
