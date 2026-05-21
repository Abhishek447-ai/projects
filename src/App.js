import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import Projects from "./components/Projects";

import Pricing from "./components/Pricing";

import Contact from "./components/Contact";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route
path="/"
element={<Hero/>}
/>

<Route
path="/projects"
element={<Projects/>}
/>

<Route
path="/pricing"
element={<Pricing/>}
/>

<Route
path="/contact"
element={<Contact/>}
/>

</Routes>

</BrowserRouter>

)

}

export default App