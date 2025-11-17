import { useRef, useState, useEffect } from "react";
import Hero from "../sections/Hero";
import FreqSection from "../sections/Freq";
import FiveHubSection from "../sections/5Hub";
import ThorGPTSection from "../sections/ThorGPT";
import ResumeSection from "../sections/Resume";
import NavBar from "../components/NavBar";

export default function Home() {
  const resumeRef = useRef(null);
  const freqRef = useRef(null);
  const fiveHubRef = useRef(null);
  const thorRef = useRef(null);

  const [isLightSection, setIsLightSection] = useState(false);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If 5Hub section is on screen, enable dark navbar text
          if (entry.target === fiveHubRef.current) {
            setIsLightSection(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.35 } // visible ~35% of viewport
    );

    if (fiveHubRef.current) observer.observe(fiveHubRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar
        isLight={isLightSection} // ← pass color mode down
        onResume={() => scrollTo(resumeRef)}
        onFreq={() => scrollTo(freqRef)}
        onFiveHub={() => scrollTo(fiveHubRef)}
        onThorGPT={() => scrollTo(thorRef)}
      />

      <Hero />

      <div ref={resumeRef}>
        <ResumeSection />
      </div>

      <div ref={freqRef}>
        <FreqSection />
      </div>

      <div ref={fiveHubRef}>
        <FiveHubSection />
      </div>

      <div ref={thorRef}>
        <ThorGPTSection />
      </div>
    </>
  );
}
