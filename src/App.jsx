import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Stats from "./components/sections/Stats"
import Services from "./components/sections/Services"
import Projects from "./components/sections/Projects"
import Pricing from "./components/sections/Pricing"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import Videos from "./components/sections/Videos"
import risingBg from "./assets/bg.png"

export default function App() {
  return (
    <>
      {/* ── Sun fixed to bottom of viewport always ── */}
      <img
        src={risingBg}
        alt=""
        aria-hidden="true"
        style={{ mixBlendMode: "multiply" }}
        className="
          fixed
          bottom-0
          left-1/2 -translate-x-1/2
          w-[95%] md:w-[70%] lg:w-[55%]
          max-w-[950px]
          object-contain
          opacity-[0.22]
          pointer-events-none
          select-none
          z-0
        "
      />

      {/* ── Sections each have solid bg so sun only shows through the LAST section / footer ── */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Projects />
          <Videos />
          <Pricing />
          <Contact />
        </main>
        {/* Footer has no bg so sun shines through at the bottom */}
        <Footer />
      </div>
    </>
  )
}