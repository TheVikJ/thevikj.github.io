// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";   

/* ----------------------------------------
   IMPORT ALL DESIGN ASSETS
-----------------------------------------*/

// Lo-fi prototypes
import LoFi from "../assets/freqdesigns/lofi-current-vs-notes.png";

// Item iteration prototypes
import ItemIterChosen from "../assets/freqdesigns/item-iter-chosen.png";
import ItemIter1 from "../assets/freqdesigns/item-iter-1.png";
import ItemIter2 from "../assets/freqdesigns/item-iter-2.png";
import ItemIter3 from "../assets/freqdesigns/item-iter-3.png";
import ItemIter4 from "../assets/freqdesigns/item-iter-4.png";
import ItemIter5 from "../assets/freqdesigns/item-iter-5.png";
import ItemIter6 from "../assets/freqdesigns/item-iter-6.png";
import ItemIter7 from "../assets/freqdesigns/item-iter-7.png";

// Old vs new collection view
import OldCollection from "../assets/freqdesigns/old-collection-view.png";
import NewCollection from "../assets/freqdesigns/new-collection-view.png";

// Modal v1 (boxy / early iteration)
import ModalV1About from "../assets/freqdesigns/modal-view-v1-about-view.png";
import ModalV1Tags from "../assets/freqdesigns/modal-view-v1-tags-view.png";
import ModalV1Tracklist from "../assets/freqdesigns/modal-view-v1-tracklist-view.png";

// Modal final (refined)
import ModalFinalAbout from "../assets/freqdesigns/modal-view-v2-about-view.png";
import ModalFinalTags from "../assets/freqdesigns/modal-view-v2-tags-view.png";
import ModalFinalTracks from "../assets/freqdesigns/modal-view-v2-tracklist-view.png";
import ModalFinalAboutNoNotes from "../assets/freqdesigns/modal-view-v2-about-view-no-notes.png";

