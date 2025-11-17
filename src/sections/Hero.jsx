// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import FloatingShapes from "../components/FloatingShapes";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden z-[5]">
      {/* Background particles + blob */}
      <FloatingShapes />

      {/* Foreground content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-stargazer-text mb-4 relative z-20"
      >
        Hey, I'm Vik.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="text-xl md:text-2xl text-stargazer-blue max-w-2xl relative z-20"
      >
        I'm a senior studying Computer Science and Philosophy, Honors, at the
        University of Massachusetts Amherst <br />
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
        , or doing laundry
      </motion.p>

      <div
        className="
    mt-10 px-6 py-4
    rounded-xl backdrop-blur-lg bg-white/5 border border-white/10
    flex gap-6 items-center justify-center
    shadow-[0_0_20px_rgba(255,255,255,0.1)]
    relative z-20
  "
      >
        <a
          href="https://github.com/TheVikJ"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://devpost.com/vikram-jaisingh123"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Devpost
        </a>
        <a
          href="https://www.linkedin.com/in/thevikj/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:vikram.jaisingh123@gmail.com"
          className="hover:text-white transition"
        >
          Email
        </a>
        <a
          href="/resume.pdf"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
