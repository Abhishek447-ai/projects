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

export default function App(){

return(

<div
className="
relative
min-h-screen
overflow-x-hidden
"
>

{/* SUN */}

<div
className="
fixed
inset-0

flex
items-end
justify-center

translate-y-[260px]

md:translate-y-[170px]



pointer-events-none

z-0
"
>

<img

src={risingBg}

alt=""

className="
w-[700px]

sm:w-[850px]

md:w-[1400px]

lg:w-[2200px]

opacity-[0.22]

object-contain
"

style={{
mixBlendMode:"multiply"
}}

/>

</div>


{/* WEBSITE */}

<div
className="
relative
z-20
"
>

<Navbar/>

<Hero/>

<Stats/>

<Services/>

<Projects/>

<Videos/>

<Pricing/>

<Contact/>

<Footer/>

</div>

</div>

)

}