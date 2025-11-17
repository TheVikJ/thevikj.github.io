// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ThorGPTSection() {
  return (
    <section className="w-full min-h-screen bg-[#36484f] text-white font-[Open_Sans] relative flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[#1999D8] opacity-[0.06] blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-[#3E525B] opacity-[0.05] blur-[160px]" />
      </div>

      {/* Wrapper */}
      <div className="relative z-20 w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ================================
            LLM Preview Card
        ================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            bg-[#20303B]
            rounded-2xl p-6 shadow-xl border border-[#3E525B]
            flex flex-col gap-4
            font-['Open Sans']
          "
        >
          {/* Fake user prompt */}
          <div className="p-4 bg-[#20303B] border border-[#1999D8] rounded-xl">
            <p className="text-[#D7E9F3] text-sm">
              “What are ISO-NE’s rules for solar installation safety?”
            </p>
          </div>

          {/* Fake LLM response */}
          <div className="p-4 bg-[#20303B] border border-[#3E525B] rounded-xl">
            <p className="text-[#FFFFFF] text-sm opacity-90">
              ThorGPT locates the relevant Operating Procedures and provides
              linked PDFs for verification.
            </p>

            {/* Blinking cursor */}
            <span className="inline-block mt-2 h-4 w-1 bg-white animate-pulse" />
          </div>
        </motion.div>

        {/* ================================
            TEXT CONTENT
        ================================= */}
        <div className="flex flex-col">
          <p className="uppercase tracking-widest text-sm text-[#1999D8] mb-3">
            AI + Energy Systems
          </p>

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            What is <span className="text-[#1999D8]">ThorGPT</span>?
          </h2>

          <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6">
            ThorGPT is a Retrieval-Augmented LLM built for ISO New England to
            help engineers, electricians, and contractors quickly locate
            technical rules, procedures, and regulatory documents.
            <br />
            <br />I led the full UI design process, from personas, to low-fi
            prototyping, and final interaction design, focusing on simplicity,
            transfer effects, and consistency with familiar LLM interfaces.
          </p>

          <div>
            <Link
              to="/thor"
              className="text-[#1999D8] text-lg underline underline-offset-4 hover:text-[#4BBEF5] transition"
            >
              View Project →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
