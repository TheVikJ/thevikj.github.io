// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ===== IMPORT IMAGES =====
//import PersonaImg from "../assets/thordesigns/ThorGPTPersona.png";
import Wire1 from "../assets/thordesigns/Wireframe 1.png";
import Wire1Prompt from "../assets/thordesigns/Wireframe 1 - Prompt.png";
import Wire2 from "../assets/thordesigns/Wireframe 2.png";
import Wire2Prompt from "../assets/thordesigns/Wireframe 2 - Prompt.png";
import WireFinal from "../assets/thordesigns/Wireframe Final.png";
import WireFinalPrompt from "../assets/thordesigns/Wireframe Final - Prompt.png";

import FinalImpl from "../assets/thordesigns/final-implementation.png";
import FinalImplLogin from "../assets/thordesigns/final-implementation-login.png";

export default function ThorGPTDetail() {
  return (
    <main
      className="
        w-full min-h-screen
        bg-[#20303B] text-white
        px-6 md:px-12 lg:px-32
        py-24
        font-['Open_Sans']
      "
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* BACK BUTTON */}
        <Link
          to="/"
          className="
            inline-block mb-12
            text-lg font-medium
            hover:opacity-60
            transition
          "
        >
          ← Back to Home
        </Link>

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl text-[#FAB82E] font-semibold mb-6"
        >
          ThorGPT
        </motion.h1>

        <p className="text-xl leading-relaxed mb-16 opacity-90">
          ThorGPT is an AI-powered chatbot built for{" "}
          <strong>ISO New England</strong>, the organization that oversees the
          region’s electric power grid and wholesale energy markets.
          <br />
          <br />
          Using GPT-4 and a retrieval-augmented generation (RAG) pipeline,
          ThorGPT delivers fast, document-specific answers and eliminates the
          tedious manual process of digging through hundreds of technical PDFs.
        </p>

        {/* ================================
            CONTEXT & ROLE
        ================================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-[#FAB82E] font-semibold mb-4">
            Context & Role
          </h2>
          <p className="text-lg leading-relaxed opacity-95">
            ThorGPT was developed in collaboration with ISO New England as part
            of CS320: Software Engineering. Our team designed and built the full
            system, from prompt engineering to RAG pipelines to frontend UI.
            <br />
            <br />
            <strong>My role:</strong>
            <br />• Designed the entire frontend in React
            <br />• Created low-fidelity wireframes in Balsamiq
            <br />• Developed the user persona with ISO stakeholders
            <br />• Structured UX flows and interaction patterns
            <br />• Helped document architectural decisions
            <br />• Helped Supabase vector database for ISO-NE PDF documents
            <br />
            <br />
            My individual focus: ensuring ThorGPT feels simple, intuitive, and
            familiar, even for users working with extremely technical material.
          </p>
        </section>

        {/* ================================
            USER PERSONA
        ================================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-[#FAB82E] font-semibold mb-4">
            User Persona
          </h2>

          <p className="text-lg leading-relaxed opacity-95 mb-6">
            Working with ISO New England, we developed a persona named{" "}
            <strong>Joe</strong> to represent one of ThorGPT's key user groups.
          </p>

          {/*<img src={PersonaImg} alt="ThorGPT Persona" className="rounded-xl w-full mb-8 shadow-lg">*/}

          <div className="bg-[#20303B] border border-[#1999D8] rounded-xl p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Joe (Solar Contractor in Massachusetts)
            </h3>
            <p className="opacity-90 mb-4">
              Joe frequently works with distributed energy resources and often
              needs to confirm ISO procedures, safety rules, and reporting
              requirements.
            </p>

            <p className="opacity-90">
              <strong>Goal: </strong>
              Learn and confirm regulatory requirements; e.g., “What is the
              process of reporting Distributed Energy Resources to ISO NE?”
              <br />
              <br />
              <strong>Frustration: </strong>
              Navigating ISO's website requires clicking through numerous pages
              and deeply nested documents. Finding a specific subsection is
              time-consuming and interrupts his workflow.
            </p>
          </div>

          <p className="text-lg leading-relaxed opacity-95 mt-8">
            Joe represents one of many ThorGPT user types, including system
            operators, engineers, planners, and regulators.
          </p>
        </section>

        {/* ================================
            DESIGN CONSIDERATIONS
        ================================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-[#FAB82E] font-semibold mb-6">
            Design Considerations
          </h2>

          <p className="text-lg leading-relaxed opacity-95 mb-10">
            Two design pillars guided every decision in ThorGPT’s interface.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Transfer Effect */}
            <div className="bg-[#20303B] border border-[#1999D8] rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Transfer Effect</h3>
              <p className="opacity-90">
                Users like Joe are already familiar with tools such as ChatGPT
                or Copilot, which share recognizable patterns:
                <br />• Dark interface
                <br />• Chat-style dialogue
                <br />• Input field anchored to the bottom
                <br />
                <br />
                ThorGPT intentionally mirrors these patterns to minimize
                onboarding time and make the tool feel instantly usable.
              </p>
            </div>

            {/* Simplicity */}
            <div className="bg-[#20303B] border border-[#1999D8] rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-3">Simplicity</h3>
              <p className="opacity-90">
                ISO’s documentation system is massive and technical. Searching
                through it manually is exhausting.
                <br />
                <br />
                To reduce friction, ThorGPT’s UI is intentionally limited to a{" "}
                <strong>single screen</strong> with a clear hierarchy and no
                unnecessary navigation, keeping the focus entirely on the
                question–answer workflow.
              </p>
            </div>
          </div>
        </section>
        {/* ================================
    WIREFRAMES
================================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-[#FAB82E] font-semibold mb-6">
            Low-Fidelity Prototypes
          </h2>

          <p className="text-lg leading-relaxed opacity-95 mb-10">
            With the user persona and design considerations established, I moved
            into low-fidelity exploration. My goal was to test how engineered
            prompts, document references, and chat interactions should be
            arranged so that the interface feels intuitive and dramatically
            simpler than ISO’s existing documentation system.
            <br />
            <br />I created two distinct prototypes in Balsamiq, each
            intentionally shaped by both <strong>
              Transfer Effect
            </strong> and <strong>Simplicity</strong>.
          </p>

          {/* Prototype 1 */}
          <div className="space-y-6 mb-16">
            <h3 className="text-2xl text-[#1999D8] font-semibold">
              Prototype 1: Broad Prompt Exploration
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              The first prototype focused on breadth. It included
              <strong> eight engineered prompts</strong> on the home screen,
              allowing users like Joe to quickly select from common questions,
              reducing the need to formulate their own.
              <br />
              <br />
              The interface followed familiar LLM patterns (dark mode, anchored
              input bar) to take advantage of <strong>Transfer Effect</strong>.
              When a prompt was selected, the system displayed the user’s
              message on the right and the AI’s response on the left, along with{" "}
              <strong>embedded PDFs</strong> used as the sources for the answer.
              <br />
              <br />
              While this design validated the idea of fast prompt selection and
              bottom-anchored input, early feedback suggested that embedded PDFs
              felt visually heavy and made the screen feel cramped.
            </p>

            <img src={Wire1} className="rounded-xl shadow-lg mb-4" />
            <img src={Wire1Prompt} className="rounded-xl shadow-lg" />
          </div>

          {/* Prototype 2 */}
          <div className="space-y-6 mb-16">
            <h3 className="text-2xl text-[#1999D8] font-semibold">
              Prototype 2: Cleaner, Structured Layout
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              The second prototype intentionally moved toward{" "}
              <strong>Simplicity</strong>. It reduced the eight prompts into{" "}
              <strong>three grouped categories</strong>, making the home screen
              less overwhelming while still supporting common user needs.
              <br />
              <br />
              Based on pain points uncovered in Prototype 1, embedded PDFs were
              removed and replaced with{" "}
              <strong>linked document references</strong>. This gave users more
              flexibility. They could open PDFs in browser tabs, download them,
              or view them in their preferred tools.
              <br />
              <br />
              This version felt far more streamlined, but some UI elements still
              carried unnecessary complexity. The layout needed one final
              iteration to unify the strongest ideas.
            </p>

            <img src={Wire2} className="rounded-xl shadow-lg mb-4" />
            <img src={Wire2Prompt} className="rounded-xl shadow-lg" />
          </div>

          {/* Final Prototype */}
          <div className="space-y-6">
            <h3 className="text-2xl text-[#1999D8] font-semibold">
              Final Prototype: Combined & Refined
            </h3>
            <p className="text-lg opacity-90 leading-relaxed">
              The final wireframe blended the most effective elements from both
              earlier prototypes, guided by the original design pillars:
              <br />
              <br />
              <strong>From Prototype 1:</strong>
              <br />• Familiar LLM-style layout (Transfer Effect)
              <br />• Anchored input bar for predictable interaction
              <br />• Clear separation between user prompts and model responses
              <br />
              <br />
              <strong>From Prototype 2:</strong>
              <br />• Three clean groups of prompts instead of eight
              <br />• Linked PDFs instead of embedded viewers
              <br />• A more open, breathable layout supporting Simplicity
              <br />
              <br />
              The result is a single-screen interface that feels both
              <strong> intuitive</strong> and <strong>highly functional</strong>{" "}
              for users navigating complex grid documentation.
              <br />
              <br />
              When presented to ISO New England, stakeholders confirmed that the
              interface aligned with their expectations for speed, clarity, and
              reduced cognitive load.
            </p>

            <img src={WireFinal} className="rounded-xl shadow-lg mb-4" />
            <img src={WireFinalPrompt} className="rounded-xl shadow-lg" />
          </div>
        </section>

        {/* ================================
    OUTCOME
================================= */}
        <section className="mb-24">
          <h2 className="text-3xl text-[#FAB82E] font-semibold mb-4">
            Outcome
          </h2>

          <p className="text-lg leading-relaxed opacity-90 mb-10">
            ThorGPT demonstrates how a RAG-powered assistant can dramatically
            reduce friction in highly technical environments. The final design
            brings together the two key considerations (
            <strong>transfer effect</strong> and
            <strong> simplicity</strong>) into a single, intuitive interface
            that feels familiar while remaining purpose-built for ISO New
            England.
            <br />
            <br />
            After iterating on the low-fidelity prototypes, we implemented the
            final design in React. The UI reflects the structure validated
            through testing: clear prompt groupings, a streamlined chat
            workflow, and linked source documents that maintain transparency and
            trust.
          </p>

          <h3 className="text-2xl font-semibold text-[#FAB82E] mb-4">
            Final Implementation
          </h3>

          <p className="text-lg leading-relaxed opacity-90 mb-8">
            Below are screenshots from the final working frontend, built using
            the refined UX architecture. These include the authenticated view of
            the chat interface and the dedicated login page designed to onboard
            ISO operators, contractors, and administrators.
          </p>

          {/* FINAL UI — TWO SCREENSHOTS */}
          <div className="space-y-10">
            {/* Main Interface */}
            <div className="bg-[#20303B] border border-[#1999D8] rounded-xl p-4 shadow-lg">
              <img
                src={FinalImpl}
                alt="Final ThorGPT Implementation"
                className="rounded-lg w-full"
              />
              <p className="text-sm opacity-75 mt-3">
                Final ThorGPT interface.
              </p>
            </div>

            {/* Login Page */}
            <div className="bg-[#20303B] border border-[#1999D8] rounded-xl p-4 shadow-lg">
              <img
                src={FinalImplLogin}
                alt="Final ThorGPT Login Screen"
                className="rounded-lg w-full"
              />
              <p className="text-sm opacity-75 mt-3">
                Final implementation login page.
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed opacity-90 mt-12">
            ISO New England validated that the final interface aligned with
            their expectations for clarity, efficiency, and real-world
            usability, especially for users who depend on fast, reliable,
            document-grounded information to maintain grid reliability across
            the region.
          </p>
        </section>
      </div>
    </main>
  );
}
