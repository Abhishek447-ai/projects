import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Services from "./components/sections/Services";
import Products from "./components/sections/Products";
import Projects from "./components/sections/Projects";
import Videos from "./components/sections/Videos";
import Pricing from "./components/sections/Pricing";
import Reviews from "./components/sections/Reviews";
import Contact from "./components/sections/Contact";
import RegisterProject from "./components/sections/RegisterProject";

function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Background starts after Hero */}
      <div className="relative">

        <img
  src="/background.png"
  alt=""
  className="
    fixed
    left-1/2
    top-[58%]
    -translate-x-1/2
    -translate-y-1/2

    w-[280px]
    sm:w-[420px]
    md:w-[650px]
    lg:w-[850px]
    xl:w-[1050px]
    2xl:w-[1200px]

    opacity-[0.05]
    md:opacity-[0.07]
    lg:opacity-[0.09]

    pointer-events-none
    select-none
    -z-10
  "
/>

        <div className="relative z-10">
          <Stats />
          <Services />
          <Products />
          <Projects />
          <Videos />
          <Pricing />
          <Reviews />
          <Contact />
        </div>

      </div>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register-project" element={<RegisterProject />} />
    </Routes>
  );
}