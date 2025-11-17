// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import iPhoneMockup from "../assets/5hub-iphone-mockup.png";

// HI-FI PROTOTYPES
import homeFiltered from "../assets/5hubdesigns/1 - Home Page - Filtered.png";
import homeRSVPUpvote from "../assets/5hubdesigns/1 - Home Page - RSVPed + Upvoted.png";
import homeRSVP from "../assets/5hubdesigns/1 - Home Page - RSVPed.png";
import homeSearch from "../assets/5hubdesigns/1 - Home Page - Search.png";
import homeUpvoted from "../assets/5hubdesigns/1 - Home Page - Upvoted.png";
import homeMain from "../assets/5hubdesigns/1 - Home Page.png";
import addEventDetails from "../assets/5hubdesigns/2 - Add Event - Details.png";
import addEventMain from "../assets/5hubdesigns/2 - Add Event.png";
import myEvents from "../assets/5hubdesigns/3 - My Events.png";

// REFINED HI-FI
import homeMainRefined from "../assets/5hubdesigns/1 - Home Page - Refined.png";
import homeFilteredRefined from "../assets/5hubdesigns/1 - Home Page - Filtered - Refined.png";
import homeUpvotedRefined from "../assets/5hubdesigns/1 - Home Page - Upvoted - Refined.png";
import homeSearchRefined from "../assets/5hubdesigns/1 - Home Page - Search - Refined.png";
import homeRSVPRefined from "../assets/5hubdesigns/1 - Home Page - RSVPed - Refined.png";
import homeRSVPUpvoteRefined from "../assets/5hubdesigns/1 - Home Page - RSVPed + Upvoted - Refined.png";
import addEventMainRefined from "../assets/5hubdesigns/2 - Add Event - Refined.png";
import addEventDetailsRefined from "../assets/5hubdesigns/2 - Add Event - Details - Refined.png";
import myEventsRefined from "../assets/5hubdesigns/3 - My Events - Refined.png";

// RESEARCH IMAGES
import dataEventPreference from "../assets/5hubdesigns/data_1_event_preference.jpg";
import dataMoreEvents from "../assets/5hubdesigns/data_2_more_events.jpg";
import liveEvent from "../assets/5hubdesigns/live_event.jpg";

// LO-FI PROTOTYPES
import proto1_1 from "../assets/5hubdesigns/prototype1_1.jpg";
import proto1_2 from "../assets/5hubdesigns/prototype1_2.jpg";
import proto2 from "../assets/5hubdesigns/prototype2.jpg";
import proto3 from "../assets/5hubdesigns/prototype3.jpg";

