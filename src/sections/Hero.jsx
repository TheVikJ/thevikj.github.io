// Hero.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-[5] pt-24">
      {/* Background */}
      <FloatingShapes />

      {/* Foreground */}
      <div className="relative z-20 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-bold text-stargazer-text mb-4"
        >
          Hey, I'm Vik.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="text-xl md:text-2xl text-stargazer-blue max-w-2xl"
        >
          I'm a senior studying Computer Science and Philosophy, Honors, at the
          University of Massachusetts Amherst.
          <br />
          <br />
          When I'm not in class, you can find me{" "}
          <a
            href="https://www.instagram.com/viks.blue_/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-[#FFFFFF] transition"
          >
            performing standup comedy
          </a>
          , working on{" "}
          <a
            href="https://viks.blue/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-[#FFFFFF] transition"
          >
            my creative projects
          </a>
          , or doing laundry.
        </motion.p>
      </div>
    </section>
  );
}
