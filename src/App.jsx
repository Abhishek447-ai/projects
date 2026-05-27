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

      {/* ── Sun pinned to bottom of FULL page (not viewport) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <img
          src={risingBg}
          alt=""
          aria-hidden="true"
          style={{ mixBlendMode: "multiply" }}
          className="
            sticky
            top-[40vh]
            left-1/2 -translate-x-1/2
            w-[95%] md:w-[70%] lg:w-[60%]
            max-w-[1000px]
            object-contain
            opacity-[0.13]
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