export default function FiveHubDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // CAROUSEL ARRAYS
  const hiFiInitialScreens = [
    homeMain,
    homeFiltered,
    homeSearch,
    homeUpvoted,
    homeRSVP,
    homeRSVPUpvote,
    addEventMain,
    addEventDetails,
    myEvents,
  ];

  const hiFiInitialCaptions = [
    "Home Page",
    "Home Page - Filtered by Location",
    "Home Page - Search Feature",
    "Home Page - Upvoted",
    "Home Page - RSVPed",
    "Home Page - Upvoted and RSVPed",
    "Add Event",
    "Add Event - Filled Out",
    "My Events",
  ];

  const hiFiRefinedScreens = [
    homeMainRefined,
    homeFilteredRefined,
    homeUpvotedRefined,
    homeRSVPRefined,
    homeRSVPUpvoteRefined,
    homeSearchRefined,
    addEventMainRefined,
    addEventDetailsRefined,
    myEventsRefined,
  ];

  const hiFiRefinedCaptions = [
    "Home Page",
    "Home Page - Filtered by Location",
    "Home Page - Upvoted",
    "Home Page - RSVPed",
    "Home Page - Upvoted and RSVPed",
    "Home Page - Search Feature",
    "Add Event",
    "Add Event - Filled Out",
    "My Events",
  ];

  const [hiFiIndex, setHiFiIndex] = useState(0);
  const [hiFiRefinedIndex, setHiFiRefinedIndex] = useState(0);

  const nextHiFi = () =>
    setHiFiIndex((i) => (i + 1) % hiFiInitialScreens.length);
  const prevHiFi = () =>
    setHiFiIndex(
      (i) => (i - 1 + hiFiInitialScreens.length) % hiFiInitialScreens.length
    );

  const nextHiFiRefined = () =>
    setHiFiRefinedIndex((i) => (i + 1) % hiFiRefinedScreens.length);
  const prevHiFiRefined = () =>
    setHiFiRefinedIndex(
      (i) => (i - 1 + hiFiRefinedScreens.length) % hiFiRefinedScreens.length
    );

  return (
    <main
      className="
        w-full min-h-screen
        bg-white text-[#2c2c2c]
        flex justify-center 
        px-6 md:px-12 lg:px-32
        py-24
        font-['Inter']
      "
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* BACK BUTTON */}
        <Link
          to="/"
          className="
            inline-block mb-12
            text-lg font-medium
            text-[#2c2c2c]
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
          className="text-5xl font-semibold mb-6"
        >
          5Hub
        </motion.h1>

        <p className="text-xl leading-relaxed mb-10">
          A unified event hub for the Five College Consortium.
          <br />
          Designed for simple discovery, easy hosting, and effortless sharing.
        </p>

        {/* CONTEXT & ROLE */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Context & Role</h2>
          <p className="text-lg leading-relaxed">
            5Hub was the final team project for CS325: Human-Computer
            Interaction at UMass Amherst.
            <br />
            <br />
            Our brief: design a system or tool that helps students.
            <br />
            <br />
            My role:
            <br />• Led primary and secondary research
            <br />• Designed low-fidelity prototypes
            <br />• Built the full high-fidelity mobile UI in Figma using the
            Simple Design System
            <br />• Organized our team&apos;s workflow and UX documentation
          </p>
        </section>

        {/* MAIN MOCKUP */}
        <motion.img
          src={iPhoneMockup}
          alt="5Hub Mockup"
          className="w-full max-w-xl rounded-xl drop-shadow-xl mb-24 mx-auto"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* PROBLEM */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-4">Problem</h2>
          <p className="text-lg leading-relaxed">
            Students across the Five College Consortium constantly miss events
            because information is scattered across Instagram, university apps,
            flyers, and DM groups.
            <br />
            <br />
            Event organizers face the opposite problem. They run concerts,
            meetings, shows, and workshops, but reaching the right audience is
            unpredictable.
          </p>
        </section>

        {/* GOAL */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-4">Goal</h2>
          <p className="text-lg leading-relaxed">
            Build a single, reliable place where students can:
            <br />• Discover events
            <br />• Filter by interest, time, and campus
            <br />• RSVP quickly
            <br />• Share events with friends
            <br />
            <br />
            And where organizers can post and promote events across all five
            campuses.
          </p>
        </section>

        {/* RESEARCH */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-6">Research</h2>

          <p className="text-lg leading-relaxed mb-8">
            We interviewed three event organizers: a band member, a meditation
            club organizer, and a comedian. All struggled with one thing:
            consistently reaching attendees.
            <br />
            <br />
            To understand the attendee side, we hosted a live podcast watch
            party and surveyed 13 students. We wanted to know how they heard
            about the event and how they feel about campus and local events in
            general.
          </p>

          <img
            src={liveEvent}
            alt="Live event research"
            className="w-full max-w-2xl rounded-lg mb-10 mx-auto"
          />

          <p className="text-lg leading-relaxed mb-8">
            From the survey, we learned that most students want to go to more
            events but usually find them by word of mouth or through friends.
            Students who aren&apos;t active on social media, or who don&apos;t
            follow the right accounts, are at a clear disadvantage. That gap
            reinforced our focus: build a dedicated place for event discovery
            that doesn&apos;t depend on being in the right group chat.
          </p>

          <div className="flex flex-col items-center gap-10">
            <img
              src={dataEventPreference}
              alt="Event preference data"
              className="w-full max-w-2xl rounded-lg"
            />
            <img
              src={dataMoreEvents}
              alt="More events survey"
              className="w-full max-w-2xl rounded-lg"
            />
          </div>
        </section>

        {/* PERSONAS */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-6">Personas</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-2">
              Jake — Fun-Seeking UMass Student
            </h3>
            <p className="text-lg leading-relaxed">
              Jake loves going to live events but mostly hears about them
              through friends or random Instagram stories. He often finds out
              something cool happened only after it&apos;s over. He wants one
              place to see what&apos;s going on this week across UMass and the
              other colleges, without needing to follow every club account.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">
              Maya — Student Event Organizer
            </h3>
            <p className="text-lg leading-relaxed">
              Maya organizes meditation meetups and small shows. She juggles
              posters, social media posts, and word of mouth but still feels
              like she never quite reaches the students who would love her
              events. She needs a simple way to post events once and know
              they&apos;re discoverable across the Five College community.
            </p>
          </div>
        </section>

        {/* LOW-FI PROTOTYPES */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-6">
            Low-Fidelity Prototypes
          </h2>

          <div className="space-y-10">
            {/* Prototype 1 */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Prototype 1 — Phone App
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                A mobile app focused on sharing and upvoting events. Exploring
                this concept made it clear that a phone is the most natural
                place to discover and share events via text and social
                media—especially for people like Jake, who mostly hears about
                events from friends.
              </p>

              <div className="space-y-4">
                <img
                  src={proto1_1}
                  className="rounded-lg w-full max-w-xl mx-auto"
                  alt="Prototype 1 part 1"
                />
                <img
                  src={proto1_2}
                  className="rounded-lg w-full max-w-xl mx-auto"
                  alt="Prototype 1 part 2"
                />
              </div>
            </div>

            {/* Prototype 2 */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Prototype 2 — Public Console
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                A dedicated screen in public spaces (like the Student Union) for
                browsing events by search and filters. This storyboard helped us
                validate that filtering by campus, date, and tags feels
                intuitive, even though the console model felt less accessible
                than a phone.
              </p>
              <img
                src={proto2}
                className="rounded-lg w-full max-w-xl mx-auto"
                alt="Prototype 2"
              />
            </div>

            {/* Prototype 3 */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">
                Prototype 3 — RSVP Website
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                A simple website focused on RSVP flows. From this sketch, we
                took away two key ideas: RSVPing should be one tap, and
                attendees should get updates if event details change.
              </p>
              <img
                src={proto3}
                className="rounded-lg w-full max-w-xl mx-auto"
                alt="Prototype 3"
              />
            </div>
          </div>
        </section>

        {/* HI-FI INITIAL CAROUSEL */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-6">
            High-Fidelity Prototype
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            We chose a mobile app as the final form factor and built a full
            prototype in Figma using the Simple Design System. The core flows
            centered on a home feed for discovery, an Add Event page for
            organizers, and a My Events page for tracking RSVPs and hosted
            events.
          </p>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs">
              <motion.img
                key={hiFiIndex}
                src={hiFiInitialScreens[hiFiIndex]}
                alt="5Hub high-fidelity screen"
                className="w-full rounded-xl drop-shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="text-sm mt-3 font-medium">
              {hiFiInitialCaptions[hiFiIndex]}
            </p>

            <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={prevHiFi}
                className="text-xl hover:opacity-70 transition"
              >
                ⏮
              </button>
              <p className="text-sm">
                Screen {hiFiIndex + 1} of {hiFiInitialScreens.length}
              </p>
              <button
                onClick={nextHiFi}
                className="text-xl hover:opacity-70 transition"
              >
                ⏭
              </button>
            </div>
          </div>
        </section>

        {/* EVALUATION */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-4">Evaluation</h2>
          <p className="text-lg leading-relaxed mb-6">
            We ran cognitive walkthroughs with five UMass students, asking them
            to complete key tasks:
            <br />• Search for a specific type of event
            <br />• Apply filters to narrow results
            <br />• RSVP to an event
            <br />• Create and post an event
            <br />
            <br />
            Overall, navigation and primary flows felt straightforward. Students
            quickly understood search, filters, and RSVPs.
            <br />
            <br />
            The most important finding: the downvote button felt out of place.
            It introduced negativity into a system meant to foster connection.
            Participants worried that organizers might feel discouraged if their
            events were downvoted. Based on this feedback, we removed downvoting
            entirely and focused on positive signals like upvotes and RSVPs.
          </p>
        </section>

        {/* REFINED HI-FI CAROUSEL */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-6">
            Refined High-Fidelity Prototype
          </h2>

          <p className="text-lg leading-relaxed mb-8">
            After evaluation, we refined the interface to better support the
            product&apos;s goals: encouragement, clarity, and ease. We removed
            the downvote button, simplified some filter controls, and emphasized
            the RSVP and share actions as the primary ways students interact
            with events.
          </p>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-xs">
              <motion.img
                key={hiFiRefinedIndex}
                src={hiFiRefinedScreens[hiFiRefinedIndex]}
                alt="Refined 5Hub screen"
                className="w-full rounded-xl drop-shadow-md"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <p className="text-sm mt-3 font-medium">
              {hiFiRefinedCaptions[hiFiRefinedIndex]}
            </p>

            <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={prevHiFiRefined}
                className="text-xl hover:opacity-70 transition"
              >
                ⏮
              </button>
              <p className="text-sm">
                Screen {hiFiRefinedIndex + 1} of {hiFiRefinedScreens.length}
              </p>
              <button
                onClick={nextHiFiRefined}
                className="text-xl hover:opacity-70 transition"
              >
                ⏭
              </button>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-4">Outcome</h2>
          <p className="text-lg leading-relaxed">
            5Hub offers a focused, student-friendly way to see what's happening
            across the Pioneer Valley, from small club meetings to larger
            performances, without depending on fragmented channels.
            <br />
            <br />
            As a designer, this project helped me:
            <br />• Connect research findings directly to interaction decisions
            <br />• Use low-fidelity explorations to choose the right modality
            <br />• Translate complex flows into clean, mobile-first UI
            <br />• Iterate based on usability feedback, not just aesthetics
            <br />
            <br />
            If developed further, 5Hub could support features like personalized
            recommendations, integrated ticketing, and transit links to help
            students move between campuses. More importantly, it shows how a
            relatively simple tool can strengthen a local community by making it
            easier for people to show up.
          </p>
        </section>
      </div>
    </main>
  );
}
