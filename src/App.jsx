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
      <Stats />
      <Services />
      <Products />
      <Projects />
      <Videos />
      <Pricing />
      <Reviews />
      <Contact />
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