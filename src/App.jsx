import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Stats from "./components/sections/Stats"
import Services from "./components/sections/Services"
import Projects from "./components/sections/Projects"
import Pricing from "./components/sections/Pricing"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import Videos from "./components/sections/Videos"
import TermsAndConditions from "./components/sections/TermsAndConditions"
import risingBg from "./assets/bg.png"
import Products from "./components/sections/Products"
import Reviews from "./components/sections/Reviews"
function MainPage() {
  return (
    <>
<Hero />
<Stats />
<Services />
<Products />
<Projects />
<Videos />
<Pricing />
<Reviews />
<Contact />

    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      {/* Fixed sun watermark */}
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

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}