export default function FreqDetail() {
  /* ----------------------------------------
     Helper Arrays for Carousels
  -----------------------------------------*/

  const [carouselIndex, setCarouselIndex] = useState(0);

  const [modalV1Index, setModalV1Index] = useState(0);

  const [modalFinalIndex, setModalFinalIndex] = useState(0);

  const nextModalFinal = () =>
    setModalFinalIndex((i) => (i + 1) % modalFinal.length);

  const prevModalFinal = () =>
    setModalFinalIndex((i) => (i - 1 + modalFinal.length) % modalFinal.length);

  const nextModalV1 = () => setModalV1Index((i) => (i + 1) % modalV1.length);

  const prevModalV1 = () =>
    setModalV1Index((i) => (i - 1 + modalV1.length) % modalV1.length);

  const itemIterations = [
    ItemIter1,
    ItemIter2,
    ItemIter3,
    ItemIter4,
    ItemIter5,
    ItemIter6,
    ItemIter7,
  ];

  const nextIteration = () =>
    setCarouselIndex((i) => (i + 1) % itemIterations.length);

  const prevIteration = () =>
    setCarouselIndex(
      (i) => (i - 1 + itemIterations.length) % itemIterations.length
    );

  /* ----------------------------------------
     OTHER ARRAYS
  -----------------------------------------*/
  const modalV1 = [ModalV1About, ModalV1Tags, ModalV1Tracklist];
  const modalFinal = [
    ModalFinalAbout,
    ModalFinalTags,
    ModalFinalTracks,
    ModalFinalAboutNoNotes,
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white px-6 py-20">
      {/* BACK BUTTON */}
      <Link
        to="/#freq"
        className="text-[#8E27FC] font-krona text-lg underline underline-offset-4 hover:text-[#b164ff]"
      >
        ← Back
      </Link>

      {/* HEADER */}
      <header className="max-w-4xl mx-auto text-center mt-10">
        <h1 className="font-krona text-5xl mb-4">
          <span className="text-[#8E27FC]">FREQ</span> Case Study
        </h1>
        <p className="font-roboto text-[#FFFFFF] text-xl leading-relaxed">
          A UX case study on designing a collections "notes" feature for{" "}
          <a
            href="https://freq.social"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4 text-white hover:text-[#EDEDED] 
               drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
          >
            Freq
          </a>
          , a social music platform built at the{" "}
          <a
            href="https://publicinfrastructure.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline underline-offset-4 text-white hover:text-[#EDEDED] 
               drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
          >
            Initiative for Digital Public Infrastructure (iDPI)
          </a>{" "}
          to support grassroots music culture and healthy, community-driven
          online spaces.
        </p>
      </header>

      {/* LARGE FEATURE IMAGE */}
      <div className="max-w-5xl mx-auto mt-16">
        <motion.img
          src={NewCollection}
          alt="Feature Screenshot"
          className="w-full rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        />
      </div>

      {/* ---------------------------------------------------------
         SECTION: PROJECT CONTEXT
      --------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto mt-20 space-y-10">
        <div>
          <h2 className="font-krona text-3xl text-[#8E27FC] mb-4">
            Project Context
          </h2>
          <p className="font-roboto text-[#FFFFFF] leading-relaxed">
            Freq started at the lab I work for, the Initiative for Digital
            Public Infrastructure (iDPI): a research center at UMass Amherst
            focused on designing digital spaces that function as public goods.
            The platform aims to strengthen grassroots music communities, from
            college radio stations to local music scenes, by empowering users to
            build collections, share context, and preserve music history.
          </p>
        </div>

        <div>
          <h2 className="font-krona text-3xl text-[#8E27FC] mb-4">
            The Problem
          </h2>
          <p className="font-roboto text-[#FFFFFF] leading-relaxed">
            User research, especially workshops with local college radio
            stations, revealed that cataloguing physical archives is difficult.
            Student DJs struggle to understand what's meaningful about a given
            album or track without digging through liner notes or Googling every
            item. The existing collections feature on Freq lacked context,
            metadata, tagging, or the ability to document institutional
            knowledge.
          </p>
          <br />
          <p className="font-roboto text-[#FFFFFF] leading-relaxed">
            Beyond the usability challenges, this gap also limits Freq's
            long-term ability to preserve music knowledge, one of the platform's
            core civic goals. Collections currently allow only a title and a
            short description, which means all the rich historical, cultural, or
            personal context behind each album or track remains trapped offline,
            in people's heads, or scattered across physical archives. Without a
            way to attach detailed annotations, provenance, release information,
            or tags to individual items, Freq loses the opportunity to document
            stories that would otherwise be forgotten: why a record matters, how
            it fits into a genre's evolution, or how it shaped a particular
            community. A more robust metadata and annotation system is essential
            for organizing music and sustaining the collective memory and
            culture of grassroots music communities.
          </p>
        </div>

        <div>
          <h2 className="font-krona text-3xl text-[#8E27FC] mb-4">
            The Design Challenge
          </h2>
          <p className="font-roboto text-[#FFFFFF] leading-relaxed">
            How can we make it easy for a student DJ (or any collector) to learn
            about an album quickly, understand why it matters, and add their own
            insights to preserve music history?
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------
         SECTION: LO-FI IDEATION
      --------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="font-krona text-3xl text-[#8E27FC] mb-6">
          Lo-Fi Prototyping
        </h2>
        <p className="font-roboto text-[#FFFFFF] leading-relaxed mb-8">
          I began with rapid lo-fi sketches in Procreate comparing the current
          version of collections with new concepts for a “Notes” system. These
          sketches laid out the essential interaction patterns and helped
          clarify the core user needs before moving into Figma.
        </p>

        <motion.img
          src={LoFi}
          alt="Lo-fi prototype"
          className="w-full max-w-3xl mx-auto rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        />
        <br />
        <p className="font-roboto text-[#FFFFFF] leading-relaxed mb-8">
          The sketches explored how each item in a collection could offer more
          than a static summary page. In the current product, users can view an
          item's album information, but they can't contribute any additional
          knowledge or context. My proposed flow introduces a modal that
          preserves the familiar album metadata while adding support for user
          notes, attribution (“added by” indicators), and richer contextual
          cues. This encourages community participation and helps DJs,
          collectors, and listeners record what makes an item meaningful.
        </p>
        <p className="font-roboto text-[#FFFFFF] leading-relaxed">
          As I transitioned into high-fidelity prototyping, I evaluated each
          design choice through the lenses of accessibility and simplicity, two
          principles core to Freq's mission as a public-good platform. While the
          lo-fi concept kept visual complexity low, one issue emerged: the
          "added by" information appeared only on hover. This works for mouse
          users but fails screen reader accessibility and touch-based
          interactions. Addressing this became a key focus as I iterated on the
          Figma designs for the final collection item layout.
        </p>
      </section>

      {/* ============================================================
    ITEM ITERATIONS — CHOSEN DESIGN + CAROUSEL OF ITERATIONS
=============================================================== */}
      <section className="max-w-4xl  mx-auto mt-24">
        <h2 className="font-krona text-3xl text-[#8E27FC] mb-6">
          Iterating the Collection Item Design
        </h2>

        <p className="font-roboto text-[#FFFFFF] leading-relaxed mb-10">
          On Figma, I explored multiple visual approaches for how items should
          appear within collections, including contributor info, metadata
          visibility, interaction entry points, and a new "read notes…" prompt.
          Below is the final chosen design, alongside a carousel showing seven
          earlier iterations that helped refine the interface.
        </p>

        {/* ============= Responsive Layout ============= */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-14 md:gap-20">
          {/* --------------------------
        FINAL CHOSEN DESIGN
    --------------------------- */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="relative">
              {/* Glow outline */}
              <div
                className="
            absolute inset-0 rounded-2xl
            border-2 border-[#8E27FC]
            shadow-[0_0_30px_#8E27FC]
            pointer-events-none
          "
              />
              <img
                src={ItemIterChosen}
                alt="Final chosen collection item design"
                className="w-full max-w-xs rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              />
            </div>

            {/* Caption */}
            <p className="font-roboto text-[#FFFFFF] text-base mt-5 text-center">
              Final chosen item design
            </p>
          </div>

          {/* --------------------------
        ITERATION CAROUSEL
    --------------------------- */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            {/* Carousel image */}
            <motion.img
              key={carouselIndex}
              src={itemIterations[carouselIndex]}
              alt="Iteration design"
              className="w-full max-w-xs rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Controls Row */}
            <div className="flex items-center justify-center gap-6 mt-5">
              <button
                onClick={prevIteration}
                className="text-[#FFFFFF] hover:text-[#9EACC8] transition text-2xl"
              >
                ⏮
              </button>

              <p className="font-roboto text-[#FFFFFF] text-base text-center">
                Iteration {carouselIndex + 1} of {itemIterations.length}
              </p>

              <button
                onClick={nextIteration}
                className="text-[#FFFFFF] hover:text-[#9EACC8] transition text-2xl"
              >
                ⏭
              </button>
            </div>
          </div>
        </div>
        <br />
        <p className="font-roboto text-[#FFFFFF] leading-relaxed mb-10">
          To address the accessibility issues identified earlier, I replaced the
          hover-only contributor indicator with persistent text ("added by
          user"), ensuring the information is accessible to screen readers and
          visible across devices. I also iterated on the visual hierarchy of key
          elements such as the artist name, the "more details" vs. "read notes"
          entry point, the size and treatment of the notes label, and whether to
          incorporate an icon for additional clarity. Through these
          explorations, I arrived at a final design that introduces the notes
          feature clearly but subtly. It is visible enough to guide users, yet
          restrained enough not to compete with the album and artist metadata.
        </p>
      </section>

      {/* ---------------------------------------------------------
         SECTION: OLD vs NEW
      --------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="font-krona text-3xl text-[#8E27FC] mb-6">
          Redesigning the Collections View
        </h2>
        <p className="font-roboto text-[#FFFFFF] leading-relaxed mb-8">
          This design for the collections grid builds on the chosen design above
          for items in collections. The previous collections view offered little
          context beyond album covers. The redesign introduces contributor
          identity, metadata, tagging, and a clearer hierarchy to support
          collectors, DJs, and local scenes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <p className="font-krona text-[#9EACC8] mb-3">Old View</p>
            <img
              src={OldCollection}
              alt="Old Collection"
              className="rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <p className="font-krona text-[#9EACC8] mb-3">New View</p>

            <div className="relative">
              {/* Glow outline */}
              <div
                className="
        absolute inset-0 rounded-2xl
        border-2 border-[#8E27FC]
        shadow-[0_0_30px_#8E27FC]
        pointer-events-none
      "
              />
              <img
                src={NewCollection}
                alt="New Collection"
                className="rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.5)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------
     SECTION: MODAL — V1 (CAROUSEL)
--------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="font-krona text-3xl text-[#8E27FC] mb-6">
          Modal Design — First Iteration
        </h2>

        <p className="font-roboto text-[#FFFFFF] leading-relaxed mb-10">
          The first version of the modal explored how much information we could
          surface in one place: album metadata, tags, and a full tracklist.
          While this was a meaningful step forward from the old static item
          page, user testing quickly revealed several issues. College radio DJs
          described the layout as “boxy” and “crowded,” noting that the rigid
          card-like structure made it hard to scan. Others struggled to
          differentiate between metadata, tags, and notes because the visual
          hierarchy wasn't clearly defined. The tagging interface, in
          particular, felt constrained. Users wanted tags to behave more
          flexibly, especially when dealing with complex archival material.
          These insights made it clear that the modal needed to feel lighter,
          more breathable, and more adaptable to different content types. <br />
          Below is a carousel of the three early modal concepts that informed
          the next phase of refinement.
        </p>

        {/* -------- CAROUSEL WITH GLOW -------- */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            {/* Glow outline */}
            <div
              className="
        absolute inset-0 rounded-2xl
        border-2 border-[#8E27FC]
        shadow-[0_0_30px_#8E27FC]
        pointer-events-none
      "
            />

            <motion.img
              key={modalV1Index}
              src={modalV1[modalV1Index]}
              alt="Modal v1 iteration"
              className="w-full rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prevModalV1}
              className="text-[#FFFFFF] hover:text-[#9EACC8] transition text-2xl"
            >
              ⏮
            </button>

            <p className="font-roboto text-[#FFFFFF] text-base text-center">
              View {modalV1Index + 1} of {modalV1.length}
            </p>

            <button
              onClick={nextModalV1}
              className="text-[#FFFFFF] hover:text-[#9EACC8] transition text-2xl"
            >
              ⏭
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
     SECTION: MODAL — FINAL (CAROUSEL)
--------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="font-krona text-3xl text-[#8E27FC] mb-6">
          Final Modal Design
        </h2>

        <p className="font-roboto text-[#FFFFFF] leading-relaxed mb-10">
          Based on feedback from the first iteration, the final modal design
          focuses on clarity, hierarchy, and flexibility. I removed the heavy
          box framing that felt claustrophobic, allowing the content to breathe.
          The tagging system was redesigned to behave more dynamically,
          supporting genres, eras, moods, and archival categories that could be
          uniquely defined by users. The release date and label information at
          the top of the About tab is also more prominent, but not as
          disruptive. The notes section became more prominent and more readable,
          making it easier for DJs and collectors to understand the context
          behind an item at a glance. <br />
          Below is a carousel of the final modal designs, including variations
          for collections with and without user-submitted notes.
        </p>

        {/* -------- CAROUSEL LOGIC -------- */}
        <div className="flex flex-col items-center">
          {/* Image with glow */}
          <div className="relative w-full max-w-4xl">
            <div
              className="
          absolute inset-0 rounded-2xl
          border-2 border-[#8E27FC]
          shadow-[0_0_30px_#8E27FC]
          pointer-events-none
        "
            />
            <motion.img
              key={modalFinalIndex}
              src={modalFinal[modalFinalIndex]}
              alt="Final modal iteration"
              className="w-full rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prevModalFinal}
              className="text-[#FFFFFF] hover:text-[#9EACC8] transition text-2xl"
            >
              ⏮
            </button>

            <p className="font-roboto text-[#FFFFFF] text-base text-center">
              View {modalFinalIndex + 1} of {modalFinal.length}
            </p>

            <button
              onClick={nextModalFinal}
              className="text-[#FFFFFF] hover:text-[#9EACC8] transition text-2xl"
            >
              ⏭
            </button>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
     SECTION: CONCLUSION
--------------------------------------------------------- */}
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="font-krona text-3xl text-[#8E27FC] mb-4">Conclusion</h2>

        <p className="font-roboto text-[#FFFFFF] leading-relaxed">
          Designing the notes system for Freq became more than a UI improvement.
          For me, it was an exploration of how digital tools can meaningfully
          support real communities. Working within the Initiative for Digital
          Public Infrastructure (iDPI) meant every design decision had to serve
          a public-good mission: empowering grassroots music culture, preserving
          community knowledge, and building healthier alternatives to the
          commercial recommendation algorithms that dominate online music
          spaces.
          <br />
          <br />
          Over months of research, feedback sessions, and iterative prototyping,
          I learned to balance simplicity with depth—building an interface that
          can scale across diverse use cases, from college radio archives to
          personal collecting practices. The process sharpened my skills in
          accessibility-first design, information hierarchy, and designing
          systems that encourage participation rather than passively displaying
          data.
          <br />
          <br />
          The final modal and redesigned collection items now support richer
          storytelling, flexible tagging, and community-owned annotation. These
          improvements help Freq move closer to its goal: becoming a digital
          home for music communities to learn from each other, share culture,
          and preserve the collective memory that too often disappears from
          online spaces.
          <br />
          <br />
          The feature is now being implemented by Freq's lead developer, and
          will form the foundation of how the platform grows with local scenes,
          student DJs, and passionate collectors.
        </p>
      </section>

      {/* CHECK FREQ OUT */}
      <footer className="max-w-4xl mx-auto text-center mt-24 pb-20">
        <p className="font-roboto text-[#9EACC8]">
          Want to check Freq out for yourself?
        </p>
        <a
          href="https://freq.social"
          className="font-krona text-[#8E27FC] underline underline-offset-4 hover:text-[#b164ff]"
        >
          freq.social
        </a>
      </footer>
    </div>
  );
}
