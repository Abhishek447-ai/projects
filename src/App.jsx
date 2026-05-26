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
      {/* ── Global rising sun background — fixed, visible entire page ── */}
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
          opacity-[0.12]
          pointer-events-none
          select-none
          z-0
        "
      />

      {/* ── All sections sit above the sun ── */}
      <div className="relative z-10">
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
    </>
  )
}