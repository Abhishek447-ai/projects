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
    <div className="relative min-h-screen">

      {/* ── Sun watermark ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <img
          src={risingBg}
          alt=""
          aria-hidden="true"
          style={{ mixBlendMode: "multiply" }}
          className="
            sticky
            top-[30vh]
            left-1/2 -translate-x-1/2
            w-[90%] md:w-[65%] lg:w-[55%]
            max-w-[900px]
            object-contain
            opacity-[0.25]
            pointer-events-none
            select-none
            block
            mx-auto
          "
        />
      </div>

      {/* ── All sections above sun ── */}
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Videos />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}