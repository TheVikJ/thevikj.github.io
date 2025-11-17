import Hero from "../sections/Hero";
import ResumeSection from "../sections/Resume";
import FreqSection from "../sections/Freq";
import FiveHubSection from "../sections/5Hub";
import ThorGPTSection from "../sections/ThorGPT";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <section id="resume">
        <ResumeSection />
      </section>
      <section id="freq">
        <FreqSection />
      </section>
      <section id="5hub">
        <FiveHubSection />
      </section>
      <section id="thorgpt">
        <ThorGPTSection />
      </section>
    </main>
  );
}
