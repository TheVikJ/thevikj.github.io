import { useEffect, useRef, useState } from "react";
import ResumeBackground from "../components/ResumeBackground";

export default function ResumeSection() {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  // ==== SCROLL TRIGGER (IntersectionObserver) ====
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.4 } // triggers when 40% visible
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  // ==== STRIPE CONFIG ====
  const stripes = [
    { color: "#B43434", delay: 0, finalX: "0%" }, // red
    { color: "#D08247", delay: 0.15, finalX: "-5%" }, // orange
    { color: "#E0A458", delay: 0.3, finalX: "-10%" }, // yellow
    { color: "#619957", delay: 0.45, finalX: "-20%" }, // green
    { color: "#6B8AD3", delay: 0.65, finalX: "-40%" }, // blue (never reaches left fully)
  ];

  return (
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-center px-6 py-20 relative z-0">
      <ResumeBackground />
      <div
        ref={cardRef}
        className="
          relative
          w-full max-w-2xl
          bg-[#ECE7D3]
          rounded-2xl
          shadow-xl
          overflow-hidden   /* IMPORTANT: keeps stripes inside */
          px-10 py-16
        "
      >
        {/* ================================
            5 HORIZONTAL ANIMATED STRIPES
        ================================= */}
        <div className="absolute inset-0 top-0 left-0 h-[140px]">
          {stripes.map((stripe, i) => (
            <div
              key={i}
              className="absolute left-0 w-[200%] h-[28px]" // 5 stripes * 28px = 140px
              style={{
                top: `${i * 28}px`,
                backgroundColor: stripe.color,
                transform: inView
                  ? `translateX(${stripe.finalX})`
                  : "translateX(100%)",
                transition: `transform 1.3s cubic-bezier(0.25,0.1,0.25,1) ${stripe.delay}s`,
              }}
            />
          ))}
        </div>

        {/* ================================
            TEXT CONTENT
        ================================= */}
        <div className="relative z-10 mt-[150px] text-[#141414]">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Resume</h2>

          <p className="text-lg opacity-80 max-w-md">
            Download my resume below
          </p>

          {/* ================================
              ANALOG-STYLE BUTTON
          ================================= */}
          <a
            href="resume.pdf"
            className="
              mt-8 inline-block
              px-6 py-3
              font-mono 
              text-[#141414]
              border border-[#141414]
              rounded
              hover:bg-[#141414] hover:text-[#ECE7D3]
              transition-all
              shadow-[0_0_10px_rgba(97,153,87,0.25)]
            "
          >
            [ Open Resume ]
          </a>
        </div>
      </div>
    </div>
  );
}
