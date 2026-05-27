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
      {/* Sun fixed to CENTER of viewport — always visible on every section */}
      <img
        src={risingBg}
        alt=""
        aria-hidden="true"
        className="
          fixed
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[120%] md:w-[70%] lg:w-[55%]
          max-w-[900px]
          object-contain
          opacity-20
          pointer-events-none
          select-none
        "
        style={{ zIndex: 0 }}
      />

      {/* All content above sun */}
      <div style={{ position: "relative", zIndex: 1 }}>